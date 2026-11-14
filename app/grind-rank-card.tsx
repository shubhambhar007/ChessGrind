"use client";

import {
  CALIBRATION_SOLVES,
  formatGrindTime,
  getGrindRank,
  getRankProgress,
  type GrindRankResult,
  type GrindRankState,
} from "@/lib/grind-rank";

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
}: {
  state: GrindRankState;
  result?: GrindRankResult | null;
  seconds?: number;
  timerActive?: boolean;
  compact?: boolean;
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
          <span>{timerActive ? "RUNNING" : seconds > 0 ? "TIME" : "STARTS ON MOVE"}</span>
          <strong>{formatGrindTime(seconds)}</strong>
        </div>
      </div>
      <div className="cg-grind-rank-track"><i style={{ width: `${progress.percent}%` }} /></div>
      <div className="cg-grind-rank-foot">
        <span>{progress.label}</span>
        {result && !result.duplicate ? <strong>+{result.xpEarned} XP · {result.score}/100</strong> : <strong>{state.xp} XP</strong>}
      </div>
    </section>
  );
}
