"use client";

import {
  CALIBRATION_SOLVES,
  formatGrindTime,
  getGrindRank,
  getRankProgress,
  type GrindRankResult,
  type GrindRankState,
} from "@/lib/grind-rank";
import type { PuzzlePerformance } from "@/lib/puzzle-performance";

const PIECES = {
  pawn: "♟",
  knight: "♞",
  bishop: "♝",
  rook: "♜",
  queen: "♛",
  king: "♚",
} as const;

export default function GrindRankCard({
  state,
  result = null,
  seconds = 0,
  timerActive = false,
  compact = false,
  performance = null,
  onStart,
}: {
  state: GrindRankState;
  result?: GrindRankResult | null;
  seconds?: number;
  timerActive?: boolean;
  compact?: boolean;
  performance?: PuzzlePerformance | null;
  onStart?: () => void;
}) {
  const calibrated = state.solves >= CALIBRATION_SOLVES;
  const rank = getGrindRank(state.rating);
  const progress = getRankProgress(state);

  return (
    <section className={`cg-grind-rank ${compact ? "cg-grind-rank-compact" : ""}`} aria-label="Grind Rank">
      <div className="cg-grind-rank-head">
        <div className="cg-grind-rank-emblem" aria-hidden="true">{calibrated ? PIECES[rank.piece] : "?"}</div>
        <div>
          <span>{calibrated ? "GRIND RANK" : "CALIBRATION"}</span>
          <strong>{calibrated ? rank.name : `${state.solves} / ${CALIBRATION_SOLVES}`}</strong>
        </div>
        <div className="cg-grind-timer">
          <span>{timerActive ? "RUNNING" : seconds > 0 ? "FINAL TIME" : "TIMER READY"}</span>
          <strong>{formatGrindTime(seconds)}</strong>
        </div>
      </div>
      {onStart && !timerActive && seconds === 0 ? (
        <button className="cg-grind-start" type="button" onClick={onStart}>
          Start puzzle <span>Timer begins immediately</span>
        </button>
      ) : null}
      {result && !result.duplicate ? (
        <div className="cg-grind-result" aria-live="polite">
          <div><span>PUZZLE SCORE</span><strong>{result.score}<small>/100</small></strong></div>
          <div>
            <span>YOUR RESULT</span>
            <strong>{performance?.percentile ? `Top ${performance.percentile}%` : "Rank pending"}</strong>
            <small>{performance?.percentile ? `of ${performance.sampleSize} real solvers` : performance ? `Benchmark building · ${performance.sampleSize} solve${performance.sampleSize === 1 ? "" : "s"}` : "Comparing with real solves…"}</small>
          </div>
        </div>
      ) : null}
      <div className="cg-grind-rank-track"><i style={{ width: `${progress.percent}%` }} /></div>
      <div className="cg-grind-rank-foot">
        <span>{progress.label}</span>
        {result && !result.duplicate ? <strong>+{result.xpEarned} XP · {result.score}/100</strong> : <strong>{state.xp} XP</strong>}
      </div>
    </section>
  );
}
