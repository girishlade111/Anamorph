# 04 — Selected Work — Sticky Pin, Blurred Backdrop & Ticker

> **Purpose:** The showcase core of Anamorph — a scroll-pinned gallery where a central framed still stays fixed while the project swaps (Meridian → Citadel → Karama) and a giant infinite project-name ticker rolls below. This is the most complex motion.

---

## Master Prompt (copy-paste)

```
Build “Selected Work” pinned scroll section — 300vh tall wrapper, background #000000, sticky viewport 100vh centered.

Structure per slide (3 slides total, dataset: 01 Meridian / 02 Citadel / 03 Karama  — year 2026):

Stage:
- Parent: height 300vh, position relative.
- Sticky viewport: position sticky top 0 height 100vh overflow hidden, display grid place-items center.
- Two background layers:
  1) Blurred backdrop: absolute inset -18% (-10% top/bottom extra) — displays same image as foreground but at 1.18 scale, filter blur(42px) brightness(0.82) saturate(1.05), opacity 0.62. This layer parallaxes Y -6% → +6% across scroll (slower than foreground). Use absolute img with object-cover.
  2) Foreground card: centered, width min(46vw, 620px) aspect 1.28 (roughly 4:3), bg #111, border 1px rgba(255,255,255,0.08), overflow hidden, box-shadow 0 40px 100px rgba(0,0,0,0.7). Place viewfinder corner brackets: four L-shapes 14px size, 1px stroke #f4f2ed opacity 0.35 at each corner inset 14px (generated via pseudo elements).

Header ticks (stay fixed across slides):
- Top row: left “(01) — SELECTED WORK” 10px uppercase rgba(244,242,237,0.45), center small “+” 12px, right “2026” 10px, with thin top border 1px rgba(255,255,255,0.08) and bottom mirror. Opacity 0.85 always.

Ticker (bottom edge of sticky viewport):
- Horizontal infinite loop of project name repeated: “Meridian  +  Meridian  +  Meridian …” (use actual current project name for each slide range, crossfade ticker text as slide changes). Font BDO Grotesk 500, size clamp(56px, 9vw, 168px), line-height 0.9, letter-spacing -0.04em, color #f4f2ed (active) and #f4f2ed opacity 0.42 for duplicates, gap “+” is 18px weight 300. Track animation 24s linear -translate, loop seamless. Bottom aligned 6vh from bottom. Ticker sits OVER blurred backdrop but BELOW foreground card? Actually z: backdrop 1, ticker 2, card 3 — verify: ticker partially behind card bottom shadow, so card overlaps ticker bottom edge by 8%.

Scroll Behaviour (Framer Motion + useScroll OR GSAP ScrollTrigger):
- Pin sticky for 300vh. Progress 0 → 1 maps:
  0.00–0.08: enter: card scales 0.94→1, opacity 0→1, clip-path inset 4% all, 900ms expo.
  0.00–0.33: Slide 01 Meridian visible. Image: eyes macro, warm 3200K small practical spot on skin, shallow DOF, eye catch-light prominent.
  0.33–0.36: crossfade 280ms — backdrop blur fades 0.62→0 then back 0.62 with new image, foreground swaps via scale 1→0.98→1 and filter brightness 1→0.94→1, ticker text fades 1→0→1 swapping to “Citadel”.
  0.33–0.66: Slide 02 Citadel — modern minimalist apartment balconies, golden hour side light, glass reflections, foliage.
  0.66–0.69: same crossfade to Slide 03 Karama — close-up Black man's face profile looking up, cool blue key + warm rim, skin texture detailed, eyes partially closed.
  0.66–0.92: Slide 03 visible.
  0.92–1.00: exit: card scale 1→0.97 opacity 1→0.8 before next section pushes.
- Scrub smoothing: 0.6s.

Color: black base #000000, surface.strong #0a0a0a behind card maybe not needed. Motion spec: all fades 650ms ease [0.25,1,0.5,1]; backdrop blur remains constantly blurred, do NOT animate blur value (costly).

Mobile: sticky still works but height 240vh, card width 84vw, ticker size clamp 42px, blurred backdrop opacity 0.45.

Provide placeholder Unsplash HD images with warm cinematic grade and instructions to replace.

Code: HTML + Tailwind + Framer Motion (or vanilla ScrollTrigger). No external gallery lib.
```

---

## Technical Notes

- **GSAP alternative:** `ScrollTrigger.create({trigger: wrapper, pin: stickyViewport, scrub: 0.6, start:"top top", end:"+=300%"})` with timeline for image swap at progress 0.33/0.66.
- **Performance:** Blurred backdrop as separate `<img loading=eager>` with `filter:blur` — confirm `will-change: transform, opacity` only, avoid `filter` animation on scroll; use two stacked backdrops crossfading via opacity not blur anim.
- **Corner brackets:** Absolute divs 14×14 with `border-top:1px solid #f4f2ed40; border-left:1px` etc at each corner, `pointer-events:none`.
- **Evidence:** `frame_030.jpg:1` shows eyes in center with L brackets, ticker Meridian below, backdrop warm blur; `frame_040.jpg:1` shows architecture balconies with Citadel ticker; `frame_050.jpg:1` shows profile face with Karama ticker + same ticker font + same card proportions. Crossfade is visible as blur halo matches image palette — confirms backdrop is tinted same image.
- **Accessibility:** Each slide title is `<h2>`; blurred backdrop `aria-hidden`; provide skip link “Skip project showcase”
- **Reduced motion:** Disable pin scrubbing? Keep slides but change to vertical stack with no pin, immediate image swap.

## Do NOT

- Add autoplay video inside card, autoplay carousel circles, or ken burns on foreground card (only backdrop subtle).

## QA Checklist

- [ ] No flash of unblurred backdrop during swap
- [ ] Ticker loop seamless with no pause at seam
- [ ] Corner brackets stay crisp at any DPR
- [ ] Mobile sticky does not create nested scroll bounce (remove pin below 768 if iOS buggy — fallback to stack)
