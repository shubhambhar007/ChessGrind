"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import AccountLink from "../account-link";
import BrandLockup from "../brand-lockup";
import CelebrationBurst from "../celebration-burst";
import { premiumPieces } from "../premium-pieces";
import ThemeToggle from "../theme-toggle";
import VisitorCounter from "../visitor-counter";
import { openingDrills, type OpeningSide } from "@/data/opening-drills";
import { applyLegalMoveMarkers } from "@/lib/chessboard-markers";
import { addToGrindbook } from "@/lib/grindbook";

type Result = "idle" | "wrong" | "solved";

function uci(from: string, to: string, promotion?: string) {
  return `${from}${to}${promotion ?? ""}`;
}

function pieceBelongsTo(game: Chess, square: string, side: OpeningSide) {
  const piece = game.get(square as Square);
  return piece?.color === (side === "white" ? "w" : "b");
}

export default function OpeningLabPage() {
  const openingNames = useMemo(
    () => [...new Set(openingDrills.map((drill) => drill.opening))],
    []
  );
  const [opening, setOpening] = useState("all");
  const [side, setSide] = useState<"either" | OpeningSide>("either");
  const filtered = useMemo(
    () => openingDrills.filter((drill) =>
      (opening === "all" || drill.opening === opening) &&
      (side === "either" || drill.side === side)
    ),
    [opening, side]
  );
  const [drillId, setDrillId] = useState(openingDrills[0].id);
  const drill = filtered.find((item) => item.id === drillId) ?? filtered[0] ?? openingDrills[0];
  const [fen, setFen] = useState(drill.fen);
  const [moveIndex, setMoveIndex] = useState(0);
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [result, setResult] = useState<Result>("idle");
  const [message, setMessage] = useState("Find the repertoire move.");
  const [saved, setSaved] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);
  const [celebration, setCelebration] = useState(0);
  const pointerRef = useRef<{ square: string; selected: boolean } | null>(null);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const game = useMemo(() => new Chess(fen), [fen]);
  const isOpponentMoving = moveIndex % 2 === 1 && result !== "solved";

  function loadDrill(nextId: string) {
    const next = openingDrills.find((item) => item.id === nextId) ?? filtered[0] ?? openingDrills[0];
    if (replyTimer.current) clearTimeout(replyTimer.current);
    setDrillId(next.id);
    setFen(next.fen);
    setMoveIndex(0);
    setSelectedSquare(null);
    setResult("idle");
    setMessage("Find the repertoire move.");
    setSaved(false);
  }

  useEffect(() => () => {
    if (replyTimer.current) clearTimeout(replyTimer.current);
  }, []);

  function changeFilters(nextOpening: string, nextSide: "either" | OpeningSide) {
    const next = openingDrills.filter((item) =>
      (nextOpening === "all" || item.opening === nextOpening) &&
      (nextSide === "either" || item.side === nextSide)
    );
    setOpening(nextOpening);
    setSide(nextSide);
    loadDrill(next[0]?.id ?? openingDrills[0].id);
  }

  function saveMistake() {
    const response = addToGrindbook({
      fen: drill.fen,
      orientation: drill.side,
      title: `${drill.opening} response`,
      prompt: `Play the ${drill.side} repertoire move in this ${drill.opening} position.`,
      solutionUci: drill.moves[0],
      explanation: `${drill.idea} Common mistake: ${drill.commonMistake}`,
      tags: ["opening", drill.opening, drill.side],
      source: "opening",
    });
    setSaved(true);
    return response.added;
  }

  function finishLine(finalFen: string) {
    setFen(finalFen);
    setResult("solved");
    setMessage("Line complete. That response is now one repetition stronger.");
    setSolvedCount((count) => count + 1);
    setCelebration((event) => event + 1);
  }

  function playUserMove(from: string, to: string, promotion?: string) {
    if (isOpponentMoving || result === "solved") return false;
    const candidate = uci(from, to, promotion);
    const legal = game.moves({ square: from as Square, verbose: true })
      .find((move) => uci(move.from, move.to, move.promotion) === candidate);
    if (!legal) {
      setSelectedSquare(null);
      setResult("wrong");
      setMessage("That move is not legal from this position.");
      return false;
    }
    if (candidate !== drill.moves[moveIndex]) {
      setSelectedSquare(null);
      setResult("wrong");
      setMessage("Playable, but not the response this line is training. It has been added to Grindbook.");
      saveMistake();
      return false;
    }

    const nextGame = new Chess(fen);
    nextGame.move({ from, to, promotion });
    const nextIndex = moveIndex + 1;
    setFen(nextGame.fen());
    setMoveIndex(nextIndex);
    setSelectedSquare(null);
    setResult("idle");
    setMessage(nextIndex >= drill.moves.length ? "Line complete." : "Correct. Watch the reply.");
    if (nextIndex >= drill.moves.length) {
      finishLine(nextGame.fen());
      return true;
    }

    replyTimer.current = setTimeout(() => {
      const replyGame = new Chess(nextGame.fen());
      const reply = drill.moves[nextIndex];
      const applied = replyGame.move({ from: reply.slice(0, 2), to: reply.slice(2, 4), promotion: reply[4] });
      if (!applied) return;
      const afterReply = nextIndex + 1;
      if (afterReply >= drill.moves.length) finishLine(replyGame.fen());
      else {
        setFen(replyGame.fen());
        setMoveIndex(afterReply);
        setMessage("Your move. Keep the line going.");
      }
    }, 540);
    return true;
  }

  function handleSquareClick(square: string) {
    if (isOpponentMoving || result === "solved") return;
    const pointer = pointerRef.current;
    pointerRef.current = null;
    if (pointer?.square === square) {
      if (pointer.selected) setSelectedSquare(null);
      return;
    }
    if (!selectedSquare) {
      if (pieceBelongsTo(game, square, drill.side)) setSelectedSquare(square);
      return;
    }
    if (square === selectedSquare) {
      setSelectedSquare(null);
      return;
    }
    if (pieceBelongsTo(game, square, drill.side)) {
      setSelectedSquare(square);
      return;
    }
    playUserMove(selectedSquare, square);
  }

  const legalMoves = selectedSquare
    ? game.moves({ square: selectedSquare as Square, verbose: true }).map((move) => ({ to: move.to, captured: move.captured }))
    : [];
  const squareStyles: Record<string, React.CSSProperties> = {};
  if (selectedSquare && !isOpponentMoving && result !== "solved") {
    squareStyles[selectedSquare] = { boxShadow: "inset 0 0 0 3px rgba(59, 92, 255, .78)", cursor: "grab" };
    applyLegalMoveMarkers(squareStyles, legalMoves);
  }
  if (result === "wrong") {
    const expected = drill.moves[moveIndex] ?? drill.moves[0];
    squareStyles[expected.slice(0, 2)] = { ...squareStyles[expected.slice(0, 2)], boxShadow: "inset 0 0 0 3px rgba(224,184,94,.9)" };
  }

  const currentPosition = Math.max(0, filtered.findIndex((item) => item.id === drill.id));
  const nextDrill = () => loadDrill(filtered[(currentPosition + 1) % filtered.length]?.id ?? openingDrills[0].id);

  return (
    <main className="cg-app-shell min-h-screen">
      <CelebrationBurst eventId={celebration} title="Opening line locked in." detail="Build the response, then let Grindbook keep it sharp." variant="mini" />
      <header className="border-b border-[var(--line)] bg-[var(--header)]">
        <div className="cg-app-header-inner mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-6">
          <Link href="/" aria-label="ChessGrind home"><BrandLockup priority /></Link>
          <nav className="cg-app-nav flex items-center gap-5 text-[12px] font-semibold text-[var(--secondary)]">
            <VisitorCounter /><Link href="/train">Tactics</Link><Link href="/grindbook">Grindbook</Link><Link href="/repertoire">Repertoire</Link><AccountLink /><ThemeToggle />
          </nav>
          <strong className="cg-puzzle-library-count text-[12px] text-[var(--secondary)]"><b>{openingDrills.length}</b> opening drills</strong>
        </div>
      </header>

      <div className="cg-page-content mx-auto max-w-[1120px] px-6 pb-20 pt-9">
        <section className="cg-opening-hero">
          <div><span>OPENING LAB / 01</span><h1>Don&apos;t memorize openings.<br />Build the response.</h1></div>
          <p>Choose a family, play the critical replies, and send every miss into Grindbook until the line becomes automatic.</p>
          <div><strong>{openingDrills.length}</strong><span>original drills</span><strong>9</strong><span>opening families</span></div>
        </section>

        <div className="cg-opening-controls">
          <label><span>Opening</span><select value={opening} onChange={(event) => changeFilters(event.target.value, side)}><option value="all">All openings</option>{openingNames.map((name) => <option key={name}>{name}</option>)}</select></label>
          <div><span>Train as</span>{(["either", "white", "black"] as const).map((value) => <button key={value} type="button" onClick={() => changeFilters(opening, value)} className={side === value ? "is-active" : ""}>{value}</button>)}</div>
          <p><strong>{filtered.length}</strong> drills selected <i>·</i> <strong>{solvedCount}</strong> solved now</p>
        </div>

        <section className="cg-opening-workbench">
          <div className="cg-opening-board-wrap">
            <div className="cg-opening-board-meta"><span>{drill.id}</span><strong>You are {drill.side}</strong></div>
            <div className="cg-board-frame overflow-hidden border-[6px] border-white">
              <Chessboard options={{
                pieces: premiumPieces,
                position: fen,
                boardOrientation: drill.side,
                showNotation: true,
                animationDurationInMs: 420,
                darkSquareStyle: { backgroundColor: "var(--board-dark)" },
                lightSquareStyle: { backgroundColor: "var(--board-light)" },
                squareStyles,
                canDragPiece: ({ square }) => Boolean(square && !isOpponentMoving && result !== "solved" && pieceBelongsTo(game, square, drill.side)),
                onSquareMouseDown: ({ square }) => {
                  if (!square || isOpponentMoving || result === "solved") return;
                  if (pieceBelongsTo(game, square, drill.side)) {
                    pointerRef.current = { square, selected: selectedSquare === square };
                    setSelectedSquare(square);
                  }
                },
                onPieceDrag: ({ square }) => { if (square && pieceBelongsTo(game, square, drill.side)) setSelectedSquare(square); },
                onPieceDragCancel: () => { pointerRef.current = null; },
                onSquareClick: ({ square }) => { if (square) handleSquareClick(square); },
                onPieceDrop: ({ sourceSquare, targetSquare }) => {
                  pointerRef.current = null;
                  if (!sourceSquare || !targetSquare) return false;
                  return playUserMove(sourceSquare, targetSquare);
                },
              }} />
            </div>
          </div>

          <aside className="cg-opening-coach">
            <div className="cg-opening-coach-title"><span>{drill.opening}</span><small>{drill.variation} · {currentPosition + 1}/{filtered.length}</small></div>
            <h2>{message}</h2>
            <div className="cg-opening-line-progress">{drill.moves.map((move, index) => <i key={`${move}-${index}`} className={index < moveIndex ? "is-done" : index === moveIndex ? "is-current" : ""} />)}</div>
            <article><span>THE IDEA</span><p>{drill.idea}</p></article>
            <article><span>COMMON MISS</span><p>{drill.commonMistake}</p></article>
            {result === "wrong" && <button type="button" className="cg-opening-reveal" onClick={() => setMessage(`Try ${drill.sanMoves[moveIndex]}. ${drill.idea}`)}>Show the move</button>}
            <div className="cg-opening-actions">
              <button type="button" onClick={() => { saveMistake(); setMessage("Saved. Grindbook will bring this position back."); }} disabled={saved}>{saved ? "Saved to Grindbook" : "Save to Grindbook"}</button>
              <button type="button" onClick={nextDrill}>Next drill <span>→</span></button>
            </div>
          </aside>
        </section>

        <section className="cg-opening-library">
          <div><span>THE LIBRARY</span><h2>Nine foundations.<br />Two sides of every fight.</h2></div>
          <div>{openingNames.map((name, index) => {
            const count = openingDrills.filter((item) => item.opening === name).length;
            return <button type="button" key={name} onClick={() => { changeFilters(name, side); window.scrollTo({ top: 180, behavior: "smooth" }); }}><small>{String(index + 1).padStart(2, "0")}</small><strong>{name}</strong><span>{count} drills ↗</span></button>;
          })}</div>
        </section>
      </div>
    </main>
  );
}
