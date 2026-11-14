import type { Metadata } from "next";
import { connection } from "next/server";
import Link from "next/link";
import AccountLink from "../account-link";
import BrandLockup from "../brand-lockup";
import ThemeToggle from "../theme-toggle";
import VisitorCounter from "../visitor-counter";
import DailyPuzzlePlayer from "./daily-puzzle-player";
import { getDailyNumber, getDailyPuzzle, normalizeDailyDate } from "@/lib/daily-puzzle";

export const metadata: Metadata = {
  title: "Daily Chess Puzzle – One Original Position Every Day",
  description:
    "Solve today's free ChessGrind puzzle, reveal every legal move, and share your result. A new original engine-verified position appears daily.",
  alternates: { canonical: "/daily" },
  openGraph: {
    title: "Today's Free Chess Puzzle | ChessGrind",
    description: "One original position. One clean result card. No puzzle limit or external account.",
    url: "/daily",
  },
};

export default async function DailyPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string | string[] }>;
}) {
  await connection();
  const params = await searchParams;
  const requestedDate = typeof params.date === "string" ? params.date : null;
  const date = normalizeDailyDate(requestedDate);
  const puzzle = getDailyPuzzle(date);
  const dailyNumber = getDailyNumber(date);

  return (
    <main className="cg-app-shell cg-daily-page min-h-screen">
      <header className="border-b border-[var(--line)] bg-[var(--header)]">
        <div className="cg-app-header-inner mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-6">
          <Link href="/" aria-label="ChessGrind home"><BrandLockup priority /></Link>
          <nav className="cg-app-nav flex items-center gap-5 text-[12px] font-semibold text-[var(--secondary)]" aria-label="Main navigation">
            <VisitorCounter /><Link href="/train">Train</Link><Link href="/openings">Opening Lab</Link><Link href="/grindbook">Grindbook</Link><Link href="/premium">Premium</Link><AccountLink /><ThemeToggle />
          </nav>
        </div>
      </header>

      <DailyPuzzlePlayer puzzle={puzzle} date={date} dailyNumber={dailyNumber} />

      <footer className="cg-daily-footer">
        <BrandLockup />
        <p>A fresh, original ChessGrind position every day.</p>
        <nav><Link href="/train">6,000 puzzles</Link><Link href="/grindbook">Grindbook</Link><Link href="/premium">Premium</Link></nav>
      </footer>
    </main>
  );
}
