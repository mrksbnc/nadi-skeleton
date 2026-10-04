import { createClient } from '@supabase/supabase-js'
import type { Database } from '../../../../supabase/database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? ''
const hasConfiguredUrl = supabaseUrl.length > 0 && !supabaseUrl.includes('your-project-ref')
const hasConfiguredKey =
  publishableKey.length > 0 && !publishableKey.includes('your-publishable-key')

export const supabase =
  hasConfiguredUrl && hasConfiguredKey ? createClient<Database>(supabaseUrl, publishableKey) : null
