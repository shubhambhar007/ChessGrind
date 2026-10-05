"use client";

import { useEffect, useState, type CSSProperties } from "react";

const COLORS = ["#3b5cff", "#8b5cf6", "#22c55e", "#f59e0b", "#ec4899", "#38bdf8"];

type ConfettiStyle = CSSProperties & {
  "--burst-x": string;
  "--burst-y": string;
  "--burst-r": string;
};

export default function CelebrationBurst({
  eventId,
  title,
  detail,
}: {
  eventId: number;
  title: string;
  detail: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (eventId === 0) return;
    const show = window.setTimeout(() => setVisible(true), 0);
    const hide = window.setTimeout(() => setVisible(false), 2600);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, [eventId]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden px-5"
      role="status"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] cg-celebration-backdrop" />
      {Array.from({ length: 52 }, (_, index) => {
        const angle = (index / 52) * Math.PI * 2;
        const distance = 210 + ((index * 47) % 360);
        const style: ConfettiStyle = {
          "--burst-x": `${Math.cos(angle) * distance}px`,
          "--burst-y": `${Math.sin(angle) * distance + 90}px`,
          "--burst-r": `${(index * 137) % 720 - 360}deg`,
          width: `${6 + (index % 4) * 2}px`,
          height: `${10 + (index % 3) * 4}px`,
          borderRadius: index % 3 === 0 ? "999px" : "2px",
          backgroundColor: COLORS[index % COLORS.length],
          animationDelay: `${(index % 8) * 18}ms`,
        };
        return <span key={index} className="cg-confetti-piece" style={style} />;
      })}

      <div className="cg-celebration-card relative w-full max-w-[390px] rounded-[24px] border border-white/20 bg-[#11141b]/95 p-7 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,.4)]">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-[18px] bg-white/[0.09] text-[29px] shadow-[inset_0_0_0_1px_rgba(255,255,255,.08)]">
          ♛
        </div>
        <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8fa2ff]">
          Grind complete
        </div>
        <div className="mt-2 text-[28px] font-semibold tracking-[-0.045em]">
          {title}
        </div>
        <div className="mx-auto mt-2 max-w-[300px] text-[13px] leading-5 text-white/65">
          {detail}
        </div>
      </div>
    </div>
  );
}
