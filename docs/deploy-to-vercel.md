# Deploy a starter to Vercel

Deploy one frontend per Vercel project:

1. Import this repository into Vercel.
2. Set **Root Directory** to `templates/react` or `templates/vue`.
3. Enable **Include source files outside of the Root Directory**. The starter imports
   shared styles from `templates/shared/` and Supabase types from `supabase/`.
4. Use the default Vite build settings from that starter's `vercel.json`:
   - Build command: `pnpm build`
   - Output directory: `dist`
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` to the Vercel environment
   scopes where the app should use Supabase.
6. Deploy a preview first and verify the page and Supabase access before promoting it.

Vite exposes every `VITE_` variable to the browser. Only use the Supabase publishable key
there—never add a secret/service-role key. Database migrations are not pushed by a Vercel
frontend build; review and deploy them separately using the Supabase CLI.
