import OpenAI from 'openai';
import type { AnalysisResult, FunctionGenerationResult, TableConfigOptions, FunctionType } from '../types/excel';

const openai = new OpenAI({
  apiKey: 'sk-RNZysH9hpYgLFcpgQkrRFvi2xj8tnQ0ihE1ta3a51zYaFj9x',
  baseURL: 'https://ai.zhaoxincheng.com/v1',
  dangerouslyAllowBrowser: true
});

export async function analyzeWithOpenAI(
  prompt: string, 
  config: TableConfigOptions
): Promise<AnalysisResult> {
  const systemPrompt = `You are an expert in data analysis and Excel spreadsheet creation. 
    Analyze the user's request and provide a structured response that can be used to generate an Excel file.
    Always generate exactly 5 rows of sample data.
    Response must be in JSON format with the following structure:
    {
      "data": [
        {
          "name": "Sheet name",
          "headers": ["Column names"],
          "rows": [{"column": "value"}] // Exactly 5 rows of realistic sample data
        }
      ],
      "summary": "Brief description of the generated spreadsheet"
    }`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt }
    ],
    response_format: { type: 'json_object' }
  });

  try {
    return JSON.parse(response.choices[0].message.content || '{}') as AnalysisResult;
  } catch (error) {
    throw new Error('Failed to parse OpenAI response');
  }
}

export async function analyzeExcelFunction(
  prompt: string,
  type: FunctionType
): Promise<FunctionGenerationResult> {
  // ... rest of the code remains the same ...
}