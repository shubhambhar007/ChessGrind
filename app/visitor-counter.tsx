"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [stats, setStats] = useState<{
    total: number;
    online: number;
  } | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const updateStats = () => {
      fetch("/api/visitors", { cache: "no-store" })
        .then((res) => {
          if (!res.ok) throw new Error("Visitor stats unavailable");
          return res.json();
        })
        .then((data: { count?: number; online?: number }) => {
          if (
            !cancelled &&
            typeof data.count === "number" &&
            typeof data.online === "number"
          ) {
            setStats({ total: data.count, online: data.online });
            setUnavailable(false);
          }
        })
        .catch(() => {
          if (!cancelled && !stats) setUnavailable(true);
        });
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") updateStats();
    };

    updateStats();
    const heartbeat = window.setInterval(updateStats, 20_000);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelled = true;
      window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
    // The heartbeat owns the latest server state; no local dependency is needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      aria-live="polite"
      aria-label={
        stats
          ? `${stats.total} total visitors, ${stats.online} online now`
          : "Loading visitor stats"
      }
      className="visitor-stats inline-flex shrink-0 items-center overflow-hidden rounded-full border border-[var(--line)] bg-[var(--surface)] text-[11px] font-semibold shadow-[var(--shadow-soft)]"
    >
      {unavailable && !stats ? (
        <span className="px-3 py-1.5 text-[var(--secondary)]">
          Stats unavailable
        </span>
      ) : !stats ? (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[var(--secondary)]">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          Loading
        </span>
      ) : (
        <>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[var(--success)]">
            <span className="online-orbit relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
            </span>
            <strong className="tabular-nums text-[var(--text)]">
              {stats.online.toLocaleString()}
            </strong>
            <span className="hidden text-[var(--secondary)] sm:inline">
              online
            </span>
          </span>
          <span className="h-4 w-px bg-[var(--line-strong)]" />
          <span className="inline-flex items-center gap-1 px-2.5 py-1.5">
            <strong className="tabular-nums text-[var(--text)]">
              {stats.total.toLocaleString()}
            </strong>
            <span className="hidden text-[var(--secondary)] md:inline">
              total
            </span>
            <span className="text-[var(--secondary)] md:hidden">visits</span>
          </span>
        </>
      )}
    </div>
  );
}
