import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Brand } from "../components/Brand";
import { ChessBoard } from "../components/ChessBoard";
import { colors, fonts } from "../theme";

export const ProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  const settle = interpolate(frame, [0, 20], [0, 1], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const copy = interpolate(frame, [20, 48], [0, 1], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const save = interpolate(frame, [98, 122], [0, 1], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.background, color: colors.ink, fontFamily: fonts.display, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 76% 56%, rgba(119,149,255,.13), transparent 35%), linear-gradient(112deg, #090d14, #0b111c)" }} />
      <div style={{ position: "absolute", left: 84, top: 54 }}><Brand compact /></div>
      <div style={{ position: "absolute", left: 104, top: 285, width: 600, opacity: copy, transform: `translateY(${(1 - copy) * 28}px)` }}>
        <div style={{ color: colors.accentBright, fontFamily: fonts.mono, fontSize: 17, letterSpacing: ".22em", marginBottom: 28 }}>01 / TRAIN</div>
        <div style={{ fontSize: 82, lineHeight: 1.02, letterSpacing: "-.05em", fontWeight: 700 }}>
          Play.<br />Notice the miss.
        </div>
        <div style={{ color: colors.inkSoft, fontSize: 25, lineHeight: 1.55, marginTop: 30, maxWidth: 540 }}>
          Select a piece. See every legal move. Keep the position that matters.
        </div>
        <div style={{ marginTop: 42, display: "inline-flex", alignItems: "center", gap: 16, padding: "17px 22px", border: `1px solid rgba(119,149,255,${0.22 + save * 0.36})`, background: `rgba(119,149,255,${0.05 + save * 0.1})`, borderRadius: 13, opacity: 0.35 + save * 0.65, transform: `translateY(${(1 - save) * 12}px)` }}>
          <div style={{ width: 11, height: 11, borderRadius: 20, background: colors.accent, boxShadow: "0 0 22px rgba(119,149,255,.9)" }} />
          <span style={{ fontSize: 18, fontWeight: 650 }}>Save to Grindbook</span>
          <span style={{ color: colors.accentBright, fontSize: 22 }}>↗</span>
        </div>
      </div>
      <div style={{ position: "absolute", right: 102, top: 150, transform: `translateX(${(1 - settle) * 28}px) scale(${0.985 + settle * 0.015})` }}>
        <ChessBoard dotsStart={34} />
      </div>
      <div style={{ position: "absolute", right: 112, bottom: 56, color: colors.inkMuted, fontFamily: fonts.mono, fontSize: 15, letterSpacing: ".16em", opacity: copy }}>
        1,000 ORIGINAL POSITIONS
      </div>
    </AbsoluteFill>
  );
};
