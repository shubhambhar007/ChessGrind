"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AUTH_UPDATED_EVENT,
  type AccountUser,
} from "@/lib/account-client";

export default function AccountLink() {
  const [user, setUser] = useState<AccountUser | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadSession() {
      try {
        const response = await fetch("/api/auth/session", {
          credentials: "same-origin",
          cache: "no-store",
        });
        const payload = (await response.json()) as {
          user: AccountUser | null;
        };
        setUser(payload.user);
      } catch {
        setUser(null);
      } finally {
        setLoaded(true);
      }
    }

    void loadSession();
    window.addEventListener(AUTH_UPDATED_EVENT, loadSession);
    return () => window.removeEventListener(AUTH_UPDATED_EVENT, loadSession);
  }, []);

  return (
    <Link
      href="/account"
      aria-label={user ? `Account: ${user.handle}` : "Create an account"}
      className="control inline-flex h-8 items-center gap-2 rounded-[9px] border border-[var(--line)] bg-[var(--surface)] px-3 text-[11px] font-semibold text-[var(--secondary)] shadow-sm hover:border-[var(--line-strong)] hover:text-[var(--text)]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6]"
      >
        {user ? (
          <>
            <path d="M6.2 14.8h8.1a3.2 3.2 0 0 0 .2-6.4A4.8 4.8 0 0 0 5.2 7a4 4 0 0 0 1 7.8Z" />
            <path d="m8.3 11 1.2 1.2 2.5-2.7" />
          </>
        ) : (
          <>
            <circle cx="10" cy="6.8" r="3" />
            <path d="M4.6 16c.5-3 2.3-4.5 5.4-4.5s4.9 1.5 5.4 4.5" />
          </>
        )}
      </svg>
      {loaded ? (user ? `@${user.handle}` : "Save progress") : "Account"}
    </Link>
  );
}
