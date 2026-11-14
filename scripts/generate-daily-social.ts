import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { Chess, type Square } from "chess.js";
import { getDailyNumber, getDailyPuzzle, normalizeDailyDate } from "../lib/daily-puzzle";

const args = new Map<string, string>();
for (let index = 2; index < process.argv.length; index += 2) {
  const key = process.argv[index]?.replace(/^--/, "");
  const value = process.argv[index + 1];
  if (key && value) args.set(key, value);
}

const date = normalizeDailyDate(args.get("date"));
const outputRoot = args.get("out") ?? path.join(".generated", "daily-social", date);
const puzzle = getDailyPuzzle(date);
const dailyNumber = getDailyNumber(date);
const game = new Chess(puzzle.fen);

for (const uci of puzzle.moves) {
  const move = game.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] || "q" });
  if (!move) throw new Error(`Verified puzzle ${puzzle.id} contains an illegal move: ${uci}`);
}

const pieceGlyphs: Record<string, string> = {
  wK: "♔", wQ: "♕", wR: "♖", wB: "♗", wN: "♘", wP: "♙",
  bK: "♚", bQ: "♛", bR: "♜", bB: "♝", bN: "♞", bP: "♟",
};

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", "\"": "&quot;" })[character] ?? character);
}

function titleCase(value: string) {
  return value.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (letter) => letter.toUpperCase());
}

function boardMarkup(showSolution: boolean) {
  const initial = new Chess(puzzle.fen);
  const orientation = initial.turn() === "w" ? "white" : "black";
  const files = orientation === "white" ? ["a", "b", "c", "d", "e", "f", "g", "h"] : ["h", "g", "f", "e", "d", "c", "b", "a"];
  const ranks = orientation === "white" ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8];
  const firstMove = puzzle.moves[0];
  let markup = "";

  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      const square = `${files[column]}${ranks[row]}`;
      const x = 120 + column * 120;
      const y = 330 + row * 120;
      const isMoveSquare = showSolution && (square === firstMove.slice(0, 2) || square === firstMove.slice(2, 4));
      const fill = (row + column) % 2 === 0 ? "#e6ebf2" : "#8292aa";
      markup += `<rect x="${x}" y="${y}" width="120" height="120" fill="${fill}"${isMoveSquare ? ' stroke="#7895ff" stroke-width="10"' : ""}/>`;
      const piece = initial.get(square as Square);
      if (piece) {
        const glyph = pieceGlyphs[`${piece.color}${piece.type.toUpperCase()}`];
        markup += `<text x="${x + 60}" y="${y + 91}" fill="${piece.color === "w" ? "#f8f3e8" : "#101522"}" stroke="${piece.color === "w" ? "#9d7e43" : "#05070b"}" stroke-width="2" text-anchor="middle" font-family="Georgia, serif" font-size="92">${glyph}</text>`;
      }
    }
  }
  return markup;
}

function card(showSolution: boolean) {
  const side = puzzle.fen.split(" ")[1] === "w" ? "WHITE" : "BLACK";
  const theme = titleCase(puzzle.themes[0] ?? "Tactics").toUpperCase();
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#080d17"/><stop offset="1" stop-color="#142038"/></linearGradient></defs>
  <rect width="1200" height="1500" fill="url(#bg)"/>
  <rect x="60" y="60" width="1080" height="1380" fill="none" stroke="#7895ff" stroke-opacity=".55" stroke-width="2"/>
  <text x="120" y="150" fill="#7895ff" font-family="ui-monospace, monospace" font-weight="700" font-size="26" letter-spacing="5">CHESSGRIND / DAILY ${String(dailyNumber).padStart(3, "0")}</text>
  <text x="120" y="238" fill="#f4f7fc" font-family="Arial, sans-serif" font-weight="700" font-size="64">${showSolution ? "Pattern found." : `${side} TO MOVE.`}</text>
  <text x="1080" y="238" fill="#9eabc0" text-anchor="end" font-family="ui-monospace, monospace" font-size="23">${escapeXml(theme)}</text>
  ${boardMarkup(showSolution)}
  <text x="120" y="1360" fill="#f4f7fc" font-family="Arial, sans-serif" font-weight="700" font-size="37">${showSolution ? `Solution: ${puzzle.moves[0]}` : "Can you find the strongest move?"}</text>
  <text x="1080" y="1360" fill="#7895ff" text-anchor="end" font-family="Arial, sans-serif" font-weight="700" font-size="27">chessgrind.fyi/daily</text>
</svg>`;
}

const shareUrl = `https://chessgrind.fyi/daily?date=${date}&utm_source=organic_social&utm_medium=post&utm_campaign=daily_${date}`;
const captions = `# ChessGrind Daily #${dailyNumber}

## Short / X
One position. No excuses.\n\n${puzzle.fen.split(" ")[1] === "w" ? "White" : "Black"} to move — can you find the strongest move?\n\n${shareUrl}

## Reddit / communities
Daily chess position #${dailyNumber}: ${puzzle.fen.split(" ")[1] === "w" ? "White" : "Black"} to move. I built this from ChessGrind's original, engine-verified puzzle set. Curious which move you would play first — no account needed.\n\n${shareUrl}

## LinkedIn
Most chess improvement disappears the moment you close the board.\n\nSo I am trying a smaller habit: one original position every day, with the result easy to share. Today is ChessGrind Daily #${dailyNumber}.\n\n${shareUrl}
`;

async function main() {
  await mkdir(outputRoot, { recursive: true });
  await Promise.all([
    writeFile(path.join(outputRoot, "puzzle.svg"), card(false)),
    writeFile(path.join(outputRoot, "solution.svg"), card(true)),
    writeFile(path.join(outputRoot, "captions.md"), captions),
    writeFile(path.join(outputRoot, "manifest.json"), JSON.stringify({ date, dailyNumber, puzzle, shareUrl }, null, 2)),
  ]);
  console.log(`Generated ChessGrind Daily #${dailyNumber} assets in ${outputRoot}`);
}

void main();
