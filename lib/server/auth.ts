import "server-only";

import {
  createHash,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";
import type { NextRequest, NextResponse } from "next/server";
import { getStore, type ChessGrindStore } from "./store";

const scrypt = promisify(scryptCallback);

export const SESSION_COOKIE = "chessgrind-session-v1";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;
const USER_PREFIX = "chessgrind:account:user:";
const HANDLE_PREFIX = "chessgrind:account:handle:";
const SESSION_PREFIX = "chessgrind:account:session:";
const RATE_PREFIX = "chessgrind:account:rate:";

export type PublicUser = {
  id: string;
  handle: string;
  createdAt: string;
};

type StoredUser = PublicUser & {
  passwordHash: string;
  passwordSalt: string;
};

export class AuthError extends Error {
  constructor(
    message: string,
    public status = 400
  ) {
    super(message);
  }
}

export function normalizeHandle(handle: string) {
  return handle.trim().toLowerCase();
}

export function validateCredentials(handle: string, password: string) {
  const normalized = normalizeHandle(handle);

  if (!/^[a-z0-9_]{3,20}$/.test(normalized)) {
    throw new AuthError(
      "Use 3–20 letters, numbers, or underscores for your handle."
    );
  }

  if (password.length < 10 || password.length > 128) {
    throw new AuthError("Your passphrase must be 10–128 characters.");
  }

  return normalized;
}

async function hashPassword(password: string, salt: string) {
  const result = (await scrypt(password, salt, 64)) as Buffer;
  return result.toString("hex");
}

function hashSessionToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createUser(
  handle: string,
  password: string,
  storeOverride?: ChessGrindStore
) {
  const normalized = validateCredentials(handle, password);
  const store = storeOverride ?? getStore();
  if (!store) throw new AuthError("Cloud accounts are temporarily unavailable.", 503);

  const userId = crypto.randomUUID();
  const passwordSalt = randomBytes(16).toString("hex");
  const passwordHash = await hashPassword(password, passwordSalt);
  const claimed = await store.set(
    `${HANDLE_PREFIX}${normalized}`,
    userId,
    { nx: true }
  );

  if (!claimed) {
    throw new AuthError("That handle is already taken.", 409);
  }

  const user: StoredUser = {
    id: userId,
    handle: normalized,
    createdAt: new Date().toISOString(),
    passwordSalt,
    passwordHash,
  };

  try {
    await store.set(`${USER_PREFIX}${userId}`, user);
  } catch (error) {
    await store.del(`${HANDLE_PREFIX}${normalized}`);
    throw error;
  }

  return { store, user };
}

export async function authenticateUser(
  handle: string,
  password: string,
  storeOverride?: ChessGrindStore
) {
  const normalized = validateCredentials(handle, password);
  const store = storeOverride ?? getStore();
  if (!store) throw new AuthError("Cloud accounts are temporarily unavailable.", 503);

  const userId = await store.get<string>(`${HANDLE_PREFIX}${normalized}`);
  if (!userId) throw new AuthError("Incorrect handle or passphrase.", 401);

  const user = await store.get<StoredUser>(`${USER_PREFIX}${userId}`);
  if (!user) throw new AuthError("Incorrect handle or passphrase.", 401);

  const candidate = Buffer.from(
    await hashPassword(password, user.passwordSalt),
    "hex"
  );
  const expected = Buffer.from(user.passwordHash, "hex");

  if (
    candidate.length !== expected.length ||
    !timingSafeEqual(candidate, expected)
  ) {
    throw new AuthError("Incorrect handle or passphrase.", 401);
  }

  return { store, user };
}

export async function checkAuthRateLimit(
  store: ChessGrindStore,
  identifier: string
) {
  const digest = createHash("sha256").update(identifier).digest("hex");
  const key = `${RATE_PREFIX}${digest}`;
  const attempts = await store.incr(key);
  if (attempts === 1) await store.expire(key, 15 * 60);
  if (attempts > 12) {
    throw new AuthError("Too many attempts. Try again in 15 minutes.", 429);
  }
}

export async function startSession(
  store: ChessGrindStore,
  userId: string,
  response: NextResponse
) {
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSessionToken(token);

  await store.set(`${SESSION_PREFIX}${tokenHash}`, userId, {
    ex: SESSION_TTL_SECONDS,
  });

  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
    priority: "high",
  });
}

export async function endSession(request: NextRequest, response: NextResponse) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const store = getStore();
  if (token && store) {
    await store.del(`${SESSION_PREFIX}${hashSessionToken(token)}`);
  }
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getRequestUser(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const store = getStore();
  if (!token || !store) return null;

  const userId = await store.get<string>(
    `${SESSION_PREFIX}${hashSessionToken(token)}`
  );
  if (!userId) return null;

  const user = await store.get<StoredUser>(`${USER_PREFIX}${userId}`);
  if (!user) return null;

  const publicUser: PublicUser = {
    id: user.id,
    handle: user.handle,
    createdAt: user.createdAt,
  };
  return publicUser;
}

export function getClientIdentifier(request: NextRequest, handle: string) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0];
  return `${forwarded?.trim() ?? "local"}:${normalizeHandle(handle)}`;
}
