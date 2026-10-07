import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const OUTPUT_FILE = path.join(PROJECT_ROOT, "data", "puzzles.ts");
const TARGET_COUNT = 200;
const SEED = 0x43484752;
const MATE_SCORE = 100_000;
const PIECE_VALUE = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 0 };

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

function uci(move) {
  return `${move.from}${move.to}${move.promotion ?? ""}`;
}

function material(game, perspective) {
  let score = 0;
  for (const row of game.board()) {
    for (const piece of row) {
      if (!piece) continue;
      score += (piece.color === perspective ? 1 : -1) * PIECE_VALUE[piece.type];
    }
  }
  return score;
}

function evaluate(game, perspective) {
  if (game.isCheckmate()) return game.turn() === perspective ? -MATE_SCORE : MATE_SCORE;
  if (game.isDraw() || game.isStalemate()) return 0;
  let score = material(game, perspective);
  if (game.inCheck()) score += game.turn() === perspective ? -38 : 38;
  return score;
}

function movePriority(move) {
  const capture = move.captured
    ? PIECE_VALUE[move.captured] * 12 - PIECE_VALUE[move.piece]
    : 0;
  const promotion = move.promotion ? PIECE_VALUE[move.promotion] : 0;
  const check = move.san.includes("+") || move.san.includes("#") ? 700 : 0;
  return capture + promotion + check;
}

function orderedMoves(game) {
  return game.moves({ verbose: true }).sort((a, b) => movePriority(b) - movePriority(a));
}

function scoreRootMove(game, move, perspective) {
  game.move(move);
  if (game.isCheckmate()) {
    game.undo();
    return MATE_SCORE;
  }

  const replies = orderedMoves(game);
  let worstReply = Infinity;
  for (const reply of replies) {
    game.move(reply);
    const replyScore = evaluate(game, perspective);
    game.undo();
    worstReply = Math.min(worstReply, replyScore);
  }
  const score = replies.length ? worstReply : evaluate(game, perspective);
  game.undo();
  return score;
}

function rankedRootMoves(game) {
  const perspective = game.turn();
  const moves = orderedMoves(game);
  const forcing = moves.filter((move) =>
    move.captured || move.promotion || move.san.includes("+") || move.san.includes("#")
  );
  const comparisonMoves = [
    ...forcing.slice(0, 10),
    ...moves.filter((move) => !forcing.some((forcingMove) => uci(forcingMove) === uci(move))).slice(0, 3),
  ];
  return comparisonMoves
    .map((move) => ({ move, score: scoreRootMove(game, move, perspective) }))
    .sort((a, b) => b.score - a.score);
}

function chooseWorstReply(game, perspective) {
  const replies = orderedMoves(game);
  let selected = null;
  let selectedScore = Infinity;
  for (const reply of replies) {
    game.move(reply);
    const score = evaluate(game, perspective);
    game.undo();
    if (score < selectedScore) {
      selected = reply;
      selectedScore = score;
    }
  }
  return selected;
}

function chooseBestFollowUp(game, perspective) {
  const moves = orderedMoves(game);
  let selected = null;
  let selectedScore = -Infinity;
  for (const move of moves) {
    game.move(move);
    const score = evaluate(game, perspective);
    game.undo();
    if (score > selectedScore) {
      selected = move;
      selectedScore = score;
    }
  }
  return selected;
}

function squareToCoords(square) {
  return [square.charCodeAt(0) - 97, Number(square[1]) - 1];
}

function coordsToSquare(file, rank) {
  if (file < 0 || file > 7 || rank < 0 || rank > 7) return null;
  return `${String.fromCharCode(97 + file)}${rank + 1}`;
}

function attackedTargetsByMovedPiece(game, move, color) {
  const [file, rank] = squareToCoords(move.to);
  const targets = [];
  const addTarget = (targetFile, targetRank) => {
    const square = coordsToSquare(targetFile, targetRank);
    if (!square) return false;
    const occupant = game.get(square);
    if (occupant && occupant.color !== color && occupant.type !== "p") targets.push(occupant.type);
    return Boolean(occupant);
  };

  if (move.piece === "n") {
    for (const [df, dr] of [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]) {
      addTarget(file + df, rank + dr);
    }
  }

  if (move.piece === "p") {
    const direction = color === "w" ? 1 : -1;
    addTarget(file - 1, rank + direction);
    addTarget(file + 1, rank + direction);
  }

  const directions = [];
  if (["b", "q"].includes(move.piece)) directions.push([1, 1], [1, -1], [-1, 1], [-1, -1]);
  if (["r", "q"].includes(move.piece)) directions.push([1, 0], [-1, 0], [0, 1], [0, -1]);
  for (const [df, dr] of directions) {
    for (let step = 1; step < 8; step += 1) {
      if (addTarget(file + df * step, rank + dr * step)) break;
    }
  }
  return targets;
}

function matePattern(game) {
  const kingColor = game.turn();
  let kingSquare = null;
  for (const row of game.board()) {
    for (const piece of row) {
      if (piece?.type === "k" && piece.color === kingColor) kingSquare = piece.square;
    }
  }
  if (!kingSquare) return [];
  const [, rank] = squareToCoords(kingSquare);
  const themes = [];
  if (rank === 0 || rank === 7) themes.push("backRankMate");
  const [file] = squareToCoords(kingSquare);
  let ownNeighbors = 0;
  for (let df = -1; df <= 1; df += 1) {
    for (let dr = -1; dr <= 1; dr += 1) {
      if (!df && !dr) continue;
      const square = coordsToSquare(file + df, rank + dr);
      if (square && game.get(square)?.color === kingColor) ownNeighbors += 1;
    }
  }
  if (ownNeighbors >= 3) themes.push("smotheredMate");
  return themes;
}

function classifyThemes(targetGame, bestMove, ply) {
  const game = new Chess(targetGame.fen());
  const mover = game.turn();
  const capturedValue = bestMove.captured ? PIECE_VALUE[bestMove.captured] : 0;
  game.move(bestMove);
  const themes = [];

  if (game.isCheckmate()) themes.push("mate", "mateIn1", ...matePattern(game));
  if (bestMove.promotion) themes.push("promotion");
  if (attackedTargetsByMovedPiece(game, bestMove, mover).length >= 2) themes.push("fork");
  if (capturedValue >= 500) themes.push("hangingPiece");
  else if (capturedValue > 0) themes.push("capturingDefender");
  if (game.inCheck() && !game.isCheckmate()) themes.push("exposedKing");
  if (themes.length === 0) themes.push("advantage");
  else if (!themes.some((theme) => theme.startsWith("mate"))) themes.push("advantage");

  const pieceCount = game.board().flat().filter(Boolean).length;
  themes.push(ply < 18 ? "opening" : pieceCount <= 12 ? "endgame" : "middlegame");
  themes.push("short");
  return [...new Set(themes)];
}

function classifyDifficulty(best, second, line, themes) {
  const gap = best.score - second.score;
  if (themes.includes("mateIn1") || gap >= 700 || PIECE_VALUE[best.move.captured] >= 900) return "easy";
  if (gap >= 280 || line.length <= 3 || best.move.san.includes("+")) return "medium";
  return "hard";
}

function weightedRandomMove(game, ply) {
  const moves = game.moves({ verbose: true });
  const weighted = moves.map((move) => {
    let weight = 1;
    if (move.captured) weight += 2.8;
    if (move.san.includes("+")) weight += 1.8;
    if (move.flags.includes("k") || move.flags.includes("q")) weight += 2.4;
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

function createCandidate(sourceFen, setupMove, ply) {
  const target = new Chess(sourceFen);
  const appliedSetup = target.move(setupMove);
  if (!appliedSetup || target.isGameOver()) return null;

  const forcingMoves = target.moves({ verbose: true }).filter((move) =>
    move.captured || move.promotion || move.san.includes("+") || move.san.includes("#")
  );
  if (forcingMoves.length === 0) return null;

  const baseline = evaluate(target, target.turn());
  if (baseline > 750) return null;
  const ranked = rankedRootMoves(target);
  if (ranked.length < 2) return null;
  const [best, second] = ranked;
  const gap = best.score - second.score;
  if (gap < 120 || best.score - baseline < 140) return null;
  if (!forcingMoves.some((move) => uci(move) === uci(best.move))) return null;

  const perspective = target.turn();
  const line = [uci(best.move)];
  target.move(best.move);
  if (!target.isGameOver()) {
    const reply = chooseWorstReply(target, perspective);
    if (!reply) return null;
    target.move(reply);
    line.push(uci(reply));
    if (!target.isGameOver()) {
      const followUp = chooseBestFollowUp(target, perspective);
      if (!followUp) return null;
      target.move(followUp);
      line.push(uci(followUp));
    }
  }

  const targetPosition = new Chess(sourceFen);
  targetPosition.move(setupMove);
  const themes = classifyThemes(targetPosition, best.move, ply);
  const difficulty = classifyDifficulty(best, second, line, themes);
  return {
    fen: targetPosition.fen(),
    targetFen: targetPosition.fen().split(" ").slice(0, 4).join(" "),
    moves: line,
    themes,
    difficulty,
    gap,
  };
}

function validatePuzzle(puzzle) {
  const game = new Chess(puzzle.fen);
  for (const moveText of puzzle.moves) {
    const move = game.move({
      from: moveText.slice(0, 2),
      to: moveText.slice(2, 4),
      promotion: moveText.slice(4, 5) || undefined,
    });
    if (!move) throw new Error(`${puzzle.id}: illegal move ${moveText}`);
  }
  if (puzzle.solutionLength !== Math.ceil(puzzle.moves.length / 2)) {
    throw new Error(`${puzzle.id}: incorrect solution length`);
  }
}

function renderFile(puzzles) {
  return `/*\n * CHESSGRIND ORIGINAL PUZZLES\n *\n * Generated deterministically by scripts/generate-original-puzzles.mjs.\n * Every position is locally authored or generated, and every complete\n * solution line is replay-validated with chess.js. No external puzzle\n * database, game ID, or chess-service account is used.\n *\n * Run: npm run puzzles:generate\n */\n\nexport type PuzzleDifficulty = "easy" | "medium" | "hard";\n\nexport type Puzzle = {\n  id: string;\n  fen: string;\n  moves: string[];\n  rating: number;\n  themes: string[];\n  difficulty: PuzzleDifficulty;\n  solutionLength: number;\n  source: "ChessGrind Original";\n};\n\nexport const puzzles: Puzzle[] = ${JSON.stringify(puzzles, null, 2)};\n`;
}

function boardFen(pieces, turn) {
  const ranks = [];
  for (let rank = 7; rank >= 0; rank -= 1) {
    let empty = 0;
    let row = "";
    for (let file = 0; file < 8; file += 1) {
      const piece = pieces.get(coordsToSquare(file, rank));
      if (!piece) {
        empty += 1;
        continue;
      }
      if (empty) row += String(empty);
      empty = 0;
      row += piece;
    }
    if (empty) row += String(empty);
    ranks.push(row);
  }
  return `${ranks.join("/")} ${turn} - - 0 1`;
}

function randomChoice(values) {
  return values[Math.floor(random() * values.length)];
}

function randomEmptySquare(pieces, predicate = () => true) {
  const candidates = [];
  for (let file = 0; file < 8; file += 1) {
    for (let rank = 0; rank < 8; rank += 1) {
      const square = coordsToSquare(file, rank);
      if (!pieces.has(square) && predicate(file, rank)) candidates.push(square);
    }
  }
  return candidates.length ? randomChoice(candidates) : null;
}

function kingsSeparated(first, second) {
  const [af, ar] = squareToCoords(first);
  const [bf, br] = squareToCoords(second);
  return Math.max(Math.abs(af - bf), Math.abs(ar - br)) > 1;
}

function makeOriginalPuzzle(fen, moves, themes, difficulty, rating) {
  return {
    id: "",
    fen,
    moves,
    rating,
    themes: [...new Set([...themes, "short"])],
    difficulty,
    solutionLength: Math.ceil(moves.length / 2),
    source: "ChessGrind Original",
  };
}

function generateMatePuzzles(targetCount, seenPositions) {
  const puzzles = [];
  for (let attempt = 0; attempt < 120_000 && puzzles.length < targetCount; attempt += 1) {
    const solver = puzzles.length % 2 === 0 ? "w" : "b";
    const enemy = solver === "w" ? "b" : "w";
    const pieces = new Map();
    const enemyKing = randomEmptySquare(pieces, (_file, rank) => rank <= 1 || rank >= 6);
    pieces.set(enemyKing, enemy === "w" ? "K" : "k");
    const solverKing = randomEmptySquare(pieces, () => true);
    if (!solverKing || !kingsSeparated(enemyKing, solverKing)) continue;
    pieces.set(solverKing, solver === "w" ? "K" : "k");

    const attackers = random() < 0.5 ? ["q", "r"] : ["r", random() < 0.5 ? "b" : "n"];
    for (const type of attackers) {
      const square = randomEmptySquare(pieces);
      if (square) pieces.set(square, solver === "w" ? type.toUpperCase() : type);
    }
    const blockerCount = 1 + Math.floor(random() * 3);
    for (let index = 0; index < blockerCount; index += 1) {
      const square = randomEmptySquare(pieces, (_file, rank) => rank > 0 && rank < 7);
      if (square) pieces.set(square, enemy === "w" ? "P" : "p");
    }

    let game;
    try {
      game = new Chess(boardFen(pieces, solver));
    } catch {
      continue;
    }
    if (game.inCheck() || game.isGameOver()) continue;
    const mates = game.moves({ verbose: true }).filter((move) => {
      game.move(move);
      const isMate = game.isCheckmate();
      game.undo();
      return isMate;
    });
    if (mates.length !== 1) continue;
    const key = game.fen().split(" ").slice(0, 4).join(" ");
    if (seenPositions.has(key)) continue;
    const move = mates[0];
    game.move(move);
    const patterns = matePattern(game);
    game.undo();
    puzzles.push(makeOriginalPuzzle(game.fen(), [uci(move)], ["mate", "mateIn1", ...patterns, "endgame"], "easy", 780 + Math.floor(random() * 260)));
    seenPositions.add(key);
  }
  return puzzles;
}

function generatePromotionPuzzles(targetCount, seenPositions) {
  const puzzles = [];
  for (let attempt = 0; attempt < 20_000 && puzzles.length < targetCount; attempt += 1) {
    const solver = puzzles.length % 2 === 0 ? "w" : "b";
    const pieces = new Map();
    const pawnFile = 1 + Math.floor(random() * 6);
    const pawnRank = solver === "w" ? 6 : 1;
    const pawnSquare = coordsToSquare(pawnFile, pawnRank);
    const promotionSquare = coordsToSquare(pawnFile, solver === "w" ? 7 : 0);
    pieces.set(pawnSquare, solver === "w" ? "P" : "p");
    const ownKing = randomEmptySquare(pieces, (_file, rank) => solver === "w" ? rank <= 2 : rank >= 5);
    pieces.set(ownKing, solver === "w" ? "K" : "k");
    const enemyKing = randomEmptySquare(pieces, (file, rank) => {
      if (solver === "w" ? rank < 4 : rank > 3) return false;
      return kingsSeparated(ownKing, coordsToSquare(file, rank)) && coordsToSquare(file, rank) !== promotionSquare;
    });
    if (!enemyKing) continue;
    pieces.set(enemyKing, solver === "w" ? "k" : "K");
    const extraSquare = randomEmptySquare(pieces, (_file, rank) => rank > 0 && rank < 7);
    if (extraSquare) pieces.set(extraSquare, solver === "w" ? "p" : "P");

    let game;
    try {
      game = new Chess(boardFen(pieces, solver));
    } catch {
      continue;
    }
    if (game.inCheck() || game.isGameOver()) continue;
    const queenPromotion = `${pawnSquare}${promotionSquare}q`;
    if (!game.moves({ verbose: true }).some((move) => uci(move) === queenPromotion)) continue;
    const key = game.fen().split(" ").slice(0, 4).join(" ");
    if (seenPositions.has(key)) continue;
    puzzles.push(makeOriginalPuzzle(game.fen(), [queenPromotion], ["promotion", "advantage", "endgame"], "medium", 1180 + Math.floor(random() * 300)));
    seenPositions.add(key);
  }
  return puzzles;
}

function generateForkPuzzles(targetCount, seenPositions) {
  const puzzles = [];
  for (let attempt = 0; attempt < 80_000 && puzzles.length < targetCount; attempt += 1) {
    const solver = puzzles.length % 2 === 0 ? "w" : "b";
    const enemy = solver === "w" ? "b" : "w";
    const pieces = new Map();
    const knightSquare = randomEmptySquare(pieces, (file, rank) => file >= 1 && file <= 6 && rank >= 1 && rank <= 6);
    pieces.set(knightSquare, solver === "w" ? "N" : "n");
    const ownKing = randomEmptySquare(pieces);
    pieces.set(ownKing, solver === "w" ? "K" : "k");
    const enemyKing = randomEmptySquare(pieces, (file, rank) => kingsSeparated(ownKing, coordsToSquare(file, rank)));
    if (!enemyKing) continue;
    pieces.set(enemyKing, enemy === "w" ? "K" : "k");

    const tempFen = boardFen(pieces, solver);
    let temp;
    try {
      temp = new Chess(tempFen);
    } catch {
      continue;
    }
    if (temp.inCheck()) continue;
    const knightMoves = temp.moves({ verbose: true }).filter((move) => move.from === knightSquare);
    if (!knightMoves.length) continue;
    const intended = randomChoice(knightMoves);
    const [targetFile, targetRank] = squareToCoords(intended.to);
    const attackSquares = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]
      .map(([df, dr]) => coordsToSquare(targetFile + df, targetRank + dr))
      .filter((square) => square && !pieces.has(square));
    if (attackSquares.length < 2) continue;
    const firstTarget = randomChoice(attackSquares);
    const remaining = attackSquares.filter((square) => square !== firstTarget);
    const secondTarget = randomChoice(remaining);
    pieces.set(firstTarget, enemy === "w" ? "Q" : "q");
    pieces.set(secondTarget, enemy === "w" ? "R" : "r");

    let game;
    try {
      game = new Chess(boardFen(pieces, solver));
    } catch {
      continue;
    }
    if (game.inCheck() || game.isGameOver()) continue;
    const forkMoves = game.moves({ verbose: true }).filter((move) => {
      if (move.piece !== "n") return false;
      game.move(move);
      const isFork = attackedTargetsByMovedPiece(game, move, solver).filter((piece) => piece === "q" || piece === "r").length >= 2;
      game.undo();
      return isFork;
    });
    if (forkMoves.length !== 1 || uci(forkMoves[0]) !== uci(intended)) continue;
    const key = game.fen().split(" ").slice(0, 4).join(" ");
    if (seenPositions.has(key)) continue;
    const difficulty = puzzles.length % 2 === 0 ? "hard" : "medium";
    const rating = difficulty === "hard" ? 1680 + Math.floor(random() * 260) : 1320 + Math.floor(random() * 260);
    puzzles.push(makeOriginalPuzzle(game.fen(), [uci(forkMoves[0])], ["fork", "advantage", "middlegame"], difficulty, rating));
    seenPositions.add(key);
  }
  return puzzles;
}

function generatePinPuzzles(targetCount, seenPositions) {
  const puzzles = [];
  for (let index = 0; index < targetCount * 8 && puzzles.length < targetCount; index += 1) {
    const solver = puzzles.length % 2 === 0 ? "w" : "b";
    const enemy = solver === "w" ? "b" : "w";
    const targetFile = 1 + (index % 6);
    const startFile = targetFile === 1 || index % 2 === 0 ? targetFile + 1 : targetFile - 1;
    const rookRank = solver === "w" ? 0 : 7;
    const pinnedRank = solver === "w" ? 6 : 1;
    const kingRank = solver === "w" ? 7 : 0;
    const pieces = new Map();
    const rookSquare = coordsToSquare(startFile, rookRank);
    const targetSquare = coordsToSquare(targetFile, rookRank);
    pieces.set(rookSquare, solver === "w" ? "R" : "r");
    pieces.set(coordsToSquare(targetFile, pinnedRank), enemy === "w" ? "Q" : "q");
    pieces.set(coordsToSquare(targetFile, kingRank), enemy === "w" ? "K" : "k");

    const ownKing = randomEmptySquare(pieces, (file, rank) => {
      if (coordsToSquare(file, rank) === targetSquare) return false;
      return Math.abs(file - targetFile) >= 2;
    });
    if (!ownKing) continue;
    pieces.set(ownKing, solver === "w" ? "K" : "k");
    const accentPawn = randomEmptySquare(pieces, (file, rank) =>
      file !== targetFile && rank > 1 && rank < 6
    );
    if (accentPawn) pieces.set(accentPawn, index % 3 === 0 ? (solver === "w" ? "P" : "p") : (enemy === "w" ? "P" : "p"));

    let game;
    try {
      game = new Chess(boardFen(pieces, solver));
    } catch {
      continue;
    }
    if (game.inCheck() || game.isGameOver()) continue;
    const pinMove = `${rookSquare}${targetSquare}`;
    if (!game.moves({ verbose: true }).some((move) => uci(move) === pinMove)) continue;
    const key = game.fen().split(" ").slice(0, 4).join(" ");
    if (seenPositions.has(key)) continue;
    puzzles.push(makeOriginalPuzzle(game.fen(), [pinMove], ["pin", "advantage", "endgame"], "hard", 1700 + Math.floor(random() * 280)));
    seenPositions.add(key);
  }
  return puzzles;
}

async function generate() {
  const accepted = [];
  const seenPositions = new Set();
  const counts = { easy: 0, medium: 0, hard: 0 };
  const limits = { easy: 68, medium: 68, hard: 64 };

  const authoredSets = [
    ...generateMatePuzzles(28, seenPositions),
    ...generatePromotionPuzzles(22, seenPositions),
    ...generateForkPuzzles(70, seenPositions),
    ...generatePinPuzzles(30, seenPositions),
  ];
  for (const puzzle of authoredSets) {
    if (counts[puzzle.difficulty] >= limits[puzzle.difficulty]) continue;
    accepted.push(puzzle);
    counts[puzzle.difficulty] += 1;
  }
  console.log(`Seeded ${accepted.length} authored tactical compositions.`);

  for (let gameNumber = 0; gameNumber < 1800 && accepted.length < TARGET_COUNT; gameNumber += 1) {
    const game = new Chess();
    const maxPlies = 26 + Math.floor(random() * 34);
    for (let ply = 0; ply < maxPlies && !game.isGameOver(); ply += 1) {
      const sourceFen = game.fen();
      const setupMove = weightedRandomMove(game, ply);
      const candidate = createCandidate(sourceFen, setupMove, ply);
      game.move(setupMove);
      if (!candidate || seenPositions.has(candidate.targetFen)) continue;
      if (counts[candidate.difficulty] >= limits[candidate.difficulty]) continue;

      const ordinal = accepted.length + 1;
      const ratingBase = candidate.difficulty === "easy" ? 820 : candidate.difficulty === "medium" ? 1280 : 1680;
      const puzzle = {
        id: `CG-${String(ordinal).padStart(4, "0")}`,
        fen: candidate.fen,
        moves: candidate.moves,
        rating: ratingBase + Math.floor(random() * 300),
        themes: candidate.themes,
        difficulty: candidate.difficulty,
        solutionLength: Math.ceil(candidate.moves.length / 2),
        source: "ChessGrind Original",
      };
      validatePuzzle(puzzle);
      accepted.push(puzzle);
      seenPositions.add(candidate.targetFen);
      counts[candidate.difficulty] += 1;
      if (accepted.length % 25 === 0) {
        console.log(`Accepted ${accepted.length}/${TARGET_COUNT} puzzles...`);
      }
    }
  }

  if (accepted.length !== TARGET_COUNT) {
    throw new Error(`Generated ${accepted.length}/${TARGET_COUNT}: ${JSON.stringify(counts)}`);
  }

  accepted.forEach((puzzle, index) => {
    puzzle.id = `CG-${String(index + 1).padStart(4, "0")}`;
    validatePuzzle(puzzle);
  });

  await fs.writeFile(OUTPUT_FILE, renderFile(accepted), "utf8");
  console.log(`Generated ${accepted.length} ChessGrind Original puzzles.`);
  console.log(`Difficulty: ${JSON.stringify(counts)}`);
  const colors = { white: 0, black: 0 };
  for (const puzzle of accepted) {
    const game = new Chess(puzzle.fen);
    colors[game.turn() === "w" ? "white" : "black"] += 1;
  }
  console.log(`Solver colors: ${JSON.stringify(colors)}`);
}

await generate();
