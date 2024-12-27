import { useState } from 'react';
import { analyzeWithOpenAI } from '../services/openai';
import { generateExcel } from '../services/excel';
import type { AnalysisResult, TableConfigOptions } from '../types/excel';

export interface ExcelGenerationResult {
  fileName: string;
  blob: Blob;
  summary: string;
  analysis: AnalysisResult;
}

export function useExcelGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateFromPrompt = async (
    prompt: string,
    config: TableConfigOptions
  ): Promise<ExcelGenerationResult | null> => {
    setLoading(true);
    setError(null);

    try {
      const analysis = await analyzeWithOpenAI(prompt, config);
      const blob = generateExcel(analysis, config);
      
      return {
        fileName: 'generated_spreadsheet.xlsx',
        blob,
        summary: analysis.summary,
        analysis
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    generateFromPrompt,
    loading,
    error
  };
}