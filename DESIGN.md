# ChessGrind product design contract

## Direction

The product interior is a serious player's scorebook: part tournament scoresheet,
part analysis board, part well-used chess club desk. It should feel authored for
chess, not decorated like generic SaaS. The cinematic landing page may be more
theatrical; once a player enters the product, information and the board lead.

## Materials and signature

- Warm paper, graphite ink, aged brass, slate-blue pencil, and restrained oxblood.
- A faint 32px ruled-paper rhythm sits behind product pages.
- Panels use thin rules and small, square corners. The chessboard is the one object
  allowed to feel physically elevated.
- Progress is shown as a ledger, bar, score, or notation—not as decorative orbits,
  glowing blobs, or generic metric cards.

## Color roles

- `--background`: the desk or scoresheet ground.
- `--surface`: working paper and analysis panels.
- `--text`: graphite; `--secondary` and `--tertiary`: pencil annotations.
- `--accent`: slate-blue pencil for selections and links.
- `--brass`: section rules and rare premium emphasis.
- `--oxblood`: decisive warnings and destructive actions.
- `--success`: recorded/completed state, never a neon glow.

## Typography

- UI: Avenir Next with Segoe UI/Helvetica fallbacks. Compact and readable.
- Editorial headings: Iowan Old Style/Palatino/Georgia. This echoes chess books
  and annotated game collections without turning the interface into a newspaper.
- Score notation only: SF Mono/Consolas. Monospace is functional, never chrome.
- Avoid tracked all-caps labels, one-word headline accents, and decorative 01/02/03.

## Components

- Headers are opaque, ruled, and 56px high; no frosted glass.
- Buttons use 3px corners, visible borders, and physical pressed feedback.
- Product panels use 4px corners and at most a small offset rule-shadow.
- Chess symbols belong only where they convey chess information. Brand and utility
  controls use text or CSS-drawn marks instead of emoji.
- Motion is brief and functional, and respects reduced-motion settings.

## Page rhythm

Every interior page reuses the same header, page width, typography, tokens, and
panel treatment. The hierarchy is: page title, working context, board/data, then
secondary actions. New pages must extend this contract rather than inventing a
new palette, radius, or card style.
