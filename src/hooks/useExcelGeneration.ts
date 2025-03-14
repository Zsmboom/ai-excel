import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { analyzeWithOpenAI } from '../services/openai';
import { generateExcel } from '../services/excel';
import type { AnalysisResult, TableConfigOptions } from '../types/excel';

export interface ExcelGenerationResult {
  fileName: string;
  blob: Blob;
  summary: string;
  analysis: AnalysisResult;
}

export interface GenerationProgress {
  status: string;
  progress: number;
}

export function useExcelGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<GenerationProgress>({
    status: '',
    progress: 0
  });
  const { t } = useTranslation();

  const updateProgress = (statusKey: string, progress: number) => {
    setProgress({ 
      status: t(`workspace.form.progressStatus.${statusKey}`), 
      progress 
    });
  };

  const generateFromPrompt = async (
    prompt: string,
    config: TableConfigOptions
  ): Promise<ExcelGenerationResult | null> => {
    setLoading(true);
    setError(null);
    updateProgress('analyzing', 10);

    try {
      // 分析需求
      updateProgress('structuring', 30);
      const analysis = await analyzeWithOpenAI(prompt, config);
      
      // 生成 Excel
      updateProgress('generating', 60);
      const blob = generateExcel(analysis, config);
      
      // 完成
      updateProgress('completed', 100);
      
      return {
        fileName: 'generated_spreadsheet.xlsx',
        blob,
        summary: analysis.summary,
        analysis
      };
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
    generateFromPrompt,
    loading,
    error,
    progress
  };
}