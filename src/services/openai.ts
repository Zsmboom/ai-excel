import OpenAI from 'openai';
import type { AnalysisResult, FunctionGenerationResult, TableConfigOptions, FunctionType } from '../types/excel';
import { getEnvVars } from '../config/env';

const { openaiApiKey } = getEnvVars();

const openai = new OpenAI({
  apiKey: openaiApiKey,
  baseURL: 'https://vip.apiyi.com/v1',
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

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'json_object' }
    });

    const result = JSON.parse(response.choices[0].message.content || '{}') as AnalysisResult;
    if (!result.data || !Array.isArray(result.data)) {
      throw new Error('Invalid response format');
    }
    return result;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate Excel data: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

export async function analyzeExcelFunction(
  prompt: string,
  type: FunctionType
): Promise<FunctionGenerationResult> {
  const systemPrompt = `You are an expert in Excel formulas and VBA programming.
    Analyze the user's request and provide a solution in the requested format.
    Response must be in JSON format with the following structure:
    {
      "formula": "Excel formula or VBA code",
      "explanation": "Clear explanation of how the solution works",
      "steps": ["Step-by-step breakdown of the solution"]
    }`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Generate ${type === 'formula' ? 'an Excel formula' : 'VBA code'} for: ${prompt}` }
      ],
      response_format: { type: 'json_object' }
    });

    const result = JSON.parse(response.choices[0].message.content || '{}') as FunctionGenerationResult;
    return result;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate Excel function: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}