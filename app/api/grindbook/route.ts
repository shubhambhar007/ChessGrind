import { NextRequest, NextResponse } from "next/server";
import {
  isGrindbookCard,
  type GrindbookCard,
} from "@/lib/grindbook";
import {
  EMPTY_GRINDBOOK_PROGRESS,
  isGrindbookProgress,
  type GrindbookProgress,
} from "@/lib/grindbook-progress";
import { getRequestUser } from "@/lib/server/auth";
import { getStore } from "@/lib/server/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_CARDS = 500;
const MAX_BODY_BYTES = 1_000_000;

type StoredGrindbook = {
  cards: GrindbookCard[];
  progress?: GrindbookProgress;
  updatedAt: string;
};

function grindbookKey(userId: string) {
  return `chessgrind:grindbook:user:${userId}`;
}

export async function GET(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const store = getStore();
  if (!store) {
    return NextResponse.json(
      { error: "Cloud storage is temporarily unavailable." },
      { status: 503 }
    );
  }

  const saved = await store.get<StoredGrindbook>(grindbookKey(user.id));
  return NextResponse.json({
    cards: saved?.cards?.filter(isGrindbookCard) ?? [],
    progress: isGrindbookProgress(saved?.progress)
      ? saved.progress
      : EMPTY_GRINDBOOK_PROGRESS,
    updatedAt: saved?.updatedAt ?? null,
  });
}

export async function PUT(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Grindbook is too large." }, { status: 413 });
  }

  let body: { cards?: unknown; progress?: unknown };
  try {
    body = (await request.json()) as {
      cards?: unknown;
      progress?: unknown;
    };
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (
    !Array.isArray(body.cards) ||
    body.cards.length > MAX_CARDS ||
    !body.cards.every(isGrindbookCard)
  ) {
    return NextResponse.json(
      { error: `A Grindbook can contain up to ${MAX_CARDS} valid cards.` },
      { status: 400 }
    );
  }

  const progress =
    body.progress === undefined
      ? EMPTY_GRINDBOOK_PROGRESS
      : isGrindbookProgress(body.progress)
        ? body.progress
        : null;

  if (!progress) {
    return NextResponse.json(
      { error: "Invalid Grindbook review progress." },
      { status: 400 }
    );
  }

  const store = getStore();
  if (!store) {
    return NextResponse.json(
      { error: "Cloud storage is temporarily unavailable." },
      { status: 503 }
    );
  }

  const updatedAt = new Date().toISOString();
  await store.set(grindbookKey(user.id), {
    cards: body.cards,
    progress,
    updatedAt,
  });

  return NextResponse.json({ ok: true, updatedAt });
}
