export interface ExcelData {
  headers: string[];
  rows: Record<string, any>[];
  name: string;
}

export interface AnalysisResult {
  data: ExcelData[];
  summary: string;
}

export interface FunctionGenerationResult {
  formula: string;
  explanation: string;
  steps: string[];
  vbaCode?: string;
}

export interface TableConfigOptions {
  enableColumnSums: boolean;
  enablePivotTables: boolean;
  enableSorting: boolean;
}

export type FunctionType = 'formula' | 'vba';

export interface ExcelTemplate {
  id: string;
  name: string;
  description: string;
  prompt: string;
}