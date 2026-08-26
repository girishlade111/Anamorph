# 09 — Client Review Quote — Oversized Editorial Pull-Quote

> **Purpose:** The social-proof block — large quote “He sends one cut, not options. Ten episodes in, it's still the right one. Unbelievable.” with attribution Dana Kovac etc and side red-lit portrait.

---

## Master Prompt (copy-paste)

```
Create Client Reviews quote section — background #000000, section header row top: left “(07) — CLIENT REVIEWS” 10px uppercase muted 0.45, right timecode “00:07:00:00” 10px, faint top border with ticks.

Layout: 2-column grid gap 60px, max-width 1100px centered, padding 64px 40px, align center.

Left Column (text):
- Big quote: 3 lines
  Line 1: “He sends one cut, not options.”
  Line 2: “Ten episodes in, it’s still the”
  Line 3: “right one. Unbelievable.”
  Typography: BDO Grotesk 500, size clamp(28px,3.4vw,48px), line-height 1.06, letter-spacing -0.035em.
  Color emphasis: First sentence full white #f4f2ed (1.0), second line #f4f2ed 0.9, third phrase “right one. Unbelievable.” slightly dimmer 0.68? Actually per frame appears staggered opacity — replicate word-by-word highlight: animate words from 0.35 opacity → 1 sequential.
  Max width 18ch left-aligned.
- Attribution beneath: name “DANA KOVAC” 11px BDO 600 tracking 0.06 #f4f2ed, role/time meta beneath 10px muted 0.45 e.g., “SHOWRUNNER — NETFLIX” or “Director — Meridian” maybe small 10px.

Right Column (image):
- Image card: width 360px aspect 4:5, radius 6px overflow hidden, bg #0a0a0a, border 1px rgba(255,255,255,0.06). Photo — person in red fabric light, warm orange-red spill across face, cinematic contrast, skin detail, eye light. Object-cover. Has subtle grain. Hover disables.

Animation:
- Quote reveal: split into words, IntersectionObserver triggers class. Each word opacity 0.25→1, y 12→0, blur 4→0 duration 520ms stagger 32ms ease [0.16,1,0.3,1]. Delay attribution 400ms after last word fades 0→1.
- Image: clip reveal inset 8% →0 750ms [0.16,1,0.3,1] + scale 1.04→1, start 200ms after text words begin.
- Persist: no loop.

Background detail: maybe tiny floating “+” cross near bottom but decorative only 0.18 opacity.

Also include hidden controls affordance: maybe faint dots below? In reference screenshot bottom left has hamburger + Book a call sticky.

Tokens: color.text.primary #f4f2ed (full and faded), surface #000000, surface.strong #0a0a0a behind image, motion 520-750ms.

Mobile: stack to 1 col — quote top (24px), image below full-width aspect 16:9.

Build as <figure><blockquote><p><cite>
```

---

## Technical Notes

- **Word split:** JS split `quote.textContent.split(/\s+/)` wrapped in span.word; preserve spaces. Trigger via IO rootMargin -10%.
- **Evidence:** `frame_090.jpg` bottom half and next frame after — quote clearly 3-line large with dim third line, image warm red portrait on right vertical crop. Attribution “DANA KOVAC” partially visible bottom left. Matches aesthetic of warm spill same as hero.
- **Performance:** 520ms stagger ~ ~ 14 words → total reveal ~ 0.96s max, acceptable.
- **Accessibility:** `<blockquote>` with `<p>` and `<cite>`; quote is actual selectable text not image; ensure 4.5:1 for muted third line — test: #f4f2ed at 0.68 on #000 ≈ contrast 10.8:1 still AA because large text 18pt+ so passes (large text needs 3:1).
- **Reduced motion:** Show full white opacity instantly, no blur/y.

## Do NOT

- Add quotation marks giant decorative glyph, add carousel autoplay arrows, or animate image with tilt.

## QA Checklist

- [ ] Words reveal sync across line breaks (no jump at wrap)
- [ ] Image card radius crisp, no white fringe
- [ ] Attribution not orphaned from quote on mobile (gap 24px)
- [ ] Quote stays selectable and not trapped in canvas
