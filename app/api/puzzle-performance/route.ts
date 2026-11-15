import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const VISITOR_COOKIE = "chessgrind-visitor-v1";
const ONE_YEAR = 60 * 60 * 24 * 365;
const MIN_PERCENTILE_SAMPLE = 10;

type MemoryLeaderboard = Map<string, Map<string, number>>;
type PerformanceGlobals = typeof globalThis & {
  __chessgrindPuzzlePerformance?: MemoryLeaderboard;
};

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cleanPuzzleId(value: unknown) {
  return typeof value === "string" && /^[a-zA-Z0-9:_-]{1,100}$/.test(value)
    ? value
    : null;
}

function boundedNumber(value: unknown, min: number, max: number) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : null;
}

function performanceValue(score: number, seconds: number, wrongMoves: number, hintsUsed: number) {
  return Math.round(score) * 1_000_000 - Math.round(seconds) * 1_000 - Math.round(wrongMoves) * 10 - Math.round(hintsUsed);
}

function percentileFrom(better: number, total: number) {
  if (total < MIN_PERCENTILE_SAMPLE) return null;
  return Math.max(1, Math.min(100, Math.ceil(((better + 1) / total) * 100)));
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
    return noStore(NextResponse.json({ error: "Invalid result." }, { status: 400 }));
  }

  const puzzleId = cleanPuzzleId(body.puzzleId);
  const score = boundedNumber(body.score, 0, 100);
  const seconds = boundedNumber(body.seconds, 0, 3600);
  const wrongMoves = boundedNumber(body.wrongMoves, 0, 100);
  const hintsUsed = boundedNumber(body.hintsUsed, 0, 10);
  if (!puzzleId || score === null || seconds === null || wrongMoves === null || hintsUsed === null) {
    return noStore(NextResponse.json({ error: "Invalid result." }, { status: 400 }));
  }

  const existingVisitorId = request.cookies.get(VISITOR_COOKIE)?.value;
  const visitorId = existingVisitorId ?? crypto.randomUUID();
  const value = performanceValue(score, seconds, wrongMoves, hintsUsed);
  const key = `chessgrind:puzzle-performance:${puzzleId}`;
  let sampleSize = 1;
  let better = 0;
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;

  if (url && token) {
    try {
      const redis = new Redis({ url, token });
      await redis.zadd(key, { score: value, member: visitorId });
      [sampleSize, better] = await Promise.all([
        redis.zcard(key),
        redis.zcount(key, `(${value}`, "+inf"),
      ]);
    } catch {
      // A result should still render if community comparison storage is temporarily unavailable.
    }
  } else if (process.env.NODE_ENV !== "production") {
    const globals = globalThis as PerformanceGlobals;
    globals.__chessgrindPuzzlePerformance ??= new Map();
    const board = globals.__chessgrindPuzzlePerformance.get(key) ?? new Map<string, number>();
    board.set(visitorId, value);
    globals.__chessgrindPuzzlePerformance.set(key, board);
    const values = [...board.values()];
    sampleSize = values.length;
    better = values.filter((item) => item > value).length;
  }

  const response = noStore(NextResponse.json({
    percentile: percentileFrom(Number(better), Number(sampleSize)),
    sampleSize: Number(sampleSize),
  }));
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
