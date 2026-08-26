# 02 — Tagline Reveal + Infinite Client Marquee

> **Purpose:** Recreate the second fold — the big editorial tagline “The people who call when it has to feel like film, not content” followed by the seamless infinite logo loop for adidas / allbirds / Audi / pexels / airbnb.

---

## Master Prompt (copy-paste)

```
Build section (02) — Tagline + Clients — background #000000, top divider 1px rgba(244,242,237,0.08).

Tagline Block:
- Container: max-width 1200px centered, padding 80px 40px 48px.
- Heading: “The people who call when it / has to feel like film, not content” — two lines.
  Line 1 “The people who call when it” color #f4f2ed (100%), Line 2 “has to feel like film, not content” color rgba(244,242,237,0.52) — to signal secondary. Font BDO Grotesk Variable 500, size clamp(36px, 6.2vw, 84px), line-height 0.94, letter-spacing -0.04em, text-align left, max-width 14ch. Word-by-word reveal on scroll-enter: each word opacity 0.2→1 + y 18px→0, blur 6px→0, duration 650ms stagger 45ms, ease [0.16,1,0.3,1]. Keep phrase “feel like film” slightly brighter (0.92 vs 0.52) if needed.
- Eyebrow below: “CLIENTS — 2021–2026” 10px uppercase tracking 0.1em color rgba(244,242,237,0.38), margin top 18px.

Logo Marquee:
- Track height 132px, gap 16px, overflow hidden, mask-image linear-gradient to fade edges 0%→8% opaque →92%→100% transparent.
- Items: pill-shaped cards 180px x 104px, bg #0a0a0a (surface.strong), border 1px rgba(255,255,255,0.06), radius 20px, centered logo. Logos: “adidas” bold sans, “allbirds” script thin, “Audi” four rings line icon, “pexels” cursive, “airbnb” with glyph — all rendered in grayscale #c8c4bf opacity 0.82, size ~42% of card width. Duplicate set ×3 for seamless loop.
- Animation: horizontal translateX 0 → -33.333% over 28s linear infinite, pauseOnHover false, but slow to 50% speed on hover (hover container slows track to 56s). Use will-change transform, no JS ticker jitter.
- Interactivity: none — decorative. aria-hidden true, with offscreen list of client names for screen readers.

Transition to next section: 1px divider with tick marks (see 03), no gap.

Tokens: color.text.primary #f4f2ed, color.surface.strong #0a0a0a, space.3 14px between rows, font.size.base 11px foundations but hero tagline out of scale for impact.

Mobile: tagline line break becomes three lines, size clamp 32px, cards 140x84px, track height 100px, duration 22s.

Export as HTML + Tailwind + CSS keyframes (no external marquee lib).
```

---

## Technical Notes

- **Marquee implementation:** Pure CSS `@keyframes marquee {0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-33.333%,0,0)}}` on a `flex w-max` track. Duplicate children in markup, not clone via JS.
- **Word reveal:** Split heading into `<span class="word">` via JS on mount only (avoid layout shift). Use IntersectionObserver threshold 0.2 to trigger `is-visible` class. If `prefers-reduced-motion`, skip blur/y animation, just fade.
- **Performance:** 28s duration balances smoothness vs attention fatigue; check on 120hz displays no stutter (translate3d).
- **Frame evidence:** `frame_020.jpg:1` shows tagline large white/grey on black, and marquee cards in frame with each 0.82 opacity on dark pill; evidence divider absent but implied.
- **Accessibility:** Logos are decorative images with `alt=""`; provide `<ul class="sr-only"><li>adidas, allbirds, Audi, pexels, airbnb</li></ul>` before marquee.

## Do NOT

- Add color to logos, add drop shadows under cards, or make marquee bidirectional bounce.
- Animate tagline per-letter (too granular, feels cheap) — per-word only.

## QA Checklist

- [ ] Loop is seamless with no gap/jump at reset point
- [ ] Edge fade mask not clipping logos on 375px viewport
- [ ] Tagline stagger respects reduced motion
- [ ] Cards maintain radius 20px and border 1px at all breakpoints
