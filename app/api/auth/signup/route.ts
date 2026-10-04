import { NextRequest, NextResponse } from "next/server";
import {
  AuthError,
  checkAuthRateLimit,
  createUser,
  getClientIdentifier,
  startSession,
} from "@/lib/server/auth";
import { getStore } from "@/lib/server/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      handle?: unknown;
      password?: unknown;
    };
    const handle = typeof body.handle === "string" ? body.handle : "";
    const password = typeof body.password === "string" ? body.password : "";
    const store = getStore();
    if (!store) throw new AuthError("Cloud accounts are temporarily unavailable.", 503);
    await checkAuthRateLimit(store, getClientIdentifier(request, handle));
    const { user } = await createUser(handle, password, store);

    const response = NextResponse.json({
      user: { id: user.id, handle: user.handle, createdAt: user.createdAt },
    });
    await startSession(store, user.id, response);
    return response;
  } catch (error) {
    const status = error instanceof AuthError ? error.status : 500;
    const message =
      error instanceof AuthError
        ? error.message
        : "Could not create your account right now.";
    return NextResponse.json({ error: message }, { status });
  }
}
