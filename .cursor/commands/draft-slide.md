---
description: "Draft one Slidev slide (or a short sequence) with clear goal, bullets, and speaker notes, following repo rules."
---

# /draft-slide

Draft a **single slide** (or **2–3 consecutive slides**) for this workshop deck, using Slidev markdown syntax.

## Read first

- `slides.md` (find where to insert / replace)
- `docs/PRD.md` (to stay aligned with the workshop narrative)
- `.cursor/rules/slidev.md`, `.cursor/rules/project-specific.md`

## Inputs (ask if missing)

- **Slide title**
- **Slide goal** (1 sentence)
- **Key points** (3–6 bullets)
- **Where to place it**:
  - after slide titled `...`, or
  - after section `Rules` / `Skills`, or
  - replace an existing slide titled `...`
- **Output language**: default to the language of the surrounding slides (or `docs/PRD.md` if the deck is not yet written).

## Constraints

- Keep slides scannable: max 6 bullets, no long paragraphs.
- Prefer **examples** over abstract statements where possible.
- Add a short speaker notes block as the **last HTML comment** (`<!-- ... -->`) with:
  - talk track (2–6 sentences)
  - suggested timing (e.g., “~60s”)
- Avoid custom Vue components and new dependencies.

## Output format (must follow)

### Proposed slide(s)
- Provide the exact Slidev markdown to paste, including `---` separators.

### Placement instructions
- 1–3 bullets describing exactly where to insert/replace in `slides.md`.

### Quick self-check
- Bullet list:
  - Does it fit the time budget?
  - Does it clearly support the workshop narrative (rules/skills)?
  - Is it actionable?

## Don’t

- Don’t change global frontmatter settings unless asked.
- Don’t add “filler” slides; every slide must have a purpose.

