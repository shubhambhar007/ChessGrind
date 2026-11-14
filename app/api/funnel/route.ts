import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const CLIENT_EVENTS = [
  "training_started",
  "puzzle_completed",
  "grindbook_saved",
  "founder_viewed",
  "checkout_clicked",
  "checkout_account_required",
  "checkout_created",
  "checkout_failed",
  "premium_prompt_viewed",
  "premium_prompt_clicked",
  "daily_puzzle_viewed",
  "daily_puzzle_started",
  "daily_puzzle_solved",
  "daily_share_clicked",
  "daily_card_downloaded",
  "daily_email_submitted",
] as const;

const EVENTS = [
  ...CLIENT_EVENTS,
  "payment_succeeded",
] as const;

type FunnelEvent = (typeof EVENTS)[number];
type FunnelRecord = { total: number; users: Set<string> };
type FunnelGlobals = typeof globalThis & {
  __chessgrindFunnel?: Map<FunnelEvent, FunnelRecord>;
};

const EVENT_SET = new Set<string>(CLIENT_EVENTS);
const VISITOR_COOKIE = "chessgrind-visitor-v1";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function redisConfig() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;
  return url && token ? { url, token } : null;
}

function memoryStore() {
  const globals = globalThis as FunnelGlobals;
  globals.__chessgrindFunnel ??= new Map();
  return globals.__chessgrindFunnel;
}

function noStore(response: NextResponse) {
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  return response;
}

export async function POST(request: NextRequest) {
  let event = "";
  let metadata: Record<string, string> = {};
  try {
    const body = (await request.json()) as { event?: unknown; metadata?: unknown };
    event = typeof body.event === "string" ? body.event : "";
    if (body.metadata && typeof body.metadata === "object" && !Array.isArray(body.metadata)) {
      metadata = Object.fromEntries(
        Object.entries(body.metadata as Record<string, unknown>)
          .filter(([, value]) => typeof value === "string" && value.length > 0)
          .slice(0, 8)
          .map(([key, value]) => [key.slice(0, 40), String(value).slice(0, 100)])
      );
    }
  } catch {
    return noStore(NextResponse.json({ error: "Invalid event." }, { status: 400 }));
  }

  if (!EVENT_SET.has(event)) {
    return noStore(NextResponse.json({ error: "Unknown event." }, { status: 400 }));
  }

  const typedEvent = event as FunnelEvent;
  const existingVisitorId = request.cookies.get(VISITOR_COOKIE)?.value;
  const visitorId = existingVisitorId ?? crypto.randomUUID();
  const config = redisConfig();

  if (config) {
    try {
      const redis = new Redis(config);
      await Promise.all([
        redis.incr(`chessgrind:funnel:${typedEvent}:total`),
        redis.sadd(`chessgrind:funnel:${typedEvent}:users`, visitorId),
        ...(metadata.campaign
          ? [redis.hincrby(`chessgrind:funnel:${typedEvent}:campaigns`, metadata.campaign, 1)]
          : []),
      ]);
    } catch {
      const store = memoryStore();
      const record = store.get(typedEvent) ?? { total: 0, users: new Set<string>() };
      record.total += 1;
      record.users.add(visitorId);
      store.set(typedEvent, record);
    }
  } else {
    const store = memoryStore();
    const record = store.get(typedEvent) ?? { total: 0, users: new Set<string>() };
    record.total += 1;
    record.users.add(visitorId);
    store.set(typedEvent, record);
  }

  const response = noStore(NextResponse.json({ ok: true }));
  if (!existingVisitorId) {
    response.cookies.set(VISITOR_COOKIE, visitorId, {
      httpOnly: true,
      maxAge: ONE_YEAR,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }
  return response;
}

export async function GET() {
  const config = redisConfig();
  const summary: Record<string, { total: number; users: number }> = {};

  if (config) {
    try {
      const redis = new Redis(config);
      await Promise.all(
        EVENTS.map(async (event) => {
          const [total, users] = await Promise.all([
            redis.get<number>(`chessgrind:funnel:${event}:total`),
            redis.scard(`chessgrind:funnel:${event}:users`),
          ]);
          summary[event] = { total: Number(total ?? 0), users: Number(users ?? 0) };
        })
      );
      return noStore(NextResponse.json({ storage: "redis", events: summary }));
    } catch {
      // Fall through to the in-memory snapshot.
    }
  }

  const store = memoryStore();
  for (const event of EVENTS) {
    const record = store.get(event);
    summary[event] = {
      total: record?.total ?? 0,
      users: record?.users.size ?? 0,
    };
  }
  return noStore(NextResponse.json({ storage: "memory", events: summary }));
}
