import { useState } from 'react';
import { analyzeExcelForChart } from '../services/chart';
import type { ChartAnalysisResult } from '../types/excel';

export interface ChartGenerationResult {
  fileName: string;
  blob: Blob;
  summary: string;
  insights: string[];
  chartConfig: ChartAnalysisResult['chartConfig'];
}

export function useExcelChart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateChart = async (
    file: File,
    chartType: string,
    analysisPrompt?: string
  ): Promise<ChartGenerationResult | null> => {
    setLoading(true);
    setError(null);

    try {
      // 分析Excel数据并生成图表配置
      const analysis = await analyzeExcelForChart(file, chartType, analysisPrompt);
      
      // 创建结果对象
      return {
        fileName: file.name.replace(/\.[^/.]+$/, '') + '_with_chart.xlsx',
        blob: new Blob([await file.arrayBuffer()], { 
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
        }),
        summary: analysis.summary,
        insights: analysis.insights,
        chartConfig: analysis.chartConfig
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生错误');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    generateChart,
    loading,
    error
  };
} 