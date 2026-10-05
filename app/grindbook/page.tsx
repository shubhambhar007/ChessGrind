"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import ThemeToggle from "../theme-toggle";
import VisitorCounter from "../visitor-counter";
import AccountLink from "../account-link";
import CloudStatusBadge from "../cloud-status";
import CelebrationBurst from "../celebration-burst";
import { premiumPieces } from "../premium-pieces";
import {
  formatDue,
  isDue,
  loadGrindbook,
  masteryLabel,
  removeFromGrindbook,
  reviewGrindbookCard,
  type GrindbookCard,
  type GrindbookRating,
} from "@/lib/grindbook";
import {
  EMPTY_GRINDBOOK_PROGRESS,
  bestReviewStreak,
  currentReviewStreak,
  loadGrindbookProgress,
  recentReviewDays,
  recordGrindbookReview,
  reviewDayKey,
  type GrindbookProgress,
} from "@/lib/grindbook-progress";

type View = "review" | "library";
type AnswerState = "idle" | "correct" | "wrong" | "revealed";

function formatTag(tag: string) {
  return tag
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
}

function sourceLabel(source: GrindbookCard["source"]) {
  if (source === "game") return "AI game";
  return formatTag(source);
}

function ReviewBoard({
  card,
  onRated,
}: {
  card: GrindbookCard;
  onRated: (rating: GrindbookRating) => void;
}) {
  const [game, setGame] = useState(() => new Chess(card.fen));
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<{
    from: string;
    to: string;
  } | null>(null);
  const [answer, setAnswer] = useState<AnswerState>("idle");

  const reviewingMove = Boolean(card.solutionUci);
  const playerTurn = card.orientation === "white" ? "w" : "b";

  function tryMove(from: string, to: string) {
    if (answer !== "idle" || !reviewingMove) return false;
    if (game.turn() !== playerTurn) return false;

    const piece = game.get(from as Square);
    if (!piece || piece.color !== playerTurn) return false;

    const copy = new Chess(game.fen());
    let move;

    try {
      move = copy.move({
        from,
        to,
        promotion:
          piece.type === "p" && (to[1] === "8" || to[1] === "1")
            ? "q"
            : undefined,
      });
    } catch {
      return false;
    }

    if (!move) return false;

    const attempted = `${move.from}${move.to}${move.promotion ?? ""}`;
    const expected = card.solutionUci?.toLowerCase();
    const correct = attempted.toLowerCase() === expected;

    setLastMove({ from: move.from, to: move.to });
    setSelectedSquare(null);
    setAnswer(correct ? "correct" : "wrong");

    if (correct) setGame(copy);
    return true;
  }

  function handleSquareClick(square: string) {
    if (answer !== "idle" || !reviewingMove) return;

    const piece = game.get(square as Square);
    const ownPiece = piece?.color === playerTurn;

    if (!selectedSquare) {
      if (ownPiece) setSelectedSquare(square);
      return;
    }

    if (square === selectedSquare) {
      setSelectedSquare(null);
      return;
    }

    if (ownPiece) {
      setSelectedSquare(square);
      return;
    }

    tryMove(selectedSquare, square);
  }

  function revealAnswer() {
    if (!card.solutionUci) {
      setAnswer("revealed");
      return;
    }

    const from = card.solutionUci.slice(0, 2);
    const to = card.solutionUci.slice(2, 4);
    const promotion = card.solutionUci[4];
    const copy = new Chess(card.fen);

    try {
      copy.move({ from, to, promotion });
      setGame(copy);
      setLastMove({ from, to });
    } catch {
      // Keep the original board if stored data is no longer valid.
    }

    setAnswer("revealed");
    setSelectedSquare(null);
  }

  const squareStyles: Record<string, React.CSSProperties> = {};

  if (selectedSquare) {
    squareStyles[selectedSquare] = {
      boxShadow: "inset 0 0 0 3px rgba(59, 92, 255, 0.72)",
    };

    for (const move of game.moves({
      square: selectedSquare as Square,
      verbose: true,
    })) {
      squareStyles[move.to] = move.captured
        ? {
            boxShadow:
              "inset 0 0 0 6px rgba(37, 99, 235, 0.88), inset 0 0 18px rgba(96, 165, 250, 0.34)",
          }
        : {
            backgroundImage:
              "radial-gradient(circle at center, #2563eb 0 13%, #93c5fd 14% 18%, transparent 19%)",
          };
    }
  }

  if (lastMove) {
    squareStyles[lastMove.from] = {
      ...squareStyles[lastMove.from],
      boxShadow: "inset 0 0 0 9999px rgba(59, 92, 255, 0.11)",
    };
    squareStyles[lastMove.to] = {
      ...squareStyles[lastMove.to],
      boxShadow: "inset 0 0 0 9999px rgba(59, 92, 255, 0.18)",
    };
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,560px)_1fr] lg:items-start">
      <section>
        <div className="overflow-hidden border-[6px] border-white shadow-[var(--shadow-board)]">
          <Chessboard
            options={{
              pieces: premiumPieces,
              showNotation: true,
              position: game.fen(),
              boardOrientation: card.orientation,
              animationDurationInMs: 320,
              darkSquareStyle: { backgroundColor: "var(--board-dark)" },
              lightSquareStyle: { backgroundColor: "var(--board-light)" },
              squareStyles,
              canDragPiece: ({ square }) => {
                if (!square || answer !== "idle" || !reviewingMove) return false;
                return game.get(square as Square)?.color === playerTurn;
              },
              onPieceDrag: ({ square }) => {
                if (square) setSelectedSquare(square);
              },
              onSquareClick: ({ square }) => {
                if (square) handleSquareClick(square);
              },
              onPieceDrop: ({ sourceSquare, targetSquare }) => {
                if (!sourceSquare || !targetSquare) return false;
                return tryMove(sourceSquare, targetSquare);
              },
            }}
          />
        </div>
      </section>

      <aside className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[11px] font-semibold text-[var(--accent)]">
            {sourceLabel(card.source)}
          </span>
          {card.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/[0.045] px-3 py-1 text-[11px] font-medium text-[var(--secondary)]"
            >
              {formatTag(tag)}
            </span>
          ))}
        </div>

        <h2 className="mt-5 text-[28px] font-semibold tracking-[-0.035em]">
          {card.title}
        </h2>
        <p className="mt-3 text-[15px] leading-6 text-[var(--secondary)]">
          {card.prompt}
        </p>

        {answer === "idle" ? (
          <div className="mt-7">
            <p className="text-[13px] text-[var(--secondary)]">
              {reviewingMove
                ? "Play the move you want to remember."
                : "Think through the position, then reveal your saved note."}
            </p>
            <button
              type="button"
              onClick={revealAnswer}
              className="control mt-4 min-h-[44px] rounded-[11px] border border-[var(--line-strong)] bg-[var(--surface)] px-5 text-[14px] font-semibold"
            >
              Reveal answer
            </button>
          </div>
        ) : (
          <div className="appear mt-7 border-t border-[var(--line)] pt-5">
            <div
              className={[
                "text-[12px] font-semibold uppercase tracking-[0.12em]",
                answer === "correct"
                  ? "text-[var(--success)]"
                  : "text-[var(--danger)]",
              ].join(" ")}
            >
              {answer === "correct"
                ? "You remembered it"
                : answer === "wrong"
                  ? "Not quite — lock it in"
                  : "Answer revealed"}
            </div>

            {card.solutionUci && (
              <div className="mt-3 font-mono text-[20px] font-semibold">
                {card.solutionUci.slice(0, 2)} → {card.solutionUci.slice(2, 4)}
              </div>
            )}

            {card.explanation && (
              <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">
                {card.explanation}
              </p>
            )}

            <div className="mt-6 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => onRated("again")}
                className="control rounded-[10px] border border-[var(--danger-strong)] bg-[var(--danger-soft)] px-3 py-3 text-[12px] font-semibold text-[var(--danger)]"
              >
                Again
                <span className="mt-1 block text-[10px] font-normal">10 min</span>
              </button>
              <button
                type="button"
                onClick={() => onRated("hard")}
                className="control rounded-[10px] border border-[var(--line-strong)] px-3 py-3 text-[12px] font-semibold"
              >
                Hard
                <span className="mt-1 block text-[10px] font-normal text-[var(--secondary)]">1+ day</span>
              </button>
              <button
                type="button"
                onClick={() => onRated("good")}
                className="control rounded-[10px] bg-[var(--button)] px-3 py-3 text-[12px] font-semibold text-[var(--button-text)]"
              >
                Got it
                <span className="mt-1 block text-[10px] font-normal opacity-70">1–7 days</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}

export default function GrindbookPage() {
  const [cards, setCards] = useState<GrindbookCard[]>([]);
  const [reviewProgress, setReviewProgress] =
    useState<GrindbookProgress>(EMPTY_GRINDBOOK_PROGRESS);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<View>("review");
  const [celebrationEvent, setCelebrationEvent] = useState(0);

  useEffect(() => {
    const storedCards = loadGrindbook();
    const storedProgress = loadGrindbookProgress();

    queueMicrotask(() => {
      setCards(storedCards);
      setReviewProgress(storedProgress);
      setLoaded(true);
    });
  }, []);

  const dueCards = useMemo(
    () =>
      cards
        .filter((card) => isDue(card))
        .sort(
          (a, b) =>
            new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime() ||
            b.lapses - a.lapses
        ),
    [cards]
  );
  const mastered = cards.filter((card) => card.repetitions >= 4).length;
  const currentCard = dueCards[0];
  const reviewsToday = reviewProgress.reviewedByDay[reviewDayKey()] ?? 0;
  const dailyTarget = Math.min(5, reviewsToday + dueCards.length);
  const goalComplete = dailyTarget === 0 || reviewsToday >= dailyTarget;
  const displayedReviews = Math.min(reviewsToday, dailyTarget);
  const goalPercent =
    dailyTarget === 0
      ? 100
      : Math.min(100, Math.round((reviewsToday / dailyTarget) * 100));
  const currentStreak = currentReviewStreak(reviewProgress);
  const bestStreak = bestReviewStreak(reviewProgress);
  const reviewWeek = recentReviewDays(reviewProgress);

  function rateCurrent(rating: GrindbookRating) {
    if (!currentCard) return;
    const clearsQueue = dueCards.length === 1;
    setCards(reviewGrindbookCard(currentCard.id, rating));
    setReviewProgress(recordGrindbookReview());
    if (clearsQueue) setCelebrationEvent((event) => event + 1);
  }

  function removeCard(id: string) {
    setCards(removeFromGrindbook(id));
  }

  return (
    <main className="min-h-screen">
      <CelebrationBurst
        eventId={celebrationEvent}
        title="Daily queue cleared."
        detail="You showed up, reviewed every due position, and protected your streak."
      />
      <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
        <div className="mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--button)] text-[15px] text-[var(--button-text)]">
              ♞
            </div>
            <div className="text-[16px] font-semibold tracking-[-0.025em]">
              ChessGrind
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-[12px] font-semibold text-[var(--secondary)]">
            <VisitorCounter />
            <Link href="/">Puzzles</Link>
            <Link href="/play">Play</Link>
            <Link href="/repertoire">Repertoire</Link>
            <Link href="/insights">Insights</Link>
            <AccountLink />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1120px] px-6 pb-20 pt-9">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Your private memory
            </div>
            <h1 className="mt-2 text-[38px] font-semibold tracking-[-0.045em]">
              My Grindbook
            </h1>
            <p className="mt-2 max-w-[620px] text-[15px] leading-6 text-[var(--secondary)]">
              Save the positions that matter. ChessGrind brings them back before
              you forget them, on every device.
            </p>
            <div className="mt-4">
              <CloudStatusBadge />
            </div>
          </div>

          <div className="inline-flex rounded-[12px] bg-black/[0.045] p-[3px]">
            {(["review", "library"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setView(item)}
                className={[
                  "control rounded-[9px] px-5 py-2 text-[12px] font-semibold capitalize",
                  view === item
                    ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                    : "text-[var(--secondary)]",
                ].join(" ")}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <section className="mt-8 grid gap-3 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[var(--accent)] opacity-[0.09] blur-3xl" />
            <div className="relative flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_9px_var(--accent)]" />
                  Daily queue
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-[42px] font-semibold tracking-[-0.055em]">
                    {loaded ? displayedReviews : "—"}
                  </span>
                  <span className="text-[16px] font-medium text-[var(--tertiary)]">
                    / {loaded ? dailyTarget : "—"}
                  </span>
                </div>
                <p className="mt-1 text-[12px] text-[var(--secondary)]">
                  {goalComplete
                    ? dueCards.length > 0
                      ? `Daily target hit. ${dueCards.length} bonus ${dueCards.length === 1 ? "position" : "positions"} still available.`
                      : reviewsToday > 0
                      ? "Today’s memory work is locked in."
                      : "No positions are due today."
                    : `${dailyTarget - reviewsToday} ${dailyTarget - reviewsToday === 1 ? "position" : "positions"} left in today’s set.`}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 text-right">
                {[
                  ["Due", dueCards.length],
                  ["Saved", cards.length],
                  ["Mastered", mastered],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--tertiary)]">
                      {label}
                    </div>
                    <div className="mt-1 text-[20px] font-semibold">
                      {loaded ? value : "—"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-black/[0.07]">
              <div
                className="h-full rounded-full bg-[var(--accent)] shadow-[0_0_16px_var(--accent)] transition-[width] duration-500"
                style={{ width: `${loaded ? goalPercent : 0}%` }}
              />
            </div>
            <div className="relative mt-2 flex justify-between text-[9px] font-semibold uppercase tracking-[0.09em] text-[var(--tertiary)]">
              <span>{reviewProgress.totalReviews} lifetime reviews</span>
              <span>{goalPercent}%</span>
            </div>
          </div>

          <div className="rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--secondary)]">
                  Review streak
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[30px]">🔥</span>
                  <span className="text-[38px] font-semibold tracking-[-0.05em]">
                    {loaded ? currentStreak : "—"}
                  </span>
                  <span className="text-[12px] text-[var(--secondary)]">
                    {currentStreak === 1 ? "day" : "days"}
                  </span>
                </div>
              </div>
              <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-[10px] font-bold text-[var(--accent)]">
                BEST {bestStreak}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-2">
              {reviewWeek.map((day) => (
                <div key={day.day} className="text-center">
                  <div
                    title={`${day.count} ${day.count === 1 ? "review" : "reviews"}`}
                    className={[
                      "mx-auto grid h-7 w-7 place-items-center rounded-[8px] border text-[9px] font-bold",
                      day.count > 0
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_5px_14px_rgba(59,92,255,0.28)]"
                        : day.isToday
                          ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                          : "border-[var(--line)] text-[var(--tertiary)]",
                    ].join(" ")}
                  >
                    {day.count > 0 ? day.count : "·"}
                  </div>
                  <div className="mt-1.5 text-[9px] font-semibold text-[var(--tertiary)]">
                    {day.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {view === "review" && (
          <section className="mt-9">
            {!loaded ? (
              <div className="py-20 text-center text-[var(--secondary)]">
                Loading your Grindbook…
              </div>
            ) : currentCard ? (
              <>
                <div className="mb-4 flex items-center justify-between text-[12px] text-[var(--secondary)]">
                  <span>
                    {reviewsToday >= dailyTarget
                      ? "Bonus review"
                      : `Daily set · ${reviewsToday + 1} of ${dailyTarget}`}
                  </span>
                  <span>{dueCards.length} due</span>
                </div>
                <ReviewBoard
                  key={currentCard.id}
                  card={currentCard}
                  onRated={rateCurrent}
                />
              </>
            ) : cards.length > 0 ? (
              <div className="rounded-[22px] border border-[var(--line)] bg-[var(--surface)] px-6 py-20 text-center shadow-[var(--shadow-soft)]">
                <div className="text-[42px]">{reviewsToday > 0 ? "🔥" : "✓"}</div>
                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.035em]">
                  {reviewsToday > 0
                    ? "Daily grind complete."
                    : "You’re caught up."}
                </h2>
                <p className="mt-2 text-[14px] text-[var(--secondary)]">
                  {reviewsToday > 0
                    ? `${reviewsToday} ${reviewsToday === 1 ? "position" : "positions"} reviewed today. Come back tomorrow to keep the streak alive.`
                    : "Nothing else is due right now. Save useful positions as you train and play."}
                </p>
                <Link
                  href="/"
                  className="control mt-6 inline-flex rounded-[11px] bg-[var(--button)] px-6 py-3 text-[13px] font-semibold text-[var(--button-text)]"
                >
                  Train puzzles
                </Link>
              </div>
            ) : (
              <div className="rounded-[22px] border border-[var(--line)] bg-[var(--surface)] px-6 py-20 text-center shadow-[var(--shadow-soft)]">
                <div className="text-[42px]">♙</div>
                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.035em]">
                  Your Grindbook is empty.
                </h2>
                <p className="mx-auto mt-2 max-w-[520px] text-[14px] leading-6 text-[var(--secondary)]">
                  Save a puzzle or a position from an AI game. It will appear
                  here immediately for spaced review.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Link
                    href="/"
                    className="control rounded-[11px] bg-[var(--button)] px-6 py-3 text-[13px] font-semibold text-[var(--button-text)]"
                  >
                    Find a puzzle
                  </Link>
                  <Link
                    href="/play"
                    className="control rounded-[11px] border border-[var(--line-strong)] px-6 py-3 text-[13px] font-semibold"
                  >
                    Play AI
                  </Link>
                </div>
              </div>
            )}
          </section>
        )}

        {view === "library" && (
          <section className="mt-9">
            {cards.length === 0 ? (
              <div className="py-20 text-center text-[var(--secondary)]">
                No saved positions yet.
              </div>
            ) : (
              <div className="grid gap-3">
                {cards.map((card) => (
                  <article
                    key={card.id}
                    className="flex flex-wrap items-center justify-between gap-4 rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-[15px] font-semibold">{card.title}</h2>
                        <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--accent)]">
                          {masteryLabel(card)}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-1 text-[13px] text-[var(--secondary)]">
                        {card.prompt}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-[var(--tertiary)]">
                        <span>{sourceLabel(card.source)}</span>
                        <span>•</span>
                        <span>{formatDue(card)}</span>
                        {card.tags.slice(0, 3).map((tag) => (
                          <span key={tag}>#{tag}</span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeCard(card.id)}
                      className="control rounded-[9px] border border-[var(--line)] px-3 py-2 text-[11px] font-semibold text-[var(--secondary)] hover:text-[var(--danger)]"
                    >
                      Remove
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
