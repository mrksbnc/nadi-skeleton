# Skills

Reusable, on-demand capabilities for AI agents working in this repo. Each skill is a
folder containing a `SKILL.md` with instructions, plus any supporting scripts or
reference files the skill needs.

## Layout

```
.claude/skills/
  README.md              ← this file
  <skill-name>/
    <SKILL or any other filename>.md             ← the skill's instructions (required)
    ...                  ← optional scripts, templates, references
```

## Adding a skill

1. Create a folder named in kebab-case (e.g. `.claude/skills/balance-tuning/`).
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
