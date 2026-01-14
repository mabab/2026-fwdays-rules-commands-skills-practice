---
description: "Generate or refresh a timed Slidev outline in slides.md based on docs/PRD.md (35–45 min)."
---

# /outline

You are helping build a Slidev deck for a workshop about **rules and skills** for working with AI assistants.

## Read first

- `docs/PRD.md` (source of truth for structure and timing)
- `slides.md` (the Slidev deck to update)
- `.cursor/rules/slidev.md`, `.cursor/rules/project-specific.md`, `.cursor/rules/markdown.md` (style + constraints)

## Inputs (ask if missing)

- **Target duration**: default to Slidev frontmatter `duration` in `slides.md` (or 35–45 minutes if not set).
- **Output language for slide content**: default to the language used in `docs/PRD.md` (currently Ukrainian).
- **Change mode**:
  - If `slides.md` is still the Slidev starter template, replace the content **after** the top frontmatter with the workshop outline.
  - Otherwise, propose minimal edits and clearly state what you will replace.

## Constraints

- Keep the workshop structure: **intro → rules → skills → integration → conclusions/Q&A**.
- Respect the PRD timing (35–45 min total).
- Avoid custom Vue components and new dependencies; use plain Markdown + built-in Slidev features only.
- Do not change Slidev theme/settings unless explicitly asked (keep existing frontmatter keys where possible).

## What to produce

1. **Outline table** (high-level):
   - Slide number (or section)
   - Title
   - Goal (1 sentence)
   - Estimated time
2. **Draft `slides.md` skeleton**:
   - Preserve the top frontmatter block.
   - Use `---` separators between slides.
   - Each slide must include:
     - A clear title
     - 3–6 bullets max
     - Optional interactive element note (e.g., where a `v-click` sequence could be used)
     - Speaker notes as the last HTML comment block (`<!-- ... -->`) with a short talk track + time
3. **Next steps** (short checklist):
   - Which slides need examples
   - Which slides need exercises
   - Any missing content or assumptions

## Output format (must follow)

### Outline
- Provide a table.

### Proposed `slides.md`
- Provide the full block to paste (or a clearly delimited replacement section).

### Checklist
- Bullet list.

## Don’t

- Don’t exceed the time budget.
- Don’t add long paragraphs to slides; move details to speaker notes.
- Don’t invent requirements not present in `docs/PRD.md`.

