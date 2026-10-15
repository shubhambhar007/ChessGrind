import type { CSSProperties } from "react";

export type LegalMoveMarker = {
  to: string;
  captured?: string;
};

export function applyLegalMoveMarkers(
  squareStyles: Record<string, CSSProperties>,
  legalMoves: LegalMoveMarker[]
) {
  for (const move of legalMoves) {
    const existing = squareStyles[move.to] ?? {};

    squareStyles[move.to] = move.captured
      ? {
          ...existing,
          cursor: "pointer",
          boxShadow:
            "inset 0 0 0 6px rgba(37, 99, 235, 0.94), inset 0 0 22px rgba(96, 165, 250, 0.5), 0 0 0 2px rgba(219, 234, 254, 0.72)",
        }
      : {
          ...existing,
          cursor: "pointer",
          backgroundImage:
            "radial-gradient(circle at center, #eff6ff 0 7%, #2563eb 8% 17%, rgba(96, 165, 250, 0.55) 18% 25%, transparent 26%)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        };
  }

  return squareStyles;
}
