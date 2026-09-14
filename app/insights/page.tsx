"use client";

import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeProgress = {
  solved: number;
  wrongMoves: number;
  hintsUsed: number;
};

type Progress = {
  solved: number;
  skipped: number;

  correctMoves: number;
  wrongMoves: number;
  hintsUsed: number;

  currentStreak: number;
  bestStreak: number;

  themes: Record<
    string,
    ThemeProgress
  >;
};

type ThemeInsight = {
  theme: string;

  solved: number;
  wrongMoves: number;
  hintsUsed: number;

  score: number;
  performance: number;
};

const PROGRESS_KEY =
  "chessgrind-progress-v1";

const DEFAULT_PROGRESS: Progress = {
  solved: 0,
  skipped: 0,

  correctMoves: 0,
  wrongMoves: 0,
  hintsUsed: 0,

  currentStreak: 0,
  bestStreak: 0,

  themes: {},
};

const TRAINABLE_THEMES =
  new Set([
    "mate",
    "mateIn1",
    "mateIn2",
    "mateIn3",
    "mateIn4",
    "mateIn5",

    "fork",
    "pin",
    "skewer",

    "discoveredAttack",
    "discoveredCheck",
    "doubleCheck",

    "sacrifice",

    "attraction",
    "deflection",
    "clearance",
    "interference",

    "hangingPiece",
    "trappedPiece",

    "promotion",

    "backRankMate",
    "smotheredMate",
    "arabianMate",
    "anastasiaMate",
    "bodenMate",
    "hookMate",

    "capturingDefender",
    "defensiveMove",
  ]);

const THEME_EXPLANATIONS:
  Record<string, string> = {
  fork:
    "Attacks two or more pieces at the same time.",

  pin:
    "A piece cannot safely move because something more valuable is behind it.",

  skewer:
    "Forces a valuable piece to move, exposing another target behind it.",

  discoveredAttack:
    "Moving one piece reveals an attack from another piece behind it.",

  discoveredCheck:
    "Moving one piece reveals a check from another piece behind it.",

  doubleCheck:
    "Two pieces give check at the same time.",

  sacrifice:
    "Giving up material to gain a stronger tactical or positional advantage.",

  attraction:
    "Forces a piece onto a square where it becomes vulnerable.",

  deflection:
    "Forces a defending piece away from an important square or duty.",

  clearance:
    "Moves a piece away to open a line, square, or path for another piece.",

  interference:
    "Blocks the connection between a defending piece and what it protects.",

  hangingPiece:
    "A piece is undefended or insufficiently defended and can be won.",

  trappedPiece:
    "A piece has very few safe squares and may be impossible to save.",

  promotion:
    "A pawn reaches the final rank and becomes another piece, usually a queen.",

  backRankMate:
    "Checkmate on the back rank while the king is trapped by its own pawns.",

  smotheredMate:
    "A king is checkmated while surrounded by its own pieces.",

  arabianMate:
    "A rook and knight combine to trap and checkmate the king.",

  anastasiaMate:
    "A rook or queen mates along the edge while another piece restricts escape.",

  bodenMate:
    "Two bishops cross their diagonals to trap and checkmate the king.",

  hookMate:
    "A rook and knight coordinate near the king, often using a pawn as a blocker.",

  capturingDefender:
    "Remove a key defending piece so another target becomes vulnerable.",

  defensiveMove:
    "A move that prevents or neutralizes an immediate tactical threat.",

  mate:
    "A forcing sequence that ends with checkmate.",

  mateIn1:
    "There is a move that checkmates immediately.",

  mateIn2:
    "You can force checkmate within two of your moves.",

  mateIn3:
    "You can force checkmate within three of your moves.",

  mateIn4:
    "You can force checkmate within four of your moves.",

  mateIn5:
    "You can force checkmate within five of your moves.",
};

function formatTheme(
  theme: string
) {
  return theme
    .replace(
      /([A-Z])/g,
      " $1"
    )
    .replace(
      /^./,
      (character) =>
        character.toUpperCase()
    );
}

function getAccuracy(
  progress: Progress
) {
  const attempts =
    progress.correctMoves +
    progress.wrongMoves;

  if (
    attempts === 0
  ) {
    return 100;
  }

  return Math.round(
    (progress.correctMoves /
      attempts) *
      100
  );
}

function buildThemeInsights(
  progress: Progress
): ThemeInsight[] {
  return Object.entries(
    progress.themes
  )
    .filter(
      ([theme]) =>
        TRAINABLE_THEMES.has(
          theme
        )
    )
    .map(
      ([
        theme,
        stats,
      ]) => {
        const solved =
          Math.max(
            stats.solved,
            1
          );

        /*
         * "Struggle score"
         *
         * Mistakes count more heavily
         * than hints.
         */
        const score =
          (stats.wrongMoves *
            2 +
            stats.hintsUsed) /
          solved;

        /*
         * Beginner-friendly
         * performance number.
         *
         * 100 = very clean
         * lower = more mistakes/hints
         */
        const pressure =
          stats.wrongMoves *
            18 +
          stats.hintsUsed *
            8;

        const performance =
          Math.max(
            10,
            Math.min(
              100,
              Math.round(
                100 -
                  pressure /
                    solved
              )
            )
          );

        return {
          theme,

          solved:
            stats.solved,

          wrongMoves:
            stats.wrongMoves,

          hintsUsed:
            stats.hintsUsed,

          score,

          performance,
        };
      }
    )
    .sort(
      (
        first,
        second
      ) =>
        second.solved -
        first.solved
    );
}

function ThemeTooltip({
  theme,
}: {
  theme: string;
}) {
  const explanation =
    THEME_EXPLANATIONS[
      theme
    ];

  if (!explanation) {
    return (
      <span>
        {formatTheme(
          theme
        )}
      </span>
    );
  }

  return (
    <span className="group relative inline-flex">

      <button
        type="button"
        className="inline-flex items-center gap-1 border-b border-dotted border-black/20 text-left"
      >
        <span>
          {formatTheme(
            theme
          )}
        </span>

        <span className="text-[10px] text-[var(--tertiary)]">
          ⓘ
        </span>
      </button>

      <span
        role="tooltip"
        className="
          pointer-events-none
          absolute
          bottom-[calc(100%+10px)]
          left-1/2
          z-50
          w-[240px]
          -translate-x-1/2
          translate-y-1
          rounded-[10px]
          border
          border-black/[0.08]
          bg-[var(--surface)]
          px-3.5
          py-3
          text-left
          opacity-0
          shadow-[0_10px_30px_rgba(0,0,0,0.10)]
          transition
          duration-150
          group-hover:translate-y-0
          group-hover:opacity-100
          group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >

        <span className="block text-[12px] font-semibold text-[var(--text)]">

          {formatTheme(
            theme
          )}

        </span>

        <span className="mt-1 block text-[12px] leading-5 text-[var(--secondary)]">

          {explanation}

        </span>

      </span>

    </span>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value:
    | string
    | number;
}) {
  return (
    <div className="min-w-0">

      <div className="text-[12px] font-medium text-[var(--secondary)]">
        {label}
      </div>

      <div className="mt-1 text-[27px] font-semibold tracking-[-0.04em] tabular-nums">
        {value}
      </div>

    </div>
  );
}

export default function InsightsPage() {
  const [
    progress,
    setProgress,
  ] =
    useState<Progress>(
      DEFAULT_PROGRESS
    );

  const [
    loaded,
    setLoaded,
  ] =
    useState(false);

  useEffect(() => {
    try {
      const raw =
        window.localStorage.getItem(
          PROGRESS_KEY
        );

      if (raw) {
        const saved =
          JSON.parse(raw);

        setProgress({
          ...DEFAULT_PROGRESS,
          ...saved,

          themes:
            saved.themes ||
            {},
        });
      }
    } catch {
      // Ignore broken localStorage.
    }

    setLoaded(true);
  }, []);

  const accuracy =
    getAccuracy(
      progress
    );

  const themeInsights =
    useMemo(
      () =>
        buildThemeInsights(
          progress
        ),
      [progress]
    );

  const sufficientlyObserved =
    themeInsights.filter(
      (theme) =>
        theme.solved >= 2
    );

  const weakestTheme =
    sufficientlyObserved
      .slice()
      .sort(
        (
          first,
          second
        ) =>
          second.score -
          first.score
      )[0];

  const strongestTheme =
    sufficientlyObserved
      .slice()
      .sort(
        (
          first,
          second
        ) =>
          first.score -
          second.score
      )[0];

  const totalAttempts =
    progress.correctMoves +
    progress.wrongMoves;

  const cleanMoveRate =
    totalAttempts === 0
      ? 100
      : Math.round(
          (progress.correctMoves /
            totalAttempts) *
            100
        );

  const hasEnoughData =
    progress.solved >= 3;

  return (
    <main className="min-h-screen">

      {/* HEADER */}

      <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">

        <div className="mx-auto flex h-[56px] max-w-[1060px] items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-2.5"
          >

            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--button)] text-[15px] text-[var(--button-text)]">
              ♞
            </div>

            <div className="text-[16px] font-semibold tracking-[-0.025em]">
              ChessGrind
            </div>

          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="control text-[13px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Back to puzzles
            </Link>

            <ThemeToggle />
          </div>

        </div>

      </header>

      {/* CONTENT */}

      <div className="mx-auto max-w-[1060px] px-6 pb-20 pt-12">

        {/* HERO */}

        <section className="max-w-[680px]">

          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--secondary)]">
            Your training
          </div>

          <h1 className="mt-3 text-[48px] font-semibold leading-[1.02] tracking-[-0.055em]">
            Insights
          </h1>

          <p className="mt-4 max-w-[620px] text-[16px] leading-7 text-[var(--secondary)]">

            See where your tactical game is improving and where ChessGrind should challenge you next.

          </p>

        </section>

        {/* TOP STATS */}

        <section className="mt-10 grid grid-cols-2 gap-y-7 border-y border-[var(--line)] py-7 sm:grid-cols-4">

          <Stat
            label="Solved"
            value={
              loaded
                ? progress.solved
                : "—"
            }
          />

          <Stat
            label="Accuracy"
            value={
              loaded
                ? `${accuracy}%`
                : "—"
            }
          />

          <Stat
            label="Current streak"
            value={
              loaded
                ? progress.currentStreak
                : "—"
            }
          />

          <Stat
            label="Best streak"
            value={
              loaded
                ? progress.bestStreak
                : "—"
            }
          />

        </section>

        {/* RECOMMENDATION */}

        <section className="mt-12">

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">

              <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
                Training focus
              </div>

              {!loaded ? (

                <div className="mt-3 text-[20px] font-semibold">
                  Loading…
                </div>

              ) : !hasEnoughData ? (

                <>
                  <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">
                    Keep solving.
                  </h2>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">

                    Solve a few more puzzles and ChessGrind will start identifying your tactical weaknesses.

                  </p>
                </>

              ) : weakestTheme ? (

                <>
                  <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">
                    Practice{" "}
                    {formatTheme(
                      weakestTheme.theme
                    )}
                  </h2>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">

                    This motif is currently giving you the most trouble. Smart Training will prioritize it more often.

                  </p>

                  <div className="mt-5 inline-flex rounded-[9px] bg-[var(--accent-soft)] px-3 py-2 text-[13px] font-semibold text-[var(--accent)]">

                    {weakestTheme.performance}% performance

                  </div>

                </>

              ) : (

                <>
                  <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">
                    Still learning you.
                  </h2>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">

                    You need a little more history across multiple tactical themes before we recommend a specific focus.

                  </p>
                </>

              )}

            </div>

            <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">

              <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
                Strongest pattern
              </div>

              {strongestTheme ? (

                <>
                  <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">

                    {formatTheme(
                      strongestTheme.theme
                    )}

                  </h2>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">

                    You are solving this pattern more cleanly than the other motifs we have enough data for.

                  </p>

                  <div className="mt-5 inline-flex rounded-[9px] bg-black/[0.04] px-3 py-2 text-[13px] font-semibold">

                    {strongestTheme.performance}% performance

                  </div>

                </>

              ) : (

                <>
                  <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">
                    Not enough data yet.
                  </h2>

                  <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">

                    Once you have seen the same kinds of tactics a few times, your strengths will appear here.

                  </p>
                </>

              )}

            </div>

          </div>

        </section>

        {/* TACTICAL BREAKDOWN */}

        <section className="mt-14">

          <div className="flex items-end justify-between gap-6">

            <div>

              <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
                Tactical breakdown
              </div>

              <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.04em]">
                Patterns
              </h2>

            </div>

            <div className="hidden text-[12px] text-[var(--secondary)] sm:block">
              Performance considers mistakes and hints
            </div>

          </div>

          <div className="mt-6 border-t border-[var(--line)]">

            {themeInsights.length ===
            0 ? (

              <div className="py-10 text-[14px] leading-6 text-[var(--secondary)]">

                No tactical history yet. Solve some puzzles first and your breakdown will appear here.

              </div>

            ) : (

              themeInsights.map(
                (
                  insight
                ) => (

                  <div
                    key={
                      insight.theme
                    }
                    className="grid gap-4 border-b border-[var(--line)] py-5 sm:grid-cols-[200px_1fr_80px]"
                  >

                    {/* THEME */}

                    <div>

                      <div className="text-[14px] font-semibold">

                        <ThemeTooltip
                          theme={
                            insight.theme
                          }
                        />

                      </div>

                      <div className="mt-1 text-[11px] text-[var(--tertiary)]">

                        {insight.solved}{" "}
                        {insight.solved ===
                        1
                          ? "puzzle"
                          : "puzzles"}

                      </div>

                    </div>

                    {/* BAR */}

                    <div className="flex items-center">

                      <div className="h-[7px] w-full overflow-hidden rounded-full bg-black/[0.055]">

                        <div
                          className="h-full rounded-full bg-[var(--button)] transition-all duration-500"
                          style={{
                            width: `${insight.performance}%`,
                          }}
                        />

                      </div>

                    </div>

                    {/* VALUE */}

                    <div className="flex items-center justify-between sm:block sm:text-right">

                      <span className="text-[12px] text-[var(--secondary)] sm:hidden">
                        Performance
                      </span>

                      <span className="text-[15px] font-semibold tabular-nums">
                        {insight.performance}%
                      </span>

                    </div>

                  </div>

                )
              )

            )}

          </div>

        </section>

        {/* ACTIVITY */}

        <section className="mt-14">

          <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
            Practice history
          </div>

          <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.04em]">
            Activity
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">

            <div className="rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-5">

              <div className="text-[12px] text-[var(--secondary)]">
                Correct moves
              </div>

              <div className="mt-2 text-[24px] font-semibold tracking-[-0.035em] tabular-nums">
                {progress.correctMoves}
              </div>

            </div>

            <div className="rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-5">

              <div className="text-[12px] text-[var(--secondary)]">
                Wrong moves
              </div>

              <div className="mt-2 text-[24px] font-semibold tracking-[-0.035em] tabular-nums">
                {progress.wrongMoves}
              </div>

            </div>

            <div className="rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-5">

              <div className="text-[12px] text-[var(--secondary)]">
                Hints used
              </div>

              <div className="mt-2 text-[24px] font-semibold tracking-[-0.035em] tabular-nums">
                {progress.hintsUsed}
              </div>

            </div>

            <div className="rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-5">

              <div className="text-[12px] text-[var(--secondary)]">
                Skipped
              </div>

              <div className="mt-2 text-[24px] font-semibold tracking-[-0.035em] tabular-nums">
                {progress.skipped}
              </div>

            </div>

          </div>

          <div className="mt-4 text-[12px] text-[var(--secondary)]">

            Clean move rate:{" "}
            <span className="font-semibold text-[var(--text)]">
              {cleanMoveRate}%
            </span>

          </div>

        </section>

        {/* CTA */}

        <section className="mt-14 border-t border-[var(--line)] pt-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h3 className="text-[20px] font-semibold tracking-[-0.025em]">
                Ready for another one?
              </h3>

              <p className="mt-1 text-[13px] text-[var(--secondary)]">
                Smart Training will use these insights automatically.
              </p>

            </div>

            <Link
              href="/"
              className="control inline-flex min-h-[44px] items-center justify-center rounded-[11px] bg-[var(--button)] px-6 text-[14px] font-semibold text-[var(--button-text)]"
            >
              Continue training
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}
