"use client";

import { useEffect, useRef } from "react";
import {
  AUTH_UPDATED_EVENT,
  LAST_CLOUD_USER_KEY,
  notifyCloudStatus,
  type AccountUser,
} from "@/lib/account-client";
import {
  GRINDBOOK_KEY,
  GRINDBOOK_UPDATED_EVENT,
  loadGrindbook,
  saveGrindbook,
  type GrindbookCard,
} from "@/lib/grindbook";
import {
  EMPTY_GRINDBOOK_PROGRESS,
  GRINDBOOK_PROGRESS_KEY,
  GRINDBOOK_PROGRESS_UPDATED_EVENT,
  loadGrindbookProgress,
  mergeGrindbookProgress,
  saveGrindbookProgress,
  type GrindbookProgress,
} from "@/lib/grindbook-progress";

function positionKey(card: GrindbookCard) {
  const position = card.fen.split(" ").slice(0, 4).join(" ");
  return `${position}|${card.solutionUci ?? "note"}`;
}

function cardFreshness(card: GrindbookCard) {
  return new Date(card.lastReviewedAt ?? card.createdAt).getTime();
}

function mergeCards(local: GrindbookCard[], cloud: GrindbookCard[]) {
  const merged = new Map<string, GrindbookCard>();

  for (const card of cloud) merged.set(positionKey(card), card);
  for (const card of local) {
    const key = positionKey(card);
    const existing = merged.get(key);
    if (!existing || cardFreshness(card) > cardFreshness(existing)) {
      merged.set(key, card);
    }
  }

  return [...merged.values()].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export default function GrindbookCloudSync() {
  const userIdRef = useRef<string | null>(null);
  const syncingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    async function pushGrindbook(
      cards = loadGrindbook(),
      progress = loadGrindbookProgress()
    ) {
      if (!userIdRef.current) return;
      notifyCloudStatus("syncing");

      try {
        const response = await fetch("/api/grindbook", {
          method: "PUT",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cards, progress }),
        });
        if (!response.ok) throw new Error("Sync failed");
        notifyCloudStatus("synced");
      } catch {
        notifyCloudStatus("error");
      }
    }

    async function syncFromCloud() {
      notifyCloudStatus("syncing");

      try {
        const sessionResponse = await fetch("/api/auth/session", {
          credentials: "same-origin",
          cache: "no-store",
        });
        const session = (await sessionResponse.json()) as {
          user: AccountUser | null;
        };

        if (!session.user) {
          userIdRef.current = null;
          const previousUser = window.localStorage.getItem(
            LAST_CLOUD_USER_KEY
          );
          if (previousUser) {
            window.localStorage.removeItem(LAST_CLOUD_USER_KEY);
            window.localStorage.removeItem(GRINDBOOK_KEY);
            window.localStorage.removeItem(GRINDBOOK_PROGRESS_KEY);
            window.dispatchEvent(new Event(GRINDBOOK_UPDATED_EVENT));
            window.dispatchEvent(
              new Event(GRINDBOOK_PROGRESS_UPDATED_EVENT)
            );
          }
          notifyCloudStatus("guest");
          return;
        }

        const cloudResponse = await fetch("/api/grindbook", {
          credentials: "same-origin",
          cache: "no-store",
        });
        if (!cloudResponse.ok) throw new Error("Cloud unavailable");

        const payload = (await cloudResponse.json()) as {
          cards: GrindbookCard[];
          progress: GrindbookProgress;
        };
        const previousUser = window.localStorage.getItem(LAST_CLOUD_USER_KEY);
        const localCards = loadGrindbook();
        const localProgress = loadGrindbookProgress();
        const nextCards =
          previousUser === session.user.id
            ? payload.cards
            : mergeCards(localCards, payload.cards);
        const cloudProgress = payload.progress ?? EMPTY_GRINDBOOK_PROGRESS;
        const nextProgress =
          previousUser === session.user.id
            ? cloudProgress
            : mergeGrindbookProgress(localProgress, cloudProgress);

        userIdRef.current = session.user.id;
        window.localStorage.setItem(LAST_CLOUD_USER_KEY, session.user.id);
        syncingRef.current = true;
        saveGrindbook(nextCards);
        saveGrindbookProgress(nextProgress);
        syncingRef.current = false;

        if (previousUser !== session.user.id) {
          await pushGrindbook(nextCards, nextProgress);
        } else {
          notifyCloudStatus("synced");
        }
      } catch {
        notifyCloudStatus("error");
      }
    }

    function handleLocalUpdate() {
      if (syncingRef.current || !userIdRef.current) return;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => void pushGrindbook(), 450);
    }

    void syncFromCloud();
    window.addEventListener(AUTH_UPDATED_EVENT, syncFromCloud);
    window.addEventListener(GRINDBOOK_UPDATED_EVENT, handleLocalUpdate);
    window.addEventListener(
      GRINDBOOK_PROGRESS_UPDATED_EVENT,
      handleLocalUpdate
    );

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener(AUTH_UPDATED_EVENT, syncFromCloud);
      window.removeEventListener(GRINDBOOK_UPDATED_EVENT, handleLocalUpdate);
      window.removeEventListener(
        GRINDBOOK_PROGRESS_UPDATED_EVENT,
        handleLocalUpdate
      );
    };
  }, []);

  return null;
}
