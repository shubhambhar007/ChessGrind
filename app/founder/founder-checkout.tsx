"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FounderCheckout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/founder/checkout", {
        method: "POST",
        credentials: "same-origin",
      });
      const payload = (await response.json()) as {
        checkoutUrl?: string;
        alreadyFounder?: boolean;
        error?: string;
      };
      if (response.status === 401) {
        router.push("/account?next=/founder");
        return;
      }
      if (payload.alreadyFounder) {
        router.push("/account");
        return;
      }
      if (!response.ok || !payload.checkoutUrl) {
        setError(payload.error ?? "Checkout could not be opened.");
        return;
      }
      window.location.assign(payload.checkoutUrl);
    } catch {
      setError("Checkout could not be opened. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="cg-founder-checkout">
      <button type="button" onClick={startCheckout} disabled={loading}>
        {loading ? "Opening secure checkout…" : "Become a Founder"}
        <span aria-hidden="true">↗</span>
      </button>
      <p>One payment · one year · processed securely by Razorpay</p>
      {error && <div role="alert">{error}</div>}
    </div>
  );
}
