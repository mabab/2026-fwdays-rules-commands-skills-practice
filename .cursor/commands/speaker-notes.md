---
description: "Generate concise presenter notes for selected Slidev slides (talk track + timing), using Slidev notes blocks."
---

# /speaker-notes

Generate **presenter notes** for selected slides in `slides.md`.

## Read first

- `slides.md` (identify the slide range)
- `docs/PRD.md` (ensure notes align with intended learning outcomes)

## Inputs (ask if missing)

- **Slide range**:
  - by slide titles, or
  - by section name (Intro / Rules / Skills / Integration / Conclusion), or
  - by explicit slide numbers (if provided)
- **Tone**: default “confident, practical, friendly”.
- **Timing granularity**:
  - per slide (default), or
  - per section

## Constraints

- Notes must be the **last HTML comment block** in each slide:
  - `<!-- ... -->`
- Keep notes short and speakable:
  - 2–8 sentences per slide (unless explicitly asked for more)
- Include an **estimated time** per slide (e.g., “~45s”, “~2m”).
- Match the language of the slide content.

## Output format (must follow)

### Notes to insert
For each slide:
- Slide title
- Notes block exactly as it should appear in `slides.md`

### Timing recap
- Total minutes for the selected range + per-section totals if applicable.

### Optional improvements
- 3–5 bullets: where the slide content should be shortened/expanded to better match timing.

## Don’t

- Don’t rewrite slide content unless explicitly requested.
- Don’t add new dependencies or custom components.

