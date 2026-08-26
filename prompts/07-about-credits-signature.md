# 07 — About / Credits — "Every frame handled by the same person"

> **Purpose:** The intimate about block with Noah’s portrait, handwritten signature, and vertical credit roll (all credits same name).

---

## Master Prompt (copy-paste)

```
Create About / Credits block — section height auto, background #000000, padding 80px 40px, max-width 1100px centered, grid 2 columns gap 56px on desktop.

Left: Portrait Card
- Container width 380px aspect 3:4, bg #0a0a0a, radius 6px, overflow hidden relative, border 1px rgba(255,255,255,0.06).
- Image: Noah — smiling Black man in cream tee against deep red curtains with hard slit sunlight casting diagonal shadow, soft film grain, color grade warm. Image object-cover, hover scale 1.03 in 700ms, slight parallax y -6px on scroll (translateY).
- Overlaid signature: handwritten cursive “Noah” script thin 1.2px stroke white #ffffff, positioned absolute top -10px right -18px overlapping edge, rotation -6deg, opacity 0.92, font style “Alex Brush”-like but prefer SVG path for crispness, size ~92×44. Signature draws on scroll-enter via SVG stroke-dashoffset anim 1.1s ease [0.16,1,0.3,1] delay 300ms.
- Footer tag below image: left “NOAH_REYES@THISISREELS” 8px mono, right “4K - 24 FPS” 8px mono, color rgba(244,242,237,0.38) uppercase tracking 0.06.

Right: Headline + Credit Stack
- Heading: “Every frame handled / by the same person” — two lines, BDO Grotesk 500, size clamp(28px, 3.4vw, 42px), line-height 1.02, letter-spacing -0.03em, color #f4f2ed (0.98) first line, second line same; margin bottom 36px.
- Credit roll: vertical stack centered, align center, gap 14px. Each row pair:
  Label 10px uppercase tracking 0.12em color rgba(244,242,237,0.38) (e.g., “MOTION” / “CATERING” / “EDIT” / “GRADE”)
  Value 22px BDO 500 color #f4f2ed (first two fully white, lower two light grey #a8a5a0 to imply subtle fade-off screen as seen in frames). For row list: DIRECTOR Noah Reyes / SOUND Noah Reyes / MOTION Noah Reyes / CATERING Still Noah / EDIT Noah Reyes / GRADE Noah Reyes — use whatever set, but type: “Noah Reyes” repeated dominates, with one playful “Still Noah”.
- Stagger reveal on enter: each label→value pair opacity 0→1 y 10→0 550ms stagger 70ms, labels slightly before values.
- Sub-footer paragraph: centered max 40ch “Same name on every credit. That’s just how I work. / Twelve years on documentary, music and branded projects.” First sentence white 13px weight 500, second sentence muted 0.55.

Motion: overall section fade 600ms; signature draw is primary delight; portrait parallax discrete (8px total travel across viewport); credit rows stagger triggered when section hits 22% viewport.

Mobile: grid 1 column, portrait full-width, signature smaller 74×34 right -8px, heading centered, stack stays centered.

Tokens: color.text.primary #f4f2ed, surface #000000, radius 6px for image, motion 550ms.

Build semantic HTML: <section aria-label="About"><figure><img><figcaption>
```

---

## Technical Notes

- **Signature SVG:** Provide inline `<svg viewBox="0 0 120 40"><path d="M8 18 C ... " stroke="white" fill="none" stroke-width="1.4" stroke-linecap="round"/></svg>` with `stroke-dasharray: pathLength` then anim.
- **Parallax:** Use `transform: translateY(calc(var(--progress)* -8px))` derived from scroll progress via `IntersectionObserver` ratio, disabled for reduced motion.
- **Evidence:** `frame_090.jpg:1` clearly shows left portrait with cursive “Voah/Noah” top overlap, right column credit stack with MOTION Noah Reyes etc centered, fade at bottom; `anamorph image.png` elongated shows same block with “Every frame handled by the same person” headline and red-curtain portrait.
- **Color tweak:** Lower credits (GRADE) appear dimmer in frame — implement nth-child opacity fade: `li:nth-child(n+5) { opacity:0.58 }`.
- **Accessibility:** Portrait `alt="Noah Reyes — editor and colourist, smiling against red curtains"`; signature `aria-hidden`.

## Do NOT

- Add carousel dots under portrait, tint portrait duotone, or make credits horizontally scroll.

## QA Checklist

- [ ] Signature draws once per enter, resets on leave if scrolled past?
- [ ] Paragraph line lengths not exceeding 40ch at any breakpoint
- [ ] Portrait shadow not bleeding outside container radius
- [ ] All caps labels have correct tracking 0.12em and not cramped
