---
description: "Check repository consistency: links, PRD references, terminology, language consistency, and workshop structure alignment."
---

# /consistency-check

Run a consistency pass across the workshop repo and list actionable fixes.

## What to scan

- `README.md` (links and onboarding info)
- `docs/PRD.md` (source of truth)
- `slides.md` (deck content, timing, language consistency)
- `.cursor/rules/*` and `.cursor/commands/*` (references to paths, terminology)

## Checks (must cover)

- **Broken links / wrong paths** (e.g., `docs/PRD.md` vs `PRD.md`)
- **Terminology** consistency:
  - “rules” vs “skills” meaning and usage
  - key workshop terms (prompt, command, rule, skill)
- **Language consistency**:
  - README language vs slide language vs PRD language (flag surprising mixes)
- **Structure alignment**:
  - intro → rules → skills → integration → conclusions/Q&A
- **Time budget signals**:
  - `slides.md` frontmatter duration vs PRD’s 35–45 min expectation

## Output format (must follow)

### Findings
For each finding include:
- **Severity**: Blocker / High / Medium / Low
- **What**: the issue
- **Where**: file + section/heading
- **Fix**: concrete change suggestion

### Quick wins
- 3–8 bullets: fastest improvements with highest impact.

### Optional improvements
- Nice-to-have refinements (only if they don’t change requirements).

## Don’t

- Don’t invent new requirements.
- Don’t perform large rewrites; focus on correctness and consistency.

