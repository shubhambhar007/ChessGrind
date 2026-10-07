import { Chess } from "chess.js";
import fs from "node:fs/promises";

const source = await fs.readFile(new URL("../data/puzzles.ts", import.meta.url), "utf8");
const match = source.match(/export const puzzles: Puzzle\[] = ([\s\S]+);\s*$/);
if (!match) throw new Error("Could not read the generated puzzle array.");
const puzzles = JSON.parse(match[1]);
if (puzzles.length !== 200) throw new Error(`Expected 200 puzzles, found ${puzzles.length}.`);

const ids = new Set();
const positions = new Set();
const difficulty = { easy: 0, medium: 0, hard: 0 };
const colors = { white: 0, black: 0 };
const themes = new Map();

for (const puzzle of puzzles) {
  if (ids.has(puzzle.id)) throw new Error(`Duplicate ID: ${puzzle.id}`);
  ids.add(puzzle.id);
  if (puzzle.source !== "ChessGrind Original") throw new Error(`${puzzle.id}: invalid source`);
  if (!/^CG-\d{4}$/.test(puzzle.id)) throw new Error(`${puzzle.id}: invalid ID format`);
  if (!(puzzle.difficulty in difficulty)) throw new Error(`${puzzle.id}: invalid difficulty`);

  const game = new Chess(puzzle.fen);
  const objectiveGame = new Chess(puzzle.fen);
  const firstMoveText = puzzle.moves[0];
  const objectiveMove = objectiveGame.move({
    from: firstMoveText.slice(0, 2),
    to: firstMoveText.slice(2, 4),
    promotion: firstMoveText.slice(4, 5) || undefined,
  });
  if (!objectiveMove) throw new Error(`${puzzle.id}: illegal solution move`);
  if (puzzle.themes.includes("mateIn1") && !objectiveGame.isCheckmate()) {
    throw new Error(`${puzzle.id}: mateIn1 does not end in checkmate`);
  }
  if (puzzle.themes.includes("promotion") && !objectiveMove.promotion) {
    throw new Error(`${puzzle.id}: promotion theme has no promotion move`);
  }
  const key = game.fen().split(" ").slice(0, 4).join(" ");
  if (positions.has(key)) throw new Error(`${puzzle.id}: duplicate training position`);
  positions.add(key);
  colors[game.turn() === "w" ? "white" : "black"] += 1;
  for (const [index, moveText] of puzzle.moves.entries()) {
    const move = game.move({
      from: moveText.slice(0, 2),
      to: moveText.slice(2, 4),
      promotion: moveText.slice(4, 5) || undefined,
    });
    if (!move) throw new Error(`${puzzle.id}: illegal move ${index + 1} (${moveText})`);
  }

  const expectedLength = Math.ceil(puzzle.moves.length / 2);
  if (puzzle.solutionLength !== expectedLength) throw new Error(`${puzzle.id}: incorrect solutionLength`);
  difficulty[puzzle.difficulty] += 1;
  for (const theme of puzzle.themes) themes.set(theme, (themes.get(theme) ?? 0) + 1);
}

if (Math.abs(colors.white - colors.black) > 10) {
  throw new Error(`Solver color split is imbalanced: ${JSON.stringify(colors)}`);
}
for (const [theme, minimum] of [["mate", 25], ["fork", 50], ["pin", 20], ["promotion", 15]]) {
  if ((themes.get(theme) ?? 0) < minimum) {
    throw new Error(`Theme ${theme} is below its minimum of ${minimum}.`);
  }
}

console.log(`Validated ${puzzles.length} original puzzles.`);
console.log(`Difficulty: ${JSON.stringify(difficulty)}`);
console.log(`Solver colors: ${JSON.stringify(colors)}`);
console.log(`Themes: ${JSON.stringify(Object.fromEntries([...themes].sort((a, b) => b[1] - a[1])))}`);
