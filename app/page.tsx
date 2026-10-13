import Image from "next/image";
import Link from "next/link";
import AccountLink from "./account-link";
import BrandLockup from "./brand-lockup";
import ThemeToggle from "./theme-toggle";
import VisitorCounter from "./visitor-counter";

const BOARD_PIECES = [
  ["bK", "e8"], ["bQ", "d8"], ["bR", "h8"], ["bP", "d7"],
  ["bP", "f7"], ["bN", "f6"], ["wB", "c4"], ["wN", "f3"],
  ["wQ", "d1"], ["wK", "e1"],
] as const;

function LandingBoard() {
  const squarePosition = (square: string) => ({
    file: square.charCodeAt(0) - 97,
    rank: 8 - Number(square[1]),
  });

  return (
    <div className="cg-editorial-board" aria-label="Chess position with guided legal moves">
      {Array.from({ length: 64 }, (_, index) => (
        <span key={index} className={(Math.floor(index / 8) + index) % 2 ? "dark" : "light"} />
      ))}
      <i className="cg-editorial-selected" />
      {BOARD_PIECES.map(([piece, square]) => {
        const { file, rank } = squarePosition(square);
        return (
          <Image key={`${piece}-${square}`} src={`/pieces/luxe-v2/${piece}.png`} alt="" width={96} height={96}
            className="cg-editorial-piece" style={{ left: `${file * 12.5}%`, top: `${rank * 12.5}%` }} />
        );
      })}
      {["d4", "e5", "g5", "h4"].map((square) => {
        const { file, rank } = squarePosition(square);
        return <i key={square} className="cg-editorial-move" style={{ left: `${(file + 0.5) * 12.5}%`, top: `${(rank + 0.5) * 12.5}%` }} />;
      })}
    </div>
  );
}

const PRODUCTS = [
  {
    number: "01", name: "Adaptive training", title: "Your weak spots choose what comes next.",
    body: "Train on 200 original positions with difficulty modes, progressive hints, legal-move guides, and sessions that adapt to your mistakes.",
    href: "/train", action: "Start a session",
  },
  {
    number: "02", name: "Play vs computer", title: "A full game that leaves something useful behind.",
    body: "Play a position-aware opponent, review the move ledger, inspect key moments, and save any position worth seeing again.",
    href: "/play", action: "Play a game",
  },
] as const;

export default function LandingPage() {
  return (
    <main className="cg-app-shell cg-editorial-landing min-h-screen">
      <header>
        <div className="cg-app-header-inner mx-auto flex h-[64px] max-w-[1180px] items-center justify-between px-6">
          <Link href="/" aria-label="ChessGrind home"><BrandLockup priority /></Link>
          <nav className="cg-app-nav flex items-center gap-5 text-[12px] font-semibold text-[var(--secondary)]" aria-label="Main navigation">
            <VisitorCounter /><a href="#product">How it works</a><Link href="/grindbook">Grindbook</Link>
            <Link href="/repertoire">Repertoire</Link><AccountLink /><ThemeToggle />
          </nav>
          <Link href="/train" className="cg-editorial-header-cta">Start training <span aria-hidden="true">↗</span></Link>
        </div>
      </header>

      <section className="cg-editorial-hero">
        <div className="cg-editorial-hero-copy">
          <div className="cg-editorial-overline"><span>01</span> The personal chess gym</div>
          <h1>Play<br />Notice<br /><em>Remember</em></h1>
          <p>ChessGrind turns the positions you miss into a private training system that brings them back until the pattern sticks.</p>
          <div className="cg-editorial-actions">
            <Link href="/train">Start training <span aria-hidden="true">↗</span></Link>
            <Link href="/play">Play a full game</Link>
          </div>
          <div className="cg-editorial-trust"><span>No external chess account</span><span>Private by default</span><span>Free to start</span></div>
        </div>

        <div className="cg-editorial-board-panel">
          <div className="cg-editorial-board-meta"><span>TRAINING POSITION</span><strong>Find the strongest move.</strong></div>
          <LandingBoard />
          <div className="cg-editorial-board-foot"><span>Blue dots show every legal move</span><b>YOUR MOVE · WHITE</b></div>
        </div>
      </section>

      <section className="cg-editorial-intro" id="product">
        <div className="cg-editorial-section-title"><span>ABOUT</span><h2>One loop.<br />Every part connected.</h2></div>
        <div className="cg-editorial-principles">
          {[
            ["Train", "Solve original positions with guidance when you need it."],
            ["Play", "Turn complete games into positions worth keeping."],
            ["Remember", "Grindbook resurfaces the moments that matter."],
            ["Improve", "Insights show which patterns are actually changing."],
          ].map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="cg-editorial-products">
        <div className="cg-editorial-band"><span>TRAIN + PLAY</span><strong>Build the pattern first.</strong></div>
        <div className="cg-editorial-product-grid">
          {PRODUCTS.map((product) => (
            <article key={product.number}>
              <div><span>{product.number}</span><small>{product.name}</small></div><h2>{product.title}</h2>
              <p>{product.body}</p><Link href={product.href}>{product.action} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cg-editorial-memory">
        <div className="cg-editorial-memory-copy">
          <span>03 · GRINDBOOK</span><h2>Your mistakes should train you twice.</h2>
          <p>Save a puzzle or game position once. Grindbook schedules it for review, tracks your recall, and keeps the queue synced across your devices.</p>
          <Link href="/grindbook">Open Grindbook <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="cg-editorial-review-card">
          <div><span>DUE TODAY</span><strong>7</strong></div><h3>Back-rank pattern</h3><p>Last reviewed 3 days ago</p>
          <div className="cg-editorial-review-progress"><i /></div>
          <div><button type="button">Again</button><button type="button">Hard</button><button type="button">Got it</button></div>
        </div>
      </section>

      <section className="cg-editorial-lab">
        <div className="cg-editorial-band"><span>REPERTOIRE + INSIGHTS</span><strong>Make the work visible.</strong></div>
        <div className="cg-editorial-lab-grid">
          <article><span>04 · REPERTOIRE</span><h2>Build your lines.<br />Drill your response.</h2>
            <p>Map opening branches and practise them until the reply is automatic.</p><Link href="/repertoire">Open the lab ↗</Link></article>
          <article><span>05 · INSIGHTS</span><h2>Know what is actually getting better.</h2>
            <div className="cg-editorial-bars"><p><span>Forks</span><i style={{ width: "88%" }} /></p><p><span>Pins</span><i style={{ width: "72%" }} /></p><p><span>Deflection</span><i style={{ width: "48%" }} /></p></div>
            <Link href="/insights">View insights ↗</Link></article>
        </div>
      </section>

      <section className="cg-editorial-final">
        <p>200 original positions · no puzzle limit</p><h2>Stop collecting mistakes.<br />Start converting them.</h2>
        <Link href="/train">Start your first grind <span aria-hidden="true">↗</span></Link>
      </section>

      <footer className="cg-editorial-footer">
        <BrandLockup /><p>Play. Notice. Remember. Improve.</p>
        <nav><Link href="/train">Train</Link><Link href="/play">Play</Link><Link href="/grindbook">Grindbook</Link><Link href="/insights">Insights</Link></nav>
      </footer>
    </main>
  );
}
