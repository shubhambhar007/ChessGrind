import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const VISITOR_KEY = "chessgrind:visitors:total";
const ONLINE_KEY = "chessgrind:visitors:online";
const PAGE_VIEW_KEY = "chessgrind:pageviews:total";
const VISITOR_COOKIE = "chessgrind-visitor-v1";
const ONE_YEAR = 60 * 60 * 24 * 365;
const ONLINE_WINDOW_MS = 75_000;
const PAGE_VIEW_BASELINE = 422;

const PRESENCE_SCRIPT = `
redis.call("ZREMRANGEBYSCORE", KEYS[1], "-inf", ARGV[1])
redis.call("ZADD", KEYS[1], ARGV[2], ARGV[3])
redis.call("SET", KEYS[2], ARGV[4], "NX")
local pageViews = tonumber(redis.call("GET", KEYS[2]))
if ARGV[5] == "1" then
  pageViews = redis.call("INCR", KEYS[2])
end
return {redis.call("ZCARD", KEYS[1]), pageViews}
`;

type VisitorGlobals = typeof globalThis & {
  __chessgrindVisitorCount?: number;
  __chessgrindPageViews?: number;
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

function localPageViewCount(recordPageView: boolean) {
  const globals = globalThis as VisitorGlobals;
  const current = globals.__chessgrindPageViews ?? PAGE_VIEW_BASELINE;

  globals.__chessgrindPageViews = recordPageView ? current + 1 : current;
  return globals.__chessgrindPageViews;
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
  const recordPageView = request.nextUrl.searchParams.get("view") === "1";
  const visitorId =
    request.cookies.get(VISITOR_COOKIE)?.value ?? crypto.randomUUID();
  const now = Date.now();

  let pageViews: number;
  let online: number;
  let storage: "redis" | "memory" = "memory";

  if (url && token) {
    try {
      const redis = new Redis({ url, token });

      if (isNewVisitor) {
        await redis.incr(VISITOR_KEY);
      }

      [online, pageViews] = await redis.eval<string[], [number, number]>(
        PRESENCE_SCRIPT,
        [ONLINE_KEY, PAGE_VIEW_KEY],
        [
          String(now - ONLINE_WINDOW_MS),
          String(now),
          visitorId,
          String(PAGE_VIEW_BASELINE),
          recordPageView ? "1" : "0",
        ]
      );

      storage = "redis";
    } catch {
      localVisitorCount(isNewVisitor);
      pageViews = localPageViewCount(recordPageView);
      online = localOnlineCount(visitorId, now);
    }
  } else {
    localVisitorCount(isNewVisitor);
    pageViews = localPageViewCount(recordPageView);
    online = localOnlineCount(visitorId, now);
  }

  const response = NextResponse.json({
    pageViews,
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
