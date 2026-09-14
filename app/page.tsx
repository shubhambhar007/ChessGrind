"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Chess,
  type Square,
} from "chess.js";
import { Chessboard } from "react-chessboard";
import ThemeToggle from "./theme-toggle";
import VisitorCounter from "./visitor-counter";
import {
  puzzles,
  type PuzzleDifficulty,
} from "@/data/puzzles";

type MoveLog = {
  san: string;
  player: "you" | "opponent";
};

type LastMove = {
  from: string;
  to: string;
} | null;

type WrongMove = {
  from: string;
  to: string;
} | null;

type PendingPromotion = {
  sourceSquare: string;
  targetSquare: string;
} | null;

type TrainingMode =
  | PuzzleDifficulty
  | "mixed";

type SessionMode =
  | "endless"
  | "ten"
  | "learn";

type ColorPreference =
  | "either"
  | "white"
  | "black";

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
  themes: Record<string, ThemeProgress>;
};

type SessionStats = {
  completed: number;
  solved: number;
  skipped: number;
  correctMoves: number;
  wrongMoves: number;
  hintsUsed: number;
  themes: Record<string, ThemeProgress>;
};

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

const DEFAULT_SESSION_STATS: SessionStats = {
  completed: 0,
  solved: 0,
  skipped: 0,
  correctMoves: 0,
  wrongMoves: 0,
  hintsUsed: 0,
  themes: {},
};

const SESSION_LENGTH = 10;
const RECENT_PUZZLE_LIMIT = 12;

const PROGRESS_KEY =
  "chessgrind-progress-v1";

const DIFFICULTY_KEY =
  "chessgrind-difficulty";

const ADAPTIVE_KEY =
  "chessgrind-adaptive-training";

const COLOR_PREFERENCE_KEY =
  "chessgrind-color-preference";

const TRAINING_MODES: {
  value: TrainingMode;
  label: string;
}[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
  { value: "mixed", label: "Mixed" },
];

const SESSION_MODES: {
  value: SessionMode;
  label: string;
}[] = [
  {
    value: "endless",
    label: "Endless",
  },
  {
    value: "ten",
    label: "10 Puzzle Session",
  },
  {
    value: "learn",
    label: "Learn",
  },
];

const COLOR_PREFERENCES: {
  value: ColorPreference;
  label: string;
}[] = [
  { value: "either", label: "Either" },
  { value: "white", label: "White" },
  { value: "black", label: "Black" },
];

const TRAINABLE_THEMES = new Set([
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

const PROMOTION_OPTIONS = [
  {
    value: "q",
    label: "Queen",
    whiteSymbol: "♕",
    blackSymbol: "♛",
  },
  {
    value: "r",
    label: "Rook",
    whiteSymbol: "♖",
    blackSymbol: "♜",
  },
  {
    value: "b",
    label: "Bishop",
    whiteSymbol: "♗",
    blackSymbol: "♝",
  },
  {
    value: "n",
    label: "Knight",
    whiteSymbol: "♘",
    blackSymbol: "♞",
  },
];

function applyUciMove(
  game: Chess,
  uci: string
) {
  const from = uci.slice(0, 2);
  const to = uci.slice(2, 4);

  const promotion =
    uci.length > 4
      ? uci[4]
      : undefined;

  if (promotion) {
    return game.move({
      from,
      to,
      promotion,
    });
  }

  return game.move({
    from,
    to,
  });
}

function buildPuzzlePosition(
  puzzleIndex: number
) {
  const puzzle =
    puzzles[puzzleIndex];

  const game =
    new Chess(puzzle.fen);

  applyUciMove(
    game,
    puzzle.moves[0]
  );

  return game;
}

function getPlayerChessColor(
  playerColor:
    | "white"
    | "black"
) {
  return playerColor ===
    "white"
    ? "w"
    : "b";
}

function isPlayersPiece(
  game: Chess,
  square: string,
  playerColor:
    | "white"
    | "black"
) {
  const piece =
    game.get(
      square as Square
    );

  if (!piece) {
    return false;
  }

  return (
    piece.color ===
    getPlayerChessColor(
      playerColor
    )
  );
}

function getLegalMoves(
  game: Chess,
  square: string | null
) {
  if (!square) {
    return [];
  }

  try {
    return game.moves({
      square:
        square as Square,
      verbose: true,
    });
  } catch {
    return [];
  }
}

function isPromotionMove(
  game: Chess,
  sourceSquare: string,
  targetSquare: string
) {
  const piece =
    game.get(
      sourceSquare as Square
    );

  if (
    !piece ||
    piece.type !== "p"
  ) {
    return false;
  }

  const rank =
    targetSquare[1];

  if (
    piece.color === "w"
  ) {
    return rank === "8";
  }

  return rank === "1";
}

function isMateInOnePuzzle(
  themes: string[]
) {
  return themes.includes(
    "mateIn1"
  );
}

function isAcceptedMove(
  currentGame: Chess,
  attemptedMove: string,
  expectedMove: string,
  themes: string[]
) {
  if (
    attemptedMove ===
    expectedMove
  ) {
    return true;
  }

  if (
    !isMateInOnePuzzle(
      themes
    )
  ) {
    return false;
  }

  const testGame =
    new Chess(
      currentGame.fen()
    );

  try {
    const move =
      applyUciMove(
        testGame,
        attemptedMove
      );

    if (!move) {
      return false;
    }

    return (
      testGame.isCheckmate()
    );
  } catch {
    return false;
  }
}

function getPuzzleGoal(
  themes: string[]
) {
  const mateTheme =
    themes.find((theme) =>
      /^mateIn\d+$/i.test(
        theme
      )
    );

  if (mateTheme) {
    const number =
      mateTheme.match(
        /\d+/
      )?.[0];

    return `Mate in ${number}`;
  }

  if (
    themes.includes("mate")
  ) {
    return "Find the mate";
  }

  if (
    themes.includes("fork")
  ) {
    return "Find the fork";
  }

  if (
    themes.includes("pin")
  ) {
    return "Find the pin";
  }

  if (
    themes.includes("skewer")
  ) {
    return "Find the skewer";
  }

  if (
    themes.includes(
      "promotion"
    )
  ) {
    return "Find the promotion";
  }

  if (
    themes.includes(
      "discoveredAttack"
    )
  ) {
    return "Find the discovered attack";
  }

  if (
    themes.includes(
      "sacrifice"
    )
  ) {
    return "Find the sacrifice";
  }

  return "Find the best move";
}

const PIECE_VALUES: Record<
  string,
  number
> = {
  p: 1,
  n: 3,
  b: 3,
  r: 5,
  q: 9,
  k: 0,
};

const PIECE_NAMES: Record<
  string,
  string
> = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king",
};

const THEME_LEARN_HINTS: Record<
  string,
  string
> = {
  fork: "There's a move here that attacks two enemy pieces at once — look for it.",
  pin: "Look for a move that pins an enemy piece to something more valuable behind it.",
  skewer: "Look for a move that forces a valuable piece to move and exposes what's behind it.",
  discoveredAttack: "Look for a move that unleashes an attack by moving a piece out of the way.",
  discoveredCheck: "Look for a move that opens a check by moving a piece out of the way.",
  doubleCheck: "Look for a move that checks the king with two pieces at once.",
  deflection: "Look for a move that forces a defending piece to abandon its job.",
  attraction: "Look for a move that lures an enemy piece onto a bad square.",
  trappedPiece: "One of the opponent's pieces has nowhere safe to go — look for the move that attacks it.",
  hangingPiece: "There's an undefended enemy piece somewhere on the board — look for the move that wins it.",
  clearance: "Look for a move that clears a square or line so another piece can strike.",
  xRayAttack: "Look along a file, rank, or diagonal for a piece attacking through another piece.",
  intermezzo: "There's a bigger threat available before the obvious recapture — look for it.",
  zugzwang: "The opponent doesn't want to move at all here — look for a quiet move that keeps the pressure on.",
};

function getMateLearnHint(
  themes: string[]
) {
  const hasMateTheme =
    themes.some((theme) =>
      /^mateIn\d+$/i.test(theme)
    ) ||
    themes.includes("mate");

  if (!hasMateTheme) {
    return null;
  }

  return "This position has a forced mate — the winning move is usually the most forcing one (often a check).";
}

function explainWrongMove(
  game: Chess,
  attemptedMove: string,
  themes: string[]
): string {
  const sourceSquare =
    attemptedMove.slice(
      0,
      2
    ) as Square;

  const targetSquare =
    attemptedMove.slice(
      2,
      4
    ) as Square;

  const movedPiece = game.get(
    sourceSquare
  );

  const testGame = new Chess(
    game.fen()
  );

  let applied;

  try {
    applied = applyUciMove(
      testGame,
      attemptedMove
    );
  } catch {
    applied = null;
  }

  if (!applied || !movedPiece) {
    return "That's not a legal move for that piece from here.";
  }

  const opponentReplies =
    testGame.moves({
      verbose: true,
    });

  const captureOfMovedPiece =
    opponentReplies.find(
      (reply) =>
        reply.to ===
          targetSquare &&
        reply.captured
    );

  if (captureOfMovedPiece) {
    const afterCapture =
      new Chess(
        testGame.fen()
      );

    afterCapture.move({
      from: captureOfMovedPiece.from,
      to: captureOfMovedPiece.to,
      promotion:
        captureOfMovedPiece.promotion,
    });

    const canRecapture =
      afterCapture
        .moves({
          verbose: true,
        })
        .some(
          (reply) =>
            reply.to ===
              targetSquare &&
            reply.captured
        );

    const movedValue =
      PIECE_VALUES[
        movedPiece.type
      ] ?? 0;

    const attackerValue =
      PIECE_VALUES[
        captureOfMovedPiece
          .piece
      ] ?? 0;

    const pieceLabel =
      PIECE_NAMES[
        movedPiece.type
      ] ?? "piece";

    if (!canRecapture) {
      return `This leaves your ${pieceLabel} on ${targetSquare} hanging — the opponent can just capture it for free.`;
    }

    if (
      movedValue >
      attackerValue + 1
    ) {
      return `This lets the opponent win your ${pieceLabel} for much less material in return.`;
    }
  }

  const mateHint =
    getMateLearnHint(themes);

  if (
    mateHint &&
    !testGame.inCheck()
  ) {
    return mateHint;
  }

  for (const theme of themes) {
    if (
      THEME_LEARN_HINTS[theme]
    ) {
      return THEME_LEARN_HINTS[
        theme
      ];
    }
  }

  return "That move doesn't solve the puzzle — look for a more forcing continuation (a check, a capture, or a threat the opponent can't answer).";
}

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

function getPieceName(
  pieceType: string
) {
  const pieces:
    Record<string, string> = {
      p: "pawn",
      n: "knight",
      b: "bishop",
      r: "rook",
      q: "queen",
      k: "king",
    };

  return (
    pieces[pieceType] ||
    "piece"
  );
}

function getHintText(
  themes: string[]
) {
  if (
    themes.some(
      (theme) =>
        theme.startsWith(
          "mateIn"
        )
    ) ||
    themes.includes("mate")
  ) {
    return "Checks are the most forcing moves. Start there.";
  }

  if (
    themes.includes("fork")
  ) {
    return "Look for one move that attacks more than one valuable target.";
  }

  if (
    themes.includes(
      "discoveredAttack"
    )
  ) {
    return "A piece may be blocking an attack from another piece behind it.";
  }

  if (
    themes.includes("pin")
  ) {
    return "Look for a piece that cannot move without exposing something more valuable.";
  }

  if (
    themes.includes(
      "skewer"
    )
  ) {
    return "Try forcing the more valuable piece away first.";
  }

  if (
    themes.includes(
      "promotion"
    )
  ) {
    return "Look closely at pawns that are near the final rank.";
  }

  return "Start by calculating checks, captures and direct threats.";
}

function getLesson(
  themes: string[]
) {
  if (
    themes.some(
      (theme) =>
        theme.startsWith(
          "mateIn"
        )
    ) ||
    themes.includes("mate")
  ) {
    return "Forcing checks limit the opponent's replies, making the winning sequence easier to calculate.";
  }

  if (
    themes.includes("fork")
  ) {
    return "A fork attacks multiple targets at once. The opponent often cannot save everything.";
  }

  if (
    themes.includes(
      "discoveredAttack"
    )
  ) {
    return "Moving one piece can uncover the attacking line of another piece, creating threats instantly.";
  }

  if (
    themes.includes("pin")
  ) {
    return "Pinned pieces have restricted movement because moving them exposes something more valuable.";
  }

  if (
    themes.includes(
      "skewer"
    )
  ) {
    return "A skewer attacks the more valuable piece first, then wins the piece behind it.";
  }

  if (
    themes.includes(
      "promotion"
    )
  ) {
    return "Passed pawns become increasingly dangerous near promotion and can completely change tactical priorities.";
  }

  return "Strong tactical play starts by calculating forcing moves before quieter alternatives.";
}

function getModePuzzleCount(
  mode: TrainingMode,
  colorPreference: ColorPreference
) {
  return puzzles.filter(
    (puzzle) =>
      (mode === "mixed" ||
        puzzle.difficulty ===
          mode) &&
      puzzleMatchesColor(
        puzzle,
        colorPreference
      )
  ).length;
}

function puzzleMatchesColor(
  puzzle: (typeof puzzles)[number],
  colorPreference: ColorPreference
) {
  if (
    colorPreference === "either"
  ) {
    return true;
  }

  const game = new Chess(
    puzzle.fen
  );

  applyUciMove(
    game,
    puzzle.moves[0]
  );

  return (
    game.turn() ===
    (colorPreference === "white"
      ? "w"
      : "b")
  );
}

function getThemeWeaknessScore(
  theme: string,
  themes: Record<
    string,
    ThemeProgress
  >
) {
  const stats =
    themes[theme];

  if (!stats) {
    return 0.35;
  }

  const solved =
    Math.max(
      stats.solved,
      1
    );

  return (
    stats.wrongMoves * 2 +
    stats.hintsUsed
  ) / solved;
}

function getPuzzleAdaptiveWeight(
  themes: string[],
  progress: Progress
) {
  const usefulThemes =
    themes.filter(
      (theme) =>
        TRAINABLE_THEMES.has(
          theme
        )
    );

  if (
    usefulThemes.length ===
    0
  ) {
    return 1;
  }

  let strongestWeakness = 0;

  for (
    const theme of
    usefulThemes
  ) {
    strongestWeakness =
      Math.max(
        strongestWeakness,
        getThemeWeaknessScore(
          theme,
          progress.themes
        )
      );
  }

  return (
    1 +
    Math.min(
      strongestWeakness,
      4
    ) *
      1.7
  );
}

function weightedRandomIndex(
  candidates: {
    index: number;
    weight: number;
  }[]
) {
  const total =
    candidates.reduce(
      (
        sum,
        candidate
      ) =>
        sum +
        candidate.weight,
      0
    );

  let roll =
    Math.random() *
    total;

  for (
    const candidate of
    candidates
  ) {
    roll -=
      candidate.weight;

    if (
      roll <= 0
    ) {
      return candidate.index;
    }
  }

  return (
    candidates[
      candidates.length - 1
    ]?.index ?? 0
  );
}

function choosePuzzleIndex(
  mode: TrainingMode,
  colorPreference: ColorPreference,
  currentIndex: number,
  recentIds: string[],
  progress: Progress,
  adaptive: boolean
) {
  const eligible =
    puzzles
      .map(
        (
          puzzle,
          index
        ) => ({
          puzzle,
          index,
        })
      )
      .filter(
        ({ puzzle }) =>
          (mode === "mixed" ||
            puzzle.difficulty ===
              mode) &&
          puzzleMatchesColor(
            puzzle,
            colorPreference
          )
      );

  let candidates =
    eligible.filter(
      ({
        puzzle,
        index,
      }) =>
        index !==
          currentIndex &&
        !recentIds.includes(
          puzzle.id
        )
    );

  if (
    candidates.length === 0
  ) {
    candidates =
      eligible.filter(
        ({ index }) =>
          index !==
          currentIndex
      );
  }

  if (
    candidates.length === 0
  ) {
    candidates =
      eligible;
  }

  if (
    !adaptive ||
    progress.solved < 3
  ) {
    return (
      candidates[
        Math.floor(
          Math.random() *
            candidates.length
        )
      ]?.index ??
      currentIndex
    );
  }

  return weightedRandomIndex(
    candidates.map(
      ({
        puzzle,
        index,
      }) => ({
        index,

        weight:
          getPuzzleAdaptiveWeight(
            puzzle.themes,
            progress
          ),
      })
    )
  );
}

function getAccuracy(
  correct: number,
  wrong: number
) {
  const total =
    correct + wrong;

  if (
    total === 0
  ) {
    return 100;
  }

  return Math.round(
    (correct / total) *
      100
  );
}

function getWeakestThemeFromStats(
  themes: Record<
    string,
    ThemeProgress
  >
) {
  let weakest:
    | {
        theme: string;
        score: number;
      }
    | null = null;

  for (
    const [
      theme,
      stats,
    ] of Object.entries(
      themes
    )
  ) {
    if (
      !TRAINABLE_THEMES.has(
        theme
      ) ||
      stats.solved < 1
    ) {
      continue;
    }

    const score =
      getThemeWeaknessScore(
        theme,
        themes
      );

    if (
      !weakest ||
      score >
        weakest.score
    ) {
      weakest = {
        theme,
        score,
      };
    }
  }

  return (
    weakest?.theme ??
    null
  );
}

function getStrongestThemeFromStats(
  themes: Record<
    string,
    ThemeProgress
  >
) {
  let strongest:
    | {
        theme: string;
        score: number;
      }
    | null = null;

  for (
    const [
      theme,
      stats,
    ] of Object.entries(
      themes
    )
  ) {
    if (
      !TRAINABLE_THEMES.has(
        theme
      ) ||
      stats.solved < 1
    ) {
      continue;
    }

    const score =
      getThemeWeaknessScore(
        theme,
        themes
      );

    if (
      !strongest ||
      score <
        strongest.score
    ) {
      strongest = {
        theme,
        score,
      };
    }
  }

  return (
    strongest?.theme ??
    null
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

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const containerRef =
    useRef<HTMLSpanElement | null>(
      null
    );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(
      event: PointerEvent
    ) {
      const target =
        event.target;

      if (
        !(target instanceof Node)
      ) {
        return;
      }

      if (
        containerRef.current?.contains(
          target
        )
      ) {
        return;
      }

      setIsOpen(false);
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key ===
        "Escape"
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  if (!explanation) {
    return (
      <span>
        {formatTheme(theme)}
      </span>
    );
  }

  return (
    <span
      ref={containerRef}
      className="group relative inline-flex items-center"
    >
      <button
        type="button"
        aria-expanded={
          isOpen
        }
        aria-label={`Explain ${formatTheme(
          theme
        )}`}
        onClick={(
          event
        ) => {
          event.stopPropagation();

          setIsOpen(
            (current) =>
              !current
          );
        }}
        className="inline-flex touch-manipulation items-center gap-1 border-b border-dotted border-black/20 text-left focus:outline-none"
      >
        {formatTheme(theme)}

        <span className="text-[9px] text-[var(--tertiary)]">
          ⓘ
        </span>
      </button>

      <span
        role="tooltip"
        className={[
          `
            fixed
            inset-x-4
            bottom-5
            z-[200]
            mx-auto
            max-w-[340px]
            rounded-[14px]
            border
            border-black/[0.08]
            bg-[var(--surface)]
            px-4
            py-3.5
            text-left
            shadow-[0_16px_50px_rgba(0,0,0,0.16)]
            transition
            duration-150

            sm:absolute
            sm:inset-x-auto
            sm:bottom-[calc(100%+9px)]
            sm:left-1/2
            sm:w-[230px]
            sm:max-w-none
            sm:-translate-x-1/2
            sm:rounded-[10px]
            sm:px-3.5
            sm:py-3
            sm:shadow-[0_10px_30px_rgba(0,0,0,0.10)]
          `,

          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : `
                pointer-events-none
                translate-y-2
                opacity-0

                sm:group-hover:pointer-events-auto
                sm:group-hover:translate-y-0
                sm:group-hover:opacity-100

                sm:group-focus-within:pointer-events-auto
                sm:group-focus-within:translate-y-0
                sm:group-focus-within:opacity-100
              `,
        ].join(" ")}
      >
        <span className="flex items-start justify-between gap-4">
          <span>
            <span className="block text-[12px] font-semibold">
              {formatTheme(
                theme
              )}
            </span>

            <span className="mt-1 block text-[12px] leading-5 text-[var(--secondary)]">
              {explanation}
            </span>
          </span>

          <button
            type="button"
            aria-label="Close explanation"
            onClick={(
              event
            ) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[15px] text-[var(--tertiary)] hover:bg-black/[0.05] sm:hidden"
          >
            ×
          </button>
        </span>
      </span>
    </span>
  );
}

function PlayerColorIndicator({
  playerColor,
}: {
  playerColor:
    | "white"
    | "black";
}) {
  const isWhite =
    playerColor ===
    "white";

  return (
    <div className="flex items-center gap-2.5">
      <span
        className={[
          "h-[13px] w-[13px] rounded-full",
          isWhite
            ? "border border-black/20 bg-white shadow-sm"
            : "bg-[#161617]",
        ].join(" ")}
      />

      <span className="text-[12px] font-bold uppercase tracking-[0.13em] text-[var(--text)]">
        You are{" "}
        {isWhite
          ? "White"
          : "Black"}
      </span>

      <span className="text-[var(--tertiary)]">
        ·
      </span>

      <span className="text-[11px] font-medium text-[var(--secondary)]">
        {isWhite
          ? "White pieces only"
          : "Black pieces only"}
      </span>
    </div>
  );
}

export default function Home() {
  const [
    puzzleIndex,
    setPuzzleIndex,
  ] = useState(0);

  const [
    difficulty,
    setDifficulty,
  ] =
    useState<TrainingMode>(
      "mixed"
    );

  const [
    sessionMode,
    setSessionMode,
  ] =
    useState<SessionMode>(
      "endless"
    );

  const [
    colorPreference,
    setColorPreference,
  ] = useState<ColorPreference>(
    "either"
  );

  const [
    sessionStats,
    setSessionStats,
  ] =
    useState<SessionStats>(
      DEFAULT_SESSION_STATS
    );

  const [
    sessionComplete,
    setSessionComplete,
  ] = useState(false);

  const [
    adaptiveTraining,
    setAdaptiveTraining,
  ] = useState(true);

  const [
    moveIndex,
    setMoveIndex,
  ] = useState(1);

  const [
    game,
    setGame,
  ] = useState(() =>
    buildPuzzlePosition(0)
  );

  const [
    message,
    setMessage,
  ] = useState(
    "Find the strongest move."
  );

  const [
    solved,
    setSolved,
  ] = useState(false);

  const [
    isOpponentMoving,
    setIsOpponentMoving,
  ] = useState(false);

  const [
    moveLog,
    setMoveLog,
  ] =
    useState<MoveLog[]>([]);

  const [
    hintLevel,
    setHintLevel,
  ] = useState(0);

  const [
    selectedSquare,
    setSelectedSquare,
  ] =
    useState<string | null>(
      null
    );

  const [
    lastMove,
    setLastMove,
  ] =
    useState<LastMove>(null);

  const [
    wrongMove,
    setWrongMove,
  ] =
    useState<WrongMove>(null);

  const [
    isWrong,
    setIsWrong,
  ] = useState(false);

  const [
    wrongExplanation,
    setWrongExplanation,
  ] = useState<string | null>(
    null
  );

  const [
    pendingPromotion,
    setPendingPromotion,
  ] =
    useState<PendingPromotion>(
      null
    );

  const [
    recentPuzzleIds,
    setRecentPuzzleIds,
  ] = useState<string[]>([]);

  const [
    puzzleWrongMoves,
    setPuzzleWrongMoves,
  ] = useState(0);

  const [
    puzzleHintsUsed,
    setPuzzleHintsUsed,
  ] = useState(0);

  const [
    progress,
    setProgress,
  ] =
    useState<Progress>(
      DEFAULT_PROGRESS
    );

  const [
    progressLoaded,
    setProgressLoaded,
  ] = useState(false);

  const hasLoadedPreferences =
    useRef(false);

  const wrongTimer =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);

  /*
   * Wooden move sound.
   */
  const moveSoundRef =
    useRef<HTMLAudioElement | null>(
      null
    );

  const puzzle =
    puzzles[puzzleIndex];

  const initialGame =
    useMemo(
      () =>
        buildPuzzlePosition(
          puzzleIndex
        ),
      [puzzleIndex]
    );

  const playerColor:
    "white" | "black" =
    initialGame.turn() ===
    "w"
      ? "white"
      : "black";

  const goal =
    getPuzzleGoal(
      puzzle.themes
    );

  const availablePuzzleCount =
    getModePuzzleCount(
      difficulty,
      colorPreference
    );

  const overallAccuracy =
    getAccuracy(
      progress.correctMoves,
      progress.wrongMoves
    );

  const sessionAccuracy =
    getAccuracy(
      sessionStats.correctMoves,
      sessionStats.wrongMoves
    );

  const weakestTheme =
    getWeakestThemeFromStats(
      progress.themes
    );

  const sessionWeakestTheme =
    getWeakestThemeFromStats(
      sessionStats.themes
    );

  const sessionStrongestTheme =
    getStrongestThemeFromStats(
      sessionStats.themes
    );

  const visibleThemes =
    puzzle.themes
      .filter(
        (theme) =>
          TRAINABLE_THEMES.has(
            theme
          ) &&
          !theme.startsWith(
            "mateIn"
          ) &&
          theme !== "mate"
      )
      .slice(0, 2);

  const legalMoves =
    useMemo(
      () =>
        getLegalMoves(
          game,
          selectedSquare
        ),
      [
        game,
        selectedSquare,
      ]
    );

  /*
   * Preload the wooden piece sound once.
   */
  useEffect(() => {
    const audio =
      new Audio(
        "/sounds/wood-knock.wav"
      );

    audio.preload = "auto";
    audio.volume = 0.34;

    moveSoundRef.current =
      audio;

    return () => {
      audio.pause();

      moveSoundRef.current =
        null;
    };
  }, []);

  function playMoveSound() {
    const audio =
      moveSoundRef.current;

    if (!audio) {
      return;
    }

    try {
      audio.pause();
      audio.currentTime = 0;

      void audio
        .play()
        .catch(() => {
          /*
           * Browsers may block audio
           * until user interaction.
           * Never let that affect chess.
           */
        });
    } catch {
      // Sound must never break gameplay.
    }
  }

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
            saved.themes || {},
        });
      }
    } catch {}

    setProgressLoaded(true);
  }, []);

  useEffect(() => {
    const savedDifficulty =
      window.localStorage.getItem(
        DIFFICULTY_KEY
      );

    const validDifficulty =
      savedDifficulty ===
        "easy" ||
      savedDifficulty ===
        "medium" ||
      savedDifficulty ===
        "hard" ||
      savedDifficulty ===
        "mixed";

    if (
      validDifficulty
    ) {
      setDifficulty(
        savedDifficulty as TrainingMode
      );
    }

    const savedAdaptive =
      window.localStorage.getItem(
        ADAPTIVE_KEY
      );

    if (
      savedAdaptive ===
      "false"
    ) {
      setAdaptiveTraining(
        false
      );
    }

    const savedColorPreference =
      window.localStorage.getItem(
        COLOR_PREFERENCE_KEY
      );

    if (
      savedColorPreference ===
        "either" ||
      savedColorPreference ===
        "white" ||
      savedColorPreference ===
        "black"
    ) {
      setColorPreference(
        savedColorPreference
      );
    }

    hasLoadedPreferences.current =
      true;
  }, []);

  useEffect(() => {
    if (
      !hasLoadedPreferences.current
    ) {
      return;
    }

    window.localStorage.setItem(
      DIFFICULTY_KEY,
      difficulty
    );
  }, [difficulty]);

  useEffect(() => {
    if (
      !hasLoadedPreferences.current
    ) {
      return;
    }

    window.localStorage.setItem(
      ADAPTIVE_KEY,
      String(
        adaptiveTraining
      )
    );
  }, [adaptiveTraining]);

  useEffect(() => {
    if (
      !hasLoadedPreferences.current
    ) {
      return;
    }

    window.localStorage.setItem(
      COLOR_PREFERENCE_KEY,
      colorPreference
    );
  }, [colorPreference]);

  useEffect(() => {
    return () => {
      if (
        wrongTimer.current
      ) {
        clearTimeout(
          wrongTimer.current
        );
      }
    };
  }, []);

  function updateProgress(
    updater: (
      previous: Progress
    ) => Progress
  ) {
    setProgress(
      (previous) => {
        const next =
          updater(previous);

        try {
          window.localStorage.setItem(
            PROGRESS_KEY,
            JSON.stringify(next)
          );
        } catch {}

        return next;
      }
    );
  }

  function updateSession(
    updater: (
      previous: SessionStats
    ) => SessionStats
  ) {
    if (
      sessionMode !== "ten" ||
      sessionComplete
    ) {
      return;
    }

    setSessionStats(updater);
  }

  function addThemesToSession(
    previous: Record<
      string,
      ThemeProgress
    >,
    solvedCount: number,
    wrongCount: number,
    hintCount: number
  ) {
    const next = {
      ...previous,
    };

    for (
      const theme of
      puzzle.themes
    ) {
      if (
        !TRAINABLE_THEMES.has(
          theme
        )
      ) {
        continue;
      }

      const current =
        next[theme] || {
          solved: 0,
          wrongMoves: 0,
          hintsUsed: 0,
        };

      next[theme] = {
        solved:
          current.solved +
          solvedCount,

        wrongMoves:
          current.wrongMoves +
          wrongCount,

        hintsUsed:
          current.hintsUsed +
          hintCount,
      };
    }

    return next;
  }

  function getCurrentHint() {
    if (
      hintLevel === 0
    ) {
      return null;
    }

    if (
      hintLevel === 1
    ) {
      return getHintText(
        puzzle.themes
      );
    }

    const expectedMove =
      puzzle.moves[
        moveIndex
      ];

    if (!expectedMove) {
      return null;
    }

    const from =
      expectedMove.slice(
        0,
        2
      );

    const to =
      expectedMove.slice(
        2,
        4
      );

    const piece =
      game.get(
        from as Square
      );

    const pieceName =
      piece
        ? getPieceName(
            piece.type
          )
        : "piece";

    if (
      hintLevel === 2
    ) {
      return `Look closely at the ${pieceName} on ${from}.`;
    }

    const promotion =
      expectedMove.length >
      4
        ? expectedMove[4]
        : null;

    if (promotion) {
      const promotionNames:
        Record<string, string> = {
        q: "queen",
        r: "rook",
        b: "bishop",
        n: "knight",
      };

      return `Move the ${pieceName} from ${from} to ${to} and promote to a ${promotionNames[promotion]}.`;
    }

    return `Try the ${pieceName} from ${from} to ${to}.`;
  }

  function showHint() {
    if (
      solved ||
      isOpponentMoving ||
      hintLevel >= 3
    ) {
      return;
    }

    setHintLevel(
      (current) =>
        Math.min(
          current + 1,
          3
        )
    );

    setPuzzleHintsUsed(
      (current) =>
        current + 1
    );

    updateProgress(
      (previous) => ({
        ...previous,
        hintsUsed:
          previous.hintsUsed +
          1,
      })
    );

    updateSession(
      (previous) => ({
        ...previous,
        hintsUsed:
          previous.hintsUsed +
          1,
      })
    );
  }

  function rememberPuzzle(
    puzzleId: string
  ) {
    setRecentPuzzleIds(
      (current) => {
        const updated = [
          puzzleId,

          ...current.filter(
            (id) =>
              id !== puzzleId
          ),
        ];

        return updated.slice(
          0,
          RECENT_PUZZLE_LIMIT
        );
      }
    );
  }

  function resetPuzzleStats() {
    setPuzzleWrongMoves(0);
    setPuzzleHintsUsed(0);
  }

  function loadPuzzle(
    index: number
  ) {
    const newGame =
      buildPuzzlePosition(
        index
      );

    setPuzzleIndex(index);
    setGame(newGame);

    setMoveIndex(1);
    setSolved(false);
    setMoveLog([]);
    setHintLevel(0);

    setLastMove(null);
    setWrongMove(null);
    setIsWrong(false);
    setWrongExplanation(null);

    setPendingPromotion(
      null
    );

    setSelectedSquare(
      null
    );

    setIsOpponentMoving(
      false
    );

    resetPuzzleStats();

    setMessage(
      "Find the strongest move."
    );
  }

  function pickNextPuzzle(
    mode:
      TrainingMode =
      difficulty
  ) {
    rememberPuzzle(
      puzzle.id
    );

    const history = [
      puzzle.id,
      ...recentPuzzleIds,
    ].slice(
      0,
      RECENT_PUZZLE_LIMIT
    );

    const nextIndex =
      choosePuzzleIndex(
        mode,
        colorPreference,
        puzzleIndex,
        history,
        progress,
        adaptiveTraining
      );

    loadPuzzle(nextIndex);
  }

  function startSession() {
    setSessionMode("ten");

    setSessionStats(
      DEFAULT_SESSION_STATS
    );

    setSessionComplete(false);

    const nextIndex =
      choosePuzzleIndex(
        difficulty,
        colorPreference,
        puzzleIndex,
        recentPuzzleIds,
        progress,
        adaptiveTraining
      );

    loadPuzzle(nextIndex);
  }

  function endSession() {
    setSessionMode(
      "endless"
    );

    setSessionStats(
      DEFAULT_SESSION_STATS
    );

    setSessionComplete(false);

    pickNextPuzzle();
  }

  function changeSessionMode(
    mode: SessionMode
  ) {
    if (
      mode === sessionMode
    ) {
      return;
    }

    if (
      mode === "ten"
    ) {
      startSession();
      return;
    }

    setSessionMode(mode);
    setSessionStats(
      DEFAULT_SESSION_STATS
    );
    setSessionComplete(false);
    pickNextPuzzle();
  }

  function completeSessionPuzzle(
    solvedPuzzle: boolean
  ) {
    if (
      sessionMode !== "ten"
    ) {
      return;
    }

    setSessionStats(
      (previous) => {
        const next:
          SessionStats = {
          ...previous,

          completed:
            previous.completed +
            1,

          solved:
            previous.solved +
            (solvedPuzzle
              ? 1
              : 0),

          skipped:
            previous.skipped +
            (solvedPuzzle
              ? 0
              : 1),

          themes:
            addThemesToSession(
              previous.themes,
              solvedPuzzle
                ? 1
                : 0,
              puzzleWrongMoves,
              puzzleHintsUsed
            ),
        };

        if (
          next.completed >=
          SESSION_LENGTH
        ) {
          setSessionComplete(
            true
          );
        }

        return next;
      }
    );
  }

  function handleSkip() {
    updateProgress(
      (previous) => ({
        ...previous,

        skipped:
          previous.skipped +
          1,

        currentStreak: 0,
      })
    );

    if (
      sessionMode === "ten"
    ) {
      completeSessionPuzzle(
        false
      );

      if (
        sessionStats.completed +
          1 <
        SESSION_LENGTH
      ) {
        pickNextPuzzle();
      }

      return;
    }

    pickNextPuzzle();
  }

  function handleNextAfterSolved() {
    if (
      sessionMode === "ten" &&
      sessionStats.completed >=
        SESSION_LENGTH
    ) {
      setSessionComplete(
        true
      );

      return;
    }

    pickNextPuzzle();
  }

  function changeDifficulty(
    newDifficulty:
      TrainingMode
  ) {
    if (
      isOpponentMoving ||
      newDifficulty ===
        difficulty
    ) {
      return;
    }

    setDifficulty(
      newDifficulty
    );

    if (
      sessionMode === "ten"
    ) {
      setSessionStats(
        DEFAULT_SESSION_STATS
      );

      setSessionComplete(
        false
      );
    }

    const nextIndex =
      choosePuzzleIndex(
        newDifficulty,
        colorPreference,
        puzzleIndex,
        [
          puzzle.id,
          ...recentPuzzleIds,
        ],
        progress,
        adaptiveTraining
      );

    loadPuzzle(nextIndex);
  }

  function changeColorPreference(
    newColorPreference:
      ColorPreference
  ) {
    if (
      isOpponentMoving ||
      newColorPreference ===
        colorPreference
    ) {
      return;
    }

    setColorPreference(
      newColorPreference
    );

    if (
      sessionMode === "ten"
    ) {
      setSessionStats(
        DEFAULT_SESSION_STATS
      );
      setSessionComplete(false);
    }

    const nextIndex =
      choosePuzzleIndex(
        difficulty,
        newColorPreference,
        puzzleIndex,
        [
          puzzle.id,
          ...recentPuzzleIds,
        ],
        progress,
        adaptiveTraining
      );

    loadPuzzle(nextIndex);
  }

  function restartPuzzle() {
    const restarted =
      buildPuzzlePosition(
        puzzleIndex
      );

    setGame(restarted);
    setMoveIndex(1);
    setSolved(false);
    setMoveLog([]);
    setHintLevel(0);

    setLastMove(null);
    setWrongMove(null);
    setIsWrong(false);
    setWrongExplanation(null);

    setPendingPromotion(
      null
    );

    setSelectedSquare(
      null
    );

    setIsOpponentMoving(
      false
    );

    setMessage(
      "Find the strongest move."
    );
  }

  function triggerWrongMove(
    sourceSquare: string,
    targetSquare: string,
    explanation?: string
  ) {
    if (
      wrongTimer.current
    ) {
      clearTimeout(
        wrongTimer.current
      );
    }

    setPuzzleWrongMoves(
      (current) =>
        current + 1
    );

    updateProgress(
      (previous) => ({
        ...previous,

        wrongMoves:
          previous.wrongMoves +
          1,
      })
    );

    updateSession(
      (previous) => ({
        ...previous,

        wrongMoves:
          previous.wrongMoves +
          1,
      })
    );

    setWrongMove({
      from:
        sourceSquare,
      to:
        targetSquare,
    });

    setIsWrong(true);

    setWrongExplanation(
      explanation ?? null
    );

    setSelectedSquare(
      null
    );

    setMessage(
      "Wrong move"
    );

    wrongTimer.current =
      setTimeout(() => {
        setIsWrong(false);
        setWrongMove(null);
        setWrongExplanation(
          null
        );

        setMessage(
          "Find the strongest move."
        );
      }, explanation ? 3500 : 900);
  }

  function recordCorrectMove() {
    updateProgress(
      (previous) => ({
        ...previous,

        correctMoves:
          previous.correctMoves +
          1,
      })
    );

    updateSession(
      (previous) => ({
        ...previous,

        correctMoves:
          previous.correctMoves +
          1,
      })
    );
  }

  function recordPuzzleSolved() {
    const cleanSolve =
      puzzleWrongMoves ===
      0;

    updateProgress(
      (previous) => {
        const nextStreak =
          cleanSolve
            ? previous.currentStreak +
              1
            : 0;

        const nextThemes = {
          ...previous.themes,
        };

        for (
          const theme of
          puzzle.themes
        ) {
          if (
            !TRAINABLE_THEMES.has(
              theme
            )
          ) {
            continue;
          }

          const current =
            nextThemes[theme] || {
              solved: 0,
              wrongMoves: 0,
              hintsUsed: 0,
            };

          nextThemes[theme] = {
            solved:
              current.solved +
              1,

            wrongMoves:
              current.wrongMoves +
              puzzleWrongMoves,

            hintsUsed:
              current.hintsUsed +
              puzzleHintsUsed,
          };
        }

        return {
          ...previous,

          solved:
            previous.solved +
            1,

          currentStreak:
            nextStreak,

          bestStreak:
            Math.max(
              previous.bestStreak,
              nextStreak
            ),

          themes:
            nextThemes,
        };
      }
    );

    completeSessionPuzzle(
      true
    );
  }

  function finishPuzzle() {
    setSolved(true);

    setSelectedSquare(
      null
    );

    setMessage(
      "Puzzle solved."
    );

    recordPuzzleSolved();
  }

  function executeUserMove(
    attemptedMove: string
  ) {
    if (
      solved ||
      isOpponentMoving
    ) {
      return false;
    }

    const sourceSquare =
      attemptedMove.slice(
        0,
        2
      );

    const targetSquare =
      attemptedMove.slice(
        2,
        4
      );

    if (
      sourceSquare ===
      targetSquare
    ) {
      setSelectedSquare(
        null
      );

      return false;
    }

    if (
      !isPlayersPiece(
        game,
        sourceSquare,
        playerColor
      )
    ) {
      return false;
    }

    const expectedMove =
      puzzle.moves[
        moveIndex
      ];

    const accepted =
      isAcceptedMove(
        game,
        attemptedMove,
        expectedMove,
        puzzle.themes
      );

    if (!accepted) {
      const explanation =
        sessionMode === "learn"
          ? explainWrongMove(
              game,
              attemptedMove,
              puzzle.themes
            )
          : undefined;

      triggerWrongMove(
        sourceSquare,
        targetSquare,
        explanation
      );

      return false;
    }

    if (
      wrongTimer.current
    ) {
      clearTimeout(
        wrongTimer.current
      );
    }

    setIsWrong(false);
    setWrongMove(null);
    setWrongExplanation(null);

    const gameCopy =
      new Chess(
        game.fen()
      );

    let userMove;

    try {
      userMove =
        applyUciMove(
          gameCopy,
          attemptedMove
        );
    } catch {
      triggerWrongMove(
        sourceSquare,
        targetSquare
      );

      return false;
    }

    if (!userMove) {
      return false;
    }

    /*
     * Real chess move successfully
     * landed: wooden knock.
     */
    playMoveSound();

    recordCorrectMove();

    setLastMove({
      from:
        sourceSquare,
      to:
        targetSquare,
    });

    setSelectedSquare(
      null
    );

    setMoveLog(
      (previous) => [
        ...previous,

        {
          san:
            userMove.san,

          player: "you",
        },
      ]
    );

    const nextMoveIndex =
      moveIndex + 1;

    setGame(gameCopy);

    setMoveIndex(
      nextMoveIndex
    );

    setHintLevel(0);

    if (
      nextMoveIndex >=
        puzzle.moves.length ||
      gameCopy.isCheckmate()
    ) {
      finishPuzzle();
      return true;
    }

    setMessage(
      "Correct."
    );

    setIsOpponentMoving(
      true
    );

    setTimeout(() => {
      const responseGame =
        new Chess(
          gameCopy.fen()
        );

      const opponentMove =
        puzzle.moves[
          nextMoveIndex
        ];

      let response;

      try {
        response =
          applyUciMove(
            responseGame,
            opponentMove
          );
      } catch {
        setMessage(
          "Puzzle data error."
        );

        setIsOpponentMoving(
          false
        );

        return;
      }

      if (!response) {
        setMessage(
          "Puzzle data error."
        );

        setIsOpponentMoving(
          false
        );

        return;
      }

      /*
       * Opponent move lands:
       * same wooden knock.
       */
      playMoveSound();

      setLastMove({
        from:
          opponentMove.slice(
            0,
            2
          ),

        to:
          opponentMove.slice(
            2,
            4
          ),
      });

      setGame(
        responseGame
      );

      setMoveLog(
        (previous) => [
          ...previous,

          {
            san:
              response.san,

            player:
              "opponent",
          },
        ]
      );

      const afterOpponent =
        nextMoveIndex + 1;

      setMoveIndex(
        afterOpponent
      );

      setTimeout(() => {
        setIsOpponentMoving(
          false
        );

        if (
          afterOpponent >=
          puzzle.moves.length
        ) {
          finishPuzzle();
        } else {
          setMessage(
            "Your turn."
          );
        }
      }, 540);
    }, 900);

    return true;
  }

  function handlePieceDrop(
    sourceSquare: string,
    targetSquare: string
  ) {
    if (
      solved ||
      isOpponentMoving ||
      pendingPromotion
    ) {
      return false;
    }

    if (
      sourceSquare ===
      targetSquare
    ) {
      setSelectedSquare(
        null
      );

      return false;
    }

    if (
      !isPlayersPiece(
        game,
        sourceSquare,
        playerColor
      )
    ) {
      return false;
    }

    if (
      isPromotionMove(
        game,
        sourceSquare,
        targetSquare
      )
    ) {
      setPendingPromotion({
        sourceSquare,
        targetSquare,
      });

      setSelectedSquare(
        null
      );

      return false;
    }

    return executeUserMove(
      `${sourceSquare}${targetSquare}`
    );
  }

  function handleSquareClick(
    square: string
  ) {
    if (
      solved ||
      isOpponentMoving ||
      pendingPromotion
    ) {
      return;
    }

    const clickedPiece =
      game.get(
        square as Square
      );

    const clickedOwnPiece =
      clickedPiece?.color ===
      getPlayerChessColor(
        playerColor
      );

    if (
      !selectedSquare
    ) {
      if (
        clickedOwnPiece
      ) {
        setSelectedSquare(
          square
        );
      }

      return;
    }

    if (
      square ===
      selectedSquare
    ) {
      setSelectedSquare(
        null
      );

      return;
    }

    if (
      clickedOwnPiece
    ) {
      setSelectedSquare(
        square
      );

      return;
    }

    const legalDestination =
      legalMoves.find(
        (move) =>
          move.to === square
      );

    if (
      !legalDestination
    ) {
      setSelectedSquare(
        null
      );

      return;
    }

    const sourceSquare =
      selectedSquare;

    if (
      isPromotionMove(
        game,
        sourceSquare,
        square
      )
    ) {
      setPendingPromotion({
        sourceSquare,
        targetSquare:
          square,
      });

      setSelectedSquare(
        null
      );

      return;
    }

    executeUserMove(
      `${sourceSquare}${square}`
    );
  }

  function choosePromotion(
    piece: string
  ) {
    if (
      !pendingPromotion
    ) {
      return;
    }

    const {
      sourceSquare,
      targetSquare,
    } =
      pendingPromotion;

    setPendingPromotion(
      null
    );

    executeUserMove(
      `${sourceSquare}${targetSquare}${piece}`
    );
  }

  const currentHint =
    getCurrentHint();

  const squareStyles:
    Record<
      string,
      React.CSSProperties
    > = {};

  if (
    lastMove &&
    !isWrong
  ) {
    squareStyles[
      lastMove.from
    ] = {
      boxShadow:
        "inset 0 0 0 9999px rgba(59, 92, 255, 0.11)",
    };

    squareStyles[
      lastMove.to
    ] = {
      boxShadow:
        "inset 0 0 0 9999px rgba(59, 92, 255, 0.17)",
    };
  }

  if (
    selectedSquare &&
    !isWrong
  ) {
    squareStyles[
      selectedSquare
    ] = {
      ...(squareStyles[
        selectedSquare
      ] || {}),

      boxShadow:
        "inset 0 0 0 3px rgba(59, 92, 255, 0.72)",

      cursor: "grab",
    };
  }

  if (
    selectedSquare &&
    !isWrong &&
    !solved &&
    !isOpponentMoving
  ) {
    for (
      const move of
      legalMoves
    ) {
      const target =
        move.to;

      const existing =
        squareStyles[
          target
        ] || {};

      if (
        move.captured
      ) {
        squareStyles[
          target
        ] = {
          ...existing,

          cursor:
            "pointer",

          boxShadow:
            "inset 0 0 0 5px rgba(59, 92, 255, 0.28)",
        };
      } else {
        squareStyles[
          target
        ] = {
          ...existing,

          cursor:
            "pointer",

          backgroundImage:
            "radial-gradient(circle at center, rgba(59, 92, 255, 0.52) 0, rgba(59, 92, 255, 0.52) 12%, transparent 13%)",
        };
      }
    }
  }

  for (
    const file of [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
    ]
  ) {
    for (
      let rank = 1;
      rank <= 8;
      rank++
    ) {
      const square =
        `${file}${rank}`;

      const piece =
        game.get(
          square as Square
        );

      if (!piece) {
        continue;
      }

      const ownPiece =
        piece.color ===
        getPlayerChessColor(
          playerColor
        );

      if (ownPiece) {
        squareStyles[
          square
        ] = {
          ...squareStyles[
            square
          ],

          cursor:
            solved ||
            isOpponentMoving
              ? "default"
              : "grab",
        };
      } else {
        squareStyles[
          square
        ] = {
          ...squareStyles[
            square
          ],

          cursor:
            "default",
        };
      }
    }
  }

  if (
    wrongMove
  ) {
    squareStyles[
      wrongMove.from
    ] = {
      boxShadow:
        "inset 0 0 0 9999px rgba(217, 45, 32, 0.18)",
    };

    squareStyles[
      wrongMove.to
    ] = {
      boxShadow:
        "inset 0 0 0 9999px rgba(217, 45, 32, 0.3)",
    };
  }

  if (
    sessionMode === "ten" &&
    sessionComplete
  ) {
    return (
      <main className="min-h-screen">
        <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
          <div className="mx-auto flex h-[56px] max-w-[920px] items-center justify-between px-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--button)] text-[15px] text-[var(--button-text)]">
                ♞
              </div>

              <div className="text-[16px] font-semibold tracking-[-0.025em]">
                ChessGrind
              </div>
            </div>

            <div className="flex items-center gap-3">
              <VisitorCounter />

              <Link
                href="/insights"
                className="text-[12px] font-semibold text-[var(--secondary)]"
              >
                Insights
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[820px] px-6 pb-20 pt-16">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--success)]">
            Session complete
          </div>

          <h1 className="mt-3 text-[48px] font-semibold tracking-[-0.055em]">
            Nice work.
          </h1>

          <p className="mt-4 max-w-[570px] text-[16px] leading-7 text-[var(--secondary)]">
            You finished a 10-puzzle training session. Here&apos;s how it went.
          </p>

          <section className="mt-10 grid grid-cols-2 gap-y-7 border-y border-[var(--line)] py-7 sm:grid-cols-4">
            <div>
              <div className="text-[12px] text-[var(--secondary)]">
                Solved
              </div>

              <div className="mt-1 text-[30px] font-semibold tracking-[-0.04em]">
                {sessionStats.solved}/
                {SESSION_LENGTH}
              </div>
            </div>

            <div>
              <div className="text-[12px] text-[var(--secondary)]">
                Accuracy
              </div>

              <div className="mt-1 text-[30px] font-semibold tracking-[-0.04em]">
                {sessionAccuracy}%
              </div>
            </div>

            <div>
              <div className="text-[12px] text-[var(--secondary)]">
                Mistakes
              </div>

              <div className="mt-1 text-[30px] font-semibold tracking-[-0.04em]">
                {sessionStats.wrongMoves}
              </div>
            </div>

            <div>
              <div className="text-[12px] text-[var(--secondary)]">
                Hints
              </div>

              <div className="mt-1 text-[30px] font-semibold tracking-[-0.04em]">
                {sessionStats.hintsUsed}
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
                Strongest pattern
              </div>

              <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">
                {sessionStrongestTheme
                  ? formatTheme(
                      sessionStrongestTheme
                    )
                  : "Still learning"}
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">
                {sessionStrongestTheme
                  ? "This was your cleanest tactical pattern in this session."
                  : "Solve more varied motifs to build a clearer profile."}
              </p>
            </div>

            <div className="rounded-[18px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
                Needs work
              </div>

              <h2 className="mt-3 text-[25px] font-semibold tracking-[-0.035em]">
                {sessionWeakestTheme
                  ? formatTheme(
                      sessionWeakestTheme
                    )
                  : "No clear weakness"}
              </h2>

              <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">
                {sessionWeakestTheme
                  ? "Smart Training will give this motif slightly more weight next time."
                  : "This was a balanced session with no obvious weak pattern."}
              </p>
            </div>
          </section>

          <section className="mt-8 text-[13px] text-[var(--secondary)]">
            <span>
              Skipped{" "}
              <strong className="text-[var(--text)]">
                {sessionStats.skipped}
              </strong>
            </span>

            <span className="mx-3 text-[var(--tertiary)]">
              ·
            </span>

            <span>
              Correct moves{" "}
              <strong className="text-[var(--text)]">
                {sessionStats.correctMoves}
              </strong>
            </span>
          </section>

          <section className="mt-10 flex flex-wrap gap-3 border-t border-[var(--line)] pt-7">
            <button
              type="button"
              onClick={
                startSession
              }
              className="control min-h-[46px] rounded-[11px] bg-[var(--button)] px-6 text-[14px] font-semibold text-[var(--button-text)]"
            >
              Start another session
            </button>

            <button
              type="button"
              onClick={
                endSession
              }
              className="control min-h-[46px] rounded-[11px] border border-[var(--line-strong)] bg-[var(--surface)] px-6 text-[14px] font-semibold"
            >
              Back to endless
            </button>

            <Link
              href="/insights"
              className="control flex min-h-[46px] items-center rounded-[11px] px-4 text-[14px] font-semibold text-[var(--secondary)]"
            >
              View insights
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
        <div className="mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--button)] text-[15px] text-[var(--button-text)]">
              ♞
            </div>

            <div className="text-[16px] font-semibold tracking-[-0.025em]">
              ChessGrind
            </div>
          </div>

          <div className="flex items-center gap-5">
            <VisitorCounter />

            <Link
              href="/insights"
              className="text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Insights
            </Link>

            <ThemeToggle />

            <span className="h-4 w-px bg-[var(--line-strong)]" />

            <span className="text-[12px] font-medium text-[var(--secondary)]">
              {sessionMode ===
              "ten"
                ? `${Math.min(
                    sessionStats.completed +
                      1,
                    SESSION_LENGTH
                  )} of ${SESSION_LENGTH}`
                : `${availablePuzzleCount} puzzles`}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1060px] px-6 pb-16 pt-7">
        <div className="mb-5 flex justify-center">
          <div className="inline-flex rounded-[12px] bg-black/[0.045] p-[3px]">
            {SESSION_MODES.map(
              (mode) => {
                const active =
                  sessionMode ===
                  mode.value;

                return (
                  <button
                    key={
                      mode.value
                    }
                    type="button"
                    disabled={
                      isOpponentMoving
                    }
                    onClick={() =>
                      changeSessionMode(
                        mode.value
                      )
                    }
                    className={[
                      "control rounded-[9px] px-5 py-2 text-[12px] font-semibold",

                      active
                        ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                        : "text-[var(--secondary)]",
                    ].join(
                      " "
                    )}
                  >
                    {mode.label}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {sessionMode ===
          "ten" && (
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-[11px] text-[var(--secondary)]">
              <span>
                Training session
              </span>

              <span className="tabular-nums">
                {
                  sessionStats.completed
                }
                /{SESSION_LENGTH}{" "}
                completed
              </span>
            </div>

            <div className="h-[3px] overflow-hidden rounded-full bg-black/[0.06]">
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
                style={{
                  width: `${
                    (sessionStats.completed /
                      SESSION_LENGTH) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        )}

        <section className="mb-9 flex flex-col gap-5 border-b border-[var(--line)] pb-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="flex flex-wrap gap-4">
            <div>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--tertiary)]">
                Difficulty
              </div>

              <div className="inline-flex rounded-[12px] bg-black/[0.045] p-[3px]">
                {TRAINING_MODES.map(
                  (mode) => {
                    const active =
                      difficulty ===
                      mode.value;

                    return (
                      <button
                        key={
                          mode.value
                        }
                        type="button"
                        disabled={
                          isOpponentMoving
                        }
                        onClick={() =>
                          changeDifficulty(
                            mode.value
                          )
                        }
                        className={[
                          "control min-w-[72px] rounded-[9px] px-4 py-2 text-[12px] font-semibold",

                          active
                            ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                            : "text-[var(--secondary)]",
                        ].join(
                          " "
                        )}
                      >
                        {mode.label}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[var(--tertiary)]">
                Play as
              </div>

              <div className="inline-flex rounded-[12px] bg-black/[0.045] p-[3px]">
                {COLOR_PREFERENCES.map(
                  (option) => {
                    const active =
                      colorPreference ===
                      option.value;

                    return (
                      <button
                        key={
                          option.value
                        }
                        type="button"
                        disabled={
                          isOpponentMoving
                        }
                        onClick={() =>
                          changeColorPreference(
                            option.value
                          )
                        }
                        className={[
                          "control min-w-[68px] rounded-[9px] px-4 py-2 text-[12px] font-semibold",

                          active
                            ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                            : "text-[var(--secondary)]",
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <button
              type="button"
              onClick={() =>
                setAdaptiveTraining(
                  (current) =>
                    !current
                )
              }
              className="flex items-center gap-2 text-[12px] text-[var(--secondary)]"
            >
              <span
                className={[
                  "relative inline-flex h-[18px] w-[31px] items-center rounded-full transition",

                  adaptiveTraining
                    ? "bg-[var(--accent)]"
                    : "bg-black/[0.12]",
                ].join(
                  " "
                )}
              >
                <span
                  className={[
                    "h-[14px] w-[14px] rounded-full bg-white shadow-sm transition-transform",

                    adaptiveTraining
                      ? "translate-x-[15px]"
                      : "translate-x-[2px]",
                  ].join(
                    " "
                  )}
                />
              </span>

              <span>
                {adaptiveTraining
                  ? weakestTheme
                    ? `Smart · ${formatTheme(
                        weakestTheme
                      )}`
                    : "Smart training"
                  : "Smart training off"}
              </span>
            </button>

            <span className="hidden h-4 w-px bg-[var(--line)] sm:block" />

            <div className="flex items-center gap-3 text-[12px] text-[var(--secondary)]">
              <span>
                Solved{" "}
                <strong className="text-[var(--text)]">
                  {progressLoaded
                    ? progress.solved
                    : "—"}
                </strong>
              </span>

              <span>·</span>

              <span>
                Accuracy{" "}
                <strong className="text-[var(--text)]">
                  {progressLoaded
                    ? `${overallAccuracy}%`
                    : "—"}
                </strong>
              </span>

              <span>·</span>

              <span>
                Streak{" "}
                <strong className="text-[var(--text)]">
                  {progressLoaded
                    ? progress.currentStreak
                    : "—"}
                </strong>
              </span>
            </div>
          </div>
        </section>

        <section className="mb-6 max-w-[620px]">
          <PlayerColorIndicator
            playerColor={
              playerColor
            }
          />

          <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--secondary)]">
            {playerColor ===
            "white"
              ? "White to move"
              : "Black to move"}
          </div>

          <h1 className="mt-2 text-[38px] font-semibold leading-[1.04] tracking-[-0.045em]">
            {goal}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12px] text-[var(--secondary)]">
            <span>
              Rating{" "}
              {puzzle.rating}
            </span>

            {visibleThemes.map(
              (theme) => (
                <div
                  key={theme}
                  className="flex items-center gap-2.5"
                >
                  <span className="text-[var(--tertiary)]">
                    ·
                  </span>

                  <ThemeTooltip
                    theme={theme}
                  />
                </div>
              )
            )}
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-[560px_350px] lg:items-start lg:gap-[48px]">
          <section>
            <div
              className={[
                "overflow-hidden rounded-[21px] bg-[var(--surface)] p-[7px]",

                isWrong
                  ? "wrong-shake"
                  : "",
              ].join(" ")}
              style={{
                boxShadow:
                  isWrong
                    ? "0 0 0 3px rgba(217,45,32,0.12), var(--shadow-board)"
                    : "var(--shadow-board)",
              }}
            >
              <div className="overflow-hidden rounded-[15px]">
                <Chessboard
                  options={{
                    position:
                      game.fen(),

                    boardOrientation:
                      playerColor,

                    animationDurationInMs:
                      520,

                    darkSquareStyle: {
                      backgroundColor:
                        "var(--board-dark)",
                    },

                    lightSquareStyle: {
                      backgroundColor:
                        "var(--board-light)",
                    },

                    squareStyles,

                    canDragPiece: ({
                      square,
                    }) => {
                      if (
                        !square ||
                        solved ||
                        isOpponentMoving ||
                        pendingPromotion
                      ) {
                        return false;
                      }

                      return isPlayersPiece(
                        game,
                        square,
                        playerColor
                      );
                    },

                    onPieceDrag: ({
                      square,
                    }) => {
                      if (
                        !square ||
                        solved ||
                        isOpponentMoving ||
                        pendingPromotion
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
                        setSelectedSquare(
                          square
                        );
                      }
                    },

                    onSquareClick: ({
                      square,
                    }) => {
                      if (!square) {
                        return;
                      }

                      handleSquareClick(
                        square
                      );
                    },

                    onPieceDrop: ({
                      sourceSquare,
                      targetSquare,
                    }) => {
                      if (
                        !sourceSquare ||
                        !targetSquare ||
                        isOpponentMoving ||
                        pendingPromotion
                      ) {
                        return false;
                      }

                      if (
                        sourceSquare ===
                        targetSquare
                      ) {
                        setSelectedSquare(
                          null
                        );

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

            <div className="mt-4 flex items-center gap-5 text-[11px] text-[var(--secondary)]">
              <div className="flex items-center gap-2">
                <span className="h-[7px] w-[7px] rounded-full bg-[var(--accent)] opacity-60" />

                <span>
                  Legal move
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-[13px] w-[13px] rounded-full border-[3px] border-[var(--accent)] opacity-40" />

                <span>
                  Legal capture
                </span>
              </div>
            </div>
          </section>

          <aside>
            <section className="min-h-[112px]">
              {isWrong ? (
                <div className="wrong-message">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--danger)]">
                    Incorrect
                  </div>

                  <h2 className="mt-2 text-[28px] font-semibold text-[var(--danger)]">
                    Wrong move.
                  </h2>

                  <p className="mt-2 text-[14px] leading-6 text-[var(--danger)]">
                    {wrongExplanation ??
                      "That move doesn't work. Try again."}
                  </p>
                </div>
              ) : solved ? (
                <div className="appear">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--success)]">
                    Solved
                  </div>

                  <h2 className="mt-2 text-[28px] font-semibold">
                    Well played.
                  </h2>

                  <p className="mt-2 text-[14px] leading-6 text-[var(--secondary)]">
                    {puzzleWrongMoves ===
                    0
                      ? puzzleHintsUsed ===
                        0
                        ? "Clean solve. No mistakes, no hints."
                        : `Solved with ${puzzleHintsUsed} ${
                            puzzleHintsUsed ===
                            1
                              ? "hint"
                              : "hints"
                          }.`
                      : `Solved with ${puzzleWrongMoves} ${
                          puzzleWrongMoves ===
                          1
                            ? "mistake"
                            : "mistakes"
                        }.`}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2">
                    {isOpponentMoving && (
                      <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--accent)]" />
                    )}

                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--secondary)]">
                      {isOpponentMoving
                        ? "Opponent"
                        : `Your move · ${playerColor}`}
                    </div>
                  </div>

                  <h2 className="mt-2 text-[25px] font-semibold">
                    {isOpponentMoving
                      ? "Watch the reply."
                      : message}
                  </h2>

                  <p className="mt-2 text-[14px] leading-6 text-[var(--secondary)]">
                    {isOpponentMoving
                      ? "Your pieces are locked until the opponent finishes moving."
                      : selectedSquare
                        ? "Choose one of the highlighted legal squares, or tap the selected piece again to cancel."
                        : `Select one of your ${playerColor} pieces to see its legal moves.`}
                  </p>
                </div>
              )}
            </section>

            <section className="mt-6 border-t border-[var(--line)] pt-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[13px] font-semibold">
                  Line
                </span>

                <span className="text-[11px] text-[var(--tertiary)]">
                  {moveLog.length}{" "}
                  played
                </span>
              </div>

              {moveLog.length ===
              0 ? (
                <p className="text-[14px] text-[var(--secondary)]">
                  Your solution will build here.
                </p>
              ) : (
                <div className="flex flex-wrap items-center gap-2">
                  {moveLog.map(
                    (
                      move,
                      index
                    ) => (
                      <span
                        key={`${move.san}-${index}`}
                        className={[
                          "rounded-[8px] px-2.5 py-1.5 font-mono text-[13px] font-semibold",

                          move.player ===
                          "you"
                            ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                            : "bg-black/[0.04] text-[var(--secondary)]",
                        ].join(
                          " "
                        )}
                      >
                        {move.san}
                      </span>
                    )
                  )}
                </div>
              )}
            </section>

            {!solved && (
              <section className="mt-6 border-t border-[var(--line)] pt-5">
                <button
                  type="button"
                  onClick={
                    showHint
                  }
                  disabled={
                    isOpponentMoving ||
                    hintLevel >=
                      3
                  }
                  className="flex w-full items-center justify-between text-left disabled:opacity-50"
                >
                  <div>
                    <div className="text-[13px] font-semibold">
                      Hint
                    </div>

                    <div className="mt-1 text-[12px] text-[var(--secondary)]">
                      {hintLevel ===
                      0
                        ? "Reveal a clue"
                        : `Hint ${hintLevel} of 3`}
                    </div>
                  </div>

                  <span className="text-[18px] text-[var(--accent)]">
                    {hintLevel >=
                    3
                      ? "✓"
                      : "›"}
                  </span>
                </button>

                {currentHint && (
                  <div className="appear mt-4 rounded-[10px] bg-[var(--accent-soft)] px-4 py-3">
                    <p className="text-[14px] leading-6 text-[#3447b8]">
                      {currentHint}
                    </p>
                  </div>
                )}
              </section>
            )}

            {solved && (
              <section className="appear mt-6 border-t border-[var(--line)] pt-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
                  Why it works
                </div>

                <p className="mt-3 text-[14px] leading-6 text-[var(--secondary)]">
                  {getLesson(
                    puzzle.themes
                  )}
                </p>
              </section>
            )}

            <section className="mt-6 border-t border-[var(--line)] pt-5">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={
                    restartPuzzle
                  }
                  disabled={
                    isOpponentMoving
                  }
                  className="control min-h-[44px] rounded-[11px] border border-[var(--line-strong)] bg-[var(--surface)] px-5 text-[14px] font-semibold disabled:opacity-40"
                >
                  Restart
                </button>

                <button
                  type="button"
                  onClick={
                    solved
                      ? handleNextAfterSolved
                      : handleSkip
                  }
                  disabled={
                    isOpponentMoving
                  }
                  className="control min-h-[44px] rounded-[11px] bg-[var(--button)] px-7 text-[14px] font-semibold text-[var(--button-text)] disabled:opacity-40"
                >
                  {solved
                    ? sessionMode ===
                      "ten"
                      ? sessionStats.completed >=
                        SESSION_LENGTH
                        ? "View results"
                        : "Next puzzle"
                      : "Next puzzle"
                    : "Skip"}
                </button>
              </div>
            </section>

            <div className="mt-4 text-[10px] text-[var(--tertiary)]">
              {formatTheme(
                puzzle.difficulty
              )}{" "}
              · Lichess{" "}
              {puzzle.id}
            </div>
          </aside>
        </div>
      </div>

      {pendingPromotion && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 px-5 backdrop-blur-[3px]">
          <div className="appear w-full max-w-[360px] rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.20)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[var(--secondary)]">
              Promotion
            </div>

            <h2 className="mt-2 text-[25px] font-semibold">
              Choose a piece
            </h2>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {PROMOTION_OPTIONS.map(
                (option) => {
                  const symbol =
                    playerColor ===
                    "white"
                      ? option.whiteSymbol
                      : option.blackSymbol;

                  return (
                    <button
                      key={
                        option.value
                      }
                      type="button"
                      onClick={() =>
                        choosePromotion(
                          option.value
                        )
                      }
                      className="control flex aspect-square flex-col items-center justify-center rounded-[13px] border border-[var(--line)] bg-[#f7f7f8]"
                    >
                      <span className="text-[36px]">
                        {symbol}
                      </span>

                      <span className="mt-1 text-[10px] text-[var(--secondary)]">
                        {option.label}
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setPendingPromotion(
                  null
                )
              }
              className="mt-4 w-full py-2 text-[13px] font-semibold text-[var(--secondary)]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
