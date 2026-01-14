---
title: Cursor Slash Commands
---

# Cursor Slash Commands (Project)

This repository includes a curated set of **Cursor chat slash commands** to accelerate building and maintaining the Slidev workshop deck.

## How to use

1. Open Cursor chat.
2. Type `/` and pick a command from the list.
3. Provide the requested inputs (title, placement, time box, etc.).
4. Apply the suggested changes to `slides.md` (and related files) as needed.

Notes:
- Command prompts are written in **English**.
- Output should usually match the language of the deck (the PRD is currently Ukrainian).

## Recommended workflow

1. `/outline` → create a timed structure for the whole deck.
2. `/draft-slide` → draft missing slides one by one (or in small sequences).
3. `/add-examples` + `/add-exercise` → add “show, don’t tell” content.
4. `/review-slides` → check flow, clarity, timing, and interactivity.
5. `/speaker-notes` → generate talk track + timing per slide.
6. `/final-polish` → tighten and remove duplication.
7. `/consistency-check` → verify links, terminology, and repo consistency.

## Command reference

### `/outline`
Use when you need to (re)generate the full deck structure based on `docs/PRD.md`.

Suggested inputs:
- Target duration (default from `slides.md` frontmatter)
- Output language (default from PRD)

### `/draft-slide`
Use to create one slide (or 2–3 slides) with a clear purpose and speaker notes.

Suggested inputs:
- Slide title, goal, key bullets
- Placement (after a slide title / section)

### `/add-exercise`
Use to create a short practical activity slide (optionally with a debrief slide).

Suggested inputs:
- Topic (rule/skill), mode (live vs take-home), time box

### `/add-examples`
Use to add Good vs Bad examples (or Bad → Better → Best) for a specific concept.

Suggested inputs:
- Target concept, scenario context, number of examples

### `/review-slides`
Use after you’ve drafted a meaningful chunk of the deck to get a prioritized fix list.

### `/speaker-notes`
Use to add or improve presenter notes for a slide range.

Suggested inputs:
- Slide range (titles/section), timing granularity

### `/consistency-check`
Use to verify path correctness (e.g., `docs/PRD.md`), terminology, and structure alignment.

### `/final-polish`
Use before the final rehearsal to tighten language and validate the time budget.

