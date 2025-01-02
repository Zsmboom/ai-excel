// Environment variable validation and typing
interface Env {
  openaiApiKey: string;
}

export function getEnvVars(): Env {
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!openaiApiKey) {
    throw new Error('VITE_OPENAI_API_KEY is not defined');
  }

  return {
    openaiApiKey,
  };
}