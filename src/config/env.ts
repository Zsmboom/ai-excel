// Environment variable validation and typing
interface Env {
  supabaseUrl: string;
  supabaseAnonKey: string;
  anthropicApiKey: string;
}

export function getEnvVars(): Env {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const anthropicApiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (!supabaseUrl) {
    throw new Error('VITE_SUPABASE_URL is not defined');
  }
  if (!supabaseAnonKey) {
    throw new Error('VITE_SUPABASE_ANON_KEY is not defined');
  }
  if (!anthropicApiKey) {
    throw new Error('VITE_ANTHROPIC_API_KEY is not defined');
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
    anthropicApiKey,
  };
}