import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://chtnkmrdoanrsnepkoxr.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNodG5rbXJkb2FucnNuZXBrb3hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMDg3MzYsImV4cCI6MjEwMTU4NDczNn0.2EUa_yX9AqWbtCaZH3GfHiXZtts_U760v6lM0AcegiU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)