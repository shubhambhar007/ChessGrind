import { Img, staticFile } from "remotion";
import { colors, fonts } from "../theme";

export const Brand: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: compact ? 14 : 18 }}>
    <Img
      src={staticFile("brand/emblem.png")}
      style={{ width: compact ? 52 : 68, height: compact ? 52 : 68, objectFit: "contain" }}
    />
    <div style={{ lineHeight: 0.9 }}>
      <div
        style={{
          color: colors.inkSoft,
          fontFamily: fonts.mono,
          fontSize: compact ? 11 : 13,
          letterSpacing: "0.42em",
          marginBottom: compact ? 8 : 10,
        }}
      >
        CHESS
      </div>
      <div
        style={{
          color: colors.ink,
          fontFamily: fonts.editorial,
          fontSize: compact ? 24 : 31,
          fontWeight: 500,
          letterSpacing: "0.12em",
        }}
      >
        GRIND
      </div>
    </div>
  </div>
);
