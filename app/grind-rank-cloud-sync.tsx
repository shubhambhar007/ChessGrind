"use client";

import { useEffect, useRef } from "react";
import { AUTH_UPDATED_EVENT, type AccountUser } from "@/lib/account-client";
import {
  GRIND_RANK_UPDATED_EVENT,
  LAST_RANK_CLOUD_USER_KEY,
  loadGrindRank,
  mergeGrindRank,
  saveGrindRank,
  type GrindRankState,
} from "@/lib/grind-rank";

export default function GrindRankCloudSync() {
  const userIdRef = useRef<string | null>(null);
  const applyingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    async function push(rank = loadGrindRank()) {
      if (!userIdRef.current) return;
      await fetch("/api/rank", {
        method: "PUT",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rank }),
      });
    }

    async function sync() {
      try {
        const sessionResponse = await fetch("/api/auth/session", {
          credentials: "same-origin",
          cache: "no-store",
        });
        const session = (await sessionResponse.json()) as { user: AccountUser | null };
        if (!session.user || session.user.plan !== "founder") {
          userIdRef.current = null;
          if (!session.user) window.localStorage.removeItem(LAST_RANK_CLOUD_USER_KEY);
          return;
        }

        const response = await fetch("/api/rank", { credentials: "same-origin", cache: "no-store" });
        if (!response.ok) return;
        const payload = (await response.json()) as { rank: GrindRankState };
        const previousUser = window.localStorage.getItem(LAST_RANK_CLOUD_USER_KEY);
        const next = previousUser === session.user.id
          ? payload.rank
          : mergeGrindRank(loadGrindRank(), payload.rank);
        userIdRef.current = session.user.id;
        window.localStorage.setItem(LAST_RANK_CLOUD_USER_KEY, session.user.id);
        applyingRef.current = true;
        saveGrindRank(next);
        applyingRef.current = false;
        if (previousUser !== session.user.id) await push(next);
      } catch {
        // Rank stays local if account sync is unavailable.
      }
    }

    function handleUpdate() {
      if (applyingRef.current || !userIdRef.current) return;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => void push(), 500);
    }

    void sync();
    window.addEventListener(AUTH_UPDATED_EVENT, sync);
    window.addEventListener(GRIND_RANK_UPDATED_EVENT, handleUpdate);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener(AUTH_UPDATED_EVENT, sync);
      window.removeEventListener(GRIND_RANK_UPDATED_EVENT, handleUpdate);
    };
  }, []);

  return null;
}
