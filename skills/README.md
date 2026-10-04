# Skills

Reusable, on-demand capabilities for AI agents working in this repo. Each skill is a
folder containing a `SKILL.md` with instructions, plus any supporting scripts or
reference files the skill needs.

## Layout

```
skills/
  README.md
  <skill-name>/
    SKILL.md              # frontmatter + instructions
    references/           # optional supporting material
```

Agents are directed to this repository-local skill library from `AGENTS.md`. Skill
discovery is client-specific; if your agent does not load this directory automatically,
open the relevant `SKILL.md` or install it into that agent's documented skill location.

## Available skills

- [React](./react/SKILL.md) — React components, hooks and tests
- [Vue](./vue/SKILL.md) — Vue 3 Composition API and SFCs
- [Supabase](./supabase/SKILL.md) — Supabase client, database and security workflows
- [Frontend design](./frontend-design/SKILL.md) — distinctive visual direction and UI craft
- [Vercel web design guidelines](./web-design-guidelines/SKILL.md) — accessibility, UX and interface review
- [Web design reviewer](./web-design-reviewer/SKILL.md) — screenshot-based responsive review

## Adding a skill

1. Create a folder named in kebab-case (e.g. `skills/balance-tuning/`).
2. Add a `SKILL.md` with YAML frontmatter and a body:

```markdown
---
name: balance-tuning
description: When and how to adjust game balance constants and validate them against the GDD.
---

# Balance Tuning

Step-by-step instructions the agent should follow when asked to tune balance...
```

3. Keep skills focused and single-purpose. Reference project conventions from
   [AGENTS.md](../../AGENTS.md) rather than duplicating them.
