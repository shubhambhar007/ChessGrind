export type PuzzlePerformance = {
  percentile: number | null;
  sampleSize: number;
};

export async function submitPuzzlePerformance(input: {
  puzzleId: string;
  score: number;
  seconds: number;
  wrongMoves: number;
  hintsUsed: number;
}): Promise<PuzzlePerformance | null> {
  try {
    const response = await fetch("/api/puzzle-performance", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!response.ok) return null;
    return (await response.json()) as PuzzlePerformance;
  } catch {
    return null;
  }
}
