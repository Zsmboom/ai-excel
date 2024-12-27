import { useState } from 'react';
import { analyzeExcelFunction } from '../services/openai';
import type { FunctionGenerationResult, FunctionType } from '../types/excel';

export function useExcelFunctions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<FunctionGenerationResult | null>(null);
  const [functionType, setFunctionType] = useState<FunctionType>('formula');

  const generateFunction = async (prompt: string) => {
    setLoading(true);
    setError(null);

    try {
      const result = await analyzeExcelFunction(prompt, functionType);
      setResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    generateFunction,
    loading,
    error,
    result,
    functionType,
    setFunctionType
  };
}