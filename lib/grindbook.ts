export type GrindbookSource =
  | "puzzle"
  | "game"
  | "analysis"
  | "opening";

export type GrindbookRating =
  | "again"
  | "hard"
  | "good";

export type GrindbookCard = {
  id: string;
  fen: string;
  orientation: "white" | "black";
  title: string;
  prompt: string;
  solutionUci?: string;
  explanation?: string;
  tags: string[];
  source: GrindbookSource;
  createdAt: string;
  dueAt: string;
  intervalDays: number;
  repetitions: number;
  lapses: number;
  lastReviewedAt?: string;
  lastResult?: GrindbookRating;
};

export type NewGrindbookCard = Pick<
  GrindbookCard,
  | "fen"
  | "orientation"
  | "title"
  | "prompt"
  | "source"
> &
  Partial<
    Pick<
      GrindbookCard,
      "solutionUci" | "explanation" | "tags"
    >
  >;

export const GRINDBOOK_KEY = "chessgrind-grindbook-v1";
export const GRINDBOOK_UPDATED_EVENT =
  "chessgrind-grindbook-updated";

export function isGrindbookCard(value: unknown): value is GrindbookCard {
  if (!value || typeof value !== "object") return false;

  const card = value as Partial<GrindbookCard>;
  return (
    typeof card.id === "string" &&
    typeof card.fen === "string" &&
    typeof card.title === "string" &&
    typeof card.dueAt === "string" &&
    Array.isArray(card.tags)
  );
}

function notifyUpdated() {
  window.dispatchEvent(new Event(GRINDBOOK_UPDATED_EVENT));
}

export function loadGrindbook(): GrindbookCard[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(GRINDBOOK_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isGrindbookCard);
  } catch {
    return [];
  }
}

export function saveGrindbook(cards: GrindbookCard[]) {
  window.localStorage.setItem(GRINDBOOK_KEY, JSON.stringify(cards));
  notifyUpdated();
}

function positionKey(fen: string, solutionUci?: string) {
  const position = fen.split(" ").slice(0, 4).join(" ");
  return `${position}|${solutionUci ?? "note"}`;
}

function makeId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function addToGrindbook(input: NewGrindbookCard) {
  const cards = loadGrindbook();
  const key = positionKey(input.fen, input.solutionUci);
  const existing = cards.find(
    (card) => positionKey(card.fen, card.solutionUci) === key
  );

  if (existing) {
    return { card: existing, added: false };
  }

  const now = new Date().toISOString();
  const card: GrindbookCard = {
    ...input,
    id: makeId(),
    tags: input.tags ?? [],
    createdAt: now,
    dueAt: now,
    intervalDays: 0,
    repetitions: 0,
    lapses: 0,
  };

  saveGrindbook([card, ...cards]);
  return { card, added: true };
}

export function removeFromGrindbook(id: string) {
  const cards = loadGrindbook().filter((card) => card.id !== id);
  saveGrindbook(cards);
  return cards;
}

function addTime(date: Date, milliseconds: number) {
  return new Date(date.getTime() + milliseconds).toISOString();
}

export function reviewGrindbookCard(
  id: string,
  rating: GrindbookRating
) {
  const now = new Date();
  const cards = loadGrindbook().map((card) => {
    if (card.id !== id) return card;

    if (rating === "again") {
      return {
        ...card,
        dueAt: addTime(now, 10 * 60 * 1000),
        intervalDays: 0,
        repetitions: 0,
        lapses: card.lapses + 1,
        lastReviewedAt: now.toISOString(),
        lastResult: rating,
      };
    }

    const intervalDays =
      rating === "hard"
        ? Math.max(1, Math.round(Math.max(card.intervalDays, 1) * 1.35))
        : card.repetitions === 0
          ? 1
          : card.repetitions === 1
            ? 3
            : Math.max(7, Math.round(card.intervalDays * 2.25));

    return {
      ...card,
      dueAt: addTime(now, intervalDays * 24 * 60 * 60 * 1000),
      intervalDays,
      repetitions: card.repetitions + 1,
      lastReviewedAt: now.toISOString(),
      lastResult: rating,
    };
  });

  saveGrindbook(cards);
  return cards;
}

export function isDue(card: GrindbookCard, now = Date.now()) {
  return new Date(card.dueAt).getTime() <= now;
}

export function masteryLabel(card: GrindbookCard) {
  if (card.repetitions >= 4) return "Mastered";
  if (card.repetitions > 0) return "Familiar";
  return "Learning";
}

export function formatDue(card: GrindbookCard, now = Date.now()) {
  const due = new Date(card.dueAt).getTime();
  if (due <= now) return "Due now";

  const minutes = Math.ceil((due - now) / (60 * 1000));
  if (minutes < 60) return `In ${minutes}m`;

  const hours = Math.ceil(minutes / 60);
  if (hours < 24) return `In ${hours}h`;

  const days = Math.ceil(hours / 24);
  return `In ${days}d`;
}
