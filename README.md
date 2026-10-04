# Repo Nadi

A beginner-friendly starter for building polished web apps with React or Vue, Supabase,
and Vercel. The React and Vue examples are separate workspaces; start with one and remove
the other when turning this template into a single product.

## Start here

### 1. Install the tools

Install [Node.js 22.12 or newer](https://nodejs.org/) and [pnpm 12.9.1 or newer](https://pnpm.io/installation).
Docker is only needed to run Supabase locally.

```sh
pnpm install
```

### 2. Choose a frontend

Run one starter at a time:

```sh
pnpm dev:react # React, at http://localhost:5173
pnpm dev:vue   # Vue, at http://localhost:5173
```

Each starter includes the same responsive visual foundation and an optional Supabase
connection. See [templates/react](./templates/react) and [templates/vue](./templates/vue).

### 3. Connect Supabase (optional)

Create a Supabase project, copy that starter's `.env.example` to `.env.local`, and fill in
the Project URL and **publishable** key from the Supabase Connect panel. Do not put a
secret/service-role key in a browser app or any variable beginning with `VITE_`.

For example, for React:

```sh
cp templates/react/.env.example templates/react/.env.local
```

For local database work, install Docker Desktop, then use:

```sh
pnpm supabase:start
pnpm supabase:reset
pnpm supabase:test
```

See [the Supabase setup guide](./supabase/README.md) for migrations, local development,
RLS tests, and type generation.

## Check your work

```sh
pnpm type-check
pnpm lint
pnpm format:check
pnpm test:unit
pnpm test:e2e
pnpm build
```

The browser tests run both starters on desktop and mobile. CI runs the same checks on
pull requests.

## Deploy to Vercel

Create a Vercel project for the repository and set its **Root Directory** to either
`templates/react` or `templates/vue`. Enable **Include source files outside of the Root
Directory**, since the shared styles and Supabase schema live at the repository root. Add
`VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in Vercel's Environment Variables
for the environments you use. See [deployment details](./docs/deploy-to-vercel.md).

## Work with an AI coding assistant

Describe what the person using the app should be able to do, not just a technical change.
For example:

> I want signed-in users to save private notes. Ask any questions you need, explain your
> plan in plain language, then implement it. Keep each person's notes private with RLS.
> Run the checks and tell me what changed and what I need to do next. Do not deploy or
> change a hosted database without asking me first.

Never paste passwords, API secret keys, service-role keys, or real customer data into an
AI chat or a committed file. An AI can change code and local migrations; review its summary
and tests before deploying those changes.

## Agent skills

Skills are maintained under [`skills/`](./skills/README.md). The [frontend-design skill](./skills/frontend-design/SKILL.md)
helps create distinctive interfaces; Vercel's [web-design-guidelines skill](./skills/web-design-guidelines/SKILL.md)
reviews accessibility and interaction quality. The [web design reviewer](./skills/web-design-reviewer/SKILL.md)
describes visual browser review.

See [AGENTS.md](./AGENTS.md) for coding rules and repository structure.
