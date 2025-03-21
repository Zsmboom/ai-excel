import React, { useState } from 'react';
import { FileSpreadsheet, Send, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useExcelGeneration } from '../hooks/useExcelGeneration';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ExcelPreview } from '../components/excel/ExcelPreview';
import { TableConfig } from '../components/excel/TableConfig';
import { UsageInfo } from '../components/excel/UsageInfo';
import { TemplateGallery } from '../components/excel/TemplateGallery';
import { PageSEO } from '../components/seo/PageSEO';
import UserComments from '../components/sections/UserComments';
import type { AnalysisResult, TableConfigOptions, ExcelTemplate } from '../types/excel';
import ShareButtons from '../components/common/ShareButtons';
import { useAnalytics } from '../hooks/useAnalytics';

export default function Workspace() {
  const [prompt, setPrompt] = useState('');
  const [tableConfig, setTableConfig] = useState<TableConfigOptions>({
    enableColumnSums: false,
    enablePivotTables: false,
    enableSorting: false,
  });
  
  const { generateFromPrompt, loading, error, progress } = useExcelGeneration();
  const { t } = useTranslation();
  const { trackEvent } = useAnalytics();
  const [result, setResult] = useState<{
    fileName: string;
    blob: Blob;
    summary: string;
    analysis: AnalysisResult;
  } | null>(null);

  const handleTemplateSelect = (template: ExcelTemplate) => {
    setPrompt(template.prompt);
    trackEvent('select_template', 'excel_generator', template.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      trackEvent('generate_excel', 'excel_generator', prompt.substring(0, 50));
      const generationResult = await generateFromPrompt(prompt, tableConfig);
      console.log('API Response:', generationResult);
      if (generationResult) {
        setResult(generationResult);
        trackEvent('excel_generated_success', 'excel_generator', generationResult.fileName);
      }
    } catch (error) {
      console.error('Error generating Excel:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      trackEvent('excel_generated_error', 'excel_generator', errorMessage);
      if (errorMessage.includes('quota')) {
        alert(t('workspace.errors.quota'));
      } else {
        alert(t('workspace.errors.unknown') + errorMessage);
      }
    }
  };

  const handleDownload = () => {
    if (!result) return;
    
    trackEvent('download_excel', 'excel_generator', result.fileName);
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
    <>
      <PageSEO page="workspace" />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{t('workspace.title')}</h1>
              <p className="text-gray-600 mt-2">
                {t('workspace.subtitle')}
              </p>
              <div className="mt-4">
                <ShareButtons
                  url={window.location.href}
                  title={t('pages.workspace.shareTitle')}
                  description={t('pages.workspace.shareDescription')}
                  hashtags={['AIExcel', 'FreeTools', 'ExcelWorkspace']}
                />
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>✨ {t('common.shareFeatures.free')}</span>
                  <span>🔒 {t('common.shareFeatures.noLogin')}</span>
                  <span>🌍 {t('common.shareFeatures.multiLanguage')}</span>
                </div>
              </div>
            </header>

            <section aria-label="Template Selection">
              <TemplateGallery onSelectTemplate={handleTemplateSelect} />
            </section>

            <section className="bg-white rounded-lg shadow-md p-6" aria-label="Excel Generation">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('workspace.form.promptLabel')}
                  </label>
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('workspace.form.promptPlaceholder')}
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <TableConfig config={tableConfig} onChange={setTableConfig} />

                {loading && progress.status && (
                  <div className="my-4">
                    <ProgressBar progress={progress.progress} status={progress.status} />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !prompt.trim()}
                  className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <LoadingSpinner />
                      <span className="ml-2">{t('workspace.form.generatingMessage')}</span>
                    </div>
                  ) : (
                    <>
                      {t('workspace.form.generateButton')} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {error && (
                <div role="alert" className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {result && (
                <article className="mt-8">
                  <div className="bg-gray-50 rounded-md p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileSpreadsheet className="h-6 w-6 text-green-600" />
                        <span className="font-medium">{t('workspace.form.readyMessage')}</span>
                      </div>
                      <button
                        onClick={handleDownload}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        <span>{t('workspace.form.downloadButton')}</span>
                      </button>
                    </div>
                    <p className="mt-4 text-gray-600">{result.summary}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">{t('workspace.form.previewTitle')}</h2>
                    <ExcelPreview data={result.analysis.data} />
                  </div>
                </article>
              )}
            </section>

            <section aria-label="Usage Instructions">
              <UsageInfo />
            </section>
          </div>
        </div>
      </main>
      
      {/* User Comments Section */}
      <UserComments />
    </>
  );
}