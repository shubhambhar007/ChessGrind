"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import ThemeToggle from "../theme-toggle";
import VisitorCounter from "../visitor-counter";
import { premiumPieces } from "../premium-pieces";
import GrindbookPromo from "../grindbook-promo";
import PremiumSelect from "../premium-select";
import AccountLink from "../account-link";
import { addToGrindbook } from "@/lib/grindbook";
import {
  analyzeMove,
  cloneGameWithHistory,
  evaluateMaterial,
  pickAiMove,
  type AppliedMove,
} from "@/lib/chess-engine";

type PlayColor = "white" | "black";
type Difficulty = "easy" | "medium" | "hard";
type GameStatus =
  | "playing"
  | "checkmate"
  | "stalemate"
  | "draw"
  | "resigned";

type MoveEntry = {
  notation: string;
  color: PlayColor;
};

type MoveRow = {
  number: number;
  white: string | null;
  black: string | null;
};

type CapturedMistake = {
  moveNumber: number;
  playedSan: string;
  bestSan: string;
  centipawnLoss: number;
};

const DEPTH_BY_DIFFICULTY: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

const GRINDBOOK_MISTAKE_THRESHOLD = 175;

function formatMistakeCost(centipawnLoss: number) {
  if (centipawnLoss >= 5_000) return "a decisive swing";
  return `roughly ${(centipawnLoss / 100).toFixed(1)} pawns`;
}

function getChessColor(color: PlayColor) {
  return color === "white" ? "w" : "b";
}

function isPlayersPiece(
  game: Chess,
  square: string,
  color: PlayColor
) {
  const piece = game.get(square as Square);
  if (!piece) return false;
  return piece.color === getChessColor(color);
}

function isPromotionMove(
  game: Chess,
  from: string,
  to: string
) {
  const piece = game.get(from as Square);
  if (!piece || piece.type !== "p") return false;

  const rank = to[1];
  return piece.color === "w" ? rank === "8" : rank === "1";
}

function buildMoveRows(moveLog: MoveEntry[]): MoveRow[] {
  const rows: MoveRow[] = [];
  let pendingWhiteRow: MoveRow | null = null;

  for (const entry of moveLog) {
    if (entry.color === "white") {
      const row: MoveRow = {
        number: rows.length + 1,
        white: entry.notation,
        black: null,
      };
      rows.push(row);
      pendingWhiteRow = row;
    } else if (pendingWhiteRow) {
      pendingWhiteRow.black = entry.notation;
      pendingWhiteRow = null;
    } else {
      rows.push({
        number: rows.length + 1,
        white: null,
        black: entry.notation,
      });
    }
  }

  return rows;
}

function getGameStatus(game: Chess): GameStatus | null {
  if (game.isCheckmate()) return "checkmate";
  if (game.isStalemate()) return "stalemate";
  if (game.isDraw()) return "draw";
  return null;
}

const BOARD_LIGHT = "var(--board-light)";
const BOARD_DARK = "var(--board-dark)";

export default function PlayPage() {
  const [game, setGame] = useState(() => new Chess());
  const [playerColor, setPlayerColor] =
    useState<PlayColor>("white");
  const [difficulty, setDifficulty] =
    useState<Difficulty>("medium");
  const [selectedSquare, setSelectedSquare] = useState<
    string | null
  >(null);
  const [lastMove, setLastMove] = useState<{
    from: string;
    to: string;
  } | null>(null);
  const [moveLog, setMoveLog] = useState<MoveEntry[]>([]);
  const [history, setHistory] = useState<AppliedMove[]>(
    []
  );
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [gameStatus, setGameStatus] =
    useState<GameStatus>("playing");
  const [resignedColor, setResignedColor] =
    useState<PlayColor | null>(null);
  const [showLegalMoves, setShowLegalMoves] = useState(true);
  const [showMoveArrows, setShowMoveArrows] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "moves" | "analysis" | "info"
  >("moves");
  const [savedPosition, setSavedPosition] = useState(false);
  const [pgnCopied, setPgnCopied] = useState(false);
  const [capturedMistake, setCapturedMistake] =
    useState<CapturedMistake | null>(null);
  const moveListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab !== "moves" || moveLog.length === 0) return;
    moveListRef.current?.scrollTo({
      top: moveListRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [activeTab, moveLog.length]);

  const aiColor: PlayColor =
    playerColor === "white" ? "black" : "white";

  const gameOver = gameStatus !== "playing";

  function startAiMoveIfNeeded(
    nextGame: Chess,
    nextHistory: AppliedMove[]
  ) {
    const status = getGameStatus(nextGame);
    if (status) {
      setGameStatus(status);
      return;
    }

    if (
      nextGame.turn() === getChessColor(aiColor)
    ) {
      setIsAiThinking(true);

      setTimeout(() => {
        const aiGame = cloneGameWithHistory(nextGame);
        const move = pickAiMove(
          aiGame,
          DEPTH_BY_DIFFICULTY[difficulty],
          nextHistory
        );

        if (!move) {
          setIsAiThinking(false);
          return;
        }

        const playedMove = aiGame.move(move);

        setGame(aiGame);
        setSavedPosition(false);
        setLastMove({ from: move.from, to: move.to });
        setMoveLog((previous) => [
          ...previous,
          { notation: playedMove.san, color: aiColor },
        ]);
        setHistory([
          ...nextHistory,
          {
            from: move.from,
            to: move.to,
            promotion: move.promotion,
          },
        ]);
        setIsAiThinking(false);

        const nextStatus = getGameStatus(aiGame);
        if (nextStatus) setGameStatus(nextStatus);
      }, 400);
    }
  }

  function newGame(color: PlayColor = playerColor) {
    const fresh = new Chess();

    setPlayerColor(color);
    setGame(fresh);
    setSelectedSquare(null);
    setLastMove(null);
    setMoveLog([]);
    setHistory([]);
    setIsAiThinking(false);
    setGameStatus("playing");
    setResignedColor(null);
    setActiveTab("moves");
    setSavedPosition(false);
    setCapturedMistake(null);

    if (getChessColor(color) !== "w") {
      // AI plays white's opening move.
      const aiFirst = color === "black";
      if (aiFirst) {
        startAiMoveForColor(fresh, "white", []);
      }
    }
  }

  function startAiMoveForColor(
    baseGame: Chess,
    thinkingColor: PlayColor,
    baseHistory: AppliedMove[]
  ) {
    setIsAiThinking(true);

    setTimeout(() => {
      const aiGame = cloneGameWithHistory(baseGame);
      const move = pickAiMove(
        aiGame,
        DEPTH_BY_DIFFICULTY[difficulty],
        baseHistory
      );

      if (!move) {
        setIsAiThinking(false);
        return;
      }

      const playedMove = aiGame.move(move);

      setGame(aiGame);
      setSavedPosition(false);
      setLastMove({ from: move.from, to: move.to });
      setMoveLog((previous) => [
        ...previous,
        { notation: playedMove.san, color: thinkingColor },
      ]);
      setHistory([
        ...baseHistory,
        {
          from: move.from,
          to: move.to,
          promotion: move.promotion,
        },
      ]);
      setIsAiThinking(false);
    }, 400);
  }

  function executeMove(from: string, to: string) {
    if (gameOver || isAiThinking) return false;
    if (!isPlayersPiece(game, from, playerColor)) return false;

    const gameCopy = cloneGameWithHistory(game);

    let move;
    try {
      move = gameCopy.move({
        from,
        to,
        promotion: isPromotionMove(game, from, to)
          ? "q"
          : undefined,
      });
    } catch {
      return false;
    }

    if (!move) return false;

    const moveAnalysis = analyzeMove(
      game,
      {
        from: move.from,
        to: move.to,
        promotion:
          move.promotion,
      },
      2
    );

    if (
      moveAnalysis &&
      moveAnalysis.centipawnLoss >=
        GRINDBOOK_MISTAKE_THRESHOLD
    ) {
      const moveNumber =
        Math.floor(
          history.length / 2
        ) + 1;
      const bestUci = `${moveAnalysis.bestMove.from}${moveAnalysis.bestMove.to}${moveAnalysis.bestMove.promotion ?? ""}`;
      const captured =
        addToGrindbook({
          fen: game.fen(),
          orientation:
            playerColor,
          title: `Blunder replay · Move ${moveNumber}`,
          prompt: `You played ${move.san}. Find the stronger move.`,
          solutionUci:
            bestUci,
          explanation: `${moveAnalysis.bestMove.san} was stronger. Your move cost ${formatMistakeCost(moveAnalysis.centipawnLoss)} by the engine's estimate.`,
          tags: [
            "game mistake",
            "auto captured",
            difficulty,
          ],
          source: "game",
        });

      if (captured.added) {
        setCapturedMistake({
          moveNumber,
          playedSan: move.san,
          bestSan:
            moveAnalysis
              .bestMove.san,
          centipawnLoss:
            moveAnalysis
              .centipawnLoss,
        });
      }
    }

    setGame(gameCopy);
    setSavedPosition(false);
    setLastMove({ from, to });
    setSelectedSquare(null);
    setMoveLog((previous) => [
      ...previous,
      { notation: move.san, color: playerColor },
    ]);
    const nextHistory = [
      ...history,
      {
        from: move.from,
        to: move.to,
        promotion: move.promotion,
      },
    ];
    setHistory(nextHistory);

    startAiMoveIfNeeded(gameCopy, nextHistory);

    return true;
  }

  function handleSquareClick(square: string) {
    if (gameOver || isAiThinking) return;

    const clickedOwnPiece = isPlayersPiece(
      game,
      square,
      playerColor
    );

    if (!selectedSquare) {
      if (clickedOwnPiece) setSelectedSquare(square);
      return;
    }

    if (square === selectedSquare) {
      setSelectedSquare(null);
      return;
    }

    if (clickedOwnPiece) {
      setSelectedSquare(square);
      return;
    }

    executeMove(selectedSquare, square);
  }

  function handlePieceDrop(
    sourceSquare: string,
    targetSquare: string
  ) {
    return executeMove(sourceSquare, targetSquare);
  }

  function undoMove() {
    if (isAiThinking || history.length === 0) return;

    const removeCount =
      moveLog[moveLog.length - 1]?.color === aiColor
        ? 2
        : 1;

    const trimmedHistory = history.slice(
      0,
      -removeCount
    );

    const replay = new Chess();
    for (const move of trimmedHistory) {
      replay.move(move);
    }

    const previousMove =
      trimmedHistory[trimmedHistory.length - 1];

    setGame(replay);
    setSavedPosition(false);
    setHistory(trimmedHistory);
    setMoveLog((previous) =>
      previous.slice(0, -removeCount)
    );
    setSelectedSquare(null);
    setLastMove(
      previousMove
        ? {
            from: previousMove.from,
            to: previousMove.to,
          }
        : null
    );
    setGameStatus("playing");
    setResignedColor(null);
  }

  function resign() {
    if (gameOver) return;
    setGameStatus("resigned");
    setResignedColor(playerColor);
  }

  async function copyPgn() {
    try {
      await navigator.clipboard.writeText(game.pgn());
      setPgnCopied(true);
      window.setTimeout(() => setPgnCopied(false), 1600);
    } catch {
      // Clipboard unavailable — ignore.
    }
  }

  function saveCurrentPosition() {
    const moveNumber = Math.floor(moveLog.length / 2) + 1;
    const result = addToGrindbook({
      fen: game.fen(),
      orientation: playerColor,
      title: `AI game · Move ${moveNumber}`,
      prompt:
        "Revisit this position. What would you play, and what is your plan?",
      explanation:
        "Use this position to remember the idea you noticed during your game.",
      tags: ["game position", difficulty],
      source: "game",
    });

    setSavedPosition(true);

    if (!result.added) {
      setActiveTab("info");
    }
  }

  const legalMoves = selectedSquare
    ? game.moves({
        square: selectedSquare as Square,
        verbose: true,
      })
    : [];

  const squareStyles: Record<
    string,
    React.CSSProperties
  > = {};

  if (lastMove) {
    squareStyles[lastMove.from] = {
      boxShadow:
        "inset 0 0 0 9999px rgba(59, 92, 255, 0.11)",
    };
    squareStyles[lastMove.to] = {
      boxShadow:
        "inset 0 0 0 9999px rgba(59, 92, 255, 0.17)",
    };
  }

  if (selectedSquare) {
    squareStyles[selectedSquare] = {
      ...(squareStyles[selectedSquare] || {}),
      boxShadow:
        "inset 0 0 0 3px rgba(59, 92, 255, 0.72)",
      cursor: "grab",
    };
  }

  if (showLegalMoves && selectedSquare && !gameOver) {
    for (const move of legalMoves) {
      const existing = squareStyles[move.to] || {};

      squareStyles[move.to] = move.captured
        ? {
            ...existing,
            cursor: "pointer",
            boxShadow:
              "inset 0 0 0 6px rgba(37, 99, 235, 0.88), inset 0 0 18px rgba(96, 165, 250, 0.34)",
          }
        : {
            ...existing,
            cursor: "pointer",
            backgroundImage:
              "radial-gradient(circle at center, #2563eb 0 13%, #93c5fd 14% 18%, transparent 19%)",
          };
    }
  }

  const arrows =
    showMoveArrows && lastMove
      ? [
          {
            startSquare: lastMove.from,
            endSquare: lastMove.to,
            color: "rgba(59, 92, 255, 0.6)",
          },
        ]
      : [];

  const boardFiles =
    playerColor === "white"
      ? ["a", "b", "c", "d", "e", "f", "g", "h"]
      : ["h", "g", "f", "e", "d", "c", "b", "a"];

  const boardRanks =
    playerColor === "white"
      ? [8, 7, 6, 5, 4, 3, 2, 1]
      : [1, 2, 3, 4, 5, 6, 7, 8];

  const moveRows = buildMoveRows(moveLog);
  const latestMoveColor =
    moveLog[moveLog.length - 1]?.color ?? null;

  const isCheck = game.inCheck() && !gameOver;
  const isPlayerTurn =
    !gameOver &&
    !isAiThinking &&
    game.turn() === getChessColor(playerColor);

  let statusHeading = "Make your move";
  let statusDetail =
    "Click on a piece to see its legal moves.";

  if (gameStatus === "checkmate") {
    const winner =
      game.turn() === "w" ? "black" : "white";
    statusHeading =
      winner === playerColor
        ? "You won!"
        : "Computer wins.";
    statusDetail = "Checkmate.";
  } else if (gameStatus === "stalemate") {
    statusHeading = "Draw.";
    statusDetail = "Stalemate — no legal moves.";
  } else if (gameStatus === "draw") {
    statusHeading = "Draw.";
    statusDetail =
      "Draw by insufficient material or repetition.";
  } else if (gameStatus === "resigned") {
    statusHeading =
      resignedColor === playerColor
        ? "You resigned."
        : "Computer resigned.";
    statusDetail = "Game over.";
  } else if (isAiThinking) {
    statusHeading = "Computer is thinking…";
    statusDetail = "Please wait for its move.";
  } else if (isCheck) {
    statusHeading = "Check!";
    statusDetail = isPlayerTurn
      ? "Find a move that gets your king to safety."
      : "The computer needs to respond to check.";
  } else if (selectedSquare) {
    statusHeading = "Choose a destination";
    statusDetail =
      "Choose one of the highlighted legal squares, or tap the selected piece again to cancel.";
  } else if (!isPlayerTurn) {
    statusHeading = "Waiting…";
    statusDetail = "It's the computer's turn.";
  }

  const evaluation = evaluateMaterial(game) / 100;

  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
        <div className="mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-6">
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

          <div className="flex items-center gap-5">
            <VisitorCounter />
            <Link
              href="/grindbook"
              className="control text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Grindbook
            </Link>
            <Link
              href="/repertoire"
              className="control text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Repertoire
            </Link>
            <Link
              href="/train"
              className="control text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Back to puzzles
            </Link>
            <AccountLink />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1120px] px-6 pb-16 pt-7">
        <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-[32px] font-semibold tracking-[-0.03em]">
              Play vs Computer
            </h1>
            <p className="mt-1 text-[14px] text-[var(--secondary)]">
              Play a full game against the computer.
              Improve at your own pace.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PremiumSelect
              label="Difficulty"
              value={difficulty}
              disabled={isAiThinking && moveLog.length > 0}
              onChange={setDifficulty}
              options={[
                {
                  value: "easy",
                  label: "Easy",
                  description: "Quick and forgiving",
                },
                {
                  value: "medium",
                  label: "Medium",
                  description: "A balanced challenge",
                },
                {
                  value: "hard",
                  label: "Hard",
                  description: "Deeper calculation",
                },
              ]}
            />

            <PremiumSelect
              label="Play as"
              value={playerColor}
              onChange={newGame}
              options={[
                {
                  value: "white",
                  label: "White",
                  description: "You make the first move",
                },
                {
                  value: "black",
                  label: "Black",
                  description: "Computer moves first",
                },
              ]}
            />

            <button
              type="button"
              onClick={() => newGame()}
              className="control min-h-[62px] rounded-[14px] border border-[var(--line-strong)] bg-[var(--surface)] px-5 py-2 text-[14px] font-semibold shadow-[var(--shadow-soft)]"
            >
              New Game
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,560px)_1fr] lg:items-start">
          <section>
            <div className="flex">
              <div className="flex flex-col pr-2">
                {boardRanks.map((rank) => (
                  <div
                    key={rank}
                    className="flex flex-1 items-center justify-center text-[11px] text-[var(--tertiary)]"
                  >
                    {rank}
                  </div>
                ))}
              </div>

              <div className="min-w-0 flex-1">
                <div className="overflow-hidden border-[6px] border-white">
                  <div className="overflow-hidden">
                    <Chessboard
                      options={{
                        pieces: premiumPieces,
                        showNotation: false,
                        position: game.fen(),
                        boardOrientation: playerColor,
                        animationDurationInMs: 300,
                        arrows,
                        darkSquareStyle: {
                          backgroundColor: BOARD_DARK,
                        },
                        lightSquareStyle: {
                          backgroundColor: BOARD_LIGHT,
                        },
                        squareStyles,
                        canDragPiece: ({ square }) => {
                          if (
                            !square ||
                            gameOver ||
                            isAiThinking
                          ) {
                            return false;
                          }
                          return isPlayersPiece(
                            game,
                            square,
                            playerColor
                          );
                        },
                        onPieceDrag: ({ square }) => {
                          if (
                            !square ||
                            gameOver ||
                            isAiThinking
                          ) {
                            return;
                          }
                          if (
                            isPlayersPiece(
                              game,
                              square,
                              playerColor
                            )
                          ) {
                            setSelectedSquare(square);
                          }
                        },
                        onSquareClick: ({ square }) => {
                          if (!square) return;
                          handleSquareClick(square);
                        },
                        onPieceDrop: ({
                          sourceSquare,
                          targetSquare,
                        }) => {
                          if (
                            !sourceSquare ||
                            !targetSquare
                          ) {
                            return false;
                          }
                          return handlePieceDrop(
                            sourceSquare,
                            targetSquare
                          );
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="flex pl-1 pt-2">
                  {boardFiles.map((file) => (
                    <div
                      key={file}
                      className="flex-1 text-center text-[11px] text-[var(--tertiary)]"
                    >
                      {file}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-[13px]">
              <label className="flex items-center gap-2">
                <span
                  onClick={() =>
                    setShowLegalMoves((current) => !current)
                  }
                  className={[
                    "relative inline-flex h-[18px] w-[31px] cursor-pointer items-center rounded-full transition",
                    showLegalMoves
                      ? "bg-[var(--accent)]"
                      : "bg-black/[0.12]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-[14px] w-[14px] rounded-full bg-white shadow-sm transition-transform",
                      showLegalMoves
                        ? "translate-x-[15px]"
                        : "translate-x-[2px]",
                    ].join(" ")}
                  />
                </span>
                <span className="text-[var(--secondary)]">
                  Show legal moves
                </span>
              </label>

              <label className="flex items-center gap-2">
                <span
                  onClick={() =>
                    setShowMoveArrows((current) => !current)
                  }
                  className={[
                    "relative inline-flex h-[18px] w-[31px] cursor-pointer items-center rounded-full transition",
                    showMoveArrows
                      ? "bg-[var(--accent)]"
                      : "bg-black/[0.12]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-[14px] w-[14px] rounded-full bg-white shadow-sm transition-transform",
                      showMoveArrows
                        ? "translate-x-[15px]"
                        : "translate-x-[2px]",
                    ].join(" ")}
                  />
                </span>
                <span className="text-[var(--secondary)]">
                  Show move arrows
                </span>
              </label>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={saveCurrentPosition}
                className="control rounded-[10px] border border-[var(--line-strong)] bg-[var(--accent-soft)] px-4 py-2 text-[13px] font-semibold text-[var(--accent)]"
              >
                {savedPosition ? "Saved ✓" : "Save position"}
              </button>

              <button
                type="button"
                onClick={undoMove}
                disabled={
                  isAiThinking || moveLog.length === 0
                }
                className="control rounded-[10px] border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-[13px] font-semibold disabled:opacity-40"
              >
                Undo
              </button>

              <button
                type="button"
                onClick={resign}
                disabled={gameOver}
                className="control rounded-[10px] border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-[13px] font-semibold disabled:opacity-40"
              >
                Resign
              </button>
            </div>

            {capturedMistake && (
              <div className="appear relative mt-4 overflow-hidden rounded-[15px] border border-amber-500/30 bg-amber-500/[0.08] p-4 shadow-[var(--shadow-soft)]">
                <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-amber-400 opacity-15 blur-2xl" />
                <button
                  type="button"
                  onClick={() =>
                    setCapturedMistake(
                      null
                    )
                  }
                  aria-label="Dismiss mistake capture"
                  className="control absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full text-[15px] text-[var(--secondary)] hover:bg-black/[0.05] hover:text-[var(--text)]"
                >
                  ×
                </button>
                <div className="relative pr-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-amber-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                    Mistake captured
                  </div>
                  <div className="mt-2 text-[14px] font-semibold">
                    Move {capturedMistake.moveNumber}: {capturedMistake.playedSan} → {capturedMistake.bestSan}
                  </div>
                  <p className="mt-1 text-[12px] leading-5 text-[var(--secondary)]">
                    Your move cost {formatMistakeCost(capturedMistake.centipawnLoss)}. This position is now waiting in your Grindbook.
                  </p>
                  <Link
                    href="/grindbook"
                    className="control mt-3 inline-flex text-[11px] font-bold text-amber-600 hover:text-amber-500"
                  >
                    Review the position →
                  </Link>
                </div>
              </div>
            )}

            <GrindbookPromo compact className="mt-4" />
          </section>

          <section>
            <div className="flex flex-col gap-2">
              <div
                className={[
                  "flex items-center gap-3 rounded-[12px] border px-4 py-3",
                  !isPlayerTurn && !gameOver
                    ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                    : "border-[var(--line)] bg-[var(--surface)]",
                ].join(" ")}
              >
                <span className="h-[10px] w-[10px] rounded-full bg-[#161617]" />
                <span className="text-[13px] font-semibold">
                  Computer ({difficulty})
                </span>
              </div>

              <div
                className={[
                  "flex items-center gap-3 rounded-[12px] border px-4 py-3",
                  isPlayerTurn
                    ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                    : "border-[var(--line)] bg-[var(--surface)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-[10px] w-[10px] rounded-full",
                    playerColor === "white"
                      ? "border border-black/20 bg-white"
                      : "bg-[#161617]",
                  ].join(" ")}
                />
                <span className="text-[13px] font-semibold">
                  You ({playerColor})
                </span>
              </div>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
              <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-[var(--accent)] opacity-[0.08] blur-3xl" />

              <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] px-4 py-4">
                <div className="inline-flex rounded-[12px] border border-[var(--line)] bg-black/[0.035] p-1">
                  {(
                    [
                      "moves",
                      "analysis",
                      "info",
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={[
                        "control relative rounded-[9px] px-2.5 py-2 text-[12px] font-semibold capitalize transition-all",
                        activeTab === tab
                          ? "bg-[var(--surface)] text-[var(--text)] shadow-[0_5px_18px_rgba(0,0,0,0.1)]"
                          : "text-[var(--secondary)] hover:text-[var(--text)]",
                      ].join(" ")}
                    >
                      {activeTab === tab && (
                        <span className="absolute inset-x-3 -bottom-[5px] h-[2px] rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
                      )}
                      {tab === "info"
                        ? "Game Info"
                        : tab}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyPgn}
                    disabled={moveLog.length === 0}
                    className="control inline-flex h-9 items-center gap-2 rounded-[10px] border border-[var(--line)] bg-[var(--surface)] px-2.5 text-[11px] font-semibold text-[var(--secondary)] shadow-sm hover:border-[var(--line-strong)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {pgnCopied ? (
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.8]">
                        <path d="m4.5 10.3 3.3 3.2 7.7-7.4" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6]">
                        <rect x="6.5" y="6.5" width="9" height="9" rx="2" />
                        <path d="M13.5 6.5V5A1.5 1.5 0 0 0 12 3.5H5A1.5 1.5 0 0 0 3.5 5v7A1.5 1.5 0 0 0 5 13.5h1.5" />
                      </svg>
                    )}
                    {pgnCopied ? "Copied" : "Copy PGN"}
                  </button>
                  <button
                    type="button"
                    onClick={() => newGame()}
                    aria-label="Reset game"
                    title="Reset game"
                    className="control grid h-9 w-9 place-items-center rounded-[10px] border border-[var(--line)] bg-[var(--surface)] text-[var(--secondary)] shadow-sm hover:border-[var(--line-strong)] hover:text-[var(--text)]"
                  >
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current stroke-[1.7]">
                      <path d="M15.3 6.2A6.2 6.2 0 1 0 16 12" strokeLinecap="round" />
                      <path d="M15.5 2.9v3.8h-3.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {activeTab === "moves" && (
                <div className="relative">
                  {moveRows.length === 0 ? (
                    <div className="flex min-h-[210px] flex-col items-center justify-center px-6 py-8 text-center">
                      <div className="relative mb-5 h-14 w-28">
                        <div className="absolute left-0 top-3 grid h-10 w-10 -rotate-6 place-items-center rounded-[12px] border border-[var(--line)] bg-[var(--surface)] font-mono text-[11px] font-bold text-[var(--tertiary)] shadow-lg">
                          1.
                        </div>
                        <div className="absolute left-9 top-0 z-10 grid h-12 w-12 place-items-center rounded-[14px] border border-[var(--accent)] bg-[var(--accent-soft)] font-mono text-[14px] font-bold text-[var(--accent)] shadow-[0_10px_30px_rgba(59,92,255,0.2)]">
                          e4
                        </div>
                        <div className="absolute right-0 top-3 grid h-10 w-10 rotate-6 place-items-center rounded-[12px] border border-[var(--line)] bg-[var(--surface)] font-mono text-[11px] font-bold text-[var(--tertiary)] shadow-lg">
                          …
                        </div>
                      </div>
                      <div className="text-[14px] font-semibold tracking-[-0.01em]">
                        Your game story starts here
                      </div>
                      <p className="mt-1 max-w-[270px] text-[12px] leading-5 text-[var(--secondary)]">
                        Every move, capture and check will appear in this live scorebook.
                      </p>
                    </div>
                  ) : (
                    <div ref={moveListRef} className="max-h-[256px] overflow-y-auto px-3 py-3">
                      <div className="sticky top-0 z-10 grid grid-cols-[40px_1fr_1fr] gap-2 rounded-[10px] border border-[var(--line)] bg-[var(--surface)] px-2 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--tertiary)] shadow-sm">
                        <span />
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full border border-black/20 bg-white shadow-sm" />
                          White
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#161617] ring-1 ring-white/15" />
                          Black
                        </span>
                      </div>

                      <div className="mt-2 space-y-1">
                        {moveRows.map((row, index) => {
                          const isLatestRow = index === moveRows.length - 1;
                          return (
                            <div
                              key={row.number}
                              className={[
                                "grid grid-cols-[40px_1fr_1fr] gap-2 rounded-[11px] px-2 py-1.5 transition-colors",
                                isLatestRow
                                  ? "bg-[var(--accent-soft)]"
                                  : index % 2 === 0
                                    ? "bg-black/[0.025]"
                                    : "",
                              ].join(" ")}
                            >
                              <div className="flex items-center font-mono text-[11px] font-semibold text-[var(--tertiary)]">
                                {String(row.number).padStart(2, "0")}
                              </div>
                              {(["white", "black"] as const).map((color) => {
                                const notation = row[color];
                                const isLatestMove = isLatestRow && latestMoveColor === color;
                                return (
                                  <div
                                    key={color}
                                    className={[
                                      "flex min-h-9 items-center rounded-[9px] px-3 font-mono text-[13px] font-bold tracking-[-0.01em]",
                                      isLatestMove
                                        ? "bg-[var(--accent)] text-white shadow-[0_7px_20px_rgba(59,92,255,0.28)]"
                                        : notation
                                          ? "text-[var(--text)]"
                                          : "text-[var(--tertiary)]",
                                    ].join(" ")}
                                  >
                                    {notation ?? "—"}
                                    {isLatestMove && (
                                      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-t border-[var(--line)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.11em] text-[var(--tertiary)]">
                    <span>{moveLog.length} {moveLog.length === 1 ? "move" : "moves"} played</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      Live notation
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "analysis" && (
                <div className="min-h-[250px] p-6 text-[13px] text-[var(--secondary)]">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--tertiary)]">
                        Material pulse
                      </div>
                      <div className="text-[32px] font-semibold tracking-[-0.04em] text-[var(--text)]">
                        {evaluation > 0 ? "+" : ""}
                        {evaluation.toFixed(2)}
                      </div>
                    </div>
                    <span className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--secondary)]">
                      {evaluation === 0
                        ? "Even"
                        : evaluation > 0
                          ? "White leads"
                          : "Black leads"}
                    </span>
                  </div>
                  <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-[#161617] shadow-inner">
                    <div
                      className="absolute inset-y-0 bg-white transition-all duration-500"
                      style={{
                        left: 0,
                        width: `${Math.max(4, Math.min(96, 50 + evaluation * 4))}%`,
                      }}
                    />
                    <span className="absolute left-1/2 top-1/2 h-4 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--tertiary)]">
                    <span>White</span>
                    <span>Black</span>
                  </div>
                  <p className="mt-6 max-w-[360px] leading-5">
                    A live material snapshot. Positional strength, king safety and tactical threats are not included yet.
                  </p>
                </div>
              )}

              {activeTab === "info" && (
                <div className="grid min-h-[250px] grid-cols-2 gap-3 p-5">
                  {[
                    {
                      label: "Turn",
                      value: game.turn() === "w" ? "White" : "Black",
                    },
                    { label: "Moves", value: String(moveLog.length) },
                    {
                      label: "Status",
                      value:
                        gameStatus === "playing"
                          ? isCheck
                            ? "Check"
                            : "In progress"
                          : gameStatus,
                    },
                    { label: "Level", value: difficulty },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="relative overflow-hidden rounded-[14px] border border-[var(--line)] bg-black/[0.025] p-4"
                    >
                      <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--tertiary)]">
                        {item.label}
                      </div>
                      <div className="mt-2 text-[17px] font-semibold capitalize tracking-[-0.02em] text-[var(--text)]">
                        {item.value}
                      </div>
                      <div className="absolute -bottom-5 -right-5 h-12 w-12 rounded-full bg-[var(--accent)] opacity-[0.07] blur-xl" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 rounded-[16px] border border-[var(--line)] bg-[var(--surface)] p-6 text-center">
              <div className="text-[15px] font-semibold">
                {statusHeading}
              </div>
              <p className="mt-1 text-[13px] text-[var(--secondary)]">
                {statusDetail}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
