import { NextRequest, NextResponse } from "next/server";
import { endSession } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ ok: true });
  await endSession(request, response);
  return response;
}
