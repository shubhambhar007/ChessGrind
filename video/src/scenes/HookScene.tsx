import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { Brand } from "../components/Brand";
import { colors, fonts } from "../theme";
import { SCENES } from "../timing";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  // Frame zero doubles as the player poster, so the opening thought is already
  // readable before playback and simply sharpens into full presence.
  const enter = interpolate(frame, [0, 28], [0.62, 1], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const line = interpolate(frame, [38, 68], [0, 1], { easing: Easing.out(Easing.cubic), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dot = interpolate(frame, [68, 84], [0, 1], { easing: Easing.out(Easing.back(1.6)), extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const exit = interpolate(frame, [SCENES.hook.duration - 18, SCENES.hook.duration], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: colors.background, color: colors.ink, fontFamily: fonts.display, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 74% 44%, rgba(119,149,255,.12), transparent 36%), linear-gradient(130deg, #090d14 0%, #0a101b 65%, #0d1422 100%)" }} />
      <div style={{ position: "absolute", left: 100, top: 68, opacity: enter }}><Brand compact /></div>
      <div style={{ position: "absolute", left: 170, right: 170, top: 330, opacity: 1 - exit, transform: `translateY(${(1 - enter) * 34 - exit * 26}px)` }}>
        <div style={{ color: colors.accentBright, fontFamily: fonts.mono, fontSize: 19, letterSpacing: ".22em", marginBottom: 32, opacity: line }}>
          THE PERSONAL CHESS GYM
        </div>
        <div style={{ fontSize: 104, lineHeight: 1.03, letterSpacing: "-.055em", fontWeight: 700, maxWidth: 1250 }}>
          <span style={{ display: "block", opacity: enter, transform: `translateY(${(1 - enter) * 44}px)` }}>Your mistakes should</span>
          <span style={{ display: "inline-block", opacity: line, transform: `translateY(${(1 - line) * 34}px)` }}>remember you</span>
          <span style={{ display: "inline-block", marginLeft: 14, color: colors.accent, opacity: dot, transform: `scale(${dot})`, transformOrigin: "center" }}>.</span>
        </div>
      </div>
      <div style={{ position: "absolute", right: 140, bottom: 84, color: colors.inkMuted, fontFamily: fonts.mono, fontSize: 16, letterSpacing: ".18em", opacity: line * (1 - exit) }}>
        PLAY · NOTICE · REMEMBER
      </div>
    </AbsoluteFill>
  );
};
