import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "6,000 Free Chess Puzzles – Online Tactics Trainer",
  description:
    "Solve 6,000 free original chess puzzles online. Choose difficulty and color, reveal hints and legal moves, run 10-puzzle sessions, and train without limits.",
  alternates: { canonical: "/train" },
};

export default function TrainLayout({ children }: { children: ReactNode }) {
  return children;
}
