"use client";

import { useEffect, useState } from "react";
import {
  GRINDBOOK_CLOUD_EVENT,
  type CloudStatus,
} from "@/lib/account-client";

const labels: Record<CloudStatus, string> = {
  guest: "Saved on this device",
  syncing: "Syncing…",
  synced: "Cloud synced",
  error: "Sync paused",
};

export default function CloudStatusBadge() {
  const [status, setStatus] = useState<CloudStatus>("syncing");

  useEffect(() => {
    function update(event: Event) {
      setStatus((event as CustomEvent<CloudStatus>).detail);
    }
    window.addEventListener(GRINDBOOK_CLOUD_EVENT, update);
    return () => window.removeEventListener(GRINDBOOK_CLOUD_EVENT, update);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold text-[var(--secondary)] shadow-sm">
      <span
        className={[
          "h-1.5 w-1.5 rounded-full",
          status === "synced"
            ? "bg-emerald-500 shadow-[0_0_7px_rgba(16,185,129,0.8)]"
            : status === "error"
              ? "bg-amber-500"
              : status === "syncing"
                ? "animate-pulse bg-[var(--accent)]"
                : "bg-[var(--tertiary)]",
        ].join(" ")}
      />
      {labels[status]}
    </span>
  );
}
