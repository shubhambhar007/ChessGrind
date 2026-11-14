import { puzzles, type Puzzle } from "@/data/puzzles";

const DAY_MS = 86_400_000;
const DAILY_EPOCH = Date.UTC(2026, 0, 1);

export type DailyPuzzle = Pick<
  Puzzle,
  "id" | "fen" | "moves" | "rating" | "themes" | "difficulty" | "solutionLength"
>;

export function normalizeDailyDate(value?: string | null) {
  if (value && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const parsed = new Date(`${value}T00:00:00.000Z`);
    if (!Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value) {
      return value;
    }
  }
  return new Date().toISOString().slice(0, 10);
}

export function getDailyPuzzle(date: string): DailyPuzzle {
  const day = Math.floor((Date.parse(`${date}T00:00:00.000Z`) - DAILY_EPOCH) / DAY_MS);
  const index = ((day * 1543 + 37) % puzzles.length + puzzles.length) % puzzles.length;
  const puzzle = puzzles[index];

  return {
    id: puzzle.id,
    fen: puzzle.fen,
    moves: puzzle.moves,
    rating: puzzle.rating,
    themes: puzzle.themes,
    difficulty: puzzle.difficulty,
    solutionLength: puzzle.solutionLength,
  };
}

export function getDailyNumber(date: string) {
  return Math.floor((Date.parse(`${date}T00:00:00.000Z`) - DAILY_EPOCH) / DAY_MS) + 1;
}
