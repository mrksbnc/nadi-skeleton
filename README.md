# Repo Nadi

A batteries-included web project template built on Vite.

This template is intentionally framework-agnostic. The actual UI framework is chosen when the project is initialized.

Available skills:

- [React](./skills/react/SKILL.md)
- [Vue](./skills/vue/SKILL.md)

## Tech stack

- **Language:** TypeScript (strict, ESM)
- **Build:** Vite
- **Package manager:** pnpm
- **Tests:** Vitest + jsdom
- **Lint/format:** oxlint + ESLint + oxfmt

## Getting started

```sh
pnpm install
pnpm dev
```

## Commands

```sh
pnpm dev        # dev server with HMR
pnpm build      # production build
pnpm preview    # preview production build
pnpm test:unit  # run Vitest
pnpm type-check # TypeScript checking only
pnpm lint       # oxlint + eslint
pnpm lint:fix   # oxlint + eslint with --fix
pnpm format     # oxfmt
```

## Conventions

See [AGENTS.md](./AGENTS.md) for the full agent-facing conventions.
