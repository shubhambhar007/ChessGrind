"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import { premiumPieces } from "../premium-pieces";
import { applyLegalMoveMarkers } from "@/lib/chessboard-markers";
import type { DailyPuzzle } from "@/lib/daily-puzzle";
import { recordFunnelEvent } from "@/lib/funnel";

type Status = "playing" | "wrong" | "opponent" | "solved";

function labelTheme(theme: string) {
  return theme
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes ? `${minutes}:` : ""}${minutes ? String(seconds % 60).padStart(2, "0") : `${seconds}s`}`;
}

function campaignMetadata() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    campaign: params.get("utm_campaign") ?? undefined,
  };
}

export default function DailyPuzzlePlayer({
  puzzle,
  date,
  dailyNumber,
}: {
  puzzle: DailyPuzzle;
  date: string;
  dailyNumber: number;
}) {
  const [game, setGame] = useState(() => new Chess(puzzle.fen));
  const [moveIndex, setMoveIndex] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [wrongMove, setWrongMove] = useState<{ from: string; to: string } | null>(null);
  const [status, setStatus] = useState<Status>("playing");
  const [attempts, setAttempts] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const [shareState, setShareState] = useState("Share result");
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const startedAt = useRef(0);
  const orientation = puzzle.fen.split(" ")[1] === "w" ? "white" : "black";
  const displayDate = new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00.000Z`));

  useEffect(() => {
    if (startedAt.current === 0) startedAt.current = performance.now();
    recordFunnelEvent("daily_puzzle_viewed", { oncePerSession: true, metadata: campaignMetadata() });
    const timer = window.setInterval(() => {
      if (status === "playing" || status === "opponent") {
        setSeconds(Math.max(0, Math.floor((performance.now() - startedAt.current) / 1000)));
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [status]);

  const squareStyles = useMemo(() => {
    const styles: Record<string, CSSProperties> = {};
    if (wrongMove) {
      styles[wrongMove.from] = { boxShadow: "inset 0 0 0 9999px rgba(217, 45, 32, .2)" };
      styles[wrongMove.to] = { boxShadow: "inset 0 0 0 9999px rgba(217, 45, 32, .34)" };
    }
    if (selectedSquare && status === "playing") {
      styles[selectedSquare] = { boxShadow: "inset 0 0 0 3px rgba(59, 92, 255, .82)", cursor: "grab" };
      applyLegalMoveMarkers(styles, game.moves({ square: selectedSquare as Square, verbose: true }));
    }
    return styles;
  }, [game, selectedSquare, status, wrongMove]);

  function isOwnPiece(square: string) {
    return game.get(square as Square)?.color === game.turn();
  }

  function playMoveOn(copy: Chess, uci: string) {
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    copy.move({ from, to, promotion: uci[4] || "q" });
  }

  function finish(nextGame: Chess, finalMoveIndex: number) {
    if (finalMoveIndex >= puzzle.moves.length) {
      setGame(nextGame);
      setStatus("solved");
      setSelectedSquare(null);
      recordFunnelEvent("daily_puzzle_solved", {
        metadata: { ...campaignMetadata(), puzzle: puzzle.id, attempts: String(attempts + 1) },
      });
      return;
    }

    setStatus("opponent");
    window.setTimeout(() => {
      const responseGame = new Chess(nextGame.fen());
      playMoveOn(responseGame, puzzle.moves[finalMoveIndex]);
      const afterReply = finalMoveIndex + 1;
      setGame(responseGame);
      setMoveIndex(afterReply);
      if (afterReply >= puzzle.moves.length) {
        setStatus("solved");
        recordFunnelEvent("daily_puzzle_solved", {
          metadata: { ...campaignMetadata(), puzzle: puzzle.id, attempts: String(attempts + 1) },
        });
      } else {
        setStatus("playing");
      }
    }, 520);
  }

  function attemptMove(sourceSquare: string, targetSquare: string) {
    if (status !== "playing" || !isOwnPiece(sourceSquare)) return false;
    const legalMove = game.moves({ square: sourceSquare as Square, verbose: true }).find((move) => move.to === targetSquare);
    if (!legalMove) return false;

    if (moveIndex === 0 && attempts === 0) {
      recordFunnelEvent("daily_puzzle_started", { metadata: campaignMetadata() });
    }
    setAttempts((value) => value + 1);
    const attempted = `${sourceSquare}${targetSquare}${legalMove.promotion ?? ""}`;
    const expected = puzzle.moves[moveIndex];
    if (attempted !== expected) {
      setWrongMove({ from: sourceSquare, to: targetSquare });
      setSelectedSquare(null);
      setStatus("wrong");
      window.setTimeout(() => {
        setWrongMove(null);
        setStatus("playing");
      }, 720);
      return false;
    }

    const nextGame = new Chess(game.fen());
    playMoveOn(nextGame, expected);
    const nextMoveIndex = moveIndex + 1;
    setMoveIndex(nextMoveIndex);
    setSelectedSquare(null);
    finish(nextGame, nextMoveIndex);
    return true;
  }

  function handleSquareClick(square: string) {
    if (status !== "playing") return;
    if (!selectedSquare) {
      if (isOwnPiece(square)) setSelectedSquare(square);
      return;
    }
    if (square === selectedSquare) return setSelectedSquare(null);
    if (isOwnPiece(square)) return setSelectedSquare(square);
    attemptMove(selectedSquare, square);
  }

  const resultText = `ChessGrind Daily #${dailyNumber} ✅\n${attempts} attempt${attempts === 1 ? "" : "s"} · ${formatTime(seconds)}\n\nCan you find today's move?`;
  const shareUrl = `https://chessgrind.fyi/daily?date=${date}&utm_source=player_share&utm_medium=social&utm_campaign=daily_${date}`;

  async function shareResult() {
    recordFunnelEvent("daily_share_clicked", { metadata: { ...campaignMetadata(), puzzle: puzzle.id } });
    try {
      if (navigator.share) {
        await navigator.share({ title: `ChessGrind Daily #${dailyNumber}`, text: resultText, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(`${resultText}\n${shareUrl}`);
        setShareState("Copied");
        window.setTimeout(() => setShareState("Share result"), 1800);
      }
    } catch {
      // Cancelling the native share sheet needs no error UI.
    }
  }

  function downloadCard() {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 1200;
    const context = canvas.getContext("2d");
    if (!context) return;
    const gradient = context.createLinearGradient(0, 0, 1200, 1200);
    gradient.addColorStop(0, "#0b1220");
    gradient.addColorStop(1, "#101b31");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1200, 1200);
    context.strokeStyle = "#7895ff";
    context.lineWidth = 3;
    context.strokeRect(72, 72, 1056, 1056);
    context.fillStyle = "#7895ff";
    context.font = "700 30px ui-monospace, monospace";
    context.fillText("CHESSGRIND / DAILY", 120, 160);
    context.fillStyle = "#f4f7fc";
    context.font = "700 94px system-ui, sans-serif";
    context.fillText(`Puzzle #${dailyNumber}`, 120, 350);
    context.font = "700 180px system-ui, sans-serif";
    context.fillText("SOLVED", 112, 590);
    context.fillStyle = "#aab5c9";
    context.font = "500 42px system-ui, sans-serif";
    context.fillText(`${attempts} attempt${attempts === 1 ? "" : "s"}  ·  ${formatTime(seconds)}`, 120, 715);
    context.fillText(displayDate, 120, 785);
    context.fillStyle = "#7895ff";
    context.font = "700 34px system-ui, sans-serif";
    context.fillText("chessgrind.fyi/daily", 120, 1030);
    const link = document.createElement("a");
    link.download = `chessgrind-daily-${date}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    recordFunnelEvent("daily_card_downloaded", { metadata: { puzzle: puzzle.id } });
  }

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmailState("loading");
    try {
      const response = await fetch("/api/daily/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, signupSource: "daily_result", ...campaignMetadata() }),
      });
      if (!response.ok) throw new Error("subscribe failed");
      setEmailState("done");
      recordFunnelEvent("daily_email_submitted", { metadata: campaignMetadata() });
    } catch {
      setEmailState("error");
    }
  }

  return (
    <div className="cg-daily-wrap" data-testid="daily-app" data-status={status}>
      <section className="cg-daily-intro">
        <div><span>DAILY / {String(dailyNumber).padStart(3, "0")}</span><h1>One position.<br />No excuses.</h1></div>
        <div><p>{displayDate}</p><strong>{orientation === "white" ? "White" : "Black"} to move</strong><small>{puzzle.difficulty} · {puzzle.rating}</small></div>
      </section>

      <section className="cg-daily-game">
        <div className={`cg-daily-board ${status === "wrong" ? "wrong-shake" : ""}`} data-testid="daily-board">
          <Chessboard options={{
            pieces: premiumPieces,
            position: game.fen(),
            boardOrientation: orientation,
            animationDurationInMs: 280,
            darkSquareStyle: { backgroundColor: "var(--board-dark)" },
            lightSquareStyle: { backgroundColor: "var(--board-light)" },
            squareStyles,
            canDragPiece: ({ square }) => Boolean(square && status === "playing" && isOwnPiece(square)),
            onPieceDrag: ({ square }) => { if (square && status === "playing" && isOwnPiece(square)) setSelectedSquare(square); },
            onSquareClick: ({ square }) => { if (square) handleSquareClick(square); },
            onPieceDrop: ({ sourceSquare, targetSquare }) => Boolean(sourceSquare && targetSquare && attemptMove(sourceSquare, targetSquare)),
          }} />
        </div>

        <aside className="cg-daily-panel">
          <div className="cg-daily-panel-kicker"><span>{status === "solved" ? "PATTERN FOUND" : "TODAY'S POSITION"}</span><strong>{formatTime(seconds)}</strong></div>
          {status === "solved" ? (
            <div className="cg-daily-result">
              <span aria-hidden="true">✓</span>
              <h2>Clean work.</h2>
              <p>Puzzle #{dailyNumber} solved in {formatTime(seconds)} with {attempts} attempt{attempts === 1 ? "" : "s"}.</p>
              <div><button type="button" onClick={shareResult}>{shareState}</button><button type="button" onClick={downloadCard}>Download card</button></div>
              <form onSubmit={subscribe}>
                <label htmlFor="daily-email">Get tomorrow&apos;s puzzle link</label>
                {emailState === "done" ? <p>You&apos;re on the daily list. See you tomorrow.</p> : <div><input id="daily-email" type="email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit" disabled={emailState === "loading"}>{emailState === "loading" ? "Joining…" : "Join free"}</button></div>}
                {emailState === "error" && <small>Could not save that email. Please try again.</small>}
              </form>
              <Link href="/train">Keep going with 6,000 free puzzles</Link>
            </div>
          ) : (
            <div className="cg-daily-challenge">
              <h2>Find the strongest move.</h2>
              <p>{status === "wrong" ? "Legal, but not the idea. Look again." : status === "opponent" ? "Opponent is replying…" : "Select one of your pieces to reveal every legal destination."}</p>
              <dl><div><dt>Attempts</dt><dd>{attempts}</dd></div><div><dt>Line</dt><dd>{Math.ceil(puzzle.moves.length / 2)} move{puzzle.moves.length > 2 ? "s" : ""}</dd></div></dl>
              <button type="button" onClick={() => setHintVisible((value) => !value)}>{hintVisible ? "Hide hint" : "Need a hint?"}</button>
              {hintVisible && <div className="cg-daily-hint"><span>LOOK FOR</span><strong>{labelTheme(puzzle.themes[0] ?? "forcing move")}</strong><p>The first move starts on {puzzle.moves[moveIndex]?.slice(0, 2)}.</p></div>}
            </div>
          )}
        </aside>
      </section>
      <section className="cg-daily-proof"><span>ORIGINAL POSITION</span><span>ENGINE VERIFIED</span><span>NO EXTERNAL ACCOUNT</span><span>NEW PUZZLE DAILY</span></section>
    </div>
  );
}
