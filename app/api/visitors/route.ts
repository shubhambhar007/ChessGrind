import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const VISITOR_KEY = "chessgrind:visitors:total";
const VISITOR_COOKIE = "chessgrind-visitor-v1";
const ONE_YEAR = 60 * 60 * 24 * 365;

type VisitorGlobals = typeof globalThis & {
  __chessgrindVisitorCount?: number;
};

export const dynamic = "force-dynamic";

function localVisitorCount(isNewVisitor: boolean) {
  const globals = globalThis as VisitorGlobals;
  const current = globals.__chessgrindVisitorCount ?? 0;

  globals.__chessgrindVisitorCount =
    isNewVisitor || current === 0 ? current + 1 : current;

  return globals.__chessgrindVisitorCount;
}

export async function GET(request: NextRequest) {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;
  const isNewVisitor = !request.cookies.has(VISITOR_COOKIE);

  let count: number;
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

      storage = "redis";
    } catch {
      count = localVisitorCount(isNewVisitor);
    }
  } else {
    count = localVisitorCount(isNewVisitor);
  }

  const response = NextResponse.json({
    count,
    isNewVisitor,
    storage,
  });

  response.headers.set(
    "Cache-Control",
    "private, no-store, max-age=0"
  );

  if (isNewVisitor) {
    response.cookies.set(VISITOR_COOKIE, crypto.randomUUID(), {
      httpOnly: true,
      maxAge: ONE_YEAR,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}
