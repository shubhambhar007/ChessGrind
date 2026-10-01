"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/visitors", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: { count?: number }) => {
        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {
        if (!cancelled) setUnavailable(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span
      aria-live="polite"
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[12px] font-medium text-[var(--secondary)]"
    >
      {count === null && !unavailable ? (
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      ) : null}

      {unavailable
        ? "Visitors unavailable"
        : count === null
          ? "Counting visitors"
          : `${count.toLocaleString()} ${count === 1 ? "visitor" : "visitors"}`}
    </span>
  );
}
