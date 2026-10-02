"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import ThemeToggle from "../theme-toggle";
import VisitorCounter from "../visitor-counter";
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
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<View>("review");

  useEffect(() => {
    const storedCards = loadGrindbook();

    queueMicrotask(() => {
      setCards(storedCards);
      setLoaded(true);
    });
  }, []);

  const dueCards = useMemo(
    () => cards.filter((card) => isDue(card)),
    [cards]
  );
  const mastered = cards.filter((card) => card.repetitions >= 4).length;
  const currentCard = dueCards[0];

  function rateCurrent(rating: GrindbookRating) {
    if (!currentCard) return;
    setCards(reviewGrindbookCard(currentCard.id, rating));
  }

  function removeCard(id: string) {
    setCards(removeFromGrindbook(id));
  }

  return (
    <main className="min-h-screen">
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
            <Link href="/insights">Insights</Link>
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
              you forget them—all on this device.
            </p>
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

        <section className="mt-8 grid grid-cols-3 gap-3">
          {[
            ["Due today", loaded ? dueCards.length : "—"],
            ["Saved", loaded ? cards.length : "—"],
            ["Mastered", loaded ? mastered : "—"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[var(--secondary)]">
                {label}
              </div>
              <div className="mt-2 text-[28px] font-semibold">{value}</div>
            </div>
          ))}
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
                  <span>Next position</span>
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
                <div className="text-[42px]">✓</div>
                <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.035em]">
                  You’re caught up.
                </h2>
                <p className="mt-2 text-[14px] text-[var(--secondary)]">
                  Nothing else is due right now. Save useful positions as you
                  train and play.
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
