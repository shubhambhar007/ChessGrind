import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const OUTPUT_FILE = path.join(PROJECT_ROOT, "data", "puzzles.ts");
const TARGET_COUNT = 1000;
const SEED = 0x43484752;
const STOCKFISH_PATH = process.env.STOCKFISH_PATH;
const PRELIMINARY_NODES = Number(process.env.PUZZLE_PRELIMINARY_NODES ?? 8_000);
const VERIFICATION_NODES = Number(process.env.PUZZLE_VERIFICATION_NODES ?? 30_000);
const MIN_PRELIMINARY_GAP = 120;
const MIN_VERIFIED_GAP = 90;
const PIECE_VALUE = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };

if (!STOCKFISH_PATH) {
  throw new Error(
    "Set STOCKFISH_PATH to an official Stockfish binary before generating puzzles."
  );
}

function seededRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seededRandom(SEED);

function scoreValue(score) {
  if (!score) return null;
  if (score.type === "cp") return score.value;
  return score.value > 0
    ? 100_000 - Math.min(score.value, 999) * 100
    : -100_000 - Math.max(score.value, -999) * 100;
}

function puzzleKey(fen) {
  return fen.split(" ").slice(0, 4).join(" ");
}

function parseInfo(line) {
  const multipvMatch = line.match(/\bmultipv (\d+)\b/);
  const scoreMatch = line.match(/\bscore (cp|mate) (-?\d+)\b/);
  const pvMatch = line.match(/\bpv ([a-h][1-8][a-h][1-8][qrbn]?)(?:\s|$)/);
  const depthMatch = line.match(/\bdepth (\d+)\b/);
  if (!multipvMatch || !scoreMatch || !pvMatch) return null;
  return {
    multipv: Number(multipvMatch[1]),
    score: { type: scoreMatch[1], value: Number(scoreMatch[2]) },
    move: pvMatch[1],
    depth: Number(depthMatch?.[1] ?? 0),
  };
}

class Stockfish {
  constructor(binary) {
    this.process = spawn(binary, [], { stdio: ["pipe", "pipe", "inherit"] });
    this.lines = readline.createInterface({ input: this.process.stdout });
    this.waiters = [];
    this.analysis = null;
    this.lines.on("line", (line) => {
      if (this.analysis) {
        const info = parseInfo(line);
        if (info) this.analysis.info.set(info.multipv, info);
        if (line.startsWith("bestmove ")) {
          const result = {
            bestMove: line.split(/\s+/)[1],
            principal: this.analysis.info.get(1) ?? null,
            second: this.analysis.info.get(2) ?? null,
          };
          const resolve = this.analysis.resolve;
          this.analysis = null;
          resolve(result);
        }
      }
      for (const waiter of [...this.waiters]) {
        if (!line.includes(waiter.token)) continue;
        this.waiters.splice(this.waiters.indexOf(waiter), 1);
        waiter.resolve(line);
      }
    });
  }

  send(command) {
    this.process.stdin.write(`${command}\n`);
  }

  waitFor(token) {
    return new Promise((resolve) => this.waiters.push({ token, resolve }));
  }

  async init() {
    this.send("uci");
    await this.waitFor("uciok");
    this.send("setoption name Threads value 2");
    this.send("setoption name Hash value 128");
    this.send("setoption name MultiPV value 2");
    this.send("isready");
    await this.waitFor("readyok");
  }

  analyze(fen, nodes) {
    if (this.analysis) throw new Error("Stockfish requests must be sequential.");
    return new Promise((resolve) => {
      this.analysis = { info: new Map(), resolve };
      this.send(`position fen ${fen}`);
      this.send(`go nodes ${nodes}`);
    });
  }

  close() {
    this.send("quit");
  }
}

function opposite(color) {
  return color === "w" ? "b" : "w";
}

function findKing(game, color) {
  for (const row of game.board()) {
    for (const piece of row) {
      if (piece?.type === "k" && piece.color === color) return piece.square;
    }
  }
  return null;
}

function assertLegalTrainingPosition(fen) {
  const game = new Chess(fen);
  const movingColor = game.turn();
  const waitingKing = findKing(game, opposite(movingColor));
  if (!waitingKing) throw new Error(`Missing non-moving king: ${fen}`);
  if (game.isAttacked(waitingKing, movingColor)) {
    throw new Error(`Non-moving king is already attacked: ${fen}`);
  }
  if (game.isGameOver()) throw new Error(`Terminal training position: ${fen}`);
  return game;
}

function moveFromUci(game, moveText) {
  return game.move({
    from: moveText.slice(0, 2),
    to: moveText.slice(2, 4),
    promotion: moveText.slice(4, 5) || undefined,
  });
}

function materialCount(game) {
  return game.board().flat().filter(Boolean).length;
}

function weightedRandomMove(game, ply) {
  const moves = game.moves({ verbose: true });
  const weighted = moves.map((move) => {
    let weight = 1;
    if (move.captured) weight += 3 + PIECE_VALUE[move.captured] / 250;
    if (move.san.includes("+")) weight += 2.5;
    if (move.san.includes("#")) weight += 20;
    if (move.promotion) weight += 8;
    if (ply < 14 && ["n", "b"].includes(move.piece)) weight += 1.5;
    if (ply < 12 && move.piece === "q" && !move.captured) weight *= 0.25;
    if (ply < 10 && move.piece === "r" && !move.captured) weight *= 0.35;
    return { move, weight };
  });
  let roll = random() * weighted.reduce((sum, item) => sum + item.weight, 0);
  for (const item of weighted) {
    roll -= item.weight;
    if (roll <= 0) return item.move;
  }
  return weighted.at(-1).move;
}

function collectReachableCandidates(target = 18_000) {
  const candidates = [];
  const seen = new Set();
  for (let gameNumber = 0; gameNumber < 4_000 && candidates.length < target; gameNumber += 1) {
    const game = new Chess();
    const maxPlies = 42 + Math.floor(random() * 38);
    for (let ply = 0; ply < maxPlies && !game.isGameOver(); ply += 1) {
      if (ply >= 10 && materialCount(game) >= 7) {
        const key = puzzleKey(game.fen());
        if (!seen.has(key)) {
          assertLegalTrainingPosition(game.fen());
          seen.add(key);
          candidates.push({ fen: game.fen(), ply });
        }
      }
      game.move(weightedRandomMove(game, ply));
    }
  }
  return candidates;
}

function attackedMajorPieces(game, mover) {
  const attacked = [];
  for (const row of game.board()) {
    for (const piece of row) {
      if (!piece || piece.color === mover || !["q", "r"].includes(piece.type)) continue;
      if (game.isAttacked(piece.square, mover)) attacked.push(piece.type);
    }
  }
  return attacked;
}

function classifyThemes(gameBefore, move, ply) {
  const game = new Chess(gameBefore.fen());
  const mover = game.turn();
  const captured = move.captured;
  game.move(move);
  const themes = [];
  if (game.isCheckmate()) themes.push("mate", "mateIn1");
  if (move.promotion) themes.push("promotion");
  if (attackedMajorPieces(game, mover).length >= 2) themes.push("fork");
  if (captured === "q" || captured === "r") themes.push("hangingPiece");
  else if (captured) themes.push("capturingDefender");
  if (game.inCheck() && !game.isCheckmate()) themes.push("exposedKing");
  if (!themes.length || !themes.some((theme) => theme.startsWith("mate"))) {
    themes.push("advantage");
  }
  const pieces = materialCount(game);
  themes.push(ply < 18 ? "opening" : pieces <= 12 ? "endgame" : "middlegame");
  themes.push("engineVerified", "short");
  return [...new Set(themes)];
}

function classifyDifficulty(gap, move, themes) {
  if (themes.includes("mateIn1") || move.captured === "q" || gap >= 500) return "easy";
  if (gap >= 230) return "medium";
  return "hard";
}

function ratingFor(difficulty) {
  const base = difficulty === "easy" ? 850 : difficulty === "medium" ? 1300 : 1700;
  return base + Math.floor(random() * 260);
}

function isForcing(move, gap) {
  return Boolean(
    move.captured || move.promotion || move.san.includes("+") || move.san.includes("#") || gap >= 260
  );
}

function resultGap(result) {
  if (!result.principal || !result.second) return null;
  const best = scoreValue(result.principal.score);
  const second = scoreValue(result.second.score);
  if (best == null || second == null) return null;
  return best - second;
}

async function verifyCandidate(engine, candidate) {
  const game = assertLegalTrainingPosition(candidate.fen);
  const first = await engine.analyze(candidate.fen, PRELIMINARY_NODES);
  const firstGap = resultGap(first);
  if (!first.principal || first.bestMove === "(none)" || firstGap == null) return null;
  if (first.principal.move !== first.bestMove || firstGap < MIN_PRELIMINARY_GAP) return null;
  if (game.get(first.bestMove.slice(2, 4))?.type === "k") return null;
  const firstMove = moveFromUci(game, first.bestMove);
  if (!firstMove || !isForcing(firstMove, firstGap)) return null;

  const verified = await engine.analyze(candidate.fen, VERIFICATION_NODES);
  const verifiedGap = resultGap(verified);
  if (!verified.principal || verifiedGap == null) return null;
  if (verified.bestMove !== first.bestMove || verified.principal.move !== first.bestMove) return null;
  if (verifiedGap < MIN_VERIFIED_GAP) return null;

  const replay = assertLegalTrainingPosition(candidate.fen);
  const move = moveFromUci(replay, verified.bestMove);
  if (!move) return null;
  const themes = classifyThemes(assertLegalTrainingPosition(candidate.fen), move, candidate.ply);
  const difficulty = classifyDifficulty(verifiedGap, move, themes);
  return {
    id: "",
    fen: candidate.fen,
    moves: [verified.bestMove],
    rating: ratingFor(difficulty),
    themes,
    difficulty,
    solutionLength: 1,
    source: "ChessGrind Original",
    verification: {
      engine: "Stockfish 19",
      nodes: VERIFICATION_NODES,
      scoreGap: Math.round(verifiedGap),
    },
  };
}

function renderFile(puzzles) {
  return `/*\n * CHESSGRIND ORIGINAL PUZZLES\n *\n * Generated from complete, locally played legal games and verified twice\n * with Stockfish. The generator rejects positions where the non-moving king\n * is attacked, king-capture moves, unstable best moves, and ambiguous answers.\n * No external puzzle database or chess-service account is used.\n *\n * Run: STOCKFISH_PATH=/path/to/stockfish npm run puzzles:generate\n */\n\nexport type PuzzleDifficulty = "easy" | "medium" | "hard";\n\nexport type Puzzle = {\n  id: string;\n  fen: string;\n  moves: string[];\n  rating: number;\n  themes: string[];\n  difficulty: PuzzleDifficulty;\n  solutionLength: number;\n  source: "ChessGrind Original";\n  verification: { engine: "Stockfish 19"; nodes: number; scoreGap: number };\n};\n\nexport const puzzles: Puzzle[] = ${JSON.stringify(puzzles, null, 2)};\n`;
}

async function generate() {
  const engine = new Stockfish(STOCKFISH_PATH);
  await engine.init();
  const candidates = collectReachableCandidates();
  console.log(`Collected ${candidates.length} reachable positions from complete legal games.`);
  const accepted = [];
  const counts = { easy: 0, medium: 0, hard: 0 };
  const colors = { w: 0, b: 0 };

  try {
    for (const candidate of candidates) {
      if (accepted.length >= TARGET_COUNT) break;
      const solverColor = new Chess(candidate.fen).turn();
      if (colors[solverColor] >= TARGET_COUNT / 2) continue;
      const puzzle = await verifyCandidate(engine, candidate);
      if (!puzzle) continue;
      puzzle.id = `CG-${String(accepted.length + 1).padStart(4, "0")}`;
      accepted.push(puzzle);
      counts[puzzle.difficulty] += 1;
      colors[solverColor] += 1;
      if (accepted.length % 50 === 0) {
        console.log(`Verified ${accepted.length}/${TARGET_COUNT} puzzles...`);
      }
    }
  } finally {
    engine.close();
  }

  if (accepted.length !== TARGET_COUNT) {
    throw new Error(`Verified only ${accepted.length}/${TARGET_COUNT} puzzles.`);
  }
  if (Object.values(counts).some((count) => count < 75)) {
    throw new Error(`Difficulty distribution is too narrow: ${JSON.stringify(counts)}`);
  }
  await fs.writeFile(OUTPUT_FILE, renderFile(accepted), "utf8");
  console.log(`Wrote ${accepted.length} engine-verified ChessGrind Original puzzles.`);
  console.log(`Difficulty: ${JSON.stringify(counts)}`);
  console.log(`Solver colors: ${JSON.stringify(colors)}`);
}

await generate();
