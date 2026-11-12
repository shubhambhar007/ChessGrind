import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Play Chess vs Computer Online for Free",
  description:
    "Play a complete chess game against the computer for free, choose your difficulty and color, see legal move guides, and save mistakes for later review.",
  alternates: { canonical: "/play" },
};

export default function PlayLayout({ children }: { children: ReactNode }) {
  return children;
}
