// theme.ts - brand tokens: colors, fonts, canvas size.
//
// Every value in `colors` and `fonts` is a PLACEHOLDER. Replace them with the
// product's real brand before the first render. Components read these tokens
// and never hard-code a hex value, so the whole film re-skins from this file.
// If you change a font family here, change the matching loadFont() in Root.tsx.

export const colors = {
  accent: "#7795ff",
  accentBright: "#8ca5ff",
  accentSoft: "rgba(119, 149, 255, 0.18)",
  onAccent: "#08101f",
  background: "#090d14",
  surface: "#121925",
  surfaceRaised: "#182233",
  header: "#0d121b",
  ink: "#f3f6fc",
  inkSoft: "#9ca8bc",
  inkMuted: "#667389",
  border: "rgba(191, 207, 235, 0.15)",
  brass: "#e0b85e",
  boardLight: "#e7eff9",
  boardDark: "#7087a7",
  shadowTint: "rgba(0, 0, 0, 0.42)",
} as const;

export const fonts = {
  display: "Plus Jakarta Sans, system-ui, sans-serif",
  editorial: "Roboto Slab, Georgia, serif",
  ui: "Inter, system-ui, sans-serif",
  mono: "SFMono-Regular, ui-monospace, Menlo, monospace",
} as const;

// 16:9 master, and the 9:16 size used by the optional vertical master.
export const canvas = { width: 1920, height: 1080 } as const;
export const canvasVertical = { width: 1080, height: 1920 } as const;

/** Blend two #rrggbb colors; t = 0 gives a, t = 1 gives b. For scene-background shifts without a cut. */
export const blendHex = (a: string, b: string, t: number): string => {
  const channels = (hex: string) =>
    [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)].map((h) => parseInt(h, 16));
  const [ar, ag, ab] = channels(a);
  const [br, bg, bb] = channels(b);
  return `#${[ar + (br - ar) * t, ag + (bg - ag) * t, ab + (bb - ab) * t]
    .map((n) => Math.round(n).toString(16).padStart(2, "0"))
    .join("")}`;
};
