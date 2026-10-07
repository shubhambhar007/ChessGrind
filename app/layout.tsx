import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GrindbookCloudSync from "./grindbook-cloud-sync";
import RepertoireCloudSync from "./repertoire-cloud-sync";
import "./globals.css";

const themeScript = `
  try {
    const saved = localStorage.getItem("chessgrind-theme");
    const theme = saved === "dark" || saved === "light"
      ? saved
      : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {}
`;

export const metadata: Metadata = {
  title: "ChessGrind",
  description:
    "ChessGrind remembers your mistakes and turns them into adaptive puzzles, spaced reviews, opening drills, and personal insights.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GrindbookCloudSync />
        <RepertoireCloudSync />
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
