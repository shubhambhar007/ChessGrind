import fs from "node:fs/promises";
import { Chess } from "chess.js";
import { applyLegalMoveMarkers } from "../lib/chessboard-markers.ts";

const source = await fs.readFile(new URL("../data/puzzles.ts", import.meta.url), "utf8");
const match = source.match(/export const puzzles: Puzzle\[] = ([\s\S]+);\s*$/);
if (!match) throw new Error("Could not read the generated puzzle array.");
const puzzles = JSON.parse(match[1]);

let selectedPieces = 0;
let markedDestinations = 0;
let captureMarkers = 0;

for (const puzzle of puzzles) {
  const game = new Chess(puzzle.fen);

  for (let ply = 0; ply <= puzzle.moves.length; ply += 1) {
    const moves = game.moves({ verbose: true });
    const sourceSquares = [...new Set(moves.map((move) => move.from))];

    for (const sourceSquare of sourceSquares) {
      const legalMoves = moves.filter((move) => move.from === sourceSquare);
      const styles = applyLegalMoveMarkers({}, legalMoves);
      const destinations = [...new Set(legalMoves.map((move) => move.to))];

      if (Object.keys(styles).length !== destinations.length) {
        throw new Error(`${puzzle.id} ${sourceSquare}: marker count does not match legal moves`);
      }

      for (const move of legalMoves) {
        const marker = styles[move.to];
        const visible = move.captured
          ? typeof marker.boxShadow === "string" && marker.boxShadow.includes("37, 99, 235")
          : typeof marker.backgroundImage === "string" && marker.backgroundImage.includes("#2563eb");
        if (!visible) {
          throw new Error(`${puzzle.id} ${sourceSquare}-${move.to}: missing blue marker`);
        }
        if (move.captured) captureMarkers += 1;
      }

      selectedPieces += 1;
      markedDestinations += destinations.length;
    }

    const solutionMove = puzzle.moves[ply];
    if (!solutionMove) break;
    game.move({
      from: solutionMove.slice(0, 2),
      to: solutionMove.slice(2, 4),
      promotion: solutionMove.slice(4, 5) || undefined,
    });
  }
}

console.log(
  `Validated blue move guides for ${selectedPieces} selectable pieces, ${markedDestinations} legal destinations, and ${captureMarkers} captures.`
);
