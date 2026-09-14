"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/visitors", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: { count: number | null }) => {
        if (!cancelled) setCount(data.count);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-1 text-[12px] font-medium text-[var(--secondary)]">
      {count === null ? (
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-red-500" />
      ) : null}

      {count === null ? "visitors" : `${count.toLocaleString()} visitors`}
    </span>
  );
}
