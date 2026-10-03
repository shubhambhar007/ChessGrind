import Link from "next/link";

type GrindbookPromoProps = {
  className?: string;
  compact?: boolean;
};

export default function GrindbookPromo({
  className = "",
  compact = false,
}: GrindbookPromoProps) {
  if (compact) {
    return (
      <aside
        className={`relative overflow-hidden rounded-[14px] border border-[color-mix(in_srgb,var(--accent)_24%,var(--line))] bg-[var(--accent-soft)] px-4 py-3 ${className}`}
      >
        <div className="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[var(--accent)] text-[17px] font-semibold text-white shadow-sm">
              ↻
            </div>
            <div>
              <div className="text-[13px] font-semibold text-[var(--text)]">
                Saved positions come back before you forget them.
              </div>
              <p className="mt-0.5 text-[11px] leading-5 text-[var(--secondary)]">
                Grindbook turns moments from your games into spaced-review cards.
              </p>
            </div>
          </div>

          <Link
            href="/grindbook"
            className="control shrink-0 rounded-[9px] bg-[var(--button)] px-4 py-2 text-[12px] font-semibold text-[var(--button-text)]"
          >
            Open Grindbook&nbsp; →
          </Link>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`relative overflow-hidden rounded-[20px] border border-[color-mix(in_srgb,var(--accent)_22%,var(--line))] bg-[var(--surface)] shadow-[var(--shadow-soft)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.09] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-[38%] h-48 w-48 rounded-full bg-[#8b5cf6] opacity-[0.07] blur-3xl"
      />

      <div className="relative grid gap-6 px-6 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-7">
        <div className="flex gap-4">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[var(--accent)] text-[22px] font-semibold text-white shadow-[0_10px_24px_rgba(59,92,255,0.22)] sm:flex">
            G
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Meet Grindbook
              </span>
              <span className="rounded-full border border-[var(--line)] bg-[var(--background)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.09em] text-[var(--secondary)]">
                Private · No account
              </span>
            </div>

            <h2 className="mt-2 text-[23px] font-semibold tracking-[-0.035em] text-[var(--text)]">
              Your mistakes should train you twice.
            </h2>
            <p className="mt-1.5 max-w-[650px] text-[13px] leading-6 text-[var(--secondary)]">
              Save any puzzle or game position. Grindbook resurfaces it with
              spaced review until the pattern becomes automatic—all on this
              device.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-medium text-[var(--secondary)]">
              {["Save the moment", "Review at the right time", "Master the pattern"].map(
                (step, index) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[9px] font-bold text-[var(--accent)]">
                      {index + 1}
                    </span>
                    {step}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <Link
          href="/grindbook"
          className="control inline-flex min-h-[44px] items-center justify-center rounded-[11px] bg-[var(--button)] px-5 text-[13px] font-semibold text-[var(--button-text)] shadow-sm md:min-w-[166px]"
        >
          Open my Grindbook&nbsp; →
        </Link>
      </div>
    </aside>
  );
}
