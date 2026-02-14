import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://pwqbmnwcocrywdoirwqm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cWJtbndjb2NyeXdkb2lyd3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NTM1NjYsImV4cCI6MjA4NjUyOTU2Nn0.0yMhoPrbKdVEtd5ur5c9fnYbBXvzWWEUZjJ1WVQoE08"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
