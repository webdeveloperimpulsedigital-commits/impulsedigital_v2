# Responsive QA Changelog

## 2026-05-22

- Ran browser-led discovery across all routed React pages at phone widths and a representative tablet/desktop matrix before remediation.
- Added shared mobile hero guards so home and service copy, CTAs, and split-text headlines stay inside narrow viewports.
- Tightened service hero and guardrail punchline typography/wrapping on small phones instead of relying on horizontal clipping.
- Constrained the animated home case-study cosmos section so off-screen card travel does not widen the document.
- Centered the mobile case-study fly-through path and bounded its animation wrapper before GSAP owns the cards.
- Closed a malformed footer mobile rule that caused the browser to ignore later responsive CSS in the shared stylesheet.
- Reduced narrow-phone pressure in campaign scrub headings, Contact location/direct-connect rows, and Careers decorative marks.
- Reduced case-study journey title pressure, grid intrinsic widths, final punch padding, and container spacing at narrow phone widths.
- Contained About founder backdrop text inside its decorative sections without changing About content.
- Restored readable mobile footer link spacing and exposed Contact Us in the mobile navigation menu.
- Bumped the shared stylesheet asset version so mobile QA fixes do not reuse the prior cached public CSS.
