"use client";

import { useEffect, useRef } from "react";
import {
  AUTH_UPDATED_EVENT,
  type AccountUser,
} from "@/lib/account-client";
import {
  LAST_REPERTOIRE_CLOUD_USER_KEY,
  REPERTOIRE_KEY,
  REPERTOIRE_UPDATED_EVENT,
  loadRepertoires,
  saveRepertoires,
  type Repertoire,
} from "@/lib/repertoire";

function merge(local: Repertoire[], cloud: Repertoire[]) {
  const merged = new Map(cloud.map((item) => [item.id, item]));
  for (const item of local) {
    const existing = merged.get(item.id);
    if (!existing || item.updatedAt > existing.updatedAt) merged.set(item.id, item);
  }
  return [...merged.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export default function RepertoireCloudSync() {
  const userIdRef = useRef<string | null>(null);
  const applyingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    async function push(repertoires = loadRepertoires()) {
      if (!userIdRef.current) return;
      await fetch("/api/repertoires", {
        method: "PUT",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repertoires }),
      });
    }

    async function sync() {
      try {
        const sessionResponse = await fetch("/api/auth/session", {
          credentials: "same-origin",
          cache: "no-store",
        });
        const session = (await sessionResponse.json()) as { user: AccountUser | null };
        if (!session.user) {
          userIdRef.current = null;
          if (window.localStorage.getItem(LAST_REPERTOIRE_CLOUD_USER_KEY)) {
            window.localStorage.removeItem(LAST_REPERTOIRE_CLOUD_USER_KEY);
            window.localStorage.removeItem(REPERTOIRE_KEY);
            window.dispatchEvent(new Event(REPERTOIRE_UPDATED_EVENT));
          }
          return;
        }
        const response = await fetch("/api/repertoires", {
          credentials: "same-origin",
          cache: "no-store",
        });
        if (!response.ok) return;
        const payload = (await response.json()) as { repertoires: Repertoire[] };
        const previousUser = window.localStorage.getItem(
          LAST_REPERTOIRE_CLOUD_USER_KEY
        );
        const next =
          previousUser === session.user.id
            ? payload.repertoires
            : merge(loadRepertoires(), payload.repertoires);
        userIdRef.current = session.user.id;
        window.localStorage.setItem(
          LAST_REPERTOIRE_CLOUD_USER_KEY,
          session.user.id
        );
        applyingRef.current = true;
        saveRepertoires(next);
        applyingRef.current = false;
        if (previousUser !== session.user.id) await push(next);
      } catch {
        // Grindbook sync reports the shared account/cloud status.
      }
    }

    function handleUpdate() {
      if (applyingRef.current || !userIdRef.current) return;
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => void push(), 500);
    }

    void sync();
    window.addEventListener(AUTH_UPDATED_EVENT, sync);
    window.addEventListener(REPERTOIRE_UPDATED_EVENT, handleUpdate);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener(AUTH_UPDATED_EVENT, sync);
      window.removeEventListener(REPERTOIRE_UPDATED_EVENT, handleUpdate);
    };
  }, []);

  return null;
}
