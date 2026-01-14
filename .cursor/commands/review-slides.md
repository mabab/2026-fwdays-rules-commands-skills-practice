---
description: "Review slides.md for narrative flow, clarity, timing, and interactivity; output a prioritized, actionable fix list."
---

# /review-slides

Review the current Slidev deck (`slides.md`) and propose improvements so it matches the workshop goals and time budget.

## Read first

- `slides.md`
- `docs/PRD.md`
- `.cursor/rules/slidev.md`, `.cursor/rules/project-specific.md`, `.cursor/rules/markdown.md`

## Review dimensions (must cover)

- **Narrative flow**: intro → rules → skills → integration → conclusions/Q&A
- **Clarity**: each slide has 1 purpose and a clear takeaway
- **Timing**: total 35–45 min; flag sections that are too dense
- **Balance**: theory vs practice; examples + exercises are present
- **Interactivity**: where short prompts / v-click progression helps (no custom components)
- **Consistency**: terminology (“rules” vs “skills”), language consistency, links if present

## Output format (must follow)

### Executive summary
- 3–6 bullets: what to fix first and why.

### Prioritized change list
For each item include:
- **Priority**: P0 / P1 / P2
- **What**: the change
- **Why**: 1 sentence
- **Where**: slide title(s) or section
- **Effort**: S / M / L

### Suggested edits (optional but preferred)
- Provide ready-to-paste slide snippets for the top 2–3 fixes.

### Timing check
- Estimate minutes per major section and total.

## Don’t

- Don’t rewrite the entire deck unless explicitly asked.
- Don’t introduce new dependencies or custom Vue components.

