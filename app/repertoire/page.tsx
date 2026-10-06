"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import AccountLink from "../account-link";
import CloudStatusBadge from "../cloud-status";
import { premiumPieces } from "../premium-pieces";
import ThemeToggle from "../theme-toggle";
import VisitorCounter from "../visitor-counter";
import CelebrationBurst from "../celebration-burst";
import {
  createRepertoire,
  loadRepertoires,
  removeRepertoire,
  renameRepertoire,
  upsertRepertoireMove,
  variationsFrom,
  type Repertoire,
  type RepertoireColor,
} from "@/lib/repertoire";

type Mode = "build" | "practice";
type LineStep = { fen: string; san: string };

const START_FEN = new Chess().fen();

function countPositions(repertoire: Repertoire) {
  return new Set(repertoire.moves.map((move) => move.fromFen)).size;
}

export default function RepertoirePage() {
  const [repertoires, setRepertoires] = useState<Repertoire[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("build");
  const [currentFen, setCurrentFen] = useState(START_FEN);
  const [history, setHistory] = useState<LineStep[]>([]);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [celebrationEvent, setCelebrationEvent] = useState(0);

  useEffect(() => {
    const stored = loadRepertoires();
    queueMicrotask(() => {
      setRepertoires(stored);
      setSelectedId(stored[0]?.id ?? null);
      setLoaded(true);
    });
  }, []);

  const selected = repertoires.find((item) => item.id === selectedId) ?? null;
  const game = useMemo(() => new Chess(currentFen), [currentFen]);
  const variations = selected ? variationsFrom(selected, currentFen) : [];
  const ownerTurn = selected
    ? game.turn() === (selected.color === "white" ? "w" : "b")
    : false;

  function resetLine(nextMode = mode) {
    setMode(nextMode);
    setCurrentFen(START_FEN);
    setHistory([]);
    setSelectedSquare(null);
    setMessage("");
  }

  function chooseRepertoire(id: string) {
    setSelectedId(id);
    setCurrentFen(START_FEN);
    setHistory([]);
    setSelectedSquare(null);
    setMessage("");
  }

  function addRepertoire(color: RepertoireColor) {
    const created = createRepertoire(repertoires, color);
    const next = loadRepertoires();
    setRepertoires(next);
    setSelectedId(created.id);
    resetLine("build");
  }

  function tryMove(from: string, to: string) {
    if (!selected) return false;
    if (mode === "practice" && !ownerTurn) return false;
    const copy = new Chess(currentFen);
    const piece = copy.get(from as Square);
    if (!piece) return false;
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
    const uci = `${move.from}${move.to}${move.promotion ?? ""}`;

    if (mode === "practice") {
      const expected = variations.find((item) => item.uci === uci);
      if (!expected) {
        setMessage("Not in your repertoire — try another move.");
        setSelectedSquare(null);
        return false;
      }
      setMessage("Correct. Keep going.");
    } else {
      const next = upsertRepertoireMove(repertoires, selected.id, {
        fromFen: currentFen,
        toFen: copy.fen(),
        uci,
        san: move.san,
      });
      setRepertoires(next);
      setMessage(
        variations.some((item) => item.uci === uci)
          ? "That branch is already saved."
          : "Move added to your repertoire."
      );
    }

    setHistory((line) => [...line, { fen: currentFen, san: move.san }]);
    setCurrentFen(copy.fen());
    setSelectedSquare(null);
    return true;
  }

  useEffect(() => {
    if (!selected || mode !== "practice") return;
    const practiceGame = new Chess(currentFen);
    const isOwnerTurn =
      practiceGame.turn() === (selected.color === "white" ? "w" : "b");
    const choices = variationsFrom(selected, currentFen);

    if (choices.length === 0) {
      queueMicrotask(() => {
        if (history.length > 0) {
          setMessage("Line complete — clean work.");
          setCelebrationEvent((event) => event + 1);
        } else {
          setMessage("Build at least one line before practicing.");
        }
      });
      return;
    }
    if (isOwnerTurn) {
      queueMicrotask(() => setMessage("Your move. Recall your repertoire."));
      return;
    }

    const timer = window.setTimeout(() => {
      const reply = choices[Math.floor(Math.random() * choices.length)];
      setHistory((line) => [...line, { fen: currentFen, san: reply.san }]);
      setCurrentFen(reply.toFen);
      setMessage(`${selected.color === "white" ? "Black" : "White"} played ${reply.san}. Your move.`);
    }, 520);
    return () => window.clearTimeout(timer);
  }, [currentFen, history.length, mode, selected]);

  function followVariation(move: Repertoire["moves"][number]) {
    setHistory((line) => [...line, { fen: currentFen, san: move.san }]);
    setCurrentFen(move.toFen);
    setSelectedSquare(null);
    setMessage("");
  }

  function goBack() {
    const previous = history.at(-1);
    if (!previous) return;
    setCurrentFen(previous.fen);
    setHistory((line) => line.slice(0, -1));
    setSelectedSquare(null);
    setMessage("");
  }

  const squareStyles: Record<string, React.CSSProperties> = {};
  if (selectedSquare) {
    squareStyles[selectedSquare] = {
      boxShadow: "inset 0 0 0 3px rgba(59,92,255,.78)",
    };
    for (const move of game.moves({
      square: selectedSquare as Square,
      verbose: true,
    })) {
      squareStyles[move.to] = move.captured
        ? { boxShadow: "inset 0 0 0 6px rgba(37,99,235,.88)" }
        : {
            backgroundImage:
              "radial-gradient(circle, #2563eb 0 13%, #93c5fd 14% 18%, transparent 19%)",
          };
    }
  }

  function squareClick(square: string) {
    if (!selected) return;
    const piece = game.get(square as Square);
    if (!selectedSquare) {
      if (piece?.color === game.turn()) setSelectedSquare(square);
      return;
    }
    if (piece?.color === game.turn()) {
      setSelectedSquare(square === selectedSquare ? null : square);
      return;
    }
    tryMove(selectedSquare, square);
  }

  return (
    <main className="min-h-screen">
      <CelebrationBurst
        eventId={celebrationEvent}
        title="Line conquered."
        detail="You recalled the full continuation without leaving your repertoire."
      />
      <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
        <div className="mx-auto flex h-[56px] max-w-[1180px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-[9px] bg-[var(--button)] text-[var(--button-text)]">♞</div>
            <div className="text-[16px] font-semibold tracking-[-0.025em]">ChessGrind</div>
          </Link>
          <nav className="flex items-center gap-5 text-[12px] font-semibold text-[var(--secondary)]">
            <VisitorCounter />
            <Link href="/train">Puzzles</Link>
            <Link href="/play">Play</Link>
            <Link href="/grindbook">Grindbook</Link>
            <AccountLink />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-[1180px] px-6 pb-20 pt-9">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              Pro lab · Preview
            </div>
            <h1 className="mt-2 text-[38px] font-semibold tracking-[-0.05em]">Repertoire Lab</h1>
            <p className="mt-2 max-w-[640px] text-[15px] leading-6 text-[var(--secondary)]">
              Stop guessing in the opening. Save your chosen responses once, then drill them until the moves become automatic.
            </p>
            <div className="mt-4"><CloudStatusBadge /></div>
          </div>
          <div className="inline-flex rounded-[12px] bg-black/[0.05] p-[3px]">
            {(["build", "practice"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => resetLine(item)}
                className={`control rounded-[9px] px-5 py-2 text-[12px] font-semibold capitalize ${mode === item ? "bg-[var(--surface)] shadow-sm" : "text-[var(--secondary)]"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {!loaded ? (
          <div className="py-28 text-center text-[var(--secondary)]">Loading your repertoire…</div>
        ) : repertoires.length === 0 ? (
          <section className="relative mt-10 overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--surface)] px-6 py-20 text-center shadow-[var(--shadow-soft)]">
            <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-96 -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.09] blur-3xl" />
            <div className="relative text-[48px]">♜</div>
            <h2 className="relative mt-4 text-[30px] font-semibold tracking-[-0.04em]">Build your first weapon.</h2>
            <p className="relative mx-auto mt-2 max-w-[500px] text-[14px] leading-6 text-[var(--secondary)]">
              Pick a side, play the moves on the board, and create as many opponent branches as you need.
            </p>
            <div className="relative mx-auto mt-6 grid max-w-[620px] gap-2 sm:grid-cols-3">
              {["Choose your responses", "Remember every branch", "Reach middlegames prepared"].map((benefit, index) => (
                <div key={benefit} className="rounded-[12px] border border-[var(--line)] bg-black/[0.025] px-3 py-3 text-[11px] font-semibold">
                  <span className="mr-2 font-mono text-[var(--accent)]">0{index + 1}</span>{benefit}
                </div>
              ))}
            </div>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={() => addRepertoire("white")} className="control rounded-[12px] bg-[var(--button)] px-6 py-3 text-[13px] font-semibold text-[var(--button-text)]">♙ Build for White</button>
              <button type="button" onClick={() => addRepertoire("black")} className="control rounded-[12px] border border-[var(--line-strong)] px-6 py-3 text-[13px] font-semibold">♟ Build for Black</button>
            </div>
          </section>
        ) : selected ? (
          <div className="mt-9 grid gap-5 lg:grid-cols-[220px_minmax(0,560px)_1fr] lg:items-start">
            <aside className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)]">
              <div className="px-2 pb-3 pt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--tertiary)]">Your repertoires</div>
              <div className="grid gap-1.5">
                {repertoires.map((item) => (
                  <button key={item.id} type="button" onClick={() => chooseRepertoire(item.id)} className={`control rounded-[11px] p-3 text-left ${item.id === selected.id ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "hover:bg-black/[0.035]"}`}>
                    <div className="text-[12px] font-semibold">{item.name}</div>
                    <div className="mt-1 text-[10px] opacity-65">{item.moves.length} moves · {item.color}</div>
                  </button>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[var(--line)] pt-3">
                <button type="button" onClick={() => addRepertoire("white")} className="control rounded-[9px] border border-[var(--line)] py-2 text-[10px] font-bold">+ White</button>
                <button type="button" onClick={() => addRepertoire("black")} className="control rounded-[9px] border border-[var(--line)] py-2 text-[10px] font-bold">+ Black</button>
              </div>
            </aside>

            <section>
              <div className="overflow-hidden border-[6px] border-white shadow-[var(--shadow-board)]">
                <Chessboard
                  options={{
                    pieces: premiumPieces,
                    position: currentFen,
                    boardOrientation: selected.color,
                    animationDurationInMs: 300,
                    darkSquareStyle: { backgroundColor: "var(--board-dark)" },
                    lightSquareStyle: { backgroundColor: "var(--board-light)" },
                    squareStyles,
                    canDragPiece: ({ square }) =>
                      Boolean(
                        square &&
                          game.get(square as Square)?.color === game.turn() &&
                          (mode === "build" || ownerTurn)
                      ),
                    onPieceDrag: ({ square }) => square && setSelectedSquare(square),
                    onSquareClick: ({ square }) => square && squareClick(square),
                    onPieceDrop: ({ sourceSquare, targetSquare }) =>
                      Boolean(sourceSquare && targetSquare && tryMove(sourceSquare, targetSquare)),
                  }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--secondary)]">
                <button type="button" onClick={goBack} disabled={history.length === 0} className="control rounded-[9px] border border-[var(--line)] px-3 py-2 font-semibold disabled:opacity-35">← Back one move</button>
                <button type="button" onClick={() => resetLine()} className="control px-2 py-2 font-semibold">Starting position</button>
              </div>
            </section>

            <aside className="rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">{mode === "build" ? "Line builder" : "Memory drill"}</div>
                  <input
                    key={selected.id}
                    defaultValue={selected.name}
                    onBlur={(event) => setRepertoires(renameRepertoire(repertoires, selected.id, event.target.value))}
                    className="mt-2 w-full bg-transparent text-[22px] font-semibold tracking-[-0.035em] outline-none"
                    aria-label="Repertoire name"
                  />
                </div>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-[10px] font-bold uppercase text-[var(--accent)]">{selected.color}</span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  ["Moves", selected.moves.length],
                  ["Positions", countPositions(selected)],
                  ["Branches", variations.length],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[11px] bg-black/[0.035] p-3">
                    <div className="text-[9px] font-bold uppercase tracking-[0.09em] text-[var(--tertiary)]">{label}</div>
                    <div className="mt-1 text-[18px] font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[13px] border border-[var(--line)] bg-black/[0.025] p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.11em] text-[var(--tertiary)]">Current line</div>
                <div className="mt-2 min-h-6 font-mono text-[12px] leading-6">
                  {history.length ? history.map((step) => step.san).join("  ") : "Starting position"}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.11em] text-[var(--tertiary)]">Saved continuations</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {variations.length ? variations.map((move) => (
                    <button key={move.id} type="button" onClick={() => followVariation(move)} className="control rounded-[9px] border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2 font-mono text-[12px] font-bold hover:border-[var(--accent)] hover:text-[var(--accent)]">{move.san}</button>
                  )) : <span className="text-[12px] text-[var(--tertiary)]">No continuation saved here yet.</span>}
                </div>
              </div>

              <div className={`mt-5 rounded-[12px] p-4 text-[12px] leading-5 ${message.includes("Not in") ? "bg-[var(--danger-soft)] text-[var(--danger)]" : "bg-[var(--accent-soft)] text-[var(--accent)]"}`}>
                {message || (mode === "build" ? `${ownerTurn ? "Your" : "Opponent"} move — play it on the board to save this branch.` : "ChessGrind will play the opponent side. Recall only your moves.")}
              </div>

              <button
                type="button"
                onClick={() => {
                  setRepertoires(removeRepertoire(repertoires, selected.id));
                  const remaining = repertoires.filter((item) => item.id !== selected.id);
                  setSelectedId(remaining[0]?.id ?? null);
                  resetLine("build");
                }}
                className="control mt-6 text-[10px] font-semibold text-[var(--tertiary)] hover:text-[var(--danger)]"
              >
                Delete repertoire
              </button>
            </aside>
          </div>
        ) : null}
      </div>
    </main>
  );
}
