# 11 — Image Editing Prompt — Convert Standard Portrait to Cinematic Anamorphic Landscape

> **Purpose:** You have a standard (square / 4:3 / portrait) photo but the website requires a wide cinematic landscape (21:9 or 16:9) with the Anamorph grade. Feed this prompt into any AI image editor — Photoshop Generative Fill, Magnific AI, Krea, Midjourney /describe + inpaint, SDXL outpaint, Runway, Flux — to precisely extend and grade the frame.

---

## Master Prompt (copy-paste for AI image editing tools)

```
TASK: Transform a standard photographic portrait/material into a WIDE CINEMATIC LANDSCAPE image matching Anamorph™ — Noah Reyes reference aesthetic.

INPUT: Original photograph (any aspect: 1:1, 4:3, 3:4, 9:16) containing a human subject or object centered/fill. Subject must remain IDENTICAL — maintain exact face geometry, skin texture, eye catch-light, hair detail, clothing folds, and skin tone. Do NOT regenerate subject face with different identity, age, or ethnicity. Preserve all facial features with 99% identity retention.

OUTPUT SPEC:
- Final aspect ratio 21:9 (approx 2560×1096) or fallback 16:9 (1920×1080) — LANDSCAPE WIDE. If input is vertical portrait, outpaint horizontally outward, never crop top/bottom tighter. Final framing must keep subject CENTERED horizontally, with eyes at upper third (rule of thirds) or center-vertical, and head-room 12% above crown, chin above lower third.
- Composition: anamorphic film look — shallow depth of field, gentle background falloff, subtle vignette, letterbox-safe (keep critical subject within central 85% width). Background extension must look photographed, not painted: continue existing environment seamlessly (e.g., if subject against blue wall, extend same wall with same hue #18324a muted blue with micro plaster texture; if against red curtain, extend draped fabric with identical vertical folds, shadow fall 32deg).

LIGHTING & GRADE — match reference exactly (evidence: hero two-faces slit light, eyes macro golden hour):
- Light source: single hard practical tungsten slash (3200K warm orange #ff8f2a glow) cutting diagonally across face or scene, with soft falloff edge 18px feather, creating triangular highlight on cheekbone/nose bridge. Secondary cool fill from opposite side (6500K soft blue #0b2233 at 18% intensity) for contrast.
- Follow film emulation: Lifted blacks (black point 0.06), crushed contrast slightly, highlight roll-off soft (filmic curve), saturation -8% overall, skin skin-tone protected +6% orange channel, teal shadows +4.
- Add very light anamorphic lens characteristics: very subtle horizontal streak/bloom on specular highlight (1.5% intensity, 22px horizontal blur toward spill), faint oval bokeh in background at f/2.2, minor chromatic aberration on extreme highlight edge (0.4px red/cyan split) — barely perceptible, not exaggerated.
- Grain: ultra-fine luminance film grain 35mm, size 0.6px, intensity 3%, monochromatic.

EXTENSION / OUTPAINT INSTRUCTIONS — critical to avoid artifacts:
- Extend left and right equally or bias to balance subject: if subject is left-of-center in original, extend more to right to center it.
- Continue horizon/perspective lines with geometric correctness: maintain straight lines, do not bend architecture; keep vertical lines vertical (correct lens distortion). For architecture shots (e.g., balconies) preserve repeating depth and parallax — extend building facade with consistent floor spacing, window proportion, glass reflection continuity.
- Maintain depth layers: foreground bokeh stays soft, midground subject tack sharp (eyes tack), background extended blur matches existing blur radius (approx 24px Gaussian at full res). Do not create duplicated repetitive clone stamp pattern — vary texture naturally with subtle variation in foliage, wall, fabric.
- No added objects: do NOT add people, signage text, cars, plants, or furniture that were not in original. Only extend existing environment texture.
- Edge handling: outermost 48px extended edge may be slightly darker via natural vignette -0.25 stops to frame focus.

TEXTURE & DETAIL:
- Skin: retain natural pores, eye sparkle, iris detail, eyebrow individual hairs, do NOT smooth/retouch or add makeup. Keep sweat/oil specular highlight on forehead/nose as in original lighting.
- Fabric: preserve weave, zipper teeth, stitching even in extended area if relevant.
- No AI artifacts: no extra fingers, no warped glasses, no melted ears, no double iris, no fused fabric seams. Check face symmetry.

NEGATIVE PROMPT (must avoid):
blurry subject, out-of-focus eyes, deformed face, extra limbs, duplicated eyes, oversaturated neon colors, HDR tone-mapping, plastic skin smoothing, heavy sharpening halos, cartoon illustration, CGI 3D render, lens dirt overlay excess, heavy flare covering face, letterboxed black bars burned in (we want full image without bars, site adds scrim), text overlay, watermark, logo, frame, border.

PARAMETERS FOR TOOL-SPECIFIC SETTINGS:
- Photoshop Generative Fill: set “Extend” → “Generate without prompt after selection”? Use prompt above in Generate, feather 12px, select extended side strips 30% width each.
- Magnific / Krea / Topaz: Creativity/Resemblance slider low 0.28–0.35 (preserve identity), Upscale 2x after outpaint then downsample.
- Stable Diffusion outpaint: mask mode difference, denoising 0.42–0.48, cfg 5.5–6.5, sampler DPM++ 2M Karras steps 28, hires fix latent.
- Midjourney: use --ar 21:9 --style raw --chaos 4 --weird 0 --iw 1.2 to keep faithful; use Vary Region to inpaint sides only.

QUALITY CHECK BEFORE EXPORT:
1) Eyes remain tack sharp at 100% zoom, catch-light visible.
2) Skin tone histogram matches original within ∆E < 3.
3) Extended background passes “mirror test” — flip horizontal, no obvious tiling.
4) No banding in sky/wall gradient — add 2% grain if needed.
5) Export as 2560×~1097 max, sRGB, quality 92 JPEG or WebP, under 420KB, with embedded sRGB ICC.

Use this as single master prompt for ANY standard-to-landscape conversion for Anamorph site hero, selected-work cards, or portrait cards — interchangeable.
```

---

## Quick Variants (choose per image type)

**If source is portrait of person (hero/about style):**
Add to prompt: `Maintain head at same scale — do not upscale subject to fill width; keep subject occupies 38-44% of frame width, centered, leaving extended negative space left/right of cool blue tone 40% opacity background.`

**If source is architecture/detail object (Citadel style):**
Add: `Preserve geometric horizon at original height; extend facade horizontally continuing balcony rhythm with consistent perspective vanishing point, keep golden hour side light angle 32deg identical across extended panels.`

**If source is extreme close-up (eyes macro):**
Add: `Keep skin texture pore-level sharp at 200% zoom; extend bokeh background isotropically with no new in-focus elements; keep eye as sole sharp point, do not enlarge iris.`

---

## Tokens & References (for human editors)

- **Palette match target:** skin highlight #f2b68a → warm slash #ff8a2a, shadow cool #0b1420, highlight ambient #f4f2ed at low opacity.
- **Typography context if image contains overlay text region:** Leave bottom 26% of frame slightly less busy (darker or less textured) to allow site’s ticker/wordmark overlay to remain legible — ensure no high-contrast texture behind ticker zone.
- **File naming:** Export as `hero-landscape-21x9-{descriptor}.webp` or `card-landscape-16x9-{project}.jpg`

---

## Evidence Anchors

- Hero `frame_001.jpg:1` — slit warm light at ~38deg across faces covering mouth/nose, blue backdrop, grain, eye detail. This defines extension lighting angle.
- Selected work eyes `frame_030.jpg:1` — tight eyes macro extended fill requires horizontal outpaint of skin beyond cheek edges without generating third eye.
- Citadel `frame_040.jpg:1` — architecture side light golden hour dictates how to extend facade with same light sprawl length.
- About portrait `frame_090.jpg` — red curtain fold pitch 48px shows fabric extension pattern.

## Do & Don't Summary

**Do:** preserve identity, extend 21:9 equally, match lifted blacks + grain 3%, keep eyes tack, vary background naturally, add faint anamorphic streak.

**Don't:** add black letterbox bars, smooth skin, oversaturate, invent objects, warp architecture, add flare over subject eyes, generate text.

## Manual Check QA

- [ ] Final width ≥ 1920, ratio 21:9 (2.33) or 16:9 (1.78)
- [ ] Subject not stretched disproportionately (check ear-to-ear width vs original at pixel level)
- [ ] Histogram blacks lifted not crushed (0,0,0 pure black absent except scrim zones)
- [ ] No clone repetition detected at 50% zoom
- [ ] File under 420KB WebP without visible banding
