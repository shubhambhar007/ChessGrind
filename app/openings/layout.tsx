import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Free Chess Opening Trainer – 200 Drills",
  description:
    "Practice 200 original chess opening drills across nine opening families. Train both colors, understand the response, and build a personal repertoire.",
  alternates: { canonical: "/openings" },
};

export default function OpeningsLayout({ children }: { children: ReactNode }) {
  return children;
}
