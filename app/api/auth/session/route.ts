import { NextRequest, NextResponse } from "next/server";
import { getRequestUser } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const user = await getRequestUser(request);
  return NextResponse.json({ user });
}
