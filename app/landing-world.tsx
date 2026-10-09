"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type Scene = {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
};

const SCENES: Scene[] = [
  {
    number: "00",
    eyebrow: "A training world built around you",
    title: "Your mistakes should remember you.",
    body: "ChessGrind turns every missed tactic and costly move into a personal path back to mastery.",
    tags: ["Private by default", "No external account"],
  },
  {
    number: "01",
    eyebrow: "Adaptive puzzle training",
    title: "See the move. Feel the pattern.",
    body: "Train on curated tactics with legal-move guidance, progressive hints, and smart selection that leans into your weak spots.",
    tags: ["200 original positions", "Smart Training", "Blue move guides"],
  },
  {
    number: "02",
    eyebrow: "Play vs Computer",
    title: "Every game leaves a trail.",
    body: "Play a complete game against a position-aware engine. ChessGrind notices the moments that mattered instead of letting them disappear.",
    tags: ["3 difficulties", "Move analysis", "PGN export"],
  },
  {
    number: "03",
    eyebrow: "My Grindbook",
    title: "Mistakes become memory drills.",
    body: "Important positions return on a spaced schedule. Rate your recall, protect your streak, and turn yesterday’s blind spot into tomorrow’s instinct.",
    tags: ["Daily queue", "Spaced review", "Cross-device sync"],
  },
  {
    number: "04",
    eyebrow: "Repertoire + Insights",
    title: "Build a game that feels like yours.",
    body: "Map opening branches, rehearse your responses, and see which tactical patterns are becoming strengths—and which need another round.",
    tags: ["Visual opening tree", "Theme intelligence", "Private cloud"],
  },
];

const CAMERA = [
  { x: 0, y: 120, scale: 0.82, rotate: -3 },
  { x: -360, y: 150, scale: 1.04, rotate: 1.5 },
  { x: 310, y: -100, scale: 1.08, rotate: -1 },
  { x: -300, y: -360, scale: 1.12, rotate: 1.2 },
  { x: 250, y: -650, scale: 1.06, rotate: -1.5 },
];

function lerp(a: number, b: number, amount: number) {
  return a + (b - a) * amount;
}

function ease(amount: number) {
  return amount * amount * (3 - 2 * amount);
}

function TrainingBoard() {
  const pieces = [
    ["bK", "g8"],
    ["bQ", "d8"],
    ["bR", "a8"],
    ["wQ", "h5"],
    ["wN", "f6"],
    ["wK", "g1"],
  ];

  return (
    <div className="cg-mini-board" aria-hidden="true">
      {Array.from({ length: 64 }, (_, index) => (
        <span key={index} className={(Math.floor(index / 8) + index) % 2 ? "dark" : "light"} />
      ))}
      {pieces.map(([piece, square]) => {
        const file = square.charCodeAt(0) - 97;
        const rank = 8 - Number(square[1]);
        return (
          <Image
            key={`${piece}-${square}`}
            src={`/pieces/luxe-v2/${piece}.png`}
            alt=""
            width={86}
            height={86}
            className="cg-mini-piece"
            style={{ left: `${file * 12.5}%`, top: `${rank * 12.5}%` }}
          />
        );
      })}
      <i className="cg-move-dot cg-move-dot-one" />
      <i className="cg-move-dot cg-move-dot-two" />
      <i className="cg-move-dot cg-move-dot-three" />
    </div>
  );
}

function GameStation() {
  return (
    <div className="cg-game-console" aria-hidden="true">
      <div className="cg-console-topline"><span />LIVE GAME <b>+0.8</b></div>
      <div className="cg-console-board">
        {Array.from({ length: 36 }, (_, index) => (
          <span key={index} className={(Math.floor(index / 6) + index) % 2 ? "dark" : "light"} />
        ))}
        <Image src="/pieces/luxe-v2/bK.png" alt="" width={72} height={72} className="cg-console-piece cg-console-piece-black" />
        <Image src="/pieces/luxe-v2/wR.png" alt="" width={72} height={72} className="cg-console-piece cg-console-piece-white" />
      </div>
      <div className="cg-console-ledger">
        <span>18</span><strong>Rxe6</strong><em>Qd7</em>
        <span>19</span><strong>Re7+</strong><em>Kxe7</em>
        <span>20</span><strong>Qg5+</strong><em>—</em>
      </div>
    </div>
  );
}

function GrindbookStation() {
  return (
    <div className="cg-grindbook-stack" aria-hidden="true">
      <div className="cg-review-card cg-review-card-back" />
      <div className="cg-review-card cg-review-card-mid" />
      <div className="cg-review-card cg-review-card-front">
        <div className="cg-card-eyebrow">DUE NOW · TACTIC</div>
        <div className="cg-card-position">
          <Image src="/pieces/luxe-v2/wN.png" alt="" width={120} height={120} />
          <span>Find the fork</span>
        </div>
        <div className="cg-card-progress"><i /></div>
        <div className="cg-card-actions"><span>Again</span><span>Hard</span><strong>Got it</strong></div>
      </div>
    </div>
  );
}

function InsightStation() {
  return (
    <div className="cg-insight-console" aria-hidden="true">
      <div className="cg-insight-orbit">
        <div><strong>85%</strong><span>accuracy</span></div>
      </div>
      <div className="cg-insight-bars">
        <p><span>Forks</span><i style={{ width: "88%" }} /></p>
        <p><span>Pins</span><i style={{ width: "71%" }} /></p>
        <p><span>Deflection</span><i style={{ width: "46%" }} /></p>
      </div>
      <div className="cg-tree-lines">
        <i /><i /><i /><i /><i />
      </div>
    </div>
  );
}

export default function LandingWorld() {
  const trackRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const distance = Math.max(track.offsetHeight - window.innerHeight, 1);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / distance));
      setProgress(nextProgress);
      setActiveScene(Math.min(SCENES.length - 1, Math.round(nextProgress * (SCENES.length - 1))));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const camera = useMemo(() => {
    const scaled = progress * (CAMERA.length - 1);
    const from = Math.min(CAMERA.length - 2, Math.floor(scaled));
    const amount = ease(scaled - from);
    const a = CAMERA[from];
    const b = CAMERA[from + 1];
    return {
      x: lerp(a.x, b.x, amount),
      y: lerp(a.y, b.y, amount),
      scale: lerp(a.scale, b.scale, amount),
      rotate: lerp(a.rotate, b.rotate, amount),
    };
  }, [progress]);

  const worldStyle = {
    "--camera-x": `${camera.x}px`,
    "--camera-y": `${camera.y}px`,
    "--camera-scale": camera.scale,
    "--camera-rotate": `${camera.rotate}deg`,
    "--journey-progress": progress,
  } as CSSProperties;

  return (
    <section id="journey" ref={trackRef} className="cg-world-track" style={worldStyle}>
      <div className="cg-world-sticky">
        <div className="cg-world-glow cg-world-glow-one" />
        <div className="cg-world-glow cg-world-glow-two" />

        <div className="cg-world-copy">
          <div className="cg-scene-index">
            <span>{SCENES[activeScene].number}</span>
            <i />
            <span>04</span>
          </div>
          <p className="cg-landing-kicker" key={`eyebrow-${activeScene}`}>{SCENES[activeScene].eyebrow}</p>
          <h1 key={`title-${activeScene}`}>{SCENES[activeScene].title}</h1>
          <p className="cg-world-body" key={`body-${activeScene}`}>{SCENES[activeScene].body}</p>
          <div className="cg-world-tags" key={`tags-${activeScene}`}>
            {SCENES[activeScene].tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          {activeScene === 0 && (
            <div className="cg-hero-actions">
              <Link href="/train" className="cg-primary-cta">Start training <span aria-hidden="true">→</span></Link>
              <a href="#journey" className="cg-scroll-cue"><i /> Scroll to enter the world</a>
            </div>
          )}
          {activeScene > 0 && (
            <Link
              href={["/train", "/train", "/play", "/grindbook", "/repertoire"][activeScene]}
              className="cg-scene-link"
            >
              Explore this feature <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>

        <div className="cg-world-viewport" aria-hidden="true">
          <div className="cg-world-camera">
            <div className="cg-world-grid" />
            <div className="cg-world-route"><i /><i /><i /><i /></div>

            <div className={`cg-world-station cg-station-hero ${activeScene === 0 ? "is-active" : ""}`}>
              <div className="cg-hero-halo" />
              <Image
                src="/pieces/luxe-v2/wK.png"
                alt=""
                width={360}
                height={360}
                unoptimized
                priority
                className="cg-world-king"
              />
              <Image
                src="/pieces/luxe-v2/bN.png"
                alt=""
                width={170}
                height={170}
                unoptimized
                priority
                className="cg-world-knight cg-world-knight-one"
              />
              <Image
                src="/pieces/luxe-v2/wN.png"
                alt=""
                width={150}
                height={150}
                unoptimized
                priority
                className="cg-world-knight cg-world-knight-two"
              />
              <span className="cg-world-plaque">THE PERSONAL CHESS GYM</span>
            </div>

            <div className={`cg-world-station cg-station-training ${activeScene === 1 ? "is-active" : ""}`}>
              <span className="cg-station-label">01 · TRAIN</span>
              <TrainingBoard />
            </div>

            <div className={`cg-world-station cg-station-game ${activeScene === 2 ? "is-active" : ""}`}>
              <span className="cg-station-label">02 · PLAY</span>
              <GameStation />
            </div>

            <div className={`cg-world-station cg-station-grindbook ${activeScene === 3 ? "is-active" : ""}`}>
              <span className="cg-station-label">03 · REMEMBER</span>
              <GrindbookStation />
            </div>

            <div className={`cg-world-station cg-station-insights ${activeScene === 4 ? "is-active" : ""}`}>
              <span className="cg-station-label">04 · MASTER</span>
              <InsightStation />
            </div>
          </div>
        </div>

        <div className="cg-world-progress" aria-label={`Section ${activeScene + 1} of ${SCENES.length}`}>
          {SCENES.map((scene, index) => (
            <span key={scene.number} className={index === activeScene ? "is-active" : index < activeScene ? "is-past" : ""} />
          ))}
        </div>
        <p className="cg-world-signature">PLAY · NOTICE · REMEMBER · IMPROVE</p>
      </div>
    </section>
  );
}
