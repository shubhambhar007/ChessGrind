"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";
import {
  LAST_CLOUD_USER_KEY,
  notifyAuthUpdated,
  type AccountUser,
} from "@/lib/account-client";
import {
  GRINDBOOK_KEY,
  loadGrindbook,
  saveGrindbook,
} from "@/lib/grindbook";

type Mode = "signup" | "login";

export default function AccountPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signup");
  const [user, setUser] = useState<AccountUser | null>(null);
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [localCardCount, setLocalCardCount] = useState(0);

  useEffect(() => {
    queueMicrotask(() => setLocalCardCount(loadGrindbook().length));

    async function loadSession() {
      try {
        const response = await fetch("/api/auth/session", {
          cache: "no-store",
          credentials: "same-origin",
        });
        const payload = (await response.json()) as {
          user: AccountUser | null;
        };
        setUser(payload.user);
      } finally {
        setSessionLoaded(true);
      }
    }

    void loadSession();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch(
        mode === "signup" ? "/api/auth/signup" : "/api/auth/login",
        {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ handle, password }),
        }
      );
      const payload = (await response.json()) as {
        user?: AccountUser;
        error?: string;
      };

      if (!response.ok || !payload.user) {
        setError(payload.error ?? "Something went wrong. Try again.");
        return;
      }

      setUser(payload.user);
      notifyAuthUpdated();
      window.setTimeout(() => router.push("/grindbook"), 500);
    } catch {
      setError("Could not reach ChessGrind. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function signOut() {
    setSubmitting(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "same-origin",
      });
      window.localStorage.removeItem(LAST_CLOUD_USER_KEY);
      window.localStorage.removeItem(GRINDBOOK_KEY);
      saveGrindbook([]);
      setUser(null);
      setMode("login");
      notifyAuthUpdated();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="border-b border-[var(--line)] bg-[var(--header)] backdrop-blur-xl">
        <div className="mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[var(--button)] text-[15px] text-[var(--button-text)]">
              ♞
            </div>
            <div className="text-[16px] font-semibold tracking-[-0.025em]">
              ChessGrind
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/grindbook"
              className="text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Grindbook
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="relative mx-auto grid max-w-[1040px] gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="pointer-events-none absolute -left-56 top-16 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" />

        <section className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--accent)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            Grindbook Cloud · Beta
          </div>
          <h1 className="mt-6 max-w-[560px] text-[46px] font-semibold leading-[1.02] tracking-[-0.055em] sm:text-[58px]">
            Your mistakes should follow you.
            <span className="block text-[var(--secondary)]">Not disappear.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-[var(--secondary)]">
            Create a private ChessGrind account and your Grindbook follows you
            across devices. No social login. No external chess account.
          </p>

          <div className="mt-9 grid max-w-[520px] gap-3 sm:grid-cols-3">
            {[
              ["01", "Private by default"],
              ["02", "Automatic cloud sync"],
              ["03", "Keep every review"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="rounded-[15px] border border-[var(--line)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)]"
              >
                <div className="font-mono text-[10px] font-bold text-[var(--accent)]">
                  {number}
                </div>
                <div className="mt-3 text-[12px] font-semibold leading-5">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.2)]">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--accent)] opacity-[0.11] blur-3xl" />
          <div className="relative rounded-[19px] border border-[var(--line)] bg-black/[0.018] p-6 sm:p-8">
            {!sessionLoaded ? (
              <div className="grid min-h-[420px] place-items-center text-[13px] text-[var(--secondary)]">
                Checking your account…
              </div>
            ) : user ? (
              <div className="min-h-[420px]">
                <div className="grid h-14 w-14 place-items-center rounded-[17px] bg-[var(--accent-soft)] text-[22px] text-[var(--accent)] shadow-[0_12px_32px_rgba(59,92,255,0.18)]">
                  ♞
                </div>
                <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--tertiary)]">
                  Cloud profile
                </div>
                <h2 className="mt-2 text-[30px] font-semibold tracking-[-0.04em]">
                  @{user.handle}
                </h2>
                <div className="mt-6 flex items-center gap-3 rounded-[14px] border border-emerald-500/25 bg-emerald-500/[0.07] p-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_9px_rgba(16,185,129,0.85)]" />
                  <div>
                    <div className="text-[12px] font-semibold">Cloud sync active</div>
                    <div className="mt-0.5 text-[11px] text-[var(--secondary)]">
                      Your Grindbook is protected.
                    </div>
                  </div>
                </div>
                <Link
                  href="/grindbook"
                  className="control mt-8 flex h-12 items-center justify-center rounded-[12px] bg-[var(--button)] text-[13px] font-semibold text-[var(--button-text)]"
                >
                  Open my Grindbook
                </Link>
                <button
                  type="button"
                  onClick={signOut}
                  disabled={submitting}
                  className="control mt-3 flex h-11 w-full items-center justify-center rounded-[11px] border border-[var(--line)] text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)] disabled:opacity-50"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <div className="inline-flex rounded-[11px] border border-[var(--line)] bg-[var(--surface)] p-1">
                  {(["signup", "login"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setMode(item);
                        setError("");
                      }}
                      className={[
                        "control rounded-[8px] px-4 py-2 text-[11px] font-semibold",
                        mode === item
                          ? "bg-[var(--button)] text-[var(--button-text)] shadow-sm"
                          : "text-[var(--secondary)]",
                      ].join(" ")}
                    >
                      {item === "signup" ? "Create account" : "Sign in"}
                    </button>
                  ))}
                </div>

                <h2 className="mt-7 text-[28px] font-semibold tracking-[-0.04em]">
                  {mode === "signup" ? "Claim your Grindbook" : "Welcome back"}
                </h2>
                <p className="mt-2 text-[13px] leading-5 text-[var(--secondary)]">
                  {mode === "signup"
                    ? localCardCount > 0
                      ? `${localCardCount} saved ${localCardCount === 1 ? "position" : "positions"} on this device will be moved into your cloud account.`
                      : "Start a private cloud Grindbook with a unique handle."
                    : "Use your ChessGrind handle and passphrase."}
                </p>

                <form onSubmit={submit} className="mt-7 space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--tertiary)]">
                      Handle
                    </span>
                    <div className="flex h-12 items-center rounded-[12px] border border-[var(--line-strong)] bg-[var(--surface)] px-4 focus-within:border-[var(--accent)] focus-within:shadow-[0_0_0_3px_var(--accent-soft)]">
                      <span className="mr-1 text-[13px] text-[var(--tertiary)]">@</span>
                      <input
                        value={handle}
                        onChange={(event) => setHandle(event.target.value)}
                        autoComplete="username"
                        autoCapitalize="none"
                        spellCheck={false}
                        placeholder="your_handle"
                        className="h-full min-w-0 flex-1 bg-transparent text-[14px] font-semibold outline-none placeholder:text-[var(--tertiary)]"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.13em] text-[var(--tertiary)]">
                      Passphrase
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      autoComplete={mode === "signup" ? "new-password" : "current-password"}
                      placeholder="10 characters minimum"
                      className="h-12 w-full rounded-[12px] border border-[var(--line-strong)] bg-[var(--surface)] px-4 text-[14px] font-semibold outline-none placeholder:font-normal placeholder:text-[var(--tertiary)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                    />
                  </label>

                  {error && (
                    <div role="alert" className="rounded-[11px] border border-[var(--danger-strong)] bg-[var(--danger-soft)] px-4 py-3 text-[12px] font-medium text-[var(--danger)]">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="control flex h-12 w-full items-center justify-center rounded-[12px] bg-[var(--button)] text-[13px] font-semibold text-[var(--button-text)] shadow-[0_12px_30px_rgba(0,0,0,0.18)] disabled:opacity-50"
                  >
                    {submitting
                      ? "Securing your account…"
                      : mode === "signup"
                        ? "Create & sync Grindbook"
                        : "Sign in to ChessGrind"}
                  </button>
                </form>

                <p className="mt-5 text-[10px] leading-4 text-[var(--tertiary)]">
                  No external accounts are connected. During beta, passphrase recovery is not yet available—choose one you can remember.
                </p>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
