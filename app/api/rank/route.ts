import { NextRequest, NextResponse } from "next/server";
import { isGrindRankState, sanitizeGrindRank } from "@/lib/grind-rank";
import { getRequestUser } from "@/lib/server/auth";
import { getStore } from "@/lib/server/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 80_000;

function key(userId: string) {
  return `chessgrind:rank:user:${userId}`;
}

export async function GET(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  if (user.plan !== "founder") {
    return NextResponse.json({ error: "Premium access is required for rank sync." }, { status: 403 });
  }
  const store = getStore();
  if (!store) return NextResponse.json({ error: "Cloud storage is unavailable." }, { status: 503 });
  const rank = await store.get<unknown>(key(user.id));
  return NextResponse.json({ rank: sanitizeGrindRank(rank) });
}

export async function PUT(request: NextRequest) {
  const user = await getRequestUser(request);
  if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  if (user.plan !== "founder") {
    return NextResponse.json({ error: "Premium access is required for rank sync." }, { status: 403 });
  }
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Rank history is too large." }, { status: 413 });
  }
  let body: { rank?: unknown };
  try {
    body = (await request.json()) as { rank?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!isGrindRankState(body.rank)) {
    return NextResponse.json({ error: "Invalid rank data." }, { status: 400 });
  }
  const store = getStore();
  if (!store) return NextResponse.json({ error: "Cloud storage is unavailable." }, { status: 503 });
  const rank = sanitizeGrindRank(body.rank);
  await store.set(key(user.id), rank);
  return NextResponse.json({ ok: true, updatedAt: rank.updatedAt });
}
