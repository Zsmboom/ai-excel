import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export interface AnalysisResult {
  structure: {
    sheets: Array<{
      name: string;
      headers: string[];
      data: Array<Record<string, any>>;
    }>;
  };
  summary: string;
}

export async function analyzeWithClaude(prompt: string): Promise<AnalysisResult> {
  const systemPrompt = `You are an expert in data analysis and Excel spreadsheet creation. 
    Analyze the user's request and provide a structured response that can be used to generate an Excel file.
    Always generate exactly 5 rows of sample data.
    Response must be in JSON format with the following structure:
    {
      "structure": {
        "sheets": [
          {
            "name": "Sheet name",
            "headers": ["Column names"],
            "data": [{"column": "value"}] // Exactly 5 rows of realistic sample data
          }
        ]
      },
      "summary": "Brief description of the generated spreadsheet"
    }`;

  const message = await anthropic.messages.create({
    model: 'claude-3-opus-20240229',
    max_tokens: 4096,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt }
    ]
  });

  try {
    return JSON.parse(message.content[0].text) as AnalysisResult;
  } catch (error) {
    throw new Error('Failed to parse Claude response');
  }
}