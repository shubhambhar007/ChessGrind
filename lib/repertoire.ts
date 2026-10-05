export type RepertoireColor = "white" | "black";

export type RepertoireMove = {
  id: string;
  fromFen: string;
  toFen: string;
  uci: string;
  san: string;
};

export type Repertoire = {
  id: string;
  name: string;
  color: RepertoireColor;
  moves: RepertoireMove[];
  createdAt: string;
  updatedAt: string;
};

export const REPERTOIRE_KEY = "chessgrind-repertoires-v1";
export const LAST_REPERTOIRE_CLOUD_USER_KEY =
  "chessgrind-last-repertoire-cloud-user-v1";
export const REPERTOIRE_UPDATED_EVENT = "chessgrind-repertoires-updated";

function id() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function positionKey(fen: string) {
  return fen.split(" ").slice(0, 4).join(" ");
}

export function isRepertoireMove(value: unknown): value is RepertoireMove {
  if (!value || typeof value !== "object") return false;
  const move = value as Partial<RepertoireMove>;
  return (
    typeof move.id === "string" &&
    typeof move.fromFen === "string" &&
    typeof move.toFen === "string" &&
    typeof move.uci === "string" &&
    typeof move.san === "string"
  );
}

export function isRepertoire(value: unknown): value is Repertoire {
  if (!value || typeof value !== "object") return false;
  const repertoire = value as Partial<Repertoire>;
  return (
    typeof repertoire.id === "string" &&
    typeof repertoire.name === "string" &&
    (repertoire.color === "white" || repertoire.color === "black") &&
    Array.isArray(repertoire.moves) &&
    repertoire.moves.every(isRepertoireMove) &&
    typeof repertoire.createdAt === "string" &&
    typeof repertoire.updatedAt === "string"
  );
}

export function loadRepertoires(): Repertoire[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed: unknown = JSON.parse(
      window.localStorage.getItem(REPERTOIRE_KEY) ?? "[]"
    );
    return Array.isArray(parsed) ? parsed.filter(isRepertoire) : [];
  } catch {
    return [];
  }
}

export function saveRepertoires(repertoires: Repertoire[]) {
  window.localStorage.setItem(REPERTOIRE_KEY, JSON.stringify(repertoires));
  window.dispatchEvent(new Event(REPERTOIRE_UPDATED_EVENT));
  return repertoires;
}

export function createRepertoire(
  repertoires: Repertoire[],
  color: RepertoireColor
) {
  const now = new Date().toISOString();
  const next: Repertoire = {
    id: id(),
    name: `My ${color === "white" ? "White" : "Black"} Repertoire`,
    color,
    moves: [],
    createdAt: now,
    updatedAt: now,
  };
  saveRepertoires([next, ...repertoires]);
  return next;
}

export function upsertRepertoireMove(
  repertoires: Repertoire[],
  repertoireId: string,
  input: Omit<RepertoireMove, "id">
) {
  const next = repertoires.map((repertoire) => {
    if (repertoire.id !== repertoireId) return repertoire;
    const duplicate = repertoire.moves.some(
      (move) =>
        positionKey(move.fromFen) === positionKey(input.fromFen) &&
        move.uci === input.uci
    );
    return {
      ...repertoire,
      moves: duplicate
        ? repertoire.moves
        : [...repertoire.moves, { ...input, id: id() }],
      updatedAt: new Date().toISOString(),
    };
  });
  return saveRepertoires(next);
}

export function renameRepertoire(
  repertoires: Repertoire[],
  repertoireId: string,
  name: string
) {
  const cleanName = name.trim().slice(0, 60);
  if (!cleanName) return repertoires;
  return saveRepertoires(
    repertoires.map((repertoire) =>
      repertoire.id === repertoireId
        ? {
            ...repertoire,
            name: cleanName,
            updatedAt: new Date().toISOString(),
          }
        : repertoire
    )
  );
}

export function removeRepertoire(
  repertoires: Repertoire[],
  repertoireId: string
) {
  return saveRepertoires(
    repertoires.filter((repertoire) => repertoire.id !== repertoireId)
  );
}

export function variationsFrom(repertoire: Repertoire, fen: string) {
  const key = positionKey(fen);
  return repertoire.moves.filter(
    (move) => positionKey(move.fromFen) === key
  );
}
