import fs from "node:fs/promises";
import { Chess } from "chess.js";

const source = await fs.readFile(new URL("../data/opening-drills.ts", import.meta.url), "utf8");
const match = source.match(/export const openingDrills: OpeningDrill\[] = ([\s\S]+);\s*$/);
if (!match) throw new Error("Could not read generated opening drills.");

const drills = JSON.parse(match[1]);
if (drills.length !== 200) throw new Error(`Expected 200 drills, found ${drills.length}.`);

const expected = {
  "Italian Game": 25,
  "Ruy López": 25,
  "Queen's Gambit": 25,
  "London System": 20,
  "Sicilian Defense": 30,
  "French Defense": 20,
  "Caro-Kann Defense": 20,
  "King's Indian Defense": 20,
  "Scandinavian Defense": 15,
};
const counts = {};
const ids = new Set();
const positions = new Set();
const sides = { white: 0, black: 0 };

for (const drill of drills) {
  if (ids.has(drill.id)) throw new Error(`Duplicate ID: ${drill.id}`);
  ids.add(drill.id);
  if (drill.source !== "ChessGrind Original") throw new Error(`${drill.id}: invalid source`);
  if (!/^CG-OPEN-\d{3}$/.test(drill.id)) throw new Error(`${drill.id}: invalid ID`);
  if (drill.moves.length < 4 || drill.moves.length > 6) throw new Error(`${drill.id}: line must be 4–6 ply`);
  if (drill.moves.length !== drill.sanMoves.length) throw new Error(`${drill.id}: SAN/UCI length mismatch`);

  const game = new Chess(drill.fen);
  const side = game.turn() === "w" ? "white" : "black";
  if (drill.side !== side) throw new Error(`${drill.id}: side does not match FEN`);
  sides[side] += 1;
  const key = game.fen().split(" ").slice(0, 4).join(" ");
  if (positions.has(key)) throw new Error(`${drill.id}: duplicate position`);
  positions.add(key);

  for (const [index, uci] of drill.moves.entries()) {
    const move = game.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
    if (!move) throw new Error(`${drill.id}: illegal move ${index + 1} (${uci})`);
    if (move.san !== drill.sanMoves[index]) throw new Error(`${drill.id}: SAN mismatch at move ${index + 1}`);
  }
  counts[drill.opening] = (counts[drill.opening] ?? 0) + 1;
}

for (const [opening, count] of Object.entries(expected)) {
  if (counts[opening] !== count) throw new Error(`${opening}: expected ${count}, found ${counts[opening] ?? 0}`);
}
if (Object.keys(counts).length !== Object.keys(expected).length) throw new Error("Unexpected opening family found.");

console.log(`Validated ${drills.length} original opening drills.`);
console.log(`Openings: ${JSON.stringify(counts)}`);
console.log(`Solver sides: ${JSON.stringify(sides)}`);
