"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AccountUser } from "@/lib/account-client";
import { recordFunnelEvent } from "@/lib/funnel";

export default function FounderCheckout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<AccountUser | null>(null);
  const [sessionLoaded, setSessionLoaded] = useState(false);

  useEffect(() => {
    recordFunnelEvent("founder_viewed", { oncePerSession: true });

    void fetch("/api/auth/session", {
      credentials: "same-origin",
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((payload: { user?: AccountUser | null }) => {
        setUser(payload.user ?? null);
      })
      .catch(() => setUser(null))
      .finally(() => setSessionLoaded(true));
  }, []);

  async function startCheckout() {
    recordFunnelEvent("checkout_clicked");
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/founder/checkout", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload = (await response.json()) as {
        checkoutUrl?: string;
        alreadyFounder?: boolean;
        error?: string;
      };
      if (response.status === 401) {
        recordFunnelEvent("checkout_account_required");
        router.push("/account?next=/founder");
        return;
      }
      if (payload.alreadyFounder) {
        router.push("/account");
        return;
      }
      if (!response.ok || !payload.checkoutUrl) {
        recordFunnelEvent("checkout_failed");
        setError(payload.error ?? "Checkout could not be opened.");
        return;
      }
      recordFunnelEvent("checkout_created");
      window.location.assign(payload.checkoutUrl);
    } catch {
      recordFunnelEvent("checkout_failed");
      setError("Checkout could not be opened. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="cg-founder-checkout">
      {!sessionLoaded ? (
        <button type="button" disabled>Checking your account…</button>
      ) : !user ? (
        <>
          <Link className="cg-founder-signin" href="/account?next=/founder">
            Sign in to unlock Founder <span aria-hidden="true">↗</span>
          </Link>
          <p>Create a private ChessGrind account first. It takes about 30 seconds.</p>
        </>
      ) : (
        <>
          <label htmlFor="founder-email">Receipt email</label>
          <input
            id="founder-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="button" onClick={startCheckout} disabled={loading}>
            {loading ? "Opening secure checkout…" : "Never lose a mistake"}
            <span aria-hidden="true">↗</span>
          </button>
          <p>One year · UPI QR · cards · secure checkout by Dodo Payments</p>
        </>
      )}
      {error && <div role="alert">{error}</div>}
    </div>
  );
}
