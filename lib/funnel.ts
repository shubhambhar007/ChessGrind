export type FunnelEvent =
  | "training_started"
  | "puzzle_completed"
  | "grindbook_saved"
  | "founder_viewed"
  | "checkout_clicked"
  | "checkout_account_required"
  | "checkout_created"
  | "checkout_failed"
  | "premium_prompt_viewed"
  | "premium_prompt_clicked";

export function recordFunnelEvent(
  event: FunnelEvent,
  options: { oncePerSession?: boolean } = {}
) {
  if (typeof window === "undefined") return;

  if (options.oncePerSession) {
    const key = `chessgrind:funnel:${event}`;
    try {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, "1");
    } catch {
      // Tracking remains best-effort when session storage is unavailable.
    }
  }

  void fetch("/api/funnel", {
    method: "POST",
    credentials: "same-origin",
    keepalive: true,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event }),
  }).catch(() => {
    // Product actions must never fail because analytics is unavailable.
  });
}
