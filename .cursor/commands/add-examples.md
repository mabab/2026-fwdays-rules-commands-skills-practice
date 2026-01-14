---
description: "Generate strong examples and counterexamples for a chosen rule/skill, ready to paste into slides.md."
---

# /add-examples

Generate **high-quality examples** and **counterexamples** for a specific **rule** or **skill** in this workshop.

## Read first

- `docs/PRD.md` (choose the target rule/skill and intended learning outcome)
- `slides.md` (match deck language and tone)

## Inputs (ask if missing)

- **Target concept**: the rule/skill to illustrate.
- **Context**: what scenario? (e.g., “asking for a refactor”, “writing repository rules”, “debugging a build error”).
- **Number of examples**: default 2 good + 2 bad.
- **Format preference**:
  - “side-by-side” (Good vs Bad), or
  - “progressive” (Bad → Better → Best)

## Constraints

- Examples must be realistic and specific (avoid vague text like “be clear”).
- Each example must include a short “why it works / why it fails”.
- Keep slide content short; put extra reasoning into speaker notes.
- Avoid mentioning custom Vue components as a solution; stay within Markdown/Slidev basics.

## What to produce

Produce **1–2 slides**:

1. **Examples slide**
   - 2 good examples + 2 bad examples (or Bad → Better → Best)
   - A short “key takeaway” line
2. **Optional slide**: “Heuristics / checklist” for applying the rule/skill in new situations

Include speaker notes (last HTML comment) with guidance for explaining the differences.

## Output format (must follow)

### Proposed slide(s)
- Provide exact Slidev markdown with `---` separators.

### Placement instructions
- 1–3 bullets: where to insert in `slides.md`.

### Notes
- Mention any assumptions you made.

