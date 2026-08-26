# 10 — Contact Form + Footer + Global Motion System

> **Purpose:** The closing “Let's make something people actually finish” contact form, capacity indicator, footer columns and persistent global elements (HUD, smooth scroll, noise).

---

## Master Prompt (copy-paste Part A — Contact Form)

```
Create Contact section — background #000000, centered container max 760px, padding 80px 24px 60px.

Heading:
- “Let’s make something / people actually finish” — centered, BDO 500 clamp(36px,6vw,78px), line-height 0.96, letter-spacing -0.04em, first line #f4f2ed, second line rgba(244,242,237,0.52). Below heading centered “SLOTS FOR JUL ••••○ 2 LEFT” — “SLOTS FOR JUL:” 10px uppercase tracking 0.08 muted 0.45, dots: 4 filled circles 6px #db3903 + 1 outline #3a3a3a, gap 6px, text “2 LEFT” 10px white weight 600.

Form (stack vertical gap 22px):
- Four fields, each label row above input: “01 NAME” “02 EMAIL” “03 PROJECT” “04 THE BRIEF” — number 10px color #db3903 (accent), text 10px tracking 0.08 color rgba(244,242,237,0.7). Label margin bottom 8px top 16px.
- Inputs styling: width 100%, bg #0a0a0a (surface.strong), border 1px solid rgba(255,255,255,0.06), radius 6px, padding 14px 16px, font BDO 400 13px color #f4f2ed, placeholder rgba(244,242,237,0.32) 13px. Focus state: border #f4f2ed 1.2px, bg #111111, outline 2px solid rgba(244,242,237,0.14) offset 2px. Error state: border #db3903.
  - NAME field placeholder “Your name” — text input.
  - EMAIL placeholder “you@studio.com” — type email with validation.
  - PROJECT — custom select dropdown: current value “Long-form edit” 13px white, chevron down 14px muted on right. Options: Long-form edit, Short-form Reels, Colour Grade, Motion & Titles — dropdown panel bg #121212 border 1px rgba(255,255,255,0.08) radius 8px top 4px.
  - THE BRIEF — textarea min-height 120px placeholder “Footage, references, deadline — and the one metric that matters.” resize vertical.
- Submit row: centered flex gap 16px, primary pill button “Send the brief” bg #db3903 text #ffffff padding 14px 28px radius 50px 13px weight 500 hover bg #c53703 translateY -1px + shadow 0 8px 24px rgba(219,57,3,0.32) active scale 0.98; secondary link “or write: noah@anamorph.studio” 11px muted underline dotted hover white.
- Success state: button temporarily changes to “Sent ✓” green #1a8f4a bg.

Motion: form fields stagger on enter y 10→0 opacity 0→1 550ms per field delay 80ms sequential after heading.

Footer Below Form — 4-column stat rerun: (“24H REPLY TIME / 02 REVISION ROUNDS / 98% ON-TIME DELIVERY / 5D FIRST CUT”) — same component as 03 but now compact 28px numbers? Keep large 56px.

Footer Columns (after stats divider):
- Grid 3 columns on desktop gap 48px, padding 56px 40px, border-top 1px rgba(255,255,255,0.07).
  Col1 Studio: label “(00) — STUDIO” 10px muted, paragraph “A film-grade editing and motion studio cutting reels, campaigns and title work for creatives and brands.” 13px line 1.5 where phrase “film-grade” and “creatives and brands.” bold white 500, rest muted 0.56, max 26ch.
  Col2 Navigation: label “(01) — NAVIGATION” 10px muted, vertical list 13px “Work / Reels / Services / About / Contact” color rgba(244,242,237,0.72) hover white + underline offset 3px, gap 8px flex-col.
  Col3 Visit: label “(02) — VISIT US” 10px muted, address 14px white “Downtown, Dubai — UAE” weight 500, hours 11px muted “Mon–Fri 09:00 – 18:00 / Sat: 10:00 – 16:00”, social row gap 10px: circles 36px bg #0a0a0a border 1px rgba(255,255,255,0.07), icon 14px white opacity 0.85 hover bg #1a1a1a, icons X / Instagram / YouTube.
- Bottom bar: single thin line with timecode ticks faint 0.08 (00:00 05:00 08:00 12:00) plus centered “+”.

Persistent Global Elements:
- Noise grain overlay: fixed inset 0, pointer-events none, background url(grain 256x256 tiled) opacity 0.04, mix-blend mode overlay.
- Smooth scroll: use Lenis (or CSS scroll-behavior smooth as fallback) with duration 1.1 damping, lerp 0.08. Prevent scroll jank on iOS.
- Bottom-left sticky dock: horizontal pill: hamburger icon (three lines 14×10 stroke white) inside circle 36px bg #0a0a0a border 1px rgba(255,255,255,0.07) + “Book a call” pill #db3903 10px next to it, gap 8px, position fixed left 24px bottom 24px z 40, hide above 768? Actually always visible as seen in all frames.
- Viewfinder ticks and + remain faint throughout scroll (opacity 0.15) on edges — same as hero but extends full page height, positioned absolute left 2% and right 2% dotted lines.

Mobile: form max 92vw, stats grid 2×2, footer stack 1 col, sticky dock smaller.

Tokens: surface.base #000000 strong #0a0a0a muted #db3903, text.primary #f4f2ed secondary opacity 0.45-0.56, radius.xs 50px for pill CTA, radius 6px for inputs, space scales 5/6/14/40.
```

---

## Global Design System Prompt (copy to any tool as system prompt)

```
System: You are building Anamorph™ — Noah Reyes, Video Editor — a film-grade single-page portfolio on black (#000000) with warm-off-white (#f4f2ed) and accent vermillion (#db3903). Typography only BDO Grotesk Variable (weights 400/500/600/700) with tight tracking -0.02 to -0.05em, uppercase labels 10px tracking 0.08-0.12em. All surfaces #0a0a0a when elevated, radius 6px for media, 20px for client cards, 50px for pills, 32px for phone. Motion uses expo out [0.16,1,0.3,1], 550-900ms for reveals, linear 28s for marquees, scrub 0.5-0.6 for pinned sections. Scrims, film grain (0.04 opacity), and faint viewfinder ticks define atmosphere. WCAG AA, keyboard nav, focus-visible 2px ring, respect prefers-reduced-motion. Content is SOLO operator — messaging stresses single-person ownership. Never add gradients beyond warm light spill on photos, never add coloured number fills, never use serif.
```

---

## Technical Notes

- **Form validation:** Inline error msg 11px #db3903 below field, aria-describedby linking.
- **Lenis:** `new Lenis({duration:1.1, easing: t=> Math.min(1,1.001-Math.pow(2,-10*t))})` + `gsap.ticker.add((time)=> lenis.raf(time*1000))`.
- **Grain:** Base64 SVG noise or PNG; `opacity 0.04` to avoid banding.
- **Evidence:** `frame_110.jpg:1` shows form fields NAME/EMAIL/PROJECT/BRIEF with pill submit and capacity dots; `frame_120.jpg:1` shows 4 stats then 3 footer columns with Dubai address, social circles, and viewfinder bottom ticks. Sticky dock “Book a call” visible in ALL frames at bottom left confirms global persistence.
- **Accessibility:** Form labels `for` correctly; select keyboard navigable arrow keys; footer nav real links.
- **Reduced motion:** Lenis disabled, grain hidden, all reveals instant.

## Do NOT

- Add newsletter checkbox, add phone number field without consent, add map embed for Dubai.

## QA Checklist

- [ ] Form submit shows loading/success without page reload
- [ ] Grain not causing paint jank (use will-change: opacity only)
- [ ] Sticky dock never obscures form submit on mobile (add padding-bottom 96px to section)
- [ ] Footer hours wrap correctly on 375px
- [ ] All interactive elements keyboard reachable with visible focus ring
```

