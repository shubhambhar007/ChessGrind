"use client";

import type { PieceRenderObject } from "react-chessboard";

const PIECE_TYPES = [
  "wP",
  "wR",
  "wN",
  "wB",
  "wQ",
  "wK",
  "bP",
  "bR",
  "bN",
  "bB",
  "bQ",
  "bK",
] as const;

export const premiumPieces = Object.fromEntries(
  PIECE_TYPES.map((pieceType) => {
    const color = pieceType[0] === "w" ? "white" : "black";

    return [
      pieceType,
      () => (
        <span
          aria-hidden="true"
          className={`cg-piece cg-piece-${color}`}
          style={{
            backgroundImage: `url("/pieces/luxe-v2/${pieceType}.png")`,
          }}
        />
      ),
    ];
  })
) as PieceRenderObject;
