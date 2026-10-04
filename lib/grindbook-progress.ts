export type GrindbookProgress = {
  reviewedByDay: Record<string, number>;
  totalReviews: number;
};

export const GRINDBOOK_PROGRESS_KEY =
  "chessgrind-grindbook-progress-v1";
export const GRINDBOOK_PROGRESS_UPDATED_EVENT =
  "chessgrind-grindbook-progress-updated";
export const EMPTY_GRINDBOOK_PROGRESS: GrindbookProgress = {
  reviewedByDay: {},
  totalReviews: 0,
};

export function reviewDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isGrindbookProgress(
  value: unknown
): value is GrindbookProgress {
  if (!value || typeof value !== "object") return false;
  const progress = value as Partial<GrindbookProgress>;

  return (
    typeof progress.totalReviews === "number" &&
    Number.isFinite(progress.totalReviews) &&
    progress.totalReviews >= 0 &&
    Boolean(progress.reviewedByDay) &&
    typeof progress.reviewedByDay === "object" &&
    Object.entries(progress.reviewedByDay).every(
      ([day, count]) =>
        /^\d{4}-\d{2}-\d{2}$/.test(day) &&
        typeof count === "number" &&
        Number.isInteger(count) &&
        count >= 0
    )
  );
}

export function loadGrindbookProgress(): GrindbookProgress {
  if (typeof window === "undefined") return EMPTY_GRINDBOOK_PROGRESS;

  try {
    const raw = window.localStorage.getItem(GRINDBOOK_PROGRESS_KEY);
    if (!raw) return EMPTY_GRINDBOOK_PROGRESS;
    const parsed: unknown = JSON.parse(raw);
    return isGrindbookProgress(parsed)
      ? parsed
      : EMPTY_GRINDBOOK_PROGRESS;
  } catch {
    return EMPTY_GRINDBOOK_PROGRESS;
  }
}

export function saveGrindbookProgress(progress: GrindbookProgress) {
  window.localStorage.setItem(
    GRINDBOOK_PROGRESS_KEY,
    JSON.stringify(progress)
  );
  window.dispatchEvent(
    new Event(GRINDBOOK_PROGRESS_UPDATED_EVENT)
  );
}

export function recordGrindbookReview(now = new Date()) {
  const current = loadGrindbookProgress();
  const day = reviewDayKey(now);
  const reviewedByDay = {
    ...current.reviewedByDay,
    [day]: (current.reviewedByDay[day] ?? 0) + 1,
  };

  const retainedDays = Object.keys(reviewedByDay)
    .sort()
    .slice(-400);
  const trimmed = Object.fromEntries(
    retainedDays.map((key) => [key, reviewedByDay[key]])
  );
  const next: GrindbookProgress = {
    reviewedByDay: trimmed,
    totalReviews: current.totalReviews + 1,
  };

  saveGrindbookProgress(next);
  return next;
}

function addDays(day: string, amount: number) {
  const [year, month, date] = day.split("-").map(Number);
  const next = new Date(year, month - 1, date);
  next.setDate(next.getDate() + amount);
  return reviewDayKey(next);
}

export function currentReviewStreak(
  progress: GrindbookProgress,
  today = reviewDayKey()
) {
  let cursor = today;
  if (!progress.reviewedByDay[cursor]) cursor = addDays(cursor, -1);

  let streak = 0;
  while (progress.reviewedByDay[cursor]) {
    streak += 1;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

export function bestReviewStreak(progress: GrindbookProgress) {
  const activeDays = Object.keys(progress.reviewedByDay)
    .filter((day) => progress.reviewedByDay[day] > 0)
    .sort();

  let best = 0;
  let current = 0;
  let previous: string | null = null;

  for (const day of activeDays) {
    current = previous && addDays(previous, 1) === day ? current + 1 : 1;
    best = Math.max(best, current);
    previous = day;
  }

  return best;
}

export function recentReviewDays(
  progress: GrindbookProgress,
  count = 7,
  today = reviewDayKey()
) {
  return Array.from({ length: count }, (_, index) => {
    const day = addDays(today, index - count + 1);
    const [year, month, date] = day.split("-").map(Number);
    const label = new Intl.DateTimeFormat("en", {
      weekday: "short",
    })
      .format(new Date(year, month - 1, date))
      .slice(0, 1);

    return {
      day,
      label,
      count: progress.reviewedByDay[day] ?? 0,
      isToday: day === today,
    };
  });
}

export function mergeGrindbookProgress(
  local: GrindbookProgress,
  cloud: GrindbookProgress
): GrindbookProgress {
  const reviewedByDay = { ...cloud.reviewedByDay };

  for (const [day, count] of Object.entries(local.reviewedByDay)) {
    reviewedByDay[day] = Math.max(reviewedByDay[day] ?? 0, count);
  }

  const countedReviews = Object.values(reviewedByDay).reduce(
    (total, count) => total + count,
    0
  );

  return {
    reviewedByDay,
    totalReviews: Math.max(
      local.totalReviews,
      cloud.totalReviews,
      countedReviews
    ),
  };
}
