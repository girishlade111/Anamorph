\---

name: design-system-anamorph-noah-reyes-video-editor

description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.

\---



<!-- TYPEUI\_SH\_MANAGED\_START -->



\# Anamorph™ — Noah Reyes, Video Editor



\## Mission

Deliver implementation-ready design-system guidance for Anamorph™ — Noah Reyes, Video Editor that can be applied consistently across dashboard web app interfaces.



\## Brand

\- Product/brand: Anamorph™ — Noah Reyes, Video Editor

\- URL: https://anamorph.framer.website/

\- Audience: authenticated users and operators

\- Product surface: dashboard web app



\## Style Foundations

\- Visual style: structured, accessible, implementation-first

\- Main font style: `font.family.primary=BDO Grotesk Variable`, `font.family.stack=BDO Grotesk Variable, BDO Grotesk Variable Placeholder, sans-serif`, `font.size.base=11px`, `font.weight.base=400`, `font.lineHeight.base=13.2px`

\- Typography scale: `font.size.xs=10px`, `font.size.sm=11px`, `font.size.md=12px`, `font.size.lg=13px`, `font.size.xl=14px`, `font.size.2xl=15px`, `font.size.3xl=16px`, `font.size.4xl=17px`

\- Color palette: `color.text.primary=#f4f2ed`, `color.text.secondary=#0000ee`, `color.surface.base=#000000`, `color.text.inverse=#ffffff`, `color.surface.muted=#db3903`, `color.surface.strong=#0a0a0a`

\- Spacing scale: `space.1=5px`, `space.2=6px`, `space.3=14px`, `space.4=40px`

\- Radius/shadow/motion tokens: `radius.xs=50px`, `radius.sm=100px` | `motion.duration.instant=300ms`



\## Accessibility

\- Target: WCAG 2.2 AA

\- Keyboard-first interactions required.

\- Focus-visible rules required.

\- Contrast constraints required.



\## Writing Tone

concise, confident, implementation-focused



\## Rules: Do

\- Use semantic tokens, not raw hex values in component guidance.

\- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.

\- Responsive behavior and edge-case handling should be specified for every component family.

\- Accessibility acceptance criteria must be testable in implementation.



\## Rules: Don't

\- Do not allow low-contrast text or hidden focus indicators.

\- Do not introduce one-off spacing or typography exceptions.

\- Do not use ambiguous labels or non-descriptive actions.



\## Guideline Authoring Workflow

1\. Restate design intent in one sentence.

2\. Define foundations and tokens.

3\. Define component anatomy, variants, and interactions.

4\. Add accessibility acceptance criteria.

5\. Add anti-patterns and migration notes.

6\. End with QA checklist.



\## Required Output Structure

\- Context and goals

\- Design tokens and foundations

\- Component-level rules (anatomy, variants, states, responsive behavior)

\- Accessibility requirements and testable acceptance criteria

\- Content and tone standards with examples

\- Anti-patterns and prohibited implementations

\- QA checklist



\## Component Rule Expectations

\- Include keyboard, pointer, and touch behavior.

\- Include spacing and typography token requirements.

\- Include long-content, overflow, and empty-state handling.



\## Quality Gates

\- Every non-negotiable rule must use "must".

\- Every recommendation should use "should".

\- Every accessibility rule must be testable in implementation.

\- Prefer system consistency over local visual exceptions.



<!-- TYPEUI\_SH\_MANAGED\_END -->



