import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Build a Personal Chess Opening Repertoire",
  description:
    "Build and practice your personal chess opening repertoire for White and Black, branch by branch, without connecting an external chess account.",
  alternates: { canonical: "/repertoire" },
};

export default function RepertoireLayout({ children }: { children: ReactNode }) {
  return children;
}
