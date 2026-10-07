# ChessGrind product design contract

## Direction

The product interior is a premium chess broadcast studio: focused, competitive,
layered, and alive. It borrows from tournament broadcast graphics and analysis
desks without becoming a generic gaming dashboard. The chessboard remains the
hero, while blue interaction states and warm championship-gold moments provide
energy and hierarchy.

## Materials and signature

- Deep navy, cool slate, championship gold, crisp white, and restrained oxblood.
- Product pages use two restrained radial pools of light instead of a flat ground.
- Panels have medium corners, an inset top highlight, and real but controlled depth.
- Progress is shown as a ledger, bar, score, or notation—not as decorative orbits,
  glowing blobs, or generic metric cards.

## Color roles

- `--background`: deep studio ground.
- `--surface`: layered analysis panels.
- `--text`: crisp broadcast type; `--secondary` and `--tertiary`: supporting data.
- `--accent`: electric slate-blue for selections and links.
- `--brass`: section rules and rare premium emphasis.
- `--oxblood`: decisive warnings and destructive actions.
- `--success`: recorded/completed state, never a neon glow.

## Typography

- UI: Avenir Next with Segoe UI/Helvetica fallbacks. Compact and readable.
- Headings use the same UI family at a heavier, tighter display cut for a modern,
  competitive rhythm.
- Score notation only: SF Mono/Consolas. Monospace is functional, never chrome.
- Avoid tracked all-caps labels, one-word headline accents, and decorative 01/02/03.

## Components

- Headers are opaque and 56px high with a gold active rail.
- Buttons use 9px corners, visible borders, and physical pressed feedback.
- Product panels use 14–16px corners with controlled elevation and an inset edge.
- Chess symbols belong only where they convey chess information. Brand and utility
  controls use text or CSS-drawn marks instead of emoji.
- Motion is brief and functional, and respects reduced-motion settings.

## Page rhythm

Every interior page reuses the same header, page width, typography, tokens, and
panel treatment. The hierarchy is: page title, working context, board/data, then
secondary actions. New pages must extend this contract rather than inventing a
new palette, radius, or card style.
