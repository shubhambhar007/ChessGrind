export const GRIND_RANK_KEY = "chessgrind-rank-v1";
export const GRIND_RANK_UPDATED_EVENT = "chessgrind:rank-updated";
export const LAST_RANK_CLOUD_USER_KEY = "chessgrind-rank-cloud-user-v1";
export const CALIBRATION_SOLVES = 10;

export type GrindDifficulty = "easy" | "medium" | "hard";

export type GrindRankHistory = {
  id: string;
  puzzleId: string;
  score: number;
  rating: number;
  seconds: number;
  wrongMoves: number;
  hintsUsed: number;
  playedAt: string;
};

export type GrindRankState = {
  version: 1;
  solves: number;
  rating: number;
  xp: number;
  cleanSolves: number;
  bestScore: number;
  lastScore: number | null;
  history: GrindRankHistory[];
  resultIds: string[];
  updatedAt: string | null;
};

export type GrindRankResult = {
  state: GrindRankState;
  score: number;
  ratingDelta: number;
  xpEarned: number;
  previousRank: GrindRankDefinition | null;
  rank: GrindRankDefinition | null;
  promoted: boolean;
  calibrationCompleted: boolean;
  duplicate: boolean;
};

export type GrindRankDefinition = {
  name: string;
  piece: "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";
  division: "I" | "II" | "III" | null;
  threshold: number;
};

export const EMPTY_GRIND_RANK: GrindRankState = {
  version: 1,
  solves: 0,
  rating: 800,
  xp: 0,
  cleanSolves: 0,
  bestScore: 0,
  lastScore: null,
  history: [],
  resultIds: [],
  updatedAt: null,
};

const RANKS: GrindRankDefinition[] = [
  { name: "Pawn I", piece: "pawn", division: "I", threshold: 400 },
  { name: "Pawn II", piece: "pawn", division: "II", threshold: 500 },
  { name: "Pawn III", piece: "pawn", division: "III", threshold: 600 },
  { name: "Knight I", piece: "knight", division: "I", threshold: 700 },
  { name: "Knight II", piece: "knight", division: "II", threshold: 800 },
  { name: "Knight III", piece: "knight", division: "III", threshold: 900 },
  { name: "Bishop I", piece: "bishop", division: "I", threshold: 1000 },
  { name: "Bishop II", piece: "bishop", division: "II", threshold: 1100 },
  { name: "Bishop III", piece: "bishop", division: "III", threshold: 1200 },
  { name: "Rook I", piece: "rook", division: "I", threshold: 1300 },
  { name: "Rook II", piece: "rook", division: "II", threshold: 1400 },
  { name: "Rook III", piece: "rook", division: "III", threshold: 1500 },
  { name: "Queen I", piece: "queen", division: "I", threshold: 1600 },
  { name: "Queen II", piece: "queen", division: "II", threshold: 1700 },
  { name: "Queen III", piece: "queen", division: "III", threshold: 1800 },
  { name: "King I", piece: "king", division: "I", threshold: 1900 },
  { name: "King II", piece: "king", division: "II", threshold: 2000 },
  { name: "King III", piece: "king", division: "III", threshold: 2100 },
  { name: "Grandmaster", piece: "king", division: null, threshold: 2250 },
];

function finiteInteger(value: unknown, fallback: number, minimum = 0) {
  return typeof value === "number" && Number.isFinite(value)
    ? Math.max(minimum, Math.round(value))
    : fallback;
}

export function isGrindRankState(value: unknown): value is GrindRankState {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const rank = value as Partial<GrindRankState>;
  return (
    rank.version === 1 &&
    typeof rank.solves === "number" &&
    typeof rank.rating === "number" &&
    typeof rank.xp === "number" &&
    typeof rank.cleanSolves === "number" &&
    typeof rank.bestScore === "number" &&
    Array.isArray(rank.history) &&
    Array.isArray(rank.resultIds)
  );
}

export function sanitizeGrindRank(value: unknown): GrindRankState {
  if (!isGrindRankState(value)) return { ...EMPTY_GRIND_RANK };
  return {
    version: 1,
    solves: finiteInteger(value.solves, 0),
    rating: Math.min(2400, finiteInteger(value.rating, 800, 400)),
    xp: finiteInteger(value.xp, 0),
    cleanSolves: finiteInteger(value.cleanSolves, 0),
    bestScore: Math.min(100, finiteInteger(value.bestScore, 0)),
    lastScore: value.lastScore === null ? null : Math.min(100, finiteInteger(value.lastScore, 0)),
    history: value.history.slice(-60).filter((entry) =>
      Boolean(entry && typeof entry.id === "string" && typeof entry.score === "number")
    ),
    resultIds: value.resultIds.filter((id): id is string => typeof id === "string").slice(-200),
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : null,
  };
}

export function loadGrindRank() {
  if (typeof window === "undefined") return { ...EMPTY_GRIND_RANK };
  try {
    const raw = window.localStorage.getItem(GRIND_RANK_KEY);
    return raw ? sanitizeGrindRank(JSON.parse(raw)) : { ...EMPTY_GRIND_RANK };
  } catch {
    return { ...EMPTY_GRIND_RANK };
  }
}

export function saveGrindRank(state: GrindRankState) {
  if (typeof window === "undefined") return;
  const safe = sanitizeGrindRank(state);
  try {
    window.localStorage.setItem(GRIND_RANK_KEY, JSON.stringify(safe));
  } catch {
    // Scoring must remain playable when storage is restricted.
  }
  window.dispatchEvent(new Event(GRIND_RANK_UPDATED_EVENT));
}

export function getGrindRank(rating: number) {
  return [...RANKS].reverse().find((rank) => rating >= rank.threshold) ?? RANKS[0];
}

export function getNextGrindRank(rating: number) {
  return RANKS.find((rank) => rank.threshold > rating) ?? null;
}

export function getRankProgress(state: GrindRankState) {
  if (state.solves < CALIBRATION_SOLVES) {
    return {
      percent: (state.solves / CALIBRATION_SOLVES) * 100,
      current: state.solves,
      target: CALIBRATION_SOLVES,
      label: `${CALIBRATION_SOLVES - state.solves} calibration puzzle${CALIBRATION_SOLVES - state.solves === 1 ? "" : "s"} left`,
    };
  }
  const rank = getGrindRank(state.rating);
  const next = getNextGrindRank(state.rating);
  if (!next) return { percent: 100, current: state.rating, target: state.rating, label: "Highest rank reached" };
  const span = next.threshold - rank.threshold;
  const progress = state.rating - rank.threshold;
  return {
    percent: Math.max(0, Math.min(100, (progress / span) * 100)),
    current: progress,
    target: span,
    label: `${next.threshold - state.rating} rating to ${next.name}`,
  };
}

export function calculateGrindScore({
  seconds,
  wrongMoves,
  hintsUsed,
  difficulty,
  solutionLength,
}: {
  seconds: number;
  wrongMoves: number;
  hintsUsed: number;
  difficulty: GrindDifficulty;
  solutionLength: number;
}) {
  const baseTime = difficulty === "easy" ? 25 : difficulty === "medium" ? 40 : 60;
  const par = baseTime + Math.max(0, solutionLength - 1) * 18;
  const timePenalty = Math.max(0, Math.min(30, Math.round((seconds - par) * 0.55)));
  return Math.max(20, Math.min(100, 100 - wrongMoves * 18 - hintsUsed * 12 - timePenalty));
}

export function recordGrindResult(input: {
  id: string;
  puzzleId: string;
  puzzleRating: number;
  difficulty: GrindDifficulty;
  solutionLength: number;
  seconds: number;
  wrongMoves: number;
  hintsUsed: number;
  playedAt?: string;
}) : GrindRankResult {
  const previous = loadGrindRank();
  const previousRank = previous.solves >= CALIBRATION_SOLVES ? getGrindRank(previous.rating) : null;
  const duplicate = previous.resultIds.includes(input.id);
  const score = calculateGrindScore(input);
  if (duplicate) {
    return { state: previous, score, ratingDelta: 0, xpEarned: 0, previousRank, rank: previousRank, promoted: false, calibrationCompleted: false, duplicate: true };
  }

  const performanceRating = input.puzzleRating + (score - 70) * 8;
  const calibration = previous.solves < CALIBRATION_SOLVES;
  const weight = calibration ? 0.32 : 0.12;
  const nextRating = Math.max(400, Math.min(2400, Math.round(previous.rating + (performanceRating - previous.rating) * weight)));
  const xpEarned = score + (input.wrongMoves === 0 && input.hintsUsed === 0 ? 25 : 0);
  const playedAt = input.playedAt ?? new Date().toISOString();
  const nextSolves = previous.solves + 1;
  const historyEntry: GrindRankHistory = {
    id: input.id,
    puzzleId: input.puzzleId,
    score,
    rating: nextRating,
    seconds: Math.max(0, Math.round(input.seconds)),
    wrongMoves: Math.max(0, input.wrongMoves),
    hintsUsed: Math.max(0, input.hintsUsed),
    playedAt,
  };
  const state: GrindRankState = {
    version: 1,
    solves: nextSolves,
    rating: nextRating,
    xp: previous.xp + xpEarned,
    cleanSolves: previous.cleanSolves + (input.wrongMoves === 0 && input.hintsUsed === 0 ? 1 : 0),
    bestScore: Math.max(previous.bestScore, score),
    lastScore: score,
    history: [...previous.history, historyEntry].slice(-60),
    resultIds: [...previous.resultIds, input.id].slice(-200),
    updatedAt: playedAt,
  };
  const rank = nextSolves >= CALIBRATION_SOLVES ? getGrindRank(nextRating) : null;
  const previousIndex = previousRank ? RANKS.findIndex((item) => item.name === previousRank.name) : -1;
  const nextIndex = rank ? RANKS.findIndex((item) => item.name === rank.name) : -1;
  const calibrationCompleted = previous.solves < CALIBRATION_SOLVES && nextSolves >= CALIBRATION_SOLVES;
  const promoted = Boolean(rank && (calibrationCompleted || nextIndex > previousIndex));
  saveGrindRank(state);

  return {
    state,
    score,
    ratingDelta: nextRating - previous.rating,
    xpEarned,
    previousRank,
    rank,
    promoted,
    calibrationCompleted,
    duplicate: false,
  };
}

export function mergeGrindRank(local: GrindRankState, cloud: GrindRankState) {
  const left = sanitizeGrindRank(local);
  const right = sanitizeGrindRank(cloud);
  if (!left.updatedAt) return right;
  if (!right.updatedAt) return left;
  return left.updatedAt >= right.updatedAt ? left : right;
}

export function formatGrindTime(seconds: number) {
  const safe = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(safe / 60);
  return minutes ? `${minutes}:${String(safe % 60).padStart(2, "0")}` : `${safe}s`;
}

export function grindTimerNow() {
  return typeof performance === "undefined" ? 0 : performance.now();
}

export function grindElapsedSeconds(startedAt: number) {
  return startedAt > 0 ? Math.max(1, Math.floor((grindTimerNow() - startedAt) / 1000)) : 0;
}
