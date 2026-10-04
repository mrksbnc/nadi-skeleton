# AGENTS.md

Guidance for AI coding agents working in this repository. This is a **template repo for
modern web projects**. Humans should read the [README](./README.md) first.

> **Doc roles:** This file (`AGENTS.md`) governs _how you work in the codebase_. Treat it
> as the source of truth for conventions, tooling, and project structure.

## Project

A beginner-friendly Vite and Supabase starter repository. It includes separate React and
Vue workspaces under `templates/`; choose one for an app rather than combining both
frameworks in a single application. The Supabase schema and design tokens are shared.

## Tech stack

- **Language:** TypeScript (strict, ESM — `"type": "module"`)
- **Build:** Vite
- **Frontend:** React 19 or Vue 3, each in its own workspace
- **Backend:** Supabase (Postgres, Auth and Data API)
- **Routing/state:** keep starter examples small; add framework-native solutions when product flows need them
- **Styling:** shared, token-based CSS; keep the starter responsive and accessible
- **Package manager:** **pnpm** — use `pnpm`, never npm/yarn
- **Tests:** Vitest + jsdom
- **Lint/format:** oxlint + ESLint; oxfmt (**no semicolons, single quotes, 2-space indent**)
- **Type-check:** React `tsc`, Vue `vue-tsc`, and Playwright test `tsc`, through `pnpm type-check`

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
pnpm dev:react          # React starter (run manually — long-running)
pnpm dev:vue            # Vue starter (run manually — long-running)
pnpm build              # type-check and production-build both starters
pnpm preview:react      # preview React production build
pnpm preview:vue        # preview Vue production build
pnpm test:unit          # run both framework unit-test suites
pnpm test:e2e           # browser smoke/responsive checks for both starters
pnpm type-check         # type-check app workspaces and browser tests
pnpm lint               # oxlint + eslint
pnpm lint:fix           # oxlint + eslint (with --fix)
pnpm format             # oxfmt on the repository
pnpm format:check       # check formatting without changing files
pnpm supabase:start     # start the local Supabase stack (Docker required)
pnpm supabase:reset     # rebuild local database from migrations
pnpm supabase:test      # run local pgTAP/RLS tests
```

> Long-running commands (`pnpm dev:react`, `pnpm dev:vue`) should be run manually by the
> user, not in blocking automation. Use `vitest --run` for single runs.

## Repo map

- `templates/react/` — React starter app
- `templates/vue/` — Vue starter app
- `templates/shared/` — shared design tokens/styles
- `supabase/` — local config, migrations, types and RLS tests
- `public/` — static assets served as-is
- `skills/` — on-demand AI agent capabilities (see [skills/README.md](./skills/README.md))

## Ground rules for agents

- Keep `lib/` modules pure — no framework hooks or DOM side effects in utility modules
  unless the helper's sole purpose is DOM-related.
- Add/adjust tests when changing logic. Prefer small, focused unit tests for utilities.
- Follow the formatter/linter — don't hand-format against oxfmt.
- Before adding a dependency, check whether the template already provides a suitable
  alternative.
- When changing a framework workspace, read its matching skill from `skills/` and keep
  workspace-specific dependencies/configuration in that workspace where possible.
- Never put Supabase secret/service-role keys in frontend code or `VITE_` variables. Use
  publishable keys in the browser and protect exposed data with grants and RLS.
