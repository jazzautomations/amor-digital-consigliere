
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Adicionando verificação de variáveis de ambiente
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Variáveis de ambiente do Supabase não estão configuradas corretamente:");
  console.error(`VITE_SUPABASE_URL: ${supabaseUrl ? "Definido" : "Não definido"}`);
  console.error(`VITE_SUPABASE_ANON_KEY: ${supabaseAnonKey ? "Definido" : "Não definido"}`);
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)
