import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { getStore } from "@/lib/server/store";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_SECONDS = 60 * 10;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(value: unknown, max = 80) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function noStore(response: NextResponse) {
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return noStore(NextResponse.json({ error: "Invalid request." }, { status: 400 }));
  }

  const email = clean(body.email, 254).toLowerCase();
  if (!EMAIL_PATTERN.test(email)) {
    return noStore(NextResponse.json({ error: "Enter a valid email." }, { status: 400 }));
  }

  const store = getStore();
  if (!store) {
    return noStore(NextResponse.json({ error: "The daily list is temporarily unavailable." }, { status: 503 }));
  }

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ipHash = createHash("sha256").update(forwarded).digest("hex").slice(0, 20);
  const rateKey = `chessgrind:daily-signup:rate:${ipHash}`;
  const attempts = await store.incr(rateKey);
  if (attempts === 1) await store.expire(rateKey, RATE_WINDOW_SECONDS);
  if (attempts > 8) {
    return noStore(NextResponse.json({ error: "Too many attempts. Try again shortly." }, { status: 429 }));
  }

  const emailHash = createHash("sha256").update(email).digest("hex");
  const subscriberKey = `chessgrind:daily-subscriber:${emailHash}`;
  const created = await store.set(
    subscriberKey,
    {
      email,
      source: clean(body.signupSource) || "unknown",
      utmSource: clean(body.source),
      utmMedium: clean(body.medium),
      utmCampaign: clean(body.campaign),
      joinedAt: new Date().toISOString(),
    },
    { nx: true }
  );

  if (created) await store.incr("chessgrind:daily-subscriber:count");
  return noStore(NextResponse.json({ ok: true, alreadyJoined: !created }));
}
