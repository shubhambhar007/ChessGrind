# ChessGrind product film — decision log

## Wave 0 — intake and direction

- User approved a 30-second, music-led product film in both horizontal and vertical formats.
- Approved hook: “Your mistakes should remember you.”
- Approved narrative: play → notice a mistake → save to Grindbook → spaced review → improve.
- The film uses the product's real blue legal-move dots because they are both a familiar ChessGrind interaction and the cleanest visual metaphor for memory.
- No price appears. The film sells the product idea first.
- Horizontal is the source of truth; vertical will share timing but use independent layout math.
- The first checkpoint stops after the opening and first real product scene, per the production workflow.

## Asset intake

- Live UI captured at 1600×1000 with 2× device scale from landing, training, Grindbook, Opening Lab, and Insights.
- Brand emblem copied from `public/brand/chessgrind-king-knight-emblem.png`.
- Premium piece renders copied from `public/pieces/luxe-v2/`.
- Screenshot captures are evidence/reference; the board in the film is reconstructed from the real assets so selection and legal-move dots can animate crisply.

## Technical notes

- 30 fps.
- All scene boundaries come from `video/beats.json`.
- The selected track's grid is reliable, but it is tracked rather than mathematically even; no event timing is derived by multiplying BPM.
- macOS rendering uses the installed Google Chrome executable because Remotion's bundled-browser download was unnecessary and space-expensive.
