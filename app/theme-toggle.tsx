"use client";

import {
  useSyncExternalStore,
} from "react";

const THEME_KEY =
  "chessgrind-theme";

type Theme = "light" | "dark";

function applyTheme(
  theme: Theme
) {
  document.documentElement.dataset.theme =
    theme;
  document.documentElement.style.colorScheme =
    theme;
  window.dispatchEvent(
    new Event("chessgrind-theme-change")
  );
}

function subscribe(
  callback: () => void
) {
  window.addEventListener(
    "chessgrind-theme-change",
    callback
  );

  return () =>
    window.removeEventListener(
      "chessgrind-theme-change",
      callback
    );
}

function getTheme(): Theme {
  return document.documentElement
    .dataset.theme === "dark"
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getTheme,
    () => "light"
  );

  function toggleTheme() {
    const next =
      theme === "dark"
        ? "light"
        : "dark";

    applyTheme(next);
    window.localStorage.setItem(
      THEME_KEY,
      next
    );
  }

  const isDark =
    theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        isDark ? "light" : "dark"
      } mode`}
      title={`Switch to ${
        isDark ? "light" : "dark"
      } mode`}
      className="control flex h-8 items-center gap-1.5 rounded-[9px] border border-[var(--line-strong)] bg-[var(--surface)] px-2.5 text-[11px] font-semibold text-[var(--secondary)] hover:text-[var(--text)]"
    >
      <span
        aria-hidden="true"
        className="text-[13px]"
      >
        {isDark ? "☀" : "☾"}
      </span>

      <span className="hidden sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
