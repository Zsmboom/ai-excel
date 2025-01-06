import OpenAI from 'openai';
import type { AnalysisResult, TableConfigOptions } from '../types/excel';
import { getEnvVars } from '../config/env';

const { openaiApiKey } = getEnvVars();

const openai = new OpenAI({
  apiKey: openaiApiKey,
  baseURL: 'https://vip.apiyi.com/v1',
  dangerouslyAllowBrowser: true
});

export async function analyzeImageWithClaude(
  imageBase64: string,
  description: string,
  config: TableConfigOptions
): Promise<AnalysisResult> {
  const systemPrompt = `You are an expert in data analysis and Excel spreadsheet creation. 
    Analyze the image that contains tabular data and provide a structured response that can be used to generate an Excel file.
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
      model: 'claude-3-haiku-20240307',
      messages: [
        { role: 'system', content: systemPrompt },
        { 
          role: 'user', 
          content: [
            {
              type: 'text',
              text: `Please analyze this image and extract the tabular data. ${description ? `Additional context: ${description}` : ''}`
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`
              }
            }
          ]
        }
      ],
      response_format: { type: 'json_object' }
    });

    const result = JSON.parse(response.choices[0].message.content || '{}') as AnalysisResult;
    if (!result.data || !Array.isArray(result.data)) {
      throw new Error('Invalid response format');
    }
    return result;
  } catch (error) {
    console.error('Claude API error:', error);
    throw new Error('Failed to analyze image: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}