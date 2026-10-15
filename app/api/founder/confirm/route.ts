import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/account?founder=processing", request.url));
}
