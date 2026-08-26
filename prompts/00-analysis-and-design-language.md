# 00 — Analysis of Anamorph™ Reference Assets — Design Language & Animation Inventory

> **Source Analyzed:** `Anamorph video.mp4` (1920×1080, 62.88s, 1920x1080 h264, ~25.7fps avg, 1616 frames extracted @2fps =126 samples), `anamorph image.png` (full page stitched long scroll), `DESIGN.md` + `SKILL.md` tokens.

---

## 1. Brand & Surface

- **Product:** Anamorph™ — Noah Reyes, Video Editor — solo operator studio. URL https://anamorph.framer.website/ built with Framer. Messaging is *solo, film-grade, retention-cut, graded to feel like film not content*.
- **Surface:** Single-page dark marketing/portfolio site, not a dashboard app despite DESIGN.md calling it dashboard — actual site is editorial luxury. Installed inference in DESIGN.md is low confidence — correct surface is *cinematic portfolio*.
- **Audience:** Premium creatives, brands, documentary teams, music labels, startups needing long-form retained edits and short-form reels.
- **Tone:** Concise, confident, editor-as-auteur. No hype adjectives, plain technical film language (log, grade, lifted blacks, cut for retention, 4K 24 FPS).

## 2. Visual Foundations

- **Canvas:** 100% black `color.surface.base #000000`, elevated surfaces `color.surface.strong #0a0a0a`, card pills `0a0a0a + 1px rgba(255,255,255,0.06)`. No grey pages.
- **Text:** Primary `color.text.primary #f4f2ed` (warm off-white cream, not pure #FFF) for headlines. Secondary muted at opacities 28% → 56% (`rgba(244,242,237,0.28)` for huge numbers, 0.42 for inactive ticker words, 0.45-0.56 for descriptions). Accent `color.surface.muted #db3903` (vermillion orange-red, hover #c53703/#c13503) used only for CTA pills, dots, BOOK arrows.
- **Typography:** Single family `BDO Grotesk Variable` (stack: BDO Grotesk Variable, BDO Grotesk Variable Placeholder, sans-serif). Base 11px foundations tokenized but actual display scales out-of-token for impact (huge wordmark clamp 92–320px, tagline clamp 36–84px, section titles 28–72px, ticker 56–168px). Weights used: 400 for body/desc, 500 for titles/numbers, 600-700 for wordmark. Tracking tight `-0.02` to `-0.05em` for headlines, `0.08–0.12em` uppercase for labels. Line-height 0.82 (wordmark) → 1.5 (desc).
- **Radii:** Token `radius.xs 50px` for pill CTAs, `radius.sm 100px` token exists but actual cards use `20px` (logo pills), `32px` (phone), `6px` (media cards + form inputs), `14px` (floating Noah card). Use these four.
- **Spacing:** Token scale `5/6/14/40px` is minimal; practice uses 40px gutters on desktop, 24px gap for grids, 16/14 tight gaps.
- **Motion token:** `motion.duration.instant 300ms` is base, but editorial motion is 520–900ms `ease [0.16,1,0.3,1]` (expo-out), marquees 24–28s linear, scrub 0.5s.

## 3. Page Architecture (in scroll order)

1. **Hero (100vh)** — full-bleed photo (two faces, warm slit), HUD ticks/crosses, nav top, service list left, tagline + floating bio card right, massive Anamorph wordmark bottom overlapped.
2. **Tagline Fold** — large editorial sentence “The people who call when it has to feel like film, not content”, eyebrow CLIENTS 2021–2026.
3. **Infinite Logo Marquee** — pill cards adidas / allbirds / Audi / pexels / airbnb — seamless loop.
4. **Stats Bar 01** — 120+ / 48M+ / 12 / 24H with tick ruler above.
5. **Selected Work (pinned 300vh)** — Meridian / Citadel / Karama — sticky center framed still with blurred backdrop + corner brackets + bottom name ticker.
6. **Short Form (pinned 240vh)** — Split type Short | iPhone | Form — phone masks reels swapping.
7. **Services 4 rows** — 01 Long-form Edits / 02 Short-form Reels / 03 Colour Grade / 04 Motion & Titles — alternating number-image-text.
8. **About Credits** — portrait with cursive signature vs vertical stack Every frame handled… Same name credits.
9. **Rates** — 3 rows One Cut / Retainer $6,400 / Day Rate $850 — right price + BOOK → .
10. **Testimonial** — large pull-quote Dana Kovac + side red portrait.
11. **Contact** — “Let’s make something people actually finish” + capacity dots 4+1 + 4-field form (Name/Email/Project Select/Brief) + Send pill.
12. **Stats Bar 02 (footer repeat)** — 24H / 02 / 98% / 5D.
13. **Footer 3-col** — Studio blurb / Navigation / Visit (Downtown Dubai hours + X/IG/YT circles) + bottom tick line 00:00 etc + persistent Book a call dock bottom-left.

## 4. Detailed Animation & Effects Inventory

### Global / Persistent
- **Noise Grain:** Fixed `opacity 0.04` film grain overlay (`mix-blend: overlay`) faint, never animated — provides film texture.
- **Viewfinder HUD:** Thin vertical lines at 25/50/75% height 70vh, 1px #f4f2ed 0.12; small 10px + crosshairs near spread corners opacity 0.18 pulsating 0.15→0.22 over 4s. Timecodes 00:00 etc muted 0.45. Pure decoration `aria-hidden`. No parallax on HUD.
- **Smooth Scroll:** Inertia/damping (~1.1 duration, lerp 0.08) Lenis-style — observed buttery scroll, no native jumps, snap points at pinned sections. Scrims present.
- **General Reveal Pattern:** All rows/text use same formula: `opacity 0→1 + y 12–18px→0` + occasional `blur 4–6px→0` + `clip-path inset` for images, unified ease `[0.16,1,0.3,1]` 600-750ms, stagger 32-90ms. Never per-letter, per-word for headings, per-row for lists.
- **Sticky Pin:** Selected Work wrapper 300vh + Short Form 240vh each `position:sticky top:0` with ScrollTrigger scrub 0.6/0.5. Mobile falls back to stacked if sticky unreliable.
- **Links:** Hover underline via #db3903 1px grows; nav links inactive 0.55 → 1.0.

### Hero Specific
- **Load Sequence:** HUD fade 900ms → left stack stagger 60ms 600ms → right card scale 0.96→1 spring 800ms → wordmark y 80→0 900ms → image scale 1.1→1.02 1400ms. Blinking REC dot steps 1.2s.
- **Ken Burns:** Background image scale 1.08→1.0 over 12s linear — subtle, not looping aggressively.
- **Parallax:** Wordmark and image have differential rates: image  +6% Y, wordmark lag 0.3× scroll.
- **Floating Card:** `Hey, I'm Noah` glass card y ±4px loop 3.8s easeInOut, backdrop-blur 16px, border 1px 0.08.
- **Wordmark:** 20vw huge, overlap bottom 8%, sticky then fade on scroll 40px Y.

### Tagline + Marquee
- **Tagline word-by-word:** `blur 6→0 + y 18→0 + opacity 0.2→1` stagger 45ms triggered at 20% viewport.
- **Marquee:** Pure CSS `translate3d(-33.333%,0,0)` 28s linear infinite on `flex w-max` duplicated ×3, edge fade via `mask-image linear-gradient`. No pause, slows to 56s on hover.

### Stats
- **Ruler draw:** width 0→100% 700ms expo before count.
- **Count-up:** 0→target via `easeOutCubic` 1.4s `requestAnimationFrame` tabular-nums, suffixes static.

### Selected Work Showcase
- **Pin timeline:** 0–0.33 Slide 01 Meridian, 0.33–0.66 Slide 02 Citadel, 0.66–0.92 Slide 03 Karama with crossfades 280ms at 0.33/0.66 via opacity (not blur anim). Blurred backdrop is scaled 1.18 + blur 42px brightness 0.82; it NOT animates blur value, only opacity swap between two stacked layers.
- **Ticker:** Giant name loop 24s linear below card, text swaps via opacity with slide (Meridian→Citadel→Karama).
- **Corner Brackets:** Static L 14px 1px stroke 0.35 opacity, not animated.

### Short Form Phone
- **Phone reveal:** scale 0.88→1 y 40→0 700ms at section enter, then micro-float 3px 4s loop.
- **Reel track:** vertical translate -50% snap with spring (stiffness low), scrub 0.5; each reel inside has slow Ken Burns 1.0→1.04 6s.
- **Type sync:** Left/Right words color swap muted↔white on reel swap 300ms.

### Services Rows
- **Row enter:** number x -12→0 700ms, thumbnail `clip-path inset(0 12%)` + scale 1.08→1 750ms, title/desc y 14→0 stagger 80ms row delay, image + text separated.

### About / Credits
- **Signature draw:** SVG path `stroke-dasharray/dashoffset` 1.1s delay 300ms.
- **Portrait:** hover scale 1.03 700ms + scroll parallax 8px.
- **Credit stack:** pair stagger 70ms y 10→0 550ms, lower rows dim 0.58.

### Rates
- **Rows:** `y 16→0 + opacity 0→1` stagger 90ms, hover bg rgba(255,255,255,0.03) 250ms + number brightens 0.28→0.52 + arrow translate 4px.

### Testimonial
- **Quote:** word stagger `blur 4→0 y12→0 opacity 0.25→1` 520ms 32ms stagger, image clip inset 8%→0 + scale 1.04→1 750ms.

### Contact
- **Fields:** stagger y 10→0 550ms delay 80ms.
- **Inputs focus:** border 1.2px #f4f2ed + outline 2px rgba(244,242,237,0.14), error #db3903.
- **Button:** hover lift -1px + orange shadow 0 8px 24px rgba(219,57,3,0.32).

## 5. Color & Grade Reference (photo specific)

- **Hero light:** 3200K tungsten diagonal slash 38deg spanning mouth to cheek, edge feather 18px, intensity highlight #ff8a2a spill, cool opposite fill #0b1420 at 18% gives depth. Skin highlight #f2b68a, shadows desaturated blue.
- **Selected Work palettes:** Meridian warm orange/skin, Citadel golden side architecture, Karama cool blue key vs warm rim. Consistent `grade: lifted blacks 0.06, highlight roll-off soft, sat -8%, skin +6% orange channel, grain 3%`.
- **General photo treatment:** f/2.2 shallow DOF, oval bokeh, faint horizontal anamorphic bloom, 35mm grain 0.6px, contrast 1.08.

## 6. Accessibility & Technical Quality

- **Contrast:** Headlines on #000 pass AA easily (white 21:1). Muted 0.45 text on #000 ≈ 7.8:1 still AA because large? Verify but small muted labels at 0.45 may fail for 10px — RECOMMEND boosting to 0.55 min for labels.
- **Focus:** Need visible ring 2px #f4f2ed outer, offset 2px, never hidden per DESIGN.md rules.
- **Reduced motion:** All parallax/marquees must respect `prefers-reduced-motion: reduce` — instantly show final state, disable scrub/pin if needed fallback to stack, preserve semantics.
- **Tokens usage:** Never raw hex in component guidance; always via semantic tokens (text.primary etc). All components must define default/hover/focus-visible/active/disabled/loading/error states per guideline.

## 7. Anti-Patterns to Avoid (Don'ts)

- Do NOT add colored logos, gradient number text, drop shadows under logo pills, per-letter chaotic text anim, lens flare covering face, autoplay video galleries, newsletter popups, map embeds, phone 3D tilt, carousel pagination dots where reference uses ticker, serif replacement for BDO Grotesk.

## 8. Gaps / Assumptions Requiring Follow-up with You (see questions below: brief)

- Confirm final pricing numbers (image screenshot low-res, frame 100 shows $6,400/$850 but hero variant maybe $5k/$6.4k — we default to $6,400/$850).
- Confirm visit hours and location (Dubai) is placeholder vs your city.
- Confirm whether you want real client logos or placeholder; if real, provide vector files.

---
*This analysis grounded in pixel evidence from 126 extracted video frames + stitched screenshot. Recommendation: use prompts 01–11 sequentially; each builds on global system defined in 10.*
