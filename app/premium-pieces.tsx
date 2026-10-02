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
  PIECE_TYPES.map((pieceType, index) => {
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
          style={{ "--piece-delay": `${index * -0.17}s` } as React.CSSProperties}
          data-square={props?.square}
        >
          {BasePiece({
            ...props,
            fill: color === "white" ? "#fff8dc" : "#24133f",
            svgStyle: {
              ...props?.svgStyle,
              width: "94%",
              height: "94%",
            },
          })}
        </span>
      ),
    ];
  })
) as PieceRenderObject;
