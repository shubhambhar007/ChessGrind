"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";
import BrandLockup from "../brand-lockup";
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
import {
  EMPTY_GRINDBOOK_PROGRESS,
  GRINDBOOK_PROGRESS_KEY,
  saveGrindbookProgress,
} from "@/lib/grindbook-progress";
import {
  LAST_REPERTOIRE_CLOUD_USER_KEY,
  REPERTOIRE_KEY,
  saveRepertoires,
} from "@/lib/repertoire";

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
  const [nextPath, setNextPath] = useState("/grindbook");
  const [founderMessage, setFounderMessage] = useState<"active" | "pending" | "processing" | "error" | null>(null);

  useEffect(() => {
    queueMicrotask(() => setLocalCardCount(loadGrindbook().length));
    const params = new URLSearchParams(window.location.search);
    const requestedNext = params.get("next");
    queueMicrotask(() => {
      if (requestedNext?.startsWith("/") && !requestedNext.startsWith("//")) {
        setNextPath(requestedNext);
      }
      if (params.get("founder") === "active") setFounderMessage("active");
      else if (params.get("founder") === "processing") setFounderMessage("processing");
      else if (params.get("payment") === "pending") setFounderMessage("pending");
      else if (params.has("founder")) setFounderMessage("error");
    });

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

  useEffect(() => {
    if (founderMessage !== "processing" || user?.plan === "founder") return;

    let attempts = 0;
    const timer = window.setInterval(async () => {
      attempts += 1;
      try {
        const response = await fetch("/api/auth/session", {
          cache: "no-store",
          credentials: "same-origin",
        });
        const payload = (await response.json()) as { user: AccountUser | null };
        if (payload.user?.plan === "founder") {
          setUser(payload.user);
          setFounderMessage("active");
          notifyAuthUpdated();
          window.clearInterval(timer);
        } else if (attempts >= 10) {
          setFounderMessage("pending");
          window.clearInterval(timer);
        }
      } catch {
        if (attempts >= 10) {
          setFounderMessage("pending");
          window.clearInterval(timer);
        }
      }
    }, 1200);

    return () => window.clearInterval(timer);
  }, [founderMessage, user?.plan]);

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
      window.setTimeout(() => router.push(nextPath), 500);
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
      window.localStorage.removeItem(GRINDBOOK_PROGRESS_KEY);
      saveGrindbook([]);
      saveGrindbookProgress(EMPTY_GRINDBOOK_PROGRESS);
      window.localStorage.removeItem(LAST_REPERTOIRE_CLOUD_USER_KEY);
      window.localStorage.removeItem(REPERTOIRE_KEY);
      saveRepertoires([]);
      setUser(null);
      setMode("login");
      notifyAuthUpdated();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="cg-app-shell min-h-screen overflow-hidden">
      <header className="border-b border-[var(--line)] bg-[var(--header)]">
        <div className="cg-app-header-inner mx-auto flex h-[56px] max-w-[1120px] items-center justify-between px-6">
          <Link href="/" aria-label="ChessGrind home">
            <BrandLockup priority />
          </Link>
          <div className="cg-app-nav flex items-center gap-4">
            <Link
              href="/repertoire"
              className="text-[12px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
            >
              Repertoire
            </Link>
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

      <div className="cg-page-content relative mx-auto grid max-w-[1040px] gap-10 px-6 py-10 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="relative">
          <div className="border-l-2 border-[var(--brass)] pl-3 text-[11px] font-semibold text-[var(--secondary)]">
            ChessGrind Account / Private
          </div>
          <h1 className="mt-6 max-w-[560px] text-[38px] font-semibold leading-[1.02] sm:text-[58px]">
            Your mistakes should follow you—not disappear.
          </h1>
          <p className="mt-6 max-w-[520px] text-[16px] leading-7 text-[var(--secondary)]">
            Create a private ChessGrind account to keep your training identity.
            Founder players also get cloud memory across every device. No social login. No external chess account.
          </p>

          <div className="mt-9 grid max-w-[520px] border-y border-[var(--line-strong)] sm:grid-cols-3">
            {["Private by default", "Train free", "Founder cloud memory"].map((label) => (
              <div
                key={label}
                className="border-b border-[var(--line)] px-3 py-4 text-[12px] font-semibold leading-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="relative rounded-[24px] border border-[var(--line)] bg-[var(--surface)] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.2)]">
          <div className="relative rounded-[19px] border border-[var(--line)] bg-black/[0.018] p-6 sm:p-8">
            {!sessionLoaded ? (
              <div className="grid min-h-[420px] place-items-center text-[13px] text-[var(--secondary)]">
                Checking your account…
              </div>
            ) : user ? (
              <div className="min-h-[420px]">
                {founderMessage === "active" && (
                  <div className="mb-5 rounded-[12px] border border-[color-mix(in_srgb,var(--success)_35%,transparent)] bg-[color-mix(in_srgb,var(--success)_10%,transparent)] px-4 py-3 text-[12px] font-semibold text-[var(--success)]">
                    Founder unlocked. Welcome to the first class.
                  </div>
                )}
                {founderMessage === "pending" && (
                  <div className="mb-5 rounded-[12px] border border-[var(--line-strong)] px-4 py-3 text-[12px] text-[var(--secondary)]">
                    Sign in to finish attaching your payment.
                  </div>
                )}
                {founderMessage === "processing" && (
                  <div className="mb-5 rounded-[12px] border border-[var(--line-strong)] px-4 py-3 text-[12px] text-[var(--secondary)]">
                    Payment received. Attaching Founder to your account…
                  </div>
                )}
                {founderMessage === "error" && (
                  <div className="mb-5 rounded-[12px] border border-[var(--danger-strong)] bg-[var(--danger-soft)] px-4 py-3 text-[12px] text-[var(--danger)]">
                    We could not verify that payment yet. No access was changed.
                  </div>
                )}
                <div className="grid h-14 w-14 place-items-center rounded-[17px] bg-[var(--accent-soft)] text-[22px] text-[var(--accent)] shadow-[0_12px_32px_rgba(59,92,255,0.18)]">
                  {user.handle.slice(0, 1).toUpperCase()}
                </div>
                <div className="mt-7 text-[10px] font-bold text-[var(--tertiary)]">
                  Cloud profile
                </div>
                <h2 className="mt-2 text-[30px] font-semibold">
                  @{user.handle}
                </h2>
                <div className="mt-6 flex items-center gap-3 rounded-[14px] border border-[var(--line-strong)] bg-[var(--accent-soft)] p-4">
                  <span className={`h-2 w-2 rounded-full ${user.plan === "founder" ? "bg-[var(--success)]" : "bg-[var(--brass)]"}`} />
                  <div>
                    <div className="text-[12px] font-semibold">{user.plan === "founder" ? "Founder cloud sync active" : "Free player account"}</div>
                    <div className="mt-0.5 text-[11px] text-[var(--secondary)]">
                      {user.plan === "founder"
                        ? "Your Grindbook and repertoires are protected."
                        : "All puzzles and full games are open. Cloud memory is Founder."}
                    </div>
                  </div>
                </div>
                {user.plan !== "founder" && (
                  <Link
                    href="/founder"
                    className="control mt-5 flex h-12 items-center justify-center rounded-[12px] bg-[var(--button)] text-[13px] font-semibold text-[var(--button-text)]"
                  >
                    Unlock Founder · $4.99/year
                  </Link>
                )}
                <Link
                  href="/grindbook"
                  className={`control flex h-12 items-center justify-center rounded-[12px] text-[13px] font-semibold ${user.plan === "founder" ? "mt-8 bg-[var(--button)] text-[var(--button-text)]" : "mt-3 border border-[var(--line)]"}`}
                >
                  Open my Grindbook
                </Link>
                <Link
                  href="/repertoire"
                  className="control mt-3 flex h-11 items-center justify-center rounded-[11px] border border-[var(--line)] text-[12px] font-semibold"
                >
                  Open Repertoire Lab
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

                <h2 className="mt-7 text-[28px] font-semibold">
                  {mode === "signup" ? "Claim your Grindbook" : "Welcome back"}
                </h2>
                <p className="mt-2 text-[13px] leading-5 text-[var(--secondary)]">
                  {mode === "signup"
                    ? localCardCount > 0
                      ? `${localCardCount} saved ${localCardCount === 1 ? "position stays" : "positions stay"} safely on this device. Founder can sync them later.`
                      : "Start a private ChessGrind identity with a unique handle."
                    : "Use your ChessGrind handle and passphrase."}
                </p>

                <form onSubmit={submit} className="mt-7 space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-bold text-[var(--tertiary)]">
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
                    <span className="mb-2 block text-[10px] font-bold text-[var(--tertiary)]">
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
                        ? "Create free account"
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
