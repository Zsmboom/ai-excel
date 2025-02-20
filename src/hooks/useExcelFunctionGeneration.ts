import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { analyzeExcelFunction } from '../services/openai';
import type { FunctionGenerationResult, FunctionType } from '../types/excel';

export interface GenerationProgress {
  status: string;
  progress: number;
}

export function useExcelFunctionGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<GenerationProgress>({
    status: '',
    progress: 0
  });
  const { t } = useTranslation();

  const updateProgress = (statusKey: string, progress: number) => {
    setProgress({ 
      status: t(`excelFunctions.form.progressStatus.${statusKey}`), 
      progress 
    });
  };

  const generateFunction = async (
    prompt: string,
    type: FunctionType
  ): Promise<FunctionGenerationResult | null> => {
    setLoading(true);
    setError(null);
    updateProgress('analyzing', 10);

    try {
      // 分析需求
      updateProgress('processing', 30);
      
      // 生成函数或宏
      updateProgress('generating', 60);
      const result = await analyzeExcelFunction(prompt, type);
      
      // 完成
      updateProgress('completed', 100);
      
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      updateProgress('failed', 0);
      return null;
    } finally {
      setLoading(false);
      // 重置进度（延迟一下，让用户看到完成状态）
      setTimeout(() => {
        setProgress({ status: '', progress: 0 });
      }, 2000);
    }
  };

  return {
    generateFunction,
    loading,
    error,
    progress
  };
} 