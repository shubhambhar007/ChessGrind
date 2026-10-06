import Link from "next/link";
import AccountLink from "./account-link";
import LandingWorld from "./landing-world";
import ThemeToggle from "./theme-toggle";
import VisitorCounter from "./visitor-counter";

export default function LandingPage() {
  return (
    <main className="cg-landing">
      <header className="cg-landing-nav">
        <div className="cg-landing-nav-inner">
          <Link href="/" className="cg-landing-brand" aria-label="ChessGrind home">
            <span className="cg-landing-mark">♞</span>
            <span>ChessGrind</span>
          </Link>

          <nav className="cg-landing-links" aria-label="Main navigation">
            <VisitorCounter />
            <a href="#journey">How it works</a>
            <Link href="/grindbook">Grindbook</Link>
            <Link href="/repertoire">Repertoire</Link>
            <AccountLink />
            <ThemeToggle />
          </nav>

          <Link href="/train" className="cg-landing-nav-cta">
            Start training
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <LandingWorld />

      <section className="cg-landing-proof" aria-label="ChessGrind highlights">
        <div>
          <strong>120</strong>
          <span>curated positions</span>
        </div>
        <div>
          <strong>5</strong>
          <span>connected training tools</span>
        </div>
        <div>
          <strong>0</strong>
          <span>external accounts required</span>
        </div>
        <div>
          <strong>1</strong>
          <span>private memory for your chess</span>
        </div>
      </section>

      <section className="cg-landing-final">
        <div className="cg-final-orbit cg-final-orbit-one" />
        <div className="cg-final-orbit cg-final-orbit-two" />
        <div className="cg-final-knight" aria-hidden="true">♞</div>
        <p className="cg-landing-kicker">Your next move is waiting</p>
        <h2>Stop collecting mistakes.<br />Start converting them.</h2>
        <p>
          Train free. No card, no chess-service login, and no setup ritual.
          Just your board, your patterns, and a system that remembers.
        </p>
        <div className="cg-final-actions">
          <Link href="/train" className="cg-primary-cta">
            Start your first grind
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/play" className="cg-secondary-cta">
            Play the computer
          </Link>
        </div>
      </section>

      <footer className="cg-landing-footer">
        <Link href="/" className="cg-landing-brand">
          <span className="cg-landing-mark">♞</span>
          <span>ChessGrind</span>
        </Link>
        <p>Play. Notice. Remember. Improve.</p>
        <div>
          <Link href="/train">Train</Link>
          <Link href="/play">Play</Link>
          <Link href="/grindbook">Grindbook</Link>
          <Link href="/insights">Insights</Link>
        </div>
      </footer>
    </main>
  );
}
