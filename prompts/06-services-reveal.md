# 06 — Services Staggered Reveal (Long-form / Short-form / Colour / Motion)

> **Purpose:** Build the four-service feature strip seen mid-page — each service has a giant grey index number, a contrasting thumbnail, title + description.

---

## Master Prompt (copy-paste)

```
Build Services grid — 4 rows, background #000000, section header no extra title, just rows with dividers.

Layout spec:
- Container max-width 1100px centered, padding x 40px.
- Each row: flex layout, height 220px, border-top 1px solid rgba(255,255,255,0.07), border-bottom on last row same, padding y 28px.
- Odd rows (01,03): left big number “01”“03”, center thumbnail (aspect 16:9, width 280px, radius 6px, object-cover), right text block.
- Even rows (02,04): mirrored — left text block, center thumbnail, right big number “02”“04”.
- Big number: font BDO Grotesk 500, size 84px, line-height 1, color rgba(244,242,237,0.28), letter-spacing -0.03em, width 88px flex-shrink 0, tabular-nums. On hover/active number color brightens to 0.55 with 300ms.
- Thumbnail: 280×150, overflow hidden, filter saturate 1.02 contrast 1.04. (Samples: 01 — silhouette figure against orange flare light; 03 — warm light streak over lips; 04 — soft blue light-wave abstraction). Add subtle scale on hover 1.0→1.04 in 500ms.
- Text block:
  - Title: “Long-form Edits” / “Short-form Reels” / “Colour Grade” / “Motion & Titles” — BDO 500, 22px, letter-spacing -0.02em, color #f4f2ed, margin bottom 8px.
  - Desc: two lines max 52ch, 12px line-height 1.55, color rgba(244,242,237,0.56), e.g., “Cut for retention — narrative-first structure, clean dialogues, endings that land.”
  - Micro tag beneath desc: “FEATURE — 12 MIN / FINAL — PRores 4444” style if needed optional 9px mutedTracking 0.08 uppercase.

Animation (scroll reveal):
- Each row uses IntersectionObserver enter: number opacity 0.08→0.28 + x -12→0 in 700ms; thumbnail clip-path inset 12% left/right →0 + scale 1.08→1 in 750ms [0.16,1,0.3,1], stagger 80ms between rows; title + desc stagger y 14→0 opacity 0→1 600ms delay 160ms after thumbnail start. No endless loop.

Responsive:
- Desktop keeps 3-col per row (number ~80px, image 280, text flex1). Gap 28px.
- <960px: single column stacked: big number atop (40px), thumbnail full-width 100% aspect 1.9, text below. Dividers stay.

Tokens: color.text.primary #f4f2ed, muted 0.56, border rgba(255,255,255,0.07), space.3 14px, space.4 40px gutters, motion 600-750ms.

Deliver as React + Tailwind, rows mapped from data array. Do not add CTA buttons per row.
```

---

## Technical Notes

- **Grid:** Use `grid grid-cols-[88px_280px_1fr]` for odd, `grid-cols-[1fr_280px_88px]` for even; switch to `grid-cols-1` at md.
- **Clip-path:** `clip-path: inset(0 12% 0 12%)` → `inset(0 0 0 0)` provides editorial wipe.
- **Evidence:** `anamorph image.png` shows overlapping service cards around middle; `frame_080.jpg:1` clearly shows “03 Colour Grade” row with left 03 big, center orange flare strip, right text; and row below “Motion & Titles” centered thumbnail right side with 04 big rightmost — confirms mirrored layout. Number opacity ~0.28 matches frame. Text grey secondary evident.
- **Accessibility:** Each row `<li>` inside `<ul aria-label="Services">`; thumbnail `alt="Example of colour grade — warm slit light over skin"` etc.
- **Reduced motion:** Disable clip/scale, just fade.

## Do NOT

- Make numbers interactive sliders, add carousel pagination, or use gradient text on numbers.

## QA Checklist

- [ ] Alternating layout stays aligned at 1024, 1280, 1440 widths
- [ ] Thumbnails never distort (object-cover fixed aspect)
- [ ] Divider lines remain 1px crisp on retina
- [ ] Rows re-enter correctly if user scrolls back up (no frozen hidden)
