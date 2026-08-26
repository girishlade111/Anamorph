# 08 — Pricing Tiers — "Clear rates up front no surprises later"

> **Purpose:** The transparent pricing table with 3 tiers (One Cut / Retainer / Day Rate) showing editor’s rates as seen toward page bottom.

---

## Master Prompt (copy-paste)

```
Build Rates section — background #000000, container max 1040px centered, padding 80px 40px.

Header:
- Centered heading: “Clear rates up front / no surprises later” — two lines, first line #f4f2ed, second line rgba(244,242,237,0.52), font BDO Grotesk 500 clamp(36px,5.6vw,72px), line-height 0.95, letter-spacing -0.04em, align center, margin bottom 48px. Subheader maybe none.

Divider above: thin 1px rgba(255,255,255,0.07) with tick marks ruler similar to stats (optional).

Rows (3 rows, each 96px min-height, display grid):
- Grid cols: [72px number] [1fr text] [140px price] [72px CTA].
  - Number: “01” “02” “03” — 56px BDO 500 color rgba(244,242,237,0.28), right-aligned within cell? Actually leftmost per frame but same.
  - Text block:
    - Title: “One Cut” / “Retainer” / “Day Rate” — 17px BDO 500 #f4f2ed, margin bottom 4px
    - Desc: 11px rgba(244,242,237,0.55) line-height 1.5 — e.g., “A monthly slate. Long-form plus cut-downs, priority turnaround.” max 44ch
    - Subtext: 9px uppercase tracking 0.06 muted 0.32 — example “SLATE — 4–8 CUTS / MONTH” or “SESSION — UP TO 10 HRS”
  - Price cell: right-aligned
    - Eyebrow 9px uppercase tracking 0.08 rgba(244,242,237,0.38) — “FROM — MONTHLY” or “PER DAY”
    - Amount 22px BDO 500 #f4f2ed tabular — “$6,400” “$850” etc, letter-spacing -0.02em
  - CTA: “BOOK →” 11px color #db3903 on hover #f04a13, arrow 10px →, gap 4px, hover translates arrow 4px in 200ms, underline off. On row hover entire row bg shifts to rgba(255,255,255,0.03) with 250ms.

Dividers: each row bordered top 1px rgba(255,255,255,0.08), last row also bottom. Rounded no.

Interaction:
- Hover row: bg fade, number brightens 0.28→0.52, CTA arrow shifts, price stays same. No lift.
- Reveal stagger on scroll enter: rows opacity 0→1 y 16→0 duration 620ms stagger 90ms ease [0.16,1,0.3,1].

Mobile: single column stacked per row: top line number + price inline flex between, below title/desc, CTA below price as right arrow pill? Keep grid but define template: row grid-template-areas: “number price” “title title” “desc desc”.

Tokens: color.surface.muted #db3903 for CTA arrow, color.text.primary #f4f2ed, space.3 14px row gap, radius none for rows but CTA pill 50px if button variant.

Output as <ul> rows <li> accessible with price aria-label.
```

---

## Technical Notes

- **Grid:** `grid-template-columns: 72px 1fr 140px 72px` → at <820px => `grid-cols-[56px_1fr]` stacking.
- **Tabular:** Price `$` thin? Keep same weight but `font-feature-settings:"tnum"` .
- **Frame evidence:** `frame_100.jpg:1` shows Retainer $6,400 FROM — MONTHLY with BOOK → right aligned, Day Rate $850 below with thin dividers and muted desc; also header “Clear rates up front no surprises later” visible partially in previous frame.
- **Animation:** Stagger via `transition-delay` per nth-child rather than JS timeline for simplicity.
- **Accessibility:** Price must be announced correctly: `<span aria-label="Retainer from 6 thousand 4 hundred dollars per month">$6,400</span>` ; CTA is real `<a href="#contact">BOOK <span aria-hidden>→</span></a>`

## Do NOT

- Add toggle Monthly/Annual, add strikethrough original price, or add background illustration.

## QA Checklist

- [ ] Row height consistent even when desc wraps to two lines
- [ ] Price column never overlaps CTA at 1024 width
- [ ] Hover bg not causing layout shift (use inset box-shadow maybe)
- [ ] All caps eyebrows have correct contrast (>4.5:1? maybe AA for small — use 0.45 min)
