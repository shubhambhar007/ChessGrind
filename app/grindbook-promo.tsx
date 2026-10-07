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
        className={`relative border-l-[3px] border-[var(--brass)] bg-[var(--surface)] px-4 py-3 ${className}`}
      >
        <div className="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
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
            Open Grindbook
          </Link>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`relative overflow-hidden border border-[var(--line-strong)] border-l-[3px] border-l-[var(--brass)] bg-[var(--surface)] ${className}`}
    >
      <div className="relative grid gap-6 px-6 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-7">
        <div className="flex gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-[var(--brass)]">
                Meet Grindbook
              </span>
              <span className="border-l border-[var(--line-strong)] pl-2 text-[10px] font-medium text-[var(--secondary)]">
                Private / no account required
              </span>
            </div>

            <h2 className="mt-2 text-[23px] font-semibold text-[var(--text)]">
              Your mistakes should train you twice.
            </h2>
            <p className="mt-1.5 max-w-[650px] text-[13px] leading-6 text-[var(--secondary)]">
              Save any puzzle or game position. Grindbook resurfaces it with
              spaced review until the pattern becomes automatic—all on this
              device.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-y-2 text-[11px] font-medium text-[var(--secondary)]">
              {["Save the moment", "Review at the right time", "Master the pattern"].map(
                (step, index) => (
                  <span key={step} className="inline-flex items-center">
                    {index > 0 && <span className="mx-3 h-3 w-px bg-[var(--line-strong)]" />}
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
          Open my Grindbook
        </Link>
      </div>
    </aside>
  );
}
