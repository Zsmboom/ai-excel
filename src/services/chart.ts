import OpenAI from 'openai';
import type { ChartAnalysisResult } from '../types/excel';
import { getEnvVars } from '../config/env';
import * as XLSX from 'xlsx';
import i18next from 'i18next';

const { openaiApiKey } = getEnvVars();

const openai = new OpenAI({
  apiKey: openaiApiKey,
  baseURL: 'https://vip.apiyi.com/v1',
  dangerouslyAllowBrowser: true
});

export async function analyzeExcelForChart(
  file: File,
  chartType: string,
  analysisPrompt?: string
): Promise<ChartAnalysisResult> {
  // 获取当前语言
  const currentLanguage = i18next.language;
  
  try {
    // 读取Excel文件内容
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer);
    
    // 获取第一个工作表
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    
    // 转换为JSON数据
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    // 准备系统提示
    const systemPrompt = `You are a data visualization expert. Analyze the provided Excel data and generate chart suggestions.
    Consider the following factors:
    1. Data types and distribution
    2. Relationships between data
    3. Best visualization methods
    4. Chart titles, axis labels, and legends

    Current chart type: ${chartType}
    ${analysisPrompt ? `User's analysis requirements: ${analysisPrompt}` : ''}
    
    IMPORTANT: Please provide the response in ${currentLanguage === 'zh' ? 'Chinese' : 'English'} language.
    
    Response must be in JSON format with the following structure:
    {
      "chartConfig": {
        "title": "Chart title",
        "xAxis": {
          "title": "X-axis title",
          "data": ["data1", "data2"]
        },
        "yAxis": {
          "title": "Y-axis title",
          "data": [value1, value2]
        },
        "series": [{
          "name": "Series name",
          "data": [value1, value2]
        }]
      },
      "summary": "Brief description of the chart",
      "insights": ["Data insight 1", "Data insight 2"]
    }

    Please ensure:
    1. Generate appropriate data structure based on the selected chart type
    2. For pie charts, use the first column as category names and the last column as values
    3. For scatter plots, use the first two numeric columns as X and Y coordinates
    4. For bar and line charts, use the first column as X-axis categories and other columns as data series
    5. Generated data must be valid numbers (for numeric columns)
    6. If user provided analysis requirements, pay special attention to related data features and trends`;

    // 调用OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { 
          role: 'user', 
          content: `Please analyze the following Excel data and generate ${chartType} chart configuration:\n${JSON.stringify(jsonData, null, 2)}`
        }
      ],
      response_format: { type: 'json_object' }
    });

    const result = JSON.parse(response.choices[0].message.content || '{}') as ChartAnalysisResult;
    
    if (!result.chartConfig) {
      throw new Error('Invalid response format');
    }
    
    return result;
  } catch (error) {
    console.error('Chart analysis error:', error);
    const errorMessage = currentLanguage === 'zh' 
      ? '分析 Excel 数据失败：' 
      : 'Failed to analyze Excel data: ';
    throw new Error(errorMessage + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

// 移除不再需要的generateChartImage函数，因为我们现在使用ECharts直接在前端渲染图表 