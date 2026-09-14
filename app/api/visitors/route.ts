import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return NextResponse.json({ count: null });
  }

  const redis = new Redis({ url, token });
  const count = await redis.incr("chessgrind:visitors:total");

  return NextResponse.json({ count });
}
