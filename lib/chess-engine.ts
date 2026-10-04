import { Chess, type Move, type Square } from "chess.js";

export type AppliedMove = {
  from: string;
  to: string;
  promotion?: string;
};

export type MoveAnalysis = {
  bestMove: Move;
  playedMove: Move;
  centipawnLoss: number;
};

const PIECE_VALUES: Record<string, number> = {
  p: 100,
  n: 320,
  b: 330,
  r: 500,
  q: 900,
  k: 0,
};

const MATE_SCORE = 100_000;

export function cloneGameWithHistory(game: Chess) {
  const clone = new Chess();

  for (const move of game.history({ verbose: true })) {
    clone.move({
      from: move.from,
      to: move.to,
      promotion: move.promotion,
    });
  }

  return clone;
}

export function evaluateMaterial(game: Chess) {
  let score = 0;

  for (const row of game.board()) {
    for (const square of row) {
      if (!square) continue;
      score +=
        square.color === "w"
          ? PIECE_VALUES[square.type]
          : -PIECE_VALUES[square.type];
    }
  }

  return score;
}

function centralization(file: number, rank: number) {
  return 7 - (Math.abs(file - 3.5) + Math.abs(rank - 3.5));
}

function squareCoordinates(square: string) {
  return {
    file: square.charCodeAt(0) - 97,
    rank: Number(square[1]) - 1,
  };
}

function positionalPieceScore(
  game: Chess,
  square: Square,
  type: string,
  color: "w" | "b",
  nonPawnMaterial: number
) {
  const { file, rank } = squareCoordinates(square);
  const activity = centralization(file, rank);
  const relativeRank = color === "w" ? rank : 7 - rank;

  if (type === "p") {
    const centerFileBonus = file >= 2 && file <= 5 ? 5 : 0;
    return Math.max(0, relativeRank - 1) * 9 + centerFileBonus;
  }

  if (type === "n") {
    const startingSquare =
      (color === "w" && (square === "b1" || square === "g1")) ||
      (color === "b" && (square === "b8" || square === "g8"));
    return activity * 6 - (startingSquare ? 14 : 0);
  }

  if (type === "b") {
    const startingSquare =
      (color === "w" && (square === "c1" || square === "f1")) ||
      (color === "b" && (square === "c8" || square === "f8"));
    return activity * 4 - (startingSquare ? 10 : 0);
  }

  if (type === "r") {
    let ownPawnOnFile = false;
    let anyPawnOnFile = false;

    for (let boardRank = 1; boardRank <= 8; boardRank += 1) {
      const occupant = game.get(
        `${String.fromCharCode(97 + file)}${boardRank}` as Square
      );
      if (occupant?.type !== "p") continue;
      anyPawnOnFile = true;
      if (occupant.color === color) ownPawnOnFile = true;
    }

    return (ownPawnOnFile ? 0 : 12) + (anyPawnOnFile ? 0 : 8);
  }

  if (type === "q") {
    return activity * 1.5;
  }

  if (type === "k") {
    const castled =
      (color === "w" && (square === "g1" || square === "c1")) ||
      (color === "b" && (square === "g8" || square === "c8"));

    if (nonPawnMaterial > 2_400) {
      return (castled ? 38 : 0) - activity * 4;
    }

    return activity * 5;
  }

  return 0;
}

function pawnStructureScore(
  pawnFiles: number[],
  opponentPawnFiles: number[]
) {
  let score = 0;

  for (let file = 0; file < 8; file += 1) {
    const count = pawnFiles.filter((pawnFile) => pawnFile === file).length;
    if (count > 1) score -= (count - 1) * 14;

    const isolated =
      count > 0 &&
      !pawnFiles.includes(file - 1) &&
      !pawnFiles.includes(file + 1);
    if (isolated) score -= count * 9;

    if (count > 0 && !opponentPawnFiles.includes(file)) score += 3;
  }

  return score;
}

function evaluatePosition(game: Chess): number {
  if (game.isCheckmate()) {
    return game.turn() === "w" ? -MATE_SCORE : MATE_SCORE;
  }

  if (game.isDraw() || game.isStalemate()) return 0;

  let score = evaluateMaterial(game);
  let nonPawnMaterial = 0;
  const bishops = { w: 0, b: 0 };
  const pawnFiles = { w: [] as number[], b: [] as number[] };
  const board = game.board();

  for (const row of board) {
    for (const piece of row) {
      if (!piece) continue;
      if (piece.type !== "p" && piece.type !== "k") {
        nonPawnMaterial += PIECE_VALUES[piece.type];
      }
      if (piece.type === "b") bishops[piece.color] += 1;
      if (piece.type === "p") {
        pawnFiles[piece.color].push(piece.square.charCodeAt(0) - 97);
      }
    }
  }

  for (const row of board) {
    for (const piece of row) {
      if (!piece) continue;
      const positional = positionalPieceScore(
        game,
        piece.square,
        piece.type,
        piece.color,
        nonPawnMaterial
      );
      score += piece.color === "w" ? positional : -positional;
    }
  }

  if (bishops.w >= 2) score += 24;
  if (bishops.b >= 2) score -= 24;

  score += pawnStructureScore(pawnFiles.w, pawnFiles.b);
  score -= pawnStructureScore(pawnFiles.b, pawnFiles.w);

  const mobility = game.moves().length * 1.25;
  score += game.turn() === "w" ? mobility : -mobility;

  if (game.inCheck()) score += game.turn() === "w" ? -28 : 28;

  return score;
}

function movePriority(move: Move) {
  const capture = move.captured
    ? 10 * PIECE_VALUES[move.captured] - PIECE_VALUES[move.piece]
    : 0;
  const promotion = move.promotion ? PIECE_VALUES[move.promotion] : 0;
  return capture + promotion;
}

function orderedMoves(game: Chess) {
  return game
    .moves({ verbose: true })
    .sort((left, right) => movePriority(right) - movePriority(left));
}

function minimax(
  game: Chess,
  depth: number,
  alpha: number,
  beta: number,
  maximizing: boolean
): number {
  if (depth === 0 || game.isGameOver()) return evaluatePosition(game);

  const moves = orderedMoves(game);

  if (maximizing) {
    let best = -Infinity;
    for (const move of moves) {
      game.move(move);
      best = Math.max(best, minimax(game, depth - 1, alpha, beta, false));
      game.undo();
      alpha = Math.max(alpha, best);
      if (beta <= alpha) break;
    }
    return best;
  }

  let best = Infinity;
  for (const move of moves) {
    game.move(move);
    best = Math.min(best, minimax(game, depth - 1, alpha, beta, true));
    game.undo();
    beta = Math.min(beta, best);
    if (beta <= alpha) break;
  }
  return best;
}

function stableVariety(fen: string, move: Move) {
  const input = `${fen}:${move.from}${move.to}${move.promotion ?? ""}`;
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) | 0;
  }
  return Math.abs(hash % 5);
}

function rootMoveBonus(
  game: Chess,
  move: Move,
  recentHistory: AppliedMove[]
) {
  let bonus = 0;
  const { file, rank } = squareCoordinates(move.to);
  bonus += centralization(file, rank) * (move.piece === "n" ? 3 : 1);

  const lastAiMove = recentHistory[recentHistory.length - 2];
  if (
    lastAiMove &&
    move.from === lastAiMove.to &&
    move.to === lastAiMove.from
  ) {
    bonus -= 65;
  }

  if (recentHistory.length < 16) {
    if (move.piece === "n" || move.piece === "b") bonus += 14;
    if (move.piece === "r" && !move.captured) bonus -= 18;
    if (move.piece === "q" && !move.captured) bonus -= 10;
  }

  if (move.flags.includes("k") || move.flags.includes("q")) bonus += 34;
  if (move.captured) bonus += 8;
  bonus += stableVariety(game.fen(), move);
  return bonus;
}

export function pickAiMove(
  game: Chess,
  depth: number,
  recentHistory: AppliedMove[] = []
) {
  const aiIsWhite = game.turn() === "w";
  const moves = orderedMoves(game);
  let bestMove = moves[0];
  let bestScore = aiIsWhite ? -Infinity : Infinity;

  for (const move of moves) {
    game.move(move);
    const searchScore = minimax(
      game,
      depth - 1,
      -Infinity,
      Infinity,
      !aiIsWhite
    );
    game.undo();

    const bonus = rootMoveBonus(game, move, recentHistory);
    const score = searchScore + (aiIsWhite ? bonus : -bonus);

    if (
      (aiIsWhite && score > bestScore) ||
      (!aiIsWhite && score < bestScore)
    ) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
}

export function analyzeMove(
  game: Chess,
  played: AppliedMove,
  depth = 2
): MoveAnalysis | null {
  const playerIsWhite = game.turn() === "w";
  const moves = orderedMoves(game);
  if (moves.length === 0) return null;

  let bestMove = moves[0];
  let bestScore = playerIsWhite ? -Infinity : Infinity;
  let playedMove: Move | null = null;
  let playedScore: number | null = null;

  for (const move of moves) {
    game.move(move);
    const score = minimax(
      game,
      Math.max(0, depth - 1),
      -Infinity,
      Infinity,
      !playerIsWhite
    );
    game.undo();

    const isPlayedMove =
      move.from === played.from &&
      move.to === played.to &&
      (move.promotion ?? "") === (played.promotion ?? "");

    if (isPlayedMove) {
      playedMove = move;
      playedScore = score;
    }

    if (
      (playerIsWhite && score > bestScore) ||
      (!playerIsWhite && score < bestScore)
    ) {
      bestScore = score;
      bestMove = move;
    }
  }

  if (!playedMove || playedScore === null) return null;

  return {
    bestMove,
    playedMove,
    centipawnLoss: Math.max(
      0,
      Math.round(
        playerIsWhite
          ? bestScore - playedScore
          : playedScore - bestScore
      )
    ),
  };
}
