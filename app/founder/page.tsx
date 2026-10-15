import Image from "next/image";
import Link from "next/link";
import BrandLockup from "../brand-lockup";
import ThemeToggle from "../theme-toggle";
import FounderCheckout from "./founder-checkout";

const BENEFITS = [
  ["Cloud memory", "Keep Grindbook reviews and repertoire work synced across every device."],
  ["The whole year", "Every original puzzle pack we ship during your Founder year is included."],
  ["Founder status", "A Founder mark on your ChessGrind account for the full year."],
  ["Build it with us", "Founder feedback gets a direct line into what ChessGrind becomes next."],
] as const;

export default function FounderPage() {
  return (
    <main className="cg-app-shell cg-founder-page min-h-screen">
      <header>
        <div className="cg-app-header-inner mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-6">
          <Link href="/" aria-label="ChessGrind home"><BrandLockup priority /></Link>
          <nav className="cg-app-nav flex items-center gap-5 text-[12px] font-semibold text-[var(--secondary)]">
            <Link href="/train">Train</Link><Link href="/play">Play</Link><Link href="/account">Account</Link><ThemeToggle />
          </nav>
        </div>
      </header>

      <section className="cg-founder-hero">
        <div className="cg-founder-copy">
          <span>FOUNDING SEASON · 2026</span>
          <h1>Back the grind.<br /><em>Own the year.</em></h1>
          <p>ChessGrind stays generous: all 600 puzzles, hints, sessions, and full games remain free. Founder is for players who want the private memory layer—and want this product to keep getting sharper.</p>
          <div className="cg-founder-price"><strong><small>$</small>5.90</strong><span>for one year<br />founding price</span></div>
          <FounderCheckout />
        </div>

        <aside className="cg-founder-card">
          <div className="cg-founder-card-top"><span>CG / FOUNDER</span><span>001</span></div>
          <div className="cg-founder-seal" aria-hidden="true">
            <Image
              src="/brand/chessgrind-king-knight-emblem.png"
              alt=""
              width={260}
              height={260}
              unoptimized
              className="cg-founder-seal-logo"
            />
          </div>
          <p>PLAY · NOTICE · REMEMBER</p>
          <div className="cg-founder-signature"><span>CHESSGRIND</span><strong>Founding player</strong></div>
        </aside>
      </section>

      <section className="cg-founder-benefits">
        <div><span>WHAT YOU UNLOCK</span><h2>The training is free.<br />The memory is Founder.</h2></div>
        <div className="cg-founder-benefit-grid">
          {BENEFITS.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="cg-founder-promise">
        <span>THE PROMISE</span><h2>No ads in your board.<br />No puzzle paywall.<br />No external chess account.</h2>
        <Link href="/train">Try everything free first ↗</Link>
      </section>
    </main>
  );
}
