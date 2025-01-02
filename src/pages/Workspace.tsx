import React, { useState } from 'react';
import { FileSpreadsheet, Send, Download } from 'lucide-react';
import { useExcelGeneration } from '../hooks/useExcelGeneration';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ExcelPreview } from '../components/excel/ExcelPreview';
import { TableConfig } from '../components/excel/TableConfig';
import { UsageInfo } from '../components/excel/UsageInfo';
import { TemplateGallery } from '../components/excel/TemplateGallery';
import type { AnalysisResult, TableConfigOptions, ExcelTemplate } from '../types/excel';

export default function Workspace() {
  const [prompt, setPrompt] = useState('');
  const [tableConfig, setTableConfig] = useState<TableConfigOptions>({
    enableColumnSums: false,
    enablePivotTables: false,
    enableSorting: false,
  });
  
  const { generateFromPrompt, loading, error } = useExcelGeneration();
  const [result, setResult] = useState<{
    fileName: string;
    blob: Blob;
    summary: string;
    analysis: AnalysisResult;
  } | null>(null);

  const handleTemplateSelect = (template: ExcelTemplate) => {
    setPrompt(template.prompt);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const generationResult = await generateFromPrompt(prompt, tableConfig);
      console.log('API Response:', generationResult);
      if (generationResult) {
        setResult(generationResult);
      }
    } catch (error) {
      console.error('Error generating Excel:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      if (errorMessage.includes('quota')) {
        alert('API 配额已用完，请稍后再试或联系管理员更新配额。');
      } else {
        alert('生成 Excel 文件时出错: ' + errorMessage);
      }
    }
  };

  const handleDownload = () => {
    if (!result) return;
    
    const url = URL.createObjectURL(result.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = result.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">AI Excel Generator</h1>
            <p className="text-gray-600 mt-2">
              Choose a template or describe your Excel needs in natural language
            </p>
          </header>

          <TemplateGallery onSelectTemplate={handleTemplateSelect} />

          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Request
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Create a monthly budget spreadsheet with categories for income, expenses, and savings..."
                  className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              
              <TableConfig config={tableConfig} onChange={setTableConfig} />

              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    Generate Excel <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}

            {result && (
              <div className="mt-8">
                <div className="bg-gray-50 rounded-md p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileSpreadsheet className="h-6 w-6 text-green-600" />
                      <span className="font-medium">Your Excel file is ready!</span>
                    </div>
                    <button
                      onClick={handleDownload}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                  <p className="mt-4 text-gray-600">{result.summary}</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Preview</h2>
                  <ExcelPreview data={result.analysis.data} />
                </div>
              </div>
            )}
          </div>

          <UsageInfo />
        </div>
      </div>
    </div>
  );
}