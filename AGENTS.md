# AGENTS.md

Guidance for AI coding agents working in this repository. This is a **template repo for
modern web projects**. Humans should read the [README](./README.md) first.

> **Doc roles:** This file (`AGENTS.md`) governs _how you work in the codebase_. Treat it
> as the source of truth for conventions, tooling, and project structure.

## Project

A batteries-included web project template built on Vite. It is intended as a starting
point for client-side web applications and small SPAs. The actual UI framework is chosen
when the project is initialized — add React, Vue, Svelte, or another framework only when
that work starts.

## Tech stack

- **Language:** TypeScript (strict, ESM — `"type": "module"`)
- **Build:** Vite
- **Framework:** chosen per project. Skills are provided for [React](./skills/react/SKILL.md) and [Vue](./skills/vue/SKILL.md); add Svelte or another framework only when that work starts.
- **Routing:** add a router when the framework is chosen
- **State:** add a state solution when the framework is chosen
- **Styling:** plain CSS by default; install Tailwind / styled-components / etc. only when required
- **Package manager:** **pnpm** — use `pnpm`, never npm/yarn
- **Tests:** Vitest + jsdom
- **Lint/format:** oxlint + ESLint; oxfmt (**no semicolons, single quotes, 2-space indent**)
- **Type-check:** `tsc --noEmit`

## Conventions

- **Path alias:** `~` → `src/`
- **Components/modules:** co-locate styles and tests next to the code when possible.
- **Barrels:** each module exposes its public surface via `index.ts`.
- **No `enum` — use `as const` object + union type:** for any discrete set of named
  states, don't use TypeScript's `enum` keyword. Define a `const` object with **string**
  values and derive the type from it:
  ```ts
  const Status = {
    Idle: 'idle',
    Loading: 'loading',
    Error: 'error',
  } as const
  type Status = (typeof Status)[keyof typeof Status]
  ```
- Match the code style (formatter enforces no semicolons, single quotes, 2-space indent).
- **Explicit types:** annotate return types on all exported/public functions and methods
  (module-private helpers may rely on inference if unambiguous). Avoid `any` — prefer
  `unknown` with narrowing, or a precise union/generic.
- **Variable typing:** give explicit type annotations to variable declarations whenever
  the inferred type is wider or less precise than intended (union/enum-like values, `[]`,
  `{}`, `null` placeholders, function parameters, destructured values from untyped
  sources). Plain literal `const`/`let` bindings where inference is exact (`const max = 10`)
  don't need one.
- Prefer `function` declarations for named utilities; use arrow functions for callbacks,
  closures, and inline arguments.
- Keep modules focused and composable.

## Commands

```sh
pnpm install            # install dependencies
pnpm dev                # dev server with HMR (run manually — long-running)
pnpm build              # type-check + production build
pnpm preview            # preview production build
pnpm test:unit          # run Vitest (use `vitest --run` for single-shot)
pnpm type-check         # TypeScript checking only
pnpm lint               # oxlint + eslint
pnpm lint:fix           # oxlint + eslint (with --fix)
pnpm format             # oxfmt on src/
```

> Long-running commands (`pnpm dev`, Vitest watch) should be run manually by the user, not
> in blocking automation. Use `vitest --run` for single runs.

## Repo map

- `src/` — application source
  - `components/` — reusable UI components (added with the chosen framework)
  - `hooks/` — custom framework hooks (added with the chosen framework)
  - `lib/` — pure helpers and utilities
  - `App.*` — root component/module
  - `main.*` — Vite entry point
- `public/` — static assets served as-is
- `index.html` — Vite HTML entry
- `skills/` — on-demand AI agent capabilities (see [skills/README.md](./skills/README.md))

## Ground rules for agents

- Keep `src/lib/` pure — no framework hooks or DOM side effects in utility modules unless
  the helper's sole purpose is DOM-related.
- Add/adjust tests when changing logic. Prefer small, focused unit tests for utilities.
- Follow the formatter/linter — don't hand-format against oxfmt.
- Before adding a dependency, check whether the template already provides a suitable
  alternative.
- When adding a framework (React, Vue, etc.), load the matching skill from `skills/` and
  update `AGENTS.md` and tooling configs only as needed.
