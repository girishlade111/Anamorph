# 03 — Stats Row with Timeline Ticks & Count-Up

> **Purpose:** The horizontal KPI bar seen in the video/screenshot — “120+ Projects / 48M+ Views / 12 Years / 24H Turnaround” with a thin timeline ruler above and scroll-triggered counting.

---

## Master Prompt (copy-paste)

```
Create horizontal stats bar — background #000000, top hairline 1px rgba(255,255,255,0.07), padding 44px 40px 56px.

Ruler Above Numbers:
- Full-width div height 20px containing repeating tick marks: faint 1px vertical lines height 6px at 4% intervals, with taller 12px ticks at 0%, 33%, 66%, 100% positions aligned above each number column. Color rgba(244,242,237,0.18) for tall, 0.08 for short. Center labels “01” “02” “03” “04” 8px uppercase above tall ticks, opacity 0.35. Opacity fades at edges via mask.

Stats Grid:
- 4 columns (grid-cols-4, on mobile grid-cols-2 gap 32px). Each cell:
  - Number: huge display, font BDO Grotesk 500, size clamp(36px, 5.2vw, 68px), line-height 1, letter-spacing -0.04em, color #f4f2ed, tabular-nums. Suffix included in same span but slightly smaller: “120+” the “+” is 0.7em and 500 weight, “48M+” the “M+” same, “24H” the “H” same.
  - Label: 10px uppercase tracking 0.08em, color rgba(244,242,237,0.45), margin top 10px, text “PROJECTS DELIVERED” / “VIEWS GENERATED” / “YEARS EDITING” / “FIRST CUT” (or alternative: REPLY TIME, REVISION ROUNDS, ON-TIME DELIVERY, FIRST CUT — allow prop).
  - Animation trigger: when row enters viewport (+20% threshold), numbers count from 0 to target using easeOutCubic over 1.4s, plus opacity fade stagger 100ms per column, y 14px→0. Keep “+” and suffix static while digits tick.
- Second variant seen in footer: values “24H / 02 / 98% / 5D” — reuse same component with props.

Motion:
- Count uses requestAnimationFrame with Intl.NumberFormat, not flawed setInterval. For “48M+” animate 0→48 then append “M+”.
- Ruler line draws from left 0→100% width over 700ms ease [0.16,1,0.3,1] on enter, before numbers start (delay 200ms).

Tokens: use color.text.primary #f4f2ed, color.surface.base #000000, space.4 40px container padding, font.size.xs 10px for labels.

Build with React + Framer Motion (or vanilla JS countup). Ensure no layout shift — number containers have fixed height equal to final number.
```

---

## Technical Notes

- **Counting logic:** `const step = (t)=> Math.floor(easeOutCubic(t) * target)` ; `easeOutCubic=1-Math.pow(1-t,3)`.
- **Intersection:** `IntersectionObserver` once; disconnect after trigger. Respect `prefers-reduced-motion: reduce` → instantly show final numbers, no tick animation.
- **Tabular nums:** `font-variant-numeric: tabular-nums` to prevent width jitter.
- **Frame evidence:** `anamorph image.png` middle shows “20+ 48M+ 12 24H” row; `frame_020.jpg:1` shows “120+ 48M+ 12 24H” — slight content variant; implement as configurable props, not hard-coded. Also `frame_120.jpg:1` inverted shows footer variant “24H 02 98% 5D”.
- **Accessibility:** Numbers are `aria-label="120 projects delivered"`; label linked via `aria-labelledby`.

## Do NOT

- Add background cards behind numbers, add coloured number fills, or make ticks interactive.

## QA Checklist

- [ ] Counting finishes exactly at target (no off-by-one)
- [ ] No width jump during count (tabular nums + fixed height)
- [ ] Ruler draws before count, not simultaneously
- [ ] Mobile wraps 2+2 cleanly with correct spacing
