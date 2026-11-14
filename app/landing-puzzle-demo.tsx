"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import { premiumPieces } from "./premium-pieces";
import { applyLegalMoveMarkers } from "@/lib/chessboard-markers";
import { recordFunnelEvent } from "@/lib/funnel";

const DEMO_PUZZLES = [
  {
    id: "CG-0036",
    fen: "r1b1rk2/1p1n1q1p/4B1p1/P1P5/1P2pQ2/B3P3/5PPP/5RK1 w - - 11 25",
    move: "f4f7",
    label: "Mate in 1",
    hint: "Checks first. Can the queen end it immediately?",
  },
  {
    id: "CG-0040",
    fen: "r3k2r/p3pp1p/2pp2p1/8/4P1b1/2Q1q3/P1P1B1PP/RN2K2R b kq - 11 22",
    move: "e3e2",
    label: "Mate in 1",
    hint: "The white king has almost no room left.",
  },
  {
    id: "CG-0012",
    fen: "8/6R1/1p2p2k/1P1b2Rp/7P/p5P1/r7/5K2 w - - 0 51",
    move: "g5g6",
    label: "Mate in 1",
    hint: "One rook can seal every escape square.",
  },
] as const;

type DemoStatus = "playing" | "wrong" | "solved";

export default function LandingPuzzleDemo() {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [game, setGame] = useState(() => new Chess(DEMO_PUZZLES[0].fen));
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [wrongMove, setWrongMove] = useState<{ from: string; to: string } | null>(null);
  const [status, setStatus] = useState<DemoStatus>("playing");
  const [showPremiumPrompt, setShowPremiumPrompt] = useState(false);

  const puzzle = DEMO_PUZZLES[puzzleIndex];
  const orientation = game.turn() === "w" ? "white" : "black";

  const squareStyles = useMemo(() => {
    const styles: Record<string, CSSProperties> = {};

    if (wrongMove) {
      styles[wrongMove.from] = {
        boxShadow: "inset 0 0 0 9999px rgba(217, 45, 32, 0.18)",
      };
      styles[wrongMove.to] = {
        boxShadow: "inset 0 0 0 9999px rgba(217, 45, 32, 0.3)",
      };
    }

    if (selectedSquare && status === "playing") {
      styles[selectedSquare] = {
        boxShadow: "inset 0 0 0 3px rgba(59, 92, 255, 0.82)",
        cursor: "grab",
      };
      applyLegalMoveMarkers(
        styles,
        game.moves({ square: selectedSquare as Square, verbose: true })
      );
    }

    return styles;
  }, [game, selectedSquare, status, wrongMove]);

  function isOwnPiece(square: string) {
    const piece = game.get(square as Square);
    return piece?.color === game.turn();
  }

  function loadPuzzle(index: number) {
    setPuzzleIndex(index);
    setGame(new Chess(DEMO_PUZZLES[index].fen));
    setSelectedSquare(null);
    setWrongMove(null);
    setStatus("playing");
  }

  function attemptMove(sourceSquare: string, targetSquare: string) {
    if (status !== "playing" || !isOwnPiece(sourceSquare)) return false;

    const legalMove = game
      .moves({ square: sourceSquare as Square, verbose: true })
      .find((move) => move.to === targetSquare);
    if (!legalMove) return false;

    const attemptedMove = `${sourceSquare}${targetSquare}${legalMove.promotion ?? ""}`;
    if (attemptedMove !== puzzle.move) {
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
    nextGame.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: legalMove.promotion,
    });
    setGame(nextGame);
    setSelectedSquare(null);
    setStatus("solved");

    window.setTimeout(() => {
      if (puzzleIndex === DEMO_PUZZLES.length - 1) {
        recordFunnelEvent("premium_prompt_viewed");
        setShowPremiumPrompt(true);
      } else {
        loadPuzzle(puzzleIndex + 1);
      }
    }, 850);
    return true;
  }

  function handleSquareClick(square: string) {
    if (status !== "playing") return;
    if (!selectedSquare) {
      if (isOwnPiece(square)) setSelectedSquare(square);
      return;
    }
    if (square === selectedSquare) {
      setSelectedSquare(null);
      return;
    }
    if (isOwnPiece(square)) {
      setSelectedSquare(square);
      return;
    }
    attemptMove(selectedSquare, square);
  }

  function restartDemo() {
    setShowPremiumPrompt(false);
    loadPuzzle(0);
  }

  return (
    <div className="cg-landing-puzzle-demo">
      <div className="cg-landing-puzzle-topline">
        <span>TRY IT NOW</span>
        <strong>{puzzleIndex + 1} / 3</strong>
      </div>
      <div className="cg-landing-puzzle-heading">
        <div>
          <small>{orientation === "white" ? "White" : "Black"} to move</small>
          <h2>{puzzle.label}</h2>
        </div>
        <p>{status === "solved" ? "Clean. Pattern found." : status === "wrong" ? "Not quite—try another move." : puzzle.hint}</p>
      </div>

      <div className={`cg-landing-puzzle-board ${status === "wrong" ? "wrong-shake" : ""}`}>
        <Chessboard
          options={{
            pieces: premiumPieces,
            position: game.fen(),
            boardOrientation: orientation,
            showNotation: false,
            animationDurationInMs: 300,
            darkSquareStyle: { backgroundColor: "var(--board-dark)" },
            lightSquareStyle: { backgroundColor: "var(--board-light)" },
            squareStyles,
            canDragPiece: ({ square }) =>
              Boolean(square && status === "playing" && isOwnPiece(square)),
            onPieceDrag: ({ square }) => {
              if (square && status === "playing" && isOwnPiece(square)) {
                setSelectedSquare(square);
              }
            },
            onSquareClick: ({ square }) => {
              if (square) handleSquareClick(square);
            },
            onPieceDrop: ({ sourceSquare, targetSquare }) =>
              Boolean(
                sourceSquare &&
                  targetSquare &&
                  attemptMove(sourceSquare, targetSquare)
              ),
          }}
        />
      </div>

      <div className="cg-landing-puzzle-footer">
        <span>Select a piece to see every legal move.</span>
        <Link href="/train">Try 6,000 more ↗</Link>
      </div>

      {showPremiumPrompt && (
        <div className="cg-premium-prompt-backdrop" role="presentation">
          <section className="cg-premium-prompt" role="dialog" aria-modal="true" aria-labelledby="premium-prompt-title">
            <span>3 / 3 · PATTERN FOUND</span>
            <h2 id="premium-prompt-title">Solving is step one.<br />Remembering is Premium.</h2>
            <p>Premium keeps saved positions, review timing, and your repertoire synced—so the patterns you find here do not disappear on the next device.</p>
            <div>
              <Link href="/premium" onClick={() => recordFunnelEvent("premium_prompt_clicked")}>See Premium · $3.99 ↗</Link>
              <button type="button" onClick={restartDemo}>Play again</button>
            </div>
            <small>All 6,000 puzzles remain free. Premium is the personal memory layer.</small>
          </section>
        </div>
      )}
    </div>
  );
}
