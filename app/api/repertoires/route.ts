import { NextRequest, NextResponse } from "next/server";
import { isRepertoire, type Repertoire } from "@/lib/repertoire";
import { getRequestUser } from "@/lib/server/auth";
import { getStore } from "@/lib/server/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REPERTOIRES = 20;
const MAX_MOVES = 5_000;

function key(userId: string) {
  return `chessgrind:repertoires:user:${userId}`;
}

export async function GET(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  const store = getStore();
  if (!store) return NextResponse.json({ error: "Cloud unavailable." }, { status: 503 });
  const saved = await store.get<Repertoire[]>(key(user.id));
  return NextResponse.json({
    repertoires: Array.isArray(saved) ? saved.filter(isRepertoire) : [],
  });
}

export async function PUT(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  let body: { repertoires?: unknown };
  try {
    body = (await request.json()) as { repertoires?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (
    !Array.isArray(body.repertoires) ||
    body.repertoires.length > MAX_REPERTOIRES ||
    !body.repertoires.every(isRepertoire) ||
    body.repertoires.reduce((sum, item) => sum + item.moves.length, 0) > MAX_MOVES
  ) {
    return NextResponse.json({ error: "Invalid repertoire data." }, { status: 400 });
  }
  const store = getStore();
  if (!store) return NextResponse.json({ error: "Cloud unavailable." }, { status: 503 });
  await store.set(key(user.id), body.repertoires);
  return NextResponse.json({ ok: true });
}
