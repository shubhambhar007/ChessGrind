import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Chess Training Progress & Puzzle Insights",
  description:
    "See puzzle accuracy, streaks, tactical strengths, weak themes, hint usage, and training progress stored privately on your device.",
  alternates: { canonical: "/insights" },
};

export default function InsightsLayout({ children }: { children: ReactNode }) {
  return children;
}
