"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";

export type PremiumSelectOption<T extends string> = {
  value: T;
  label: string;
  description: string;
};

type PremiumSelectProps<T extends string> = {
  label: string;
  value: T;
  options: readonly PremiumSelectOption<T>[];
  onChange: (value: T) => void;
  disabled?: boolean;
};

export default function PremiumSelect<T extends string>({
  label,
  value,
  options,
  onChange,
  disabled = false,
}: PremiumSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const menuId = useId();
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value)
  );
  const selectedOption = options[selectedIndex];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function focusOption(index: number) {
    const normalized = (index + options.length) % options.length;
    optionRefs.current[normalized]?.focus();
  }

  function openAndFocusSelected() {
    setOpen(true);
    requestAnimationFrame(() => focusOption(selectedIndex));
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    openAndFocusSelected();
  }

  function handleOptionKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusOption(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusOption(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusOption(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusOption(options.length - 1);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
        className={[
          "group control flex min-h-[62px] min-w-[176px] items-center justify-between gap-5 rounded-[14px] border bg-[var(--surface)] px-4 py-2.5 text-left shadow-[var(--shadow-soft)] disabled:cursor-not-allowed disabled:opacity-45",
          open
            ? "border-[var(--accent)] ring-4 ring-[var(--accent-soft)]"
            : "border-[var(--line-strong)] hover:border-[color-mix(in_srgb,var(--accent)_44%,var(--line-strong))]",
        ].join(" ")}
      >
        <span>
          <span className="block text-[9px] font-semibold text-[var(--tertiary)]">
            {label}
          </span>
          <span className="mt-1 block text-[15px] font-semibold text-[var(--text)]">
            {selectedOption.label}
          </span>
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`h-4 w-4 shrink-0 text-[var(--secondary)] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="m5.5 7.75 4.5 4.5 4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          id={menuId}
          role="listbox"
          aria-label={label}
          className="appear absolute left-0 top-[calc(100%+8px)] z-50 min-w-[240px] overflow-hidden rounded-[15px] border border-[var(--line-strong)] bg-[color-mix(in_srgb,var(--surface)_96%,var(--background))] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
        >
          {options.map((option, index) => {
            const selected = option.value === value;

            return (
              <button
                key={option.value}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={selected}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className={[
                  "flex w-full items-center justify-between gap-4 rounded-[11px] px-3 py-2.5 text-left transition-colors",
                  selected
                    ? "bg-[var(--accent-soft)]"
                    : "hover:bg-black/[0.045] focus:bg-black/[0.045]",
                ].join(" ")}
              >
                <span>
                  <span className="block text-[13px] font-semibold text-[var(--text)]">
                    {option.label}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-[var(--secondary)]">
                    {option.description}
                  </span>
                </span>

                <span
                  className={[
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
                    selected
                      ? "bg-[var(--accent)] text-white"
                      : "border border-[var(--line)] text-transparent",
                  ].join(" ")}
                >
                  ✓
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
