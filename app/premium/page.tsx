import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BrandLockup from "../brand-lockup";
import ThemeToggle from "../theme-toggle";
import PremiumCheckout from "../founder/founder-checkout";

export const metadata: Metadata = {
  title: "Chess Mistake Memory & Cross-Device Sync – Premium",
  description:
    "ChessGrind Premium keeps your saved chess mistakes, review schedule, and repertoire privately synced across every device.",
  alternates: { canonical: "/premium" },
};

const BENEFITS = [
  ["Cloud Mistake Memory", "Every saved position and its review timing stays protected in your private account."],
  ["Review anywhere", "Start a review on your phone and continue the same queue on your laptop."],
  ["Synced repertoire", "Keep your white and black opening branches with the rest of your training memory."],
  ["Automatic backup", "Changing browsers or devices no longer means rebuilding the lessons you already earned."],
] as const;

const PLAN_COMPARISON = [
  ["Original puzzle library", "6,000 positions", "6,000 positions"],
  ["Full games, hints + blue guides", "Unlimited", "Unlimited"],
  ["Saved Mistake Memory", "This browser", "Private cloud"],
  ["Review schedule", "One device", "Every device"],
  ["Opening repertoire", "This browser", "Synced"],
  ["Automatic backup", "—", "Included"],
  ["Product feedback", "Community", "Direct line"],
] as const;

export default function PremiumPage() {
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
          <span>PREMIUM · PERSONAL MEMORY</span>
          <h1>Never lose a<br /><em>chess mistake.</em></h1>
          <p>Premium turns useful positions into a private memory system that follows you. Your saved mistakes, review timing, and repertoire stay connected across every device.</p>
          <div id="join-premium" className="cg-founder-price">
            <div className="cg-founder-price-stack">
              <mark>61% OFF</mark>
              <div><del>$10.18</del><strong><small>$</small>3.99</strong></div>
            </div>
            <span>for one year<br />limited launch price</span>
          </div>
          <PremiumCheckout />
        </div>

        <aside className="cg-founder-card">
          <div className="cg-founder-card-top"><span>CG / PREMIUM</span><span>001</span></div>
          <div className="cg-founder-seal" aria-hidden="true">
            <Image
              src="/brand/chessgrind-king-knight-emblem.png"
              alt=""
              width={260}
              height={260}
              priority
              unoptimized
              className="cg-founder-seal-logo"
            />
          </div>
          <p>PLAY · NOTICE · REMEMBER</p>
          <div className="cg-founder-signature"><span>CHESSGRIND</span><strong>Premium player</strong></div>
        </aside>
      </section>

      <section className="cg-founder-comparison" aria-labelledby="premium-comparison-title">
        <div className="cg-founder-comparison-copy">
          <span>FREE VS PREMIUM</span>
          <h2 id="premium-comparison-title">The board is free.<br />Your memory travels.</h2>
          <p>Free gives you the complete training floor. Premium protects the personal layer you build on top of it—the positions, timing, and opening work that belong to you.</p>
        </div>

        <div className="cg-founder-comparison-table">
          <table>
            <colgroup><col /><col /><col /></colgroup>
            <thead>
              <tr>
                <th scope="col">What you get</th>
                <th scope="col"><span>Free</span><strong>$0</strong></th>
                <th scope="col"><span>Premium</span><strong>$3.99</strong><small>61% off · one year</small></th>
              </tr>
            </thead>
            <tbody>
              {PLAN_COMPARISON.map(([feature, free, premium]) => (
                <tr key={feature}>
                  <th scope="row">{feature}</th>
                  <td>{free}</td>
                  <td>{premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cg-founder-comparison-cta">
            <p><strong>Everything playable stays free.</strong><span>Premium makes every lesson portable and protected.</span></p>
            <a href="#join-premium">Choose Premium <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </section>

      <section className="cg-founder-benefits">
        <div><span>WHAT YOU UNLOCK</span><h2>Your training,<br />still there tomorrow.</h2></div>
        <div className="cg-founder-benefit-grid">
          {BENEFITS.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="cg-founder-promise">
        <span>THE PROMISE</span><h2>No puzzle paywall.<br />No external chess account.<br />One memory across devices.</h2>
        <Link href="/train">Try the complete trainer free ↗</Link>
      </section>
    </main>
  );
}
