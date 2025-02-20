import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { analyzeImageWithClaude } from '../services/claude';
import { generateExcel } from '../services/excel';
import type { TableConfigOptions } from '../types/excel';

export interface GenerationProgress {
  status: string;
  progress: number;
}

export interface PicToExcelResult {
  fileName: string;
  blob: Blob;
  data: any[];
  summary: string;
}

export function usePicToExcelGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<GenerationProgress>({
    status: '',
    progress: 0
  });
  const { t } = useTranslation();

  const updateProgress = (statusKey: string, progress: number) => {
    setProgress({ 
      status: t(`picToExcel.form.progressStatus.${statusKey}`), 
      progress 
    });
  };

  const generateFromImage = async (
    imageBase64: string,
    description: string,
    config: TableConfigOptions
  ): Promise<PicToExcelResult | null> => {
    setLoading(true);
    setError(null);
    
    try {
      // 开始处理图片
      updateProgress('processing', 20);
      
      // 使用 Claude 分析图片
      updateProgress('analyzing', 40);
      const analysis = await analyzeImageWithClaude(imageBase64, description, config);
      
      // 生成 Excel
      updateProgress('generating', 70);
      const blob = generateExcel(analysis, config);
      
      // 完成
      updateProgress('completed', 100);
      
      return {
        fileName: 'image_to_excel.xlsx',
        blob,
        data: analysis.data,
        summary: analysis.summary
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
    generateFromImage,
    loading,
    error,
    progress
  };
} 