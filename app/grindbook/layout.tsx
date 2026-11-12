import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Chess Mistake Trainer with Spaced Repetition",
  description:
    "Turn missed tactics and game mistakes into private spaced-review cards. Grindbook brings positions back until the chess pattern sticks.",
  alternates: { canonical: "/grindbook" },
};

export default function GrindbookLayout({ children }: { children: ReactNode }) {
  return children;
}
