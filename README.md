# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

Воркшоп про правила та навички роботи з AI-асистентами.

## Documentation

- [PRD (Product Requirements Document)](./docs/PRD.md) - detailed document with workshop requirements
- [Cursor IDE Rules](./.cursor/rules/) - Cursor IDE rules for working with the project
  - [Context & General Rules](./.cursor/rules/context.md)
  - [Slidev Rules](./.cursor/rules/slidev.md)
  - [Markdown Rules](./.cursor/rules/markdown.md)
  - [TypeScript Rules](./.cursor/rules/typescript.md)
  - [Documentation Rules](./.cursor/rules/documentation.md)
  - [Security Rules](./.cursor/rules/security.md)
  - [AI Assistant Rules](./.cursor/rules/ai-assistant.md)
  - [Project-Specific Rules](./.cursor/rules/project-specific.md)
  - [Git Rules](./.cursor/rules/git.md)
- [Cursor Slash Commands](./.cursor/commands/) - reusable prompts (type `/` in Cursor chat)
  - [`/outline`](./.cursor/commands/outline.md)
  - [`/draft-slide`](./.cursor/commands/draft-slide.md)
  - [`/add-exercise`](./.cursor/commands/add-exercise.md)
  - [`/add-examples`](./.cursor/commands/add-examples.md)
  - [`/review-slides`](./.cursor/commands/review-slides.md)
  - [`/speaker-notes`](./.cursor/commands/speaker-notes.md)
  - [`/consistency-check`](./.cursor/commands/consistency-check.md)
  - [`/final-polish`](./.cursor/commands/final-polish.md)
- [Cursor Agent Skills](./.cursor/skills/) - portable, version-controlled skills for Agent (Nightly only)
  - [`slide-image-generator`](./.cursor/skills/slide-image-generator/SKILL.md)
  - OpenAI env template: [`docs/openai-env.example`](./docs/openai-env.example)
- [Commands usage guide](./docs/commands.md)

## Запуск

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).
