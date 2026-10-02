import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const VISITOR_KEY = "chessgrind:visitors:total";
const ONLINE_KEY = "chessgrind:visitors:online";
const VISITOR_COOKIE = "chessgrind-visitor-v1";
const ONE_YEAR = 60 * 60 * 24 * 365;
const ONLINE_WINDOW_MS = 75_000;

const ONLINE_SCRIPT = `
redis.call("ZREMRANGEBYSCORE", KEYS[1], "-inf", ARGV[1])
redis.call("ZADD", KEYS[1], ARGV[2], ARGV[3])
return redis.call("ZCARD", KEYS[1])
`;

type VisitorGlobals = typeof globalThis & {
  __chessgrindVisitorCount?: number;
  __chessgrindOnlineVisitors?: Map<string, number>;
};

export const dynamic = "force-dynamic";

function localVisitorCount(isNewVisitor: boolean) {
  const globals = globalThis as VisitorGlobals;
  const current = globals.__chessgrindVisitorCount ?? 0;

  globals.__chessgrindVisitorCount =
    isNewVisitor || current === 0 ? current + 1 : current;

  return globals.__chessgrindVisitorCount;
}

function localOnlineCount(visitorId: string, now: number) {
  const globals = globalThis as VisitorGlobals;
  const visitors =
    globals.__chessgrindOnlineVisitors ?? new Map<string, number>();

  for (const [id, lastSeen] of visitors) {
    if (lastSeen <= now - ONLINE_WINDOW_MS) visitors.delete(id);
  }

  visitors.set(visitorId, now);
  globals.__chessgrindOnlineVisitors = visitors;
  return visitors.size;
}

export async function GET(request: NextRequest) {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;
  const isNewVisitor = !request.cookies.has(VISITOR_COOKIE);
  const visitorId =
    request.cookies.get(VISITOR_COOKIE)?.value ?? crypto.randomUUID();
  const now = Date.now();

  let count: number;
  let online: number;
  let storage: "redis" | "memory" = "memory";

  if (url && token) {
    try {
      const redis = new Redis({ url, token });

      if (isNewVisitor) {
        count = await redis.incr(VISITOR_KEY);
      } else {
        const storedCount = await redis.get<number>(VISITOR_KEY);
        count = storedCount ?? (await redis.incr(VISITOR_KEY));
      }

      online = await redis.eval<string[], number>(ONLINE_SCRIPT, [ONLINE_KEY], [
        String(now - ONLINE_WINDOW_MS),
        String(now),
        visitorId,
      ]);

      storage = "redis";
    } catch {
      count = localVisitorCount(isNewVisitor);
      online = localOnlineCount(visitorId, now);
    }
  } else {
    count = localVisitorCount(isNewVisitor);
    online = localOnlineCount(visitorId, now);
  }

  const response = NextResponse.json({
    count,
    online,
    isNewVisitor,
    storage,
  });

  response.headers.set(
    "Cache-Control",
    "private, no-store, max-age=0"
  );

  if (isNewVisitor) {
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
