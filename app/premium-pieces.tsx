"use client";

import type { PieceRenderObject } from "react-chessboard";

const SPRITE_POSITIONS: Record<string, [number, number]> = {
  wP: [0, 0],
  wR: [1, 0],
  wN: [2, 0],
  wB: [3, 0],
  wQ: [0, 1],
  wK: [1, 1],
  bP: [2, 1],
  bR: [3, 1],
  bN: [0, 2],
  bB: [1, 2],
  bQ: [2, 2],
  bK: [3, 2],
};

export const premiumPieces = Object.fromEntries(
  Object.entries(SPRITE_POSITIONS).map(([
    pieceType,
    [column, row],
  ]) => {
    const color = pieceType[0] === "w" ? "white" : "black";

    return [
      pieceType,
      () => (
        <span
          aria-hidden="true"
          className={`cg-piece cg-piece-${color}`}
          style={{
            backgroundPosition: `${(column / 3) * 100}% ${(row / 2) * 100}%`,
          }}
        />
      ),
    ];
  })
) as PieceRenderObject;
