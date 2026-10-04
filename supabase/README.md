# Supabase setup

This repository keeps database structure in `supabase/migrations/`. The starter migration
creates a user-owned `tasks` table and protects every operation with row-level security
(RLS). It grants no table access to `anon`; signed-in users can access only their own rows.

## Run Supabase locally

1. Install and start Docker Desktop.
2. From the repository root, run `pnpm supabase:start` and wait for the local stack.
3. Run `pnpm supabase:reset` to apply migrations and seed data.
4. Run `pnpm supabase:test` to test table grants and RLS policies.
5. Copy the selected app's `.env.example` to `.env.local`. Use the local API URL and
   publishable/anon key shown by `pnpm supabase:status`.

The Supabase CLI is pinned in the root `package.json`. Use `pnpm exec supabase --help` to
discover available commands. Local development requires Docker; CI does not start a local
database API stack. It starts only Postgres to run the migration and RLS tests.

## Connect a hosted project

Create a project in the Supabase Dashboard. Use the Project URL and **publishable key** in
the selected app's environment file. Never put a secret or service-role key in browser
code or a `VITE_` variable. Set those values separately in each Vercel project's
Environment Variables.

New tables are not automatically exposed to the Data API. The migration explicitly grants
only the `authenticated` role access to `public.tasks`; confirm the `public` schema is
exposed in the hosted project's Data API settings. RLS still limits each operation to rows
owned by the signed-in user.

## Change the schema safely

1. Create migrations with `pnpm exec supabase migration new <descriptive_name>`; do not
   invent migration timestamps.
2. Put schema, grants, RLS policies, and indexes in the migration.
3. Add or update a pgTAP test under `supabase/tests/` for every exposed table.
4. Run `pnpm supabase:reset` and `pnpm supabase:test` locally.
5. Generate client types with `pnpm supabase:types` after the local schema is current.
6. Review migrations before linking or pushing to a hosted project.

Do not use user-editable metadata for authorization decisions. Avoid `SECURITY DEFINER`
functions unless there is a reviewed need, and never expose service-role credentials.
