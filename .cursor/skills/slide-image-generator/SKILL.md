---
description: Generate and manage Slidev images (stored in public/) using the OpenAI Image API, and embed them into slides.md.
name: slide-image-generator
---

# Slide Image Generator

This skill helps maintain **visual assets** for the Slidev workshop deck:

- Generate an image via OpenAI API.
- Save it under `public/images/`.
- Embed it into `slides.md` with good alt text and short speaker notes.

## When to use

- When you need a diagram/illustration for a slide and want it version-controlled in the repo.
- When you want consistent asset naming, locations, and slide embedding conventions.

## Important notes

- **Agent Skills are only available in Cursor Nightly.** Enable Nightly via Cursor Settings (Cmd+Shift+J) → Beta → Update channel = Nightly. Restart Cursor if needed. (See Cursor docs.)
- Never commit secrets. Use `OPENAI_API_KEY` via `.env.local` (recommended) or your shell env. See `docs/openai-env.example` for the template.

## Inputs to ask the user for

- **Image purpose**: what concept should it illustrate?
- **Prompt**: the text prompt for the image model.
- **Output filename**: e.g. `agent-skills.png` (store in `public/images/`).
- **Slide placement**: where to add/update the slide in `slides.md` (by slide title).

## Instructions

1. Confirm the output path:
   - Always write images to `public/images/<filename>`.
2. Generate the image using the repo script:
   - Run: `pnpm gen:image -- --prompt "<PROMPT>" --out "public/images/<filename>"`
   - If the user wants, adjust `--size` (default `1024x1024`) and `--quality`.
3. Update `slides.md` to embed the image:
   - Use Markdown image syntax: `![meaningful alt text](/images/<filename>)`
   - Add a short speaker notes block (`<!-- ... -->`) explaining the image in 2–5 sentences.
4. Keep prompts practical:
   - Ask for **no text** in the image unless the user explicitly wants text rendering.
   - Prefer “simple, clean, high-contrast, slide-friendly” compositions.

## Output format

Return:

1. The exact command to run (`pnpm gen:image ...`)
2. The `slides.md` snippet to paste (including `---` if adding a slide)
3. A short checklist (file exists, renders, time impact)

