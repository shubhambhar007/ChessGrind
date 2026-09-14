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
    <span className="text-[12px] font-medium text-[var(--secondary)]">
      {count === null ? "—" : count.toLocaleString()} visitors
    </span>
  );
}
