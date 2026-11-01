import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { colors, fonts } from "../theme";

type Piece = { square: string; asset: string };

const pieces: Piece[] = [
  { square: "a8", asset: "bR" }, { square: "c8", asset: "bB" }, { square: "d8", asset: "bQ" },
  { square: "e8", asset: "bK" }, { square: "f8", asset: "bB" }, { square: "h8", asset: "bR" },
  { square: "a7", asset: "bP" }, { square: "b7", asset: "bP" }, { square: "c7", asset: "bP" },
  { square: "d7", asset: "bP" }, { square: "f7", asset: "bP" }, { square: "g7", asset: "bP" }, { square: "h7", asset: "bP" },
  { square: "c6", asset: "bN" }, { square: "f6", asset: "bN" }, { square: "e5", asset: "bP" },
  { square: "c4", asset: "wB" }, { square: "e4", asset: "wP" }, { square: "f3", asset: "wN" },
  { square: "a2", asset: "wP" }, { square: "b2", asset: "wP" }, { square: "c2", asset: "wP" },
  { square: "d2", asset: "wP" }, { square: "f2", asset: "wP" }, { square: "g2", asset: "wP" }, { square: "h2", asset: "wP" },
  { square: "a1", asset: "wR" }, { square: "b1", asset: "wN" }, { square: "c1", asset: "wB" },
  { square: "d1", asset: "wQ" }, { square: "e1", asset: "wK" }, { square: "h1", asset: "wR" },
];

// Legal knight moves from f3 in this exact position. e5 is a capture, so it
// receives a ring rather than a centre dot and the target remains readable.
const legalSquares = ["d4", "e5", "g5", "h4", "g1"];
const files = "abcdefgh";

const toIndex = (square: string) => {
  const file = files.indexOf(square[0]);
  const rank = Number(square[1]);
  return { col: file, row: 8 - rank };
};

export const ChessBoard: React.FC<{ dotsStart?: number }> = ({ dotsStart = 28 }) => {
  const frame = useCurrentFrame();
  const selected = interpolate(frame, [10, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "relative",
        width: 760,
        height: 760,
        padding: 18,
        borderRadius: 30,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: "0 42px 100px rgba(0,0,0,.48), 0 0 0 1px rgba(119,149,255,.05)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: 15,
        }}
      >
        {Array.from({ length: 64 }, (_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          return <div key={i} style={{ background: (row + col) % 2 === 0 ? colors.boardLight : colors.boardDark }} />;
        })}
      </div>

      {pieces.map(({ square, asset }) => {
        const { col, row } = toIndex(square);
        const isSelected = square === "f3";
        return (
          <div
            key={`${square}-${asset}`}
            style={{
              position: "absolute",
              left: 18 + col * 90,
              top: 18 + row * 90,
              width: 90,
              height: 90,
              display: "grid",
              placeItems: "center",
            }}
          >
            {isSelected && (
              <div
                style={{
                  position: "absolute",
                  inset: 5,
                  borderRadius: 18,
                  background: `rgba(119,149,255,${0.12 + selected * 0.24})`,
                  boxShadow: `0 0 ${30 * selected}px rgba(119,149,255,.72), inset 0 0 0 3px rgba(140,165,255,${selected})`,
                  transform: `scale(${0.92 + selected * 0.08})`,
                }}
              />
            )}
            <Img
              src={staticFile(`pieces/${asset}.png`)}
              style={{ width: 84, height: 84, objectFit: "contain", position: "relative", zIndex: 2 }}
            />
          </div>
        );
      })}

      {legalSquares.map((square, index) => {
        const { col, row } = toIndex(square);
        const isCapture = square === "e5";
        const progress = interpolate(frame, [dotsStart + index * 2, dotsStart + 9 + index * 2], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={square}
            style={{
              position: "absolute",
              left: 18 + col * 90 + (isCapture ? 9 : 31),
              top: 18 + row * 90 + (isCapture ? 9 : 31),
              width: isCapture ? 72 : 28,
              height: isCapture ? 72 : 28,
              borderRadius: "50%",
              background: isCapture ? "transparent" : colors.accent,
              border: isCapture ? `5px solid ${colors.accent}` : "none",
              boxSizing: "border-box",
              boxShadow: isCapture
                ? "0 0 0 7px rgba(119,149,255,.16), inset 0 0 22px rgba(119,149,255,.28), 0 0 30px rgba(119,149,255,.62)"
                : "0 0 0 9px rgba(119,149,255,.2), 0 0 28px rgba(119,149,255,.8)",
              opacity: progress,
              transform: `scale(${0.45 + progress * 0.55})`,
              zIndex: 3,
            }}
          />
        );
      })}

      <div style={{ position: "absolute", left: 28, top: 31, bottom: 31, display: "flex", flexDirection: "column", justifyContent: "space-between", pointerEvents: "none" }}>
        {Array.from({ length: 8 }, (_, i) => <span key={i} style={{ color: colors.inkMuted, font: `500 15px ${fonts.mono}` }}>{8 - i}</span>)}
      </div>
    </div>
  );
};
