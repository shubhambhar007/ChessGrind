import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  metadataBase: new URL("https://chessgrind.fyi"),
  title: {
    default: "Free Chess Puzzles & Training | ChessGrind",
    template: "%s | ChessGrind",
  },
  description:
    "Solve 6,000 free original chess puzzles with hints, difficulty modes, opening drills, full games, spaced review, and no external chess account.",
  keywords: [
    "free chess puzzles",
    "chess puzzle game",
    "chess tactics trainer",
    "online chess puzzles",
    "chess opening trainer",
    "chess training",
    "chess improvement",
  ],
  alternates: { canonical: "/" },
  applicationName: "ChessGrind",
  creator: "ChessGrind",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ChessGrind",
    title: "6,000 Free Chess Puzzles That Remember Your Mistakes",
    description:
      "Train tactics, opening responses, full games, and the mistakes that keep costing you points.",
    images: [
      {
        url: "/brand/chessgrind-king-knight-emblem.png",
        width: 1254,
        height: 1254,
        alt: "ChessGrind king and knight emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "6,000 Free Chess Puzzles | ChessGrind",
    description:
      "Free original chess puzzles, opening drills, full games, and mistake-based spaced review.",
    images: ["/brand/chessgrind-king-knight-emblem.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chessgrind.fyi/#website",
      url: "https://chessgrind.fyi/",
      name: "ChessGrind",
      description:
        "Free chess puzzles and training that remember your mistakes.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://chessgrind.fyi/#app",
      name: "ChessGrind",
      url: "https://chessgrind.fyi/",
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      description:
        "A free chess tactics trainer with 6,000 original puzzles, hints, opening drills, full games, Grindbook spaced review, and progress insights.",
      featureList: [
        "6,000 original chess puzzles",
        "Legal move hints and blue move guides",
        "Adaptive puzzle sessions",
        "Chess opening drills",
        "Play full games against the computer",
        "Mistake-based spaced review",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <GrindbookCloudSync />
        <RepertoireCloudSync />
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
