import OpenAI from 'openai';
import type { ChartAnalysisResult } from '../types/excel';
import { getEnvVars } from '../config/env';
import * as XLSX from 'xlsx';

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
    const systemPrompt = `你是一个数据可视化专家。分析提供的Excel数据并生成图表建议。
    请考虑以下因素：
    1. 数据类型和分布
    2. 数据之间的关系
    3. 最佳的可视化方式
    4. 图表的标题、轴标签和图例

    当前选择的图表类型是：${chartType}
    ${analysisPrompt ? `用户的分析需求是：${analysisPrompt}` : ''}
    
    Response must be in JSON format with the following structure:
    {
      "chartConfig": {
        "title": "图表标题",
        "xAxis": {
          "title": "X轴标题",
          "data": ["数据1", "数据2"]
        },
        "yAxis": {
          "title": "Y轴标题",
          "data": [值1, 值2]
        },
        "series": [{
          "name": "系列名称",
          "data": [值1, 值2]
        }]
      },
      "summary": "对图表的简要描述",
      "insights": ["数据洞察1", "数据洞察2"]
    }

    请确保：
    1. 根据选择的图表类型生成合适的数据结构
    2. 对于饼图，使用第一列作为类别名称，最后一列作为数值
    3. 对于散点图，使用前两列数值作为X和Y坐标
    4. 对于柱状图和折线图，使用第一列作为X轴类别，其他列作为数据系列
    5. 生成的数据必须是有效的数值（对于数值列）
    6. 如果用户提供了分析需求，请特别关注相关的数据特征和趋势`;

    // 调用OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { 
          role: 'user', 
          content: `请分析以下Excel数据并生成${chartType}图表的配置：\n${JSON.stringify(jsonData, null, 2)}`
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
    throw new Error('Failed to analyze Excel data: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

// 移除不再需要的generateChartImage函数，因为我们现在使用ECharts直接在前端渲染图表 