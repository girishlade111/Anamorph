# 01 — Hero Cinematic Intro — Anamorph™ (Noah Reyes)

> **Purpose:** Recreate the above-the-fold hero with the massive wordmark, viewfinder HUD, floating bio card, and slow Ken Burns photo. Paste this prompt into Framer AI / v0 / Lovable / Webflow AI to generate the hero.

---

## Master Prompt (copy-paste)

```
Create a full-viewport hero section for "Anamorph™ — Noah Reyes, Video Editor" — dark cinematic portfolio, film-editor aesthetic.

Canvas: 100vw x 100dvh, background color #000000. Center background layer is a high-resolution photographic portrait — two faces in close proximity, profile vs 3/4, dramatic warm practical light slash (tungsten orange #ff8a2a / #db3903) cutting across skin against deep cool navy-blue (#0b1420) backdrop, shallow DOF, anamorphic bokeh, film grain 3%, lifted blacks. Image must fill 110% width/height to allow parallax, object-fit cover, filter: contrast 1.08, saturation 0.98. Apply slow 12s Ken Burns zoom-out from scale 1.08 → 1.0 with ease linear.

HUD Viewfinder Overlay (subtle, low opacity 0.18):
- Thin 1px vertical divider lines at 25%, 50%, 75% width, height 70vh, centered, color #f4f2ed opacity 0.12
- Four small "+" crosshairs (10px, 1px stroke, #f4f2ed opacity 0.25) near corners and mid-left/right.
- Top bar: 00:00  00:30  01:00  01:30  02:00 timecode ticks in 10px BDO Grotesk Variable, tracking 0.08em, color rgba(244,242,237,0.45). Red blinking dot 6px #db3903 next to "REC 00:14:12:11" on left mid, blink 1.2s steps.
- Do NOT make HUD interactive; opacity pulsates 0.15→0.22 over 4s ease-in-out, loop.

Navigation:
- Top nav: left "Anamorph™" 15px BDO Grotesk 500, letter-spacing -0.02em, color #f4f2ed. Center links: "Work 01 / Reels 02 / Services 03 / About 04" 11px, color #f4f2ed (active #f4f2ed, inactive rgba(244,242,237,0.55)), gap 28px, hover underline via 1px #db3903. Right pill CTA "Book a call" with white dot 6px, background #db3903, text #ffffff, padding 10px 18px, radius 50px, hover scale 1.02, hover bg #c13503.

Hero Content Layout (responsive grid 12-col):
- Left column (col 1-4, vertically centered at 42vh): label "(01) — SERVICES" 10px uppercase 0.1em rgba(244,242,237,0.5). Below stack: "Long-form Edits / Short-form Reels / Colour Grade / Motion & Titles" each 13px line-height 18px, color #f4f2ed, staggered fade-up 40ms. Footer note "(EST. 2026 — REEL V2.4)" 10px muted.
- Right column (col 8-12, same vertical center): floating glass card top: 44px portrait thumbnail (Noah against red curtain) left, text right "Hey, I'm Noah / Editor & Colourist" 12px/10px, play button 18px circle white bg with black triangle, container bg rgba(18,18,18,0.72) backdrop-blur 16px, border 1px rgba(255,255,255,0.08), radius 14px, padding 6px 14px 6px 6px, shadow 0 10px 30px rgba(0,0,0,0.45), float y -4px→4px loop 3.8s easeInOut. Below card: tagline "Cinematic editing for premium creatives and brands — long-form and short-form, cut for retention and graded so it feels like film." Max 32ch, right-aligned, 15px, line-height 1.45, color #f4f2ed, secondary words ("and brands — long-form and short-form," / "for retention") 60% opacity, word "film." bold white.

Wordmark:
- Bottom anchored: "Anamorph" single line, BDO Grotesk Variable 700, font-size clamp(92px, 20vw, 320px), letter-spacing -0.05em, line-height 0.82, color #f4f2ed, padding bottom -0.12em (overflows viewport 8%), center aligned, width 100%, overflow hidden, z 5. No wrap.
- Scroll behavior: wordmark is sticky to bottom until 0.5vh scroll then translates Y +40px and opacity 0.95→0, with parallax lag 0.3 (moves slower than scroll). Use transform3d and will-change.

Motion Spec:
- Initial load: HUD fade in 900ms after 200ms, left stack stagger 600ms ease [0.16,1,0.3,1] each 60ms delay (y 16px → 0, opacity 0→1), right card scale 0.96→1 + y 12→0 in 800ms spring (stiffness 240, damping 22, delay 500ms), wordmark y 80px → 0, opacity 0→1 in 900ms cubic-bezier(0.16,1,0.3,1) delay 150ms, background image scale 1.1→1.02 in 1400ms.
- Reduced motion: disable parallax/Ken Burns, instantly show final state.

Tokens: font.family.primary BDO Grotesk Variable, color.text.primary #f4f2ed on color.surface.base #000000, color.surface.muted #db3903 for CTA, radius.xs 50px, space.4 40px gutters, motion.duration.instant 300ms base, but hero uses 600-900ms.

Aspect: 16:9 and 21:9 ultrawide must keep image centered; mobile (<768px): stack left services below HUD hidden, right tagline centered, font clamp 54px, CTA full-width bottom fixed.

Output clean semantic HTML + Tailwind + Framer Motion. No Framer watermark.
```

---

## Technical Notes for Implementation

- **Stack:** Framer Motion or GSAP ScrollTrigger. Use `useScroll` for wordmark `y` transform with `spring`. Hero image parent `overflow:hidden`, child `scale` via `transform`.
- **Easing:** `ease: [0.16,1,0.3,1]` (expo out) for text; linear for Ken Burns.
- **Performance:** `will-change: transform, opacity`; raster image preload with `fetchpriority=high`; grain via CSS `::after` with `url(noise.png) opacity 0.04` not canvas.
- **Accessibility:** Wordmark is `<h1>`; HUD elements `aria-hidden="true"`; CTA `aria-label="Book a discovery call with Noah Reyes"`; Respect `prefers-reduced-motion`.
- **Do NOT:** add lens flare overlay, add extra red shape behind text, change wordmark font to serif, or make background image desaturated.

## What We Observed (Evidence)

- From `frame_001.jpg:1`, `frame_010.jpg:1` — central portrait fills viewport with warm slash light; bottom wordmark spans 92% width; HUD lines at 00:00/00:30 etc visible; card `Hey, I'm Noah` at right mid floats above tagline. Motion between frames 1-10 shows scroll beginning where wordmark appears to push slightly.

## QA Checklist

- [ ] Wordmark never wraps to two lines on desktop
- [ ] CTA pill matches token radius.xs 50px and #db3903
- [ ] HUD ticks visible but subtle (<0.25 opacity)
- [ ] Image never shows white letterboxing on resize
- [ ] Passes contrast AA for tagline on #000000 shadow scrim (add scrim 0→40% bottom gradient if needed)
