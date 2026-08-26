# 05 — Short-Form Reels — Sticky Phone with Split Type

> **Purpose:** The “Short | [phone] | Form” pinned section where a phone mockup stays centered between two giant words while its reel content scrolls inside.

---

## Master Prompt (copy-paste)

```
Create full-viewport sticky section (height 240vh wrapper, sticky viewport 100vh, bg #000000) concept “Short Form — vertical reels showcase”.

Layout:
- Wrapper sticky: top 0, height 100vh, display grid grid-cols-3 align-center justify-items center.
- Left word: “Short” — BDO Grotesk 600, clamp(64px, 9vw, 164px), letter-spacing -0.04em, line-height 1, color #f4f2ed. Position slightly right-shifted toward center.
- Center: Phone mockup — width min(22vw, 340px) aspect 9:16 (~9:18 with bezel), bg #0a0a0a, border 1px solid rgba(255,255,255,0.12), radius 32px, overflow hidden, shadow 0 30px 80px rgba(0,0,0,0.7), inner inner shadow inset 0 0 0 3px rgba(255,255,255,0.06) to suggest bezel, notch pill top 88x24 bg black at 4% from top centered.
- Right word: “Form” — same size as Short, but default color rgba(244,242,237,0.42) muted.

Phone Inner Reels (stacked vertically, masked):
- Inside phone, vertical track of 2–3 reel cards, each height = phone height (100%). Content examples:
  Reel 01 — navy hoodie zipper close-up, soft daylight, @maison.veldt “Autumn drop — shot cold, graded warm.” bottom caption 11px white + 10px muted.
  Reel 02 — woman with long braid in beige bomber against blue sky, direct gaze, @sable.jun “Under real starlight, no relight.” 
  Each card object-cover, bottom scrim gradient linear black 60% → transparent 45% height for captions.
  Right inside edge UI: vertical stack of icons at 68% height: heart “48.2k”, comment “612”, share “1.2k”, bookmark, ellipsis — stroke 1.8 white, size 18px, label 9px tabular. Top row inside “Reels  Friends” centered, font 11px.
- Transition: reels swap as you scroll progress 0→1. Progress 0.00–0.50 = Reel 01 centered, 0.50–1.00 = Reel 02. Use translateY track moving -50% then -100% with snap easing (cubic 0.45,0,0.55,1) + tiny scale 1.02→1 during snap to emphasize refresh. Track scrub 0.5s smoothing.

Typography Sync:
- At progress <0.5, left “Short” active #f4f2ed and right muted; at >0.5 crossfade 300ms: left → muted 0.42, right → white. Use opacity + color lerp together.
- Add subtle letter-spacing pulse on active word -0.04→-0.045 on snap.

Micro-details:
- Header above phone: left “(03) — SHORT-FORM REELS” 10px muted, right “00:03:00:00” timecode 10px, center “+” faint.
- Footer below: left “EDITOR — COLOURIST” 10px, center “RUNTIME — 0:15” 10px, right “RATIO — 9:16” 10px — all rgba(244,242,237,0.38) uppercase tracking 0.08.
- Bottom-left sticky FAB remains visible: hamburger + Book a call pill (see global nav).

Motion: Sticky pinned for 240vh, scrub 0.5, enter card scale 0.88→1 rotateY? No rotation — keep flat, just y 40→0 fade 700ms. Phone has micro-float 3px y oscillation 4s loop even while pinned (transform translateY).

Mobile adaptation: grid-cols-1, top word Short 48px, phone 62vw centered, bottom word Form 48px stacked vertically, spacing 24px gap, wrapper height 200vh.

Implement with React + Tailwind + Framer Motion useScroll/useTransform. No video elements — use optimized stills with Ken-Burns 6s slow zoom per reel (scale 1.0→1.04 inside phone) to simulate motion.
```

---

## Technical Notes

- **Pin logic:** Wrapper `h-[240vh]` + `position:sticky top-0 h-screen`. Progress measured from wrapper scroll.
- **Sync:** `const progress = useScroll({target: wrapper, offset:["start start","end end"]}).scrollYProgress`; `xform = useTransform(progress, [0,0.48,0.52,1], ["#f4f2ed","#f4f2ed","rgba(...,0.42)","rgba(...,0.42)"])` for left word etc. Avoid re-render heavy.
- **Evidence:** `frame_060.jpg:1` shows navy hoodie reel inside phone centered between Short/Form, left white right grey; `frame_070.jpg:1` shows second reel beige jacket after scroll; ticker dots still visible confirming progression. Also note top labels confirm timecode stays.
- **Performance:** Phone image `priority` preload first reel, lazy second. Use `content-visibility:auto` for track offscreen.
- **Accessibility:** Phone reel content has `role=region aria-label="Short-form reels showcase"`; icons `aria-hidden`; captions as real text.

## Do NOT

- Tilt phone in 3D perspective, add lens glare over screen, or make reels autoplay video loops.

## QA Checklist

- [ ] Track snap hits center pixel-perfect (no 1px half cut)
- [ ] Active word colour transition syncs to reel swap within 80ms
- [ ] Phone radius consistent across browsers (32px)
- [ ] No jump when exiting sticky pin into next section
