"use client";

import { defaultPieces, type PieceRenderObject } from "react-chessboard";

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
    const BasePiece = defaultPieces[pieceType];
    const color = pieceType[0] === "w" ? "white" : "black";
    const rank = pieceType[1].toLowerCase();

    return [
      pieceType,
      (props?: {
        fill?: string;
        square?: string;
        svgStyle?: React.CSSProperties;
      }) => (
        <span
          className={`cg-piece cg-piece-${color} cg-piece-${rank}`}
          data-square={props?.square}
        >
          {BasePiece({
            ...props,
            fill: color === "white" ? "#f5f0df" : "#252a32",
            svgStyle: {
              ...props?.svgStyle,
              width: "90%",
              height: "90%",
            },
          })}
        </span>
      ),
    ];
  })
) as PieceRenderObject;
