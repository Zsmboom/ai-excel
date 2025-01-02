// Environment variable validation and typing
interface Env {
  openaiApiKey: string;
}

export function getEnvVars(): Env {
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  if (!openaiApiKey) {
    console.error('环境变量错误：VITE_OPENAI_API_KEY 未定义');
    console.log('请确保：');
    console.log('1. 本地开发：在项目根目录创建 .env 文件并设置 VITE_OPENAI_API_KEY');
    console.log('2. 生产环境：在 Vercel 设置中添加环境变量');
    throw new Error('VITE_OPENAI_API_KEY is not defined');
  }

  // 验证 API Key 格式
  if (!openaiApiKey.startsWith('sk-')) {
    console.error('环境变量错误：VITE_OPENAI_API_KEY 格式不正确');
    console.log('API Key 应该以 sk- 开头');
    throw new Error('Invalid OPENAI_API_KEY format');
  }

  return {
    openaiApiKey,
  };
}