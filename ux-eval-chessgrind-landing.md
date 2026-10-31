# UX Heuristic Evaluation Report

**Evaluated:** ChessGrind landing page, with emphasis on color-system consistency
**Input:** Live page screenshot and component/CSS code
**User profile:** Chess players evaluating whether ChessGrind is credible, useful, and worth trying or supporting
**Date:** 2026-10-31

---

## Executive Summary

The landing page communicates the product clearly and has a strong premium editorial structure, but its color hierarchy is split between cool product blue and warm sales yellow. The gold chess artwork already supplies enough warmth; repeating yellow across primary controls creates a third competing visual language rather than reinforcing the product UI. The recommended direction is **midnight navy + ivory + cornflower blue**, reserving champagne gold for the logo, chess pieces, and Founder-only details.

**Rating tally:** 0 Critical, 0 Major, 4 Minor, 10 Good, 3 N/A, 4 Manual Review
**Modules applied:** Core 10, Data Visualization, Accessibility (WCAG AA)

---

## Findings

### #1 Visibility of System Status
**Rating:** Good

**Finding:** Visitor presence, page views, account state, price, discount, and primary actions are visible without interaction.

**Recommendation:** Preserve the explicit counters and action labels when changing the palette.

### #2 Match Between System and Real World
**Rating:** Good

**Finding:** “Train,” “Play,” “Opening Lab,” “Grindbook,” and “Repertoire” match chess-player language and follow the product loop.

**Recommendation:** Keep the current vocabulary.

### #3 User Control and Freedom
**Rating:** Good

**Finding:** Multiple clear routes let visitors start training, play a game, inspect features, or open Founder details without modal traps.

**Recommendation:** No structural change required.

### #4 Consistency and Standards
**Rating:** Minor

**Finding:** The page uses cool blue for “Remember,” links, progress marks, and the product board, but warm yellow for every high-emphasis CTA. Gold is also intrinsic to the logo and chess-piece artwork. The result is three competing accents—blue, yellow UI, and photographic gold—with no stable role assignment.

**Recommendation:** Make cornflower blue the sole interactive primary. Keep ivory for type and muted champagne only for brand artwork, Founder pricing, and tiny editorial labels.

### #5 Error Prevention
**Rating:** Good

**Finding:** The landing page has no destructive actions or risky input states. Paid details are separated from the training CTA.

**Recommendation:** Preserve the explicit “one year” and discount wording.

### #6 Recognition Rather Than Recall
**Rating:** Good

**Finding:** Major product capabilities and the Free-versus-Founder comparison are visible on the page; visitors do not need prior product knowledge.

**Recommendation:** No change required.

### #7 Flexibility and Efficiency of Use
**Rating:** Good

**Finding:** Repeated direct-entry links serve both first-time visitors and returning players.

**Recommendation:** Keep a visible training CTA in the header and hero.

### #8 Aesthetic and Minimalist Design
**Rating:** Minor

**Finding:** The restrained grid, typography, and dark surfaces feel premium. The bright yellow CTAs interrupt that restraint and visually compete with the gold hero pieces rather than supporting them.

**Recommendation:** Replace yellow UI fills with blue, reduce decorative gold to a 5–10% accent role, and use one consistent primary CTA treatment.

### #9 Help Users Recognize, Diagnose, and Recover from Errors
**Rating:** Needs Manual Review

**Finding:** No failure state is visible in the evaluated landing experience.

**Recommendation:** Verify visitor-counter and checkout failure states separately.

### #10 Help and Documentation
**Rating:** Good

**Finding:** “How it works,” product summaries, trust labels, and the plan comparison provide sufficient contextual guidance.

**Recommendation:** Preserve the concise explanations.

---

## Data Visualization Heuristics

### DV-1 Control Ordering Follows Cognitive Flow
**Rating:** N/A

No data-query controls appear on the landing page.

### DV-2 Interdependent Controls Are Visually and Logically Linked
**Rating:** N/A

No interdependent data controls appear.

### DV-3 Chart Type Matches Data Semantics
**Rating:** Good

The Insights preview uses short horizontal bars for relative pattern performance, which matches the comparison task.

### DV-4 Data Density Is Appropriate
**Rating:** Good

Visitor metrics, pricing, and comparison values are compact and readable without turning the page into a dashboard.

### DV-5 Filter and Display Controls Are Distinguishable
**Rating:** N/A

No filters are present.

### DV-6 Empty and Edge States Are Handled
**Rating:** Needs Manual Review

Verify how online visitors and page views render when the analytics endpoint is loading or unavailable.

---

## Accessibility Heuristics

### A11Y-1 Color Contrast
**Rating:** Minor

Primary text and the proposed palette have strong contrast, but some current tertiary labels are very small and muted. Every normal-size text pair should remain at or above 4.5:1 and meaningful UI boundaries at 3:1.

**Recommendation:** Use `#A6B0C2` for secondary copy on `#080C14`; reserve dimmer colors for genuinely decorative text.

### A11Y-2 Text and Target Sizing
**Rating:** Minor

Several navigation and editorial labels render at 9–11px. They support the visual style but are near the lower edge of comfortable reading.

**Recommendation:** Keep functional labels at 12px or larger and touch targets at least 24×24px.

### A11Y-3 Keyboard Navigation
**Rating:** Needs Manual Review

The code defines focus-visible styling, but a complete keyboard traversal was not part of this color review.

### A11Y-4 Labels and Descriptions
**Rating:** Good

Navigation links and buttons have accessible text, and decorative artwork is appropriately separated from meaningful labels.

### A11Y-5 State Communication
**Rating:** Needs Manual Review

Verify that live visitor updates and account-state changes are announced appropriately by assistive technology.

---

## Recommended Palette

| Role | Color | Usage |
| --- | --- | --- |
| Canvas | `#080C14` | Main background |
| Raised surface | `#101827` | Cards, header, pricing panels |
| Primary text | `#F4F7FC` | Headlines and high-emphasis copy |
| Secondary text | `#A6B0C2` | Body copy and navigation |
| Primary accent | `#7795FF` | All primary CTAs, active links, progress, “Remember” |
| Accent hover | `#8FA8FF` | CTA hover/focus |
| On-primary | `#07101F` | Text/icons on blue CTA |
| Brand metal | `#C8A96B` | Logo/pieces, Founder price, tiny editorial labels only |
| Board dark | `#7087A7` | Existing board color; visually related to primary accent |
| Board light | `#E7EFF9` | Existing board color |

Contrast checks: ivory/canvas 18.23:1, secondary/canvas 8.96:1, blue/on-primary 6.82:1, and champagne/canvas 8.71:1.

## Priority Actions

1. **Minor — Consistency:** Replace yellow CTA fills with `#7795FF` and dark `#07101F` text.
2. **Minor — Minimalism:** Confine champagne gold to logo art, chess pieces, Founder price, and small metadata—not general navigation or training CTAs.
3. **Minor — Accessibility:** Raise functional 9–11px labels to 12px and preserve WCAG AA contrast.

## Manual Review Items

1. Test keyboard focus across the sticky navigation and all landing CTAs.
2. Test visitor-counter failure/loading states and checkout errors.

## Evidence

- Material Design color roles recommend primary color for high-emphasis buttons and active states, with secondary/tertiary colors reserved for lower emphasis: https://m3.material.io/styles/color/the-color-system
- WCAG AA requires 4.5:1 contrast for normal text and 3:1 for large text: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum
- WCAG requires meaningful UI components and graphical objects to reach 3:1 against adjacent colors: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast
