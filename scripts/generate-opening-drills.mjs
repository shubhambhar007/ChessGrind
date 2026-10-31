import fs from "node:fs/promises";
import { Chess } from "chess.js";

const OUTPUT = new URL("../data/opening-drills.ts", import.meta.url);

const openings = [
  {
    slug: "italian-game", name: "Italian Game", target: 25, startPly: 5,
    idea: "Develop quickly, fight for d4, and castle before starting an attack.",
    mistake: "Do not launch a kingside attack while your centre and king are unfinished.",
    lines: [
      ["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d4","exd4","cxd4","Bb4+","Bd2","Bxd2+","Nbxd2","d5","exd5","Nxd5","O-O","O-O"],
      ["e4","e5","Nf3","Nc6","Bc4","Nf6","d3","Bc5","O-O","d6","c3","O-O","Re1","a6","Bb3","Ba7","Nbd2","Re8","Nf1","h6"],
      ["e4","e5","Nf3","Nc6","Bc4","Bc5","b4","Bxb4","c3","Ba5","d4","exd4","O-O","d6","cxd4","Bb6","Nc3","Nf6","e5","dxe5"],
      ["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Na5","Bb5+","c6","dxc6","bxc6","Be2","h6","Nf3","e4","Ne5","Bd6"],
      ["e4","e5","Nf3","Nc6","Bc4","Bc5","d3","Nf6","Nc3","d6","Bg5","h6","Bh4","g5","Bg3","Bg4","h3","Bh5","Na4","Bb6"],
    ],
  },
  {
    slug: "ruy-lopez", name: "Ruy López", target: 25, startPly: 5,
    idea: "Pressure e5, preserve the bishop, and build a durable centre before expanding.",
    mistake: "The pin on the c6-knight does not win the e5-pawn immediately.",
    lines: [
      ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","d6","c3","O-O","h3","Nb8","d4","Nbd7"],
      ["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","d4","Nd6","Bxc6","dxc6","dxe5","Nf5","Qxd8+","Kxd8","Nc3","Ke8","h3","h5"],
      ["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6","dxc6","O-O","f6","d4","exd4","Nxd4","c5","Nb3","Qxd1","Rxd1","Bd7","Be3","b6"],
      ["e4","e5","Nf3","Nc6","Bb5","f5","d3","fxe4","dxe4","Nf6","O-O","d6","Nc3","Be7","Re1","O-O","Nd5","Kh8","Nxe7","Qxe7"],
      ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","b5","Bb3","Na5","O-O","d6","d4","exd4","Nxd4","c5","Bd5","Rb8","Nf5","Nf6"],
    ],
  },
  {
    slug: "queens-gambit", name: "Queen's Gambit", target: 25, startPly: 3,
    idea: "Use the c-pawn to challenge Black's centre, then develop with pressure on d5.",
    mistake: "Do not rush to recover the c4-pawn if development gives you more.",
    lines: [
      ["d4","d5","c4","e6","Nc3","Nf6","Bg5","Be7","e3","O-O","Nf3","h6","Bh4","b6","cxd5","Nxd5","Bxe7","Qxe7","Nxd5","exd5"],
      ["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","a4","Bf5","e3","e6","Bxc4","Bb4","O-O","Nbd7","Qe2","Bg6","e4","O-O"],
      ["d4","d5","c4","dxc4","e4","e5","Nf3","exd4","Bxc4","Nc6","O-O","Be6","Bxe6","fxe6","Qb3","Qd7","Qxb7","Rb8","Qa6","Nf6"],
      ["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5","Bg5","c6","e3","Bf5","Qf3","Bg6","Bxf6","Qxf6","Qxf6","gxf6","Kd2","Nd7"],
      ["d4","Nf6","c4","e6","Nf3","d5","Nc3","Be7","Bg5","O-O","e3","h6","Bh4","b6","cxd5","Nxd5","Bxe7","Qxe7","Bd3","Bb7"],
    ],
  },
  {
    slug: "london-system", name: "London System", target: 20, startPly: 5,
    idea: "Build the d4-e3 triangle, develop the dark bishop early, and choose the right pawn break.",
    mistake: "The London setup is a structure, not a reason to play the same moves on autopilot.",
    lines: [
      ["d4","d5","Nf3","Nf6","Bf4","e6","e3","Bd6","Bg3","O-O","Bd3","c5","c3","Nc6","Nbd2","b6","O-O","Bb7","Ne5","Ne7"],
      ["d4","Nf6","Nf3","g6","Bf4","Bg7","e3","O-O","Be2","d6","h3","Nbd7","O-O","Qe8","Bh2","e5","c4","Qe7","Nc3","c6"],
      ["d4","d5","Nf3","Nf6","Bf4","c5","e3","Nc6","c3","Qb6","Qb3","c4","Qxb6","axb6","Nbd2","Bf5","Be2","b5","O-O","e6"],
      ["d4","f5","Nf3","Nf6","Bf4","e6","e3","b6","Bd3","Bb7","Nbd2","Be7","O-O","O-O","c3","Ne4","Qc2","Nxd2","Nxd2","d6"],
    ],
  },
  {
    slug: "sicilian-defense", name: "Sicilian Defense", target: 30, startPly: 2,
    idea: "Create an asymmetric fight: White uses space and development; Black attacks the centre from the flank.",
    mistake: "Do not copy the opponent's moves—the imbalance is the point of the Sicilian.",
    lines: [
      ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Be3","e5","Nb3","Be6","f3","Be7","Qd2","O-O","O-O-O","Nbd7"],
      ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5","Ndb5","d6","Bg5","a6","Na3","b5","Nd5","Be7","Bxf6","Bxf6"],
      ["e4","c5","Nf3","e6","d4","cxd4","Nxd4","Nc6","Nc3","Qc7","Be3","Nf6","Qd2","Bb4","f3","O-O","O-O-O","d5","exd5","Nxd5"],
      ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be3","Bg7","f3","O-O","Qd2","Nc6","Bc4","Bd7","O-O-O","Rc8"],
      ["e4","c5","Nc3","Nc6","f4","g6","Nf3","Bg7","Bb5","Nd4","O-O","Nxb5","Nxb5","d6","d3","a6","Nc3","e6","Qe1","Ne7"],
      ["e4","c5","c3","Nf6","e5","Nd5","d4","cxd4","Nf3","Nc6","cxd4","d6","Bc4","dxe5","dxe5","Ndb4","Qxd8+","Nxd8","Na3","Be6"],
    ],
  },
  {
    slug: "french-defense", name: "French Defense", target: 20, startPly: 2,
    idea: "Challenge e4 with d5, then solve the light bishop and attack the pawn chain at its base.",
    mistake: "Do not leave the c8-bishop buried without preparing a pawn break.",
    lines: [
      ["e4","e6","d4","d5","Nc3","Nf6","e5","Nfd7","f4","c5","Nf3","Nc6","Be3","cxd4","Nxd4","Bc5","Qd2","O-O","O-O-O","a6"],
      ["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3","Qb6","Bd3","cxd4","cxd4","Bd7","O-O","Nxd4","Nxd4","Qxd4","Nc3","Qxe5"],
      ["e4","e6","d4","d5","Nd2","Nf6","e5","Nfd7","Bd3","c5","c3","Nc6","Ne2","cxd4","cxd4","f6","Nf4","Nxd4","Qh5+","Ke7"],
      ["e4","e6","d4","d5","exd5","exd5","Nf3","Nf6","Bd3","Bd6","O-O","O-O","Bg5","Bg4","Nbd2","Nbd7","c3","c6","Qc2","Qc7"],
    ],
  },
  {
    slug: "caro-kann", name: "Caro-Kann Defense", target: 20, startPly: 2,
    idea: "Support d5 with c6 and aim for a sound structure without trapping the light bishop.",
    mistake: "Develop the c8-bishop before closing it in with ...e6 whenever the position allows.",
    lines: [
      ["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5","Ng3","Bg6","h4","h6","Nf3","Nd7","h5","Bh7","Bd3","Bxd3","Qxd3","Qc7"],
      ["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5","Be3","cxd4","Nxd4","Ne7","O-O","Nbc6","f4","Nxd4","Bxd4","Nc6"],
      ["e4","c6","d4","d5","exd5","cxd5","Bd3","Nc6","c3","Nf6","Bf4","Bg4","Qb3","Qd7","Nd2","e6","Ngf3","Bd6","Bxd6","Qxd6"],
      ["e4","c6","d4","d5","Nd2","dxe4","Nxe4","Bf5","Ng3","Bg6","N1e2","e6","h4","h6","Nf4","Bh7","Bc4","Nf6","Qe2","Bd6"],
    ],
  },
  {
    slug: "kings-indian", name: "King's Indian Defense", target: 20, startPly: 4,
    idea: "Let White take space, then strike with ...e5 or ...c5 and build kingside activity.",
    mistake: "A closed centre is a signal to attack the pawn chain—not to wait passively.",
    lines: [
      ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O","Be2","e5","O-O","Nc6","d5","Ne7","Ne1","Nd7","Be3","f5"],
      ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f3","O-O","Be3","e5","d5","c6","Qd2","cxd5","cxd5","a6","g4","Nbd7"],
      ["d4","Nf6","c4","g6","Nf3","Bg7","g3","O-O","Bg2","d6","O-O","Nbd7","Nc3","e5","e4","c6","h3","Qb6","d5","cxd5"],
      ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Be2","O-O","Bg5","Na6","Qd2","e5","d5","Nc5","f3","a5","g4","Bd7"],
    ],
  },
  {
    slug: "scandinavian", name: "Scandinavian Defense", target: 15, startPly: 2,
    idea: "Challenge e4 immediately, then develop efficiently after the queen recaptures.",
    mistake: "Do not spend multiple tempi moving the queen while the rest of the army sleeps.",
    lines: [
      ["e4","d5","exd5","Qxd5","Nc3","Qd8","d4","Nf6","Nf3","c6","Bc4","Bf5","O-O","e6","Re1","Be7","Ne5","O-O","g4","Bg6"],
      ["e4","d5","exd5","Nf6","d4","Nxd5","Nf3","g6","c4","Nb6","Nc3","Bg7","Be3","O-O","Be2","Nc6","O-O","Bg4","d5","Bxf3"],
      ["e4","d5","exd5","Qxd5","Nc3","Qd6","d4","Nf6","Nf3","c6","Ne5","Be6","Bf4","Qb4","Qd2","Nbd7","O-O-O","O-O-O","a3","Qa5"],
      ["e4","d5","exd5","Qxd5","Nc3","Qa5","d4","Nf6","Nf3","c6","Bc4","Bf5","Bd2","e6","Nd5","Qd8","Nxf6+","Qxf6","O-O","Bd6"],
    ],
  },
];

function toUci(move) {
  return `${move.from}${move.to}${move.promotion ?? ""}`;
}

const drills = [];
const globalPositions = new Set();
for (const opening of openings) {
  const candidates = [];
  const seen = new Set();

  for (const [lineIndex, line] of opening.lines.entries()) {
    const game = new Chess();
    const states = [];
    for (const san of line) {
      states.push({ fen: game.fen(), turn: game.turn() });
      const move = game.move(san);
      if (!move) throw new Error(`${opening.name} line ${lineIndex + 1}: illegal move ${san}`);
    }

    for (let ply = opening.startPly; ply <= line.length - 4; ply += 1) {
      const state = states[ply];
      const key = state.fen.split(" ").slice(0, 4).join(" ");
      if (seen.has(key)) continue;
      seen.add(key);

      const replay = new Chess(state.fen);
      const moves = [];
      const sanMoves = [];
      for (const san of line.slice(ply, Math.min(line.length, ply + 6))) {
        const move = replay.move(san);
        if (!move) throw new Error(`${opening.name}: could not replay ${san}`);
        moves.push(toUci(move));
        sanMoves.push(move.san);
      }
      if (moves.length >= 4) candidates.push({ ...state, moves, sanMoves, lineIndex, ply });
    }
  }

  // Interleave variations so a single main line never dominates a pack.
  candidates.sort((a, b) => (a.ply - b.ply) || (a.lineIndex - b.lineIndex));
  const selected = candidates.filter((candidate) => {
    const key = candidate.fen.split(" ").slice(0, 4).join(" ");
    if (globalPositions.has(key)) return false;
    globalPositions.add(key);
    return true;
  }).slice(0, opening.target);
  if (selected.length < opening.target) {
    throw new Error(`${opening.name}: need ${opening.target}, only built ${selected.length} unique positions`);
  }
  for (const candidate of selected) {
    const index = drills.length + 1;
    drills.push({
      id: `CG-OPEN-${String(index).padStart(3, "0")}`,
      opening: opening.name,
      openingSlug: opening.slug,
      variation: `Line ${candidate.lineIndex + 1}`,
      side: candidate.turn === "w" ? "white" : "black",
      fen: candidate.fen,
      moves: candidate.moves,
      sanMoves: candidate.sanMoves,
      idea: opening.idea,
      commonMistake: opening.mistake,
      source: "ChessGrind Original",
    });
  }
}

if (drills.length !== 200) throw new Error(`Expected 200 drills, built ${drills.length}`);

const output = `// Generated deterministically by scripts/generate-opening-drills.mjs.\n// Every line is replay-validated with chess.js and uses no external puzzle source.\n\nexport type OpeningSide = "white" | "black";\n\nexport type OpeningDrill = {\n  id: string;\n  opening: string;\n  openingSlug: string;\n  variation: string;\n  side: OpeningSide;\n  fen: string;\n  moves: string[];\n  sanMoves: string[];\n  idea: string;\n  commonMistake: string;\n  source: "ChessGrind Original";\n};\n\nexport const openingDrills: OpeningDrill[] = ${JSON.stringify(drills, null, 2)};\n`;
await fs.writeFile(OUTPUT, output);
console.log(`Generated ${drills.length} opening drills across ${openings.length} opening families.`);
