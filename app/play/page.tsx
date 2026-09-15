"use client";

import Link from "next/link";
import { useState } from "react";
import { Chess, type Square } from "chess.js";
import { Chessboard } from "react-chessboard";
import ThemeToggle from "../theme-toggle";

type PlayColor = "white" | "black";
type Difficulty = "easy" | "medium" | "hard";
type GameStatus =
  | "playing"
  | "checkmate"
  | "stalemate"
  | "draw"
  | "resigned";

type MoveEntry = {
  to: string;
  color: PlayColor;
};

type AppliedMove = {
  from: string;
  to: string;
  promotion?: string;
};

type MoveRow = {
  number: number;
  white: string | null;
  black: string | null;
};

const DEPTH_BY_DIFFICULTY: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
};

const PIECE_VALUES: Record<string, number> = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 0,
};

const MATE_SCORE = 100000;

function evaluateBoard(game: Chess): number {
  if (game.isCheckmate()) {
    return game.turn() === "w" ? -MATE_SCORE : MATE_SCORE;
  }

  if (game.isDraw() || game.isStalemate()) {
    return 0;
  }

  let score = 0;

  for (const row of game.board()) {
    for (const square of row) {
      if (!square) continue;

      const value = PIECE_VALUES[square.type];
      score += square.color === "w" ? value : -value;
    }
  }

  return score;
}

function minimax(
  game: Chess,
  depth: number,
  alpha: number,
  beta: number,
  maximizing: boolean
): number {
  if (depth === 0 || game.isGameOver()) {
    return evaluateBoard(game);
  }

  const moves = game.moves({ verbose: true });

  if (maximizing) {
    let best = -Infinity;

    for (const move of moves) {
      game.move(move);
      best = Math.max(
        best,
        minimax(game, depth - 1, alpha, beta, false)
      );
      game.undo();

      alpha = Math.max(alpha, best);
      if (beta <= alpha) break;
    }

    return best;
  }

  let best = Infinity;

  for (const move of moves) {
    game.move(move);
    best = Math.min(
      best,
      minimax(game, depth - 1, alpha, beta, true)
    );
    game.undo();

    beta = Math.min(beta, best);
    if (beta <= alpha) break;
  }

  return best;
}

function pickAiMove(game: Chess, depth: number) {
  const aiIsWhite = game.turn() === "w";
  const moves = game.moves({ verbose: true });

  let bestMove = moves[0];
  let bestScore = aiIsWhite ? -Infinity : Infinity;

  for (const move of moves) {
    game.move(move);
    const score = minimax(
      game,
      depth - 1,
      -Infinity,
      Infinity,
      !aiIsWhite
    );
    game.undo();

    if (aiIsWhite && score > bestScore) {
      bestScore = score;
      bestMove = move;
    } else if (!aiIsWhite && score < bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
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
        white: entry.to,
        black: null,
      };
      rows.push(row);
      pendingWhiteRow = row;
    } else if (pendingWhiteRow) {
      pendingWhiteRow.black = entry.to;
      pendingWhiteRow = null;
    } else {
      rows.push({
        number: rows.length + 1,
        white: null,
        black: entry.to,
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

  const aiColor: PlayColor =
    playerColor === "white" ? "black" : "white";

  const gameOver = gameStatus !== "playing";

  function startAiMoveIfNeeded(nextGame: Chess) {
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
        const aiGame = new Chess(nextGame.fen());
        const move = pickAiMove(
          aiGame,
          DEPTH_BY_DIFFICULTY[difficulty]
        );

        if (!move) {
          setIsAiThinking(false);
          return;
        }

        aiGame.move(move);

        setGame(aiGame);
        setLastMove({ from: move.from, to: move.to });
        setMoveLog((previous) => [
          ...previous,
          { to: move.to, color: aiColor },
        ]);
        setHistory((previous) => [
          ...previous,
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

    if (getChessColor(color) !== "w") {
      // AI plays white's opening move.
      const aiFirst = color === "black";
      if (aiFirst) {
        startAiMoveForColor(fresh, "white");
      }
    }
  }

  function startAiMoveForColor(
    baseGame: Chess,
    thinkingColor: PlayColor
  ) {
    setIsAiThinking(true);

    setTimeout(() => {
      const aiGame = new Chess(baseGame.fen());
      const move = pickAiMove(
        aiGame,
        DEPTH_BY_DIFFICULTY[difficulty]
      );

      if (!move) {
        setIsAiThinking(false);
        return;
      }

      aiGame.move(move);

      setGame(aiGame);
      setLastMove({ from: move.from, to: move.to });
      setMoveLog((previous) => [
        ...previous,
        { to: move.to, color: thinkingColor },
      ]);
      setHistory((previous) => [
        ...previous,
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

    const gameCopy = new Chess(game.fen());

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

    setGame(gameCopy);
    setLastMove({ from, to });
    setSelectedSquare(null);
    setMoveLog((previous) => [
      ...previous,
      { to: move.to, color: playerColor },
    ]);
    setHistory((previous) => [
      ...previous,
      {
        from: move.from,
        to: move.to,
        promotion: move.promotion,
      },
    ]);

    startAiMoveIfNeeded(gameCopy);

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
    } catch {
      // Clipboard unavailable — ignore.
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
              "inset 0 0 0 5px rgba(59, 92, 255, 0.28)",
          }
        : {
            ...existing,
            cursor: "pointer",
            backgroundImage:
              "radial-gradient(circle at center, rgba(59, 92, 255, 0.52) 0, rgba(59, 92, 255, 0.52) 12%, transparent 13%)",
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
  const emptyMoveRows: MoveRow[] =
    moveRows.length === 0
      ? [{ number: 1, white: null, black: null }]
      : moveRows;

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

  const evaluation = evaluateBoard(game) / 100;

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
            <Link
              href="/"
              className="control text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Back to puzzles
            </Link>
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
            <label className="rounded-[10px] border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2">
              <span>
                <span className="block text-[10px] uppercase tracking-[0.1em] text-[var(--tertiary)]">
                  Difficulty
                </span>
                <select
                  value={difficulty}
                  disabled={
                    isAiThinking && moveLog.length > 0
                  }
                  onChange={(event) =>
                    setDifficulty(
                      event.target.value as Difficulty
                    )
                  }
                  className="block bg-transparent text-[13px] font-semibold text-[var(--text)] outline-none"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">
                    Medium
                  </option>
                  <option value="hard">Hard</option>
                </select>
              </span>
            </label>

            <label className="rounded-[10px] border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2">
              <span>
                <span className="block text-[10px] uppercase tracking-[0.1em] text-[var(--tertiary)]">
                  Play as
                </span>
                <select
                  value={playerColor}
                  onChange={(event) =>
                    newGame(
                      event.target.value as PlayColor
                    )
                  }
                  className="block bg-transparent text-[13px] font-semibold text-[var(--text)] outline-none"
                >
                  <option value="white">White</option>
                  <option value="black">Black</option>
                </select>
              </span>
            </label>

            <button
              type="button"
              onClick={() => newGame()}
              className="control rounded-[10px] border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-[13px] font-semibold"
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

            <div className="mt-4 rounded-[16px] border border-[var(--line)] bg-[var(--surface)] p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex rounded-[10px] bg-black/[0.045] p-[3px]">
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
                        "control rounded-[7px] px-3 py-1.5 text-[12px] font-semibold capitalize",
                        activeTab === tab
                          ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                          : "text-[var(--secondary)]",
                      ].join(" ")}
                    >
                      {tab === "info"
                        ? "Game Info"
                        : tab}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={copyPgn}
                    className="control text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
                  >
                    Copy PGN
                  </button>
                  <button
                    type="button"
                    onClick={() => newGame()}
                    className="control text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {activeTab === "moves" && (
                <div className="max-h-[160px] overflow-y-auto">
                  <table className="w-full table-fixed border-collapse text-[13px]">
                    <thead className="sticky top-0 bg-[var(--surface)]">
                      <tr>
                        <th className="w-[28px]" />
                        <th className="w-[calc(50%-14px)] pb-2 text-left text-[12px] font-semibold text-[var(--secondary)]">
                          White
                        </th>
                        <th className="w-[calc(50%-14px)] pb-2 text-left text-[12px] font-semibold text-[var(--secondary)]">
                          Black
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {emptyMoveRows.map((row) => (
                        <tr
                          key={row.number}
                          className="border-t border-[var(--line)]"
                        >
                          <td className="py-1.5 text-[12px] text-[var(--tertiary)]">
                            {row.number}
                          </td>
                          <td className="py-1.5 font-mono">
                            {row.white ?? (
                              <span className="text-[var(--tertiary)]">
                                -
                              </span>
                            )}
                          </td>
                          <td className="py-1.5 font-mono">
                            {row.black ?? (
                              <span className="text-[var(--tertiary)]">
                                -
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "analysis" && (
                <div className="text-[13px] text-[var(--secondary)]">
                  <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--tertiary)]">
                    Material balance
                  </div>
                  <div className="text-[22px] font-semibold text-[var(--text)]">
                    {evaluation > 0 ? "+" : ""}
                    {evaluation.toFixed(2)}
                  </div>
                  <p className="mt-2">
                    Positive favors White, negative
                    favors Black. This is a simple
                    material count, not a full engine
                    evaluation.
                  </p>
                </div>
              )}

              {activeTab === "info" && (
                <div className="space-y-2 text-[13px] text-[var(--secondary)]">
                  <div>
                    Turn:{" "}
                    <strong className="text-[var(--text)]">
                      {game.turn() === "w"
                        ? "White"
                        : "Black"}
                    </strong>
                  </div>
                  <div>
                    Moves played:{" "}
                    <strong className="text-[var(--text)]">
                      {moveLog.length}
                    </strong>
                  </div>
                  <div>
                    Status:{" "}
                    <strong className="text-[var(--text)]">
                      {gameStatus === "playing"
                        ? isCheck
                          ? "Check"
                          : "In progress"
                        : gameStatus}
                    </strong>
                  </div>
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
