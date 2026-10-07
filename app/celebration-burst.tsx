"use client";

import { useEffect, useState, type CSSProperties } from "react";

const COLORS = ["#315a73", "#c8a458", "#8d3d37", "#477252", "#e9e4d7", "#73786d"];

type ConfettiStyle = CSSProperties & {
  "--burst-x": string;
  "--burst-y": string;
  "--burst-r": string;
};

export default function CelebrationBurst({
  eventId,
  title,
  detail,
  variant = "full",
}: {
  eventId: number;
  title: string;
  detail: string;
  variant?: "full" | "mini";
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eventId === 0) return;
    const show = window.setTimeout(() => setVisible(true), 0);
    const hide = window.setTimeout(
      () => setVisible(false),
      variant === "mini" ? 1500 : 2600
    );
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, [eventId, variant]);

  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[100] flex justify-center overflow-hidden px-5 ${variant === "mini" ? "items-start pt-20" : "items-center"}`}
      role="status"
      aria-live="polite"
    >
      {variant === "full" && (
        <div className="absolute inset-0 bg-black/10 cg-celebration-backdrop" />
      )}
      {Array.from({ length: variant === "mini" ? 26 : 52 }, (_, index) => {
        const total = variant === "mini" ? 26 : 52;
        const angle = (index / total) * Math.PI * 2;
        const distance =
          variant === "mini"
            ? 90 + ((index * 29) % 150)
            : 210 + ((index * 47) % 360);
        const style: ConfettiStyle = {
          "--burst-x": `${Math.cos(angle) * distance}px`,
          "--burst-y": `${Math.sin(angle) * distance + (variant === "mini" ? 5 : 90)}px`,
          "--burst-r": `${(index * 137) % 720 - 360}deg`,
          width: `${6 + (index % 4) * 2}px`,
          height: `${10 + (index % 3) * 4}px`,
          borderRadius: index % 3 === 0 ? "999px" : "2px",
          backgroundColor: COLORS[index % COLORS.length],
          animationDelay: `${(index % 8) * 18}ms`,
        };
        return <span key={index} className="cg-confetti-piece" style={style} />;
      })}

      <div className={`cg-celebration-card relative w-full border border-white/20 bg-[#11141b]/95 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,.4)] ${variant === "mini" ? "max-w-[290px] rounded-[16px] px-5 py-4" : "max-w-[390px] rounded-[24px] p-7"}`}>
        {variant === "mini" ? (
          <div className="flex items-center justify-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[11px] border border-white/20 text-[9px] font-bold text-white/80">OK</span>
            <div className="text-left">
              <div className="text-[15px] font-semibold">{title}</div>
              <div className="mt-0.5 text-[11px] text-white/55">{detail}</div>
            </div>
          </div>
        ) : (
          <>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-[18px] bg-white/[0.09] text-[29px] shadow-[inset_0_0_0_1px_rgba(255,255,255,.08)]">♛</div>
            <div className="mt-4 text-[10px] font-bold text-[#8fa2ff]">Grind complete</div>
            <div className="mt-2 text-[28px] font-semibold">{title}</div>
            <div className="mx-auto mt-2 max-w-[300px] text-[13px] leading-5 text-white/65">{detail}</div>
          </>
        )}
      </div>
    </div>
  );
}
