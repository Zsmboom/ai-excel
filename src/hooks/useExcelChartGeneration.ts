import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { analyzeExcelForChart } from '../services/chart';
import type { ChartConfigOptions, ChartGenerationResult } from '../types/excel';

export interface GenerationProgress {
  status: string;
  progress: number;
}

export function useExcelChartGeneration() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<GenerationProgress>({
    status: '',
    progress: 0
  });
  const { t } = useTranslation();

  const updateProgress = (statusKey: string, progress: number) => {
    setProgress({ 
      status: t(`aiExcelChart.form.progressStatus.${statusKey}`), 
      progress 
    });
  };

  const generateFromExcel = async (
    excelData: File,
    chartType: string,
    description: string,
    config: ChartConfigOptions
  ): Promise<ChartGenerationResult | null> => {
    setLoading(true);
    setError(null);
    
    try {
      // 开始处理 Excel 文件
      updateProgress('processing', 20);
      
      // 分析数据
      updateProgress('analyzing', 40);
      
      // 生成图表
      updateProgress('generating', 70);
      const result = await analyzeExcelForChart(excelData, chartType, description);
      
      // 完成
      updateProgress('completed', 100);
      
      return {
        fileName: excelData.name,
        blob: new Blob([await excelData.arrayBuffer()], { 
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
        }),
        summary: result.summary,
        insights: result.insights,
        chartConfig: result.chartConfig
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生错误');
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
    generateFromExcel,
    loading,
    error,
    progress
  };
} 