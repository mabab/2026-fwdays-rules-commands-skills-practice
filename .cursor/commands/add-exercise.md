---
description: "Create a practical exercise slide (or mini-sequence) with instructions, expected outcome, pitfalls, and debrief."
---

# /add-exercise

Create a **hands-on exercise** for the workshop deck that reinforces a specific **rule** or **skill** from `docs/PRD.md`.

## Read first

- `docs/PRD.md` (pick a relevant rule/skill and timing slot)
- `slides.md` (place the exercise in the right section)

## Inputs (ask if missing)

- **Topic**: the rule/skill to practice (e.g., “write better rules”, “iterate with constraints”, “critical evaluation”).
- **Audience level**: default “mixed dev audience”.
- **Mode**:
  - “live in the room” (quick activity), or
  - “take-home” (homework slide)
- **Time box**: default 2–4 minutes.
- **Artifacts** (optional): any snippet, prompt, or example text to include.

## Constraints

- Keep it actionable and quick: participants should be able to do it in the time box.
- Provide clear success criteria (“you’re done when…”).
- Avoid requiring external services/accounts.
- Avoid custom Vue components and new dependencies.

## What to produce

Create **1–2 slides**:

1. **Exercise slide**
   - Goal (1 line)
   - Steps (3–5 bullets, step-by-step)
   - Time box
2. **Debrief slide** (optional but recommended)
   - What “good” looks like
   - Common pitfalls
   - Quick discussion prompts (2–3)

Include speaker notes (last HTML comment) with facilitation tips + timing.

## Output format (must follow)

### Proposed slide(s)
- Provide exact Slidev markdown with `---` separators.

### Placement instructions
- 1–3 bullets: where to insert in `slides.md`.

### Variations (optional)
- 2–3 bullet ideas to adapt the exercise.

## Don’t

- Don’t write a long workshop inside the slide deck.
- Don’t exceed the time box without explicitly warning.

