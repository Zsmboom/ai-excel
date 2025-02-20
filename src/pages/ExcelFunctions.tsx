import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FunctionInput } from '../components/excel/FunctionInput';
import { FunctionResult } from '../components/excel/FunctionResult';
import { FunctionUsageInfo } from '../components/excel/FunctionUsageInfo';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { useExcelFunctions } from '../hooks/useExcelFunctions';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import { useExcelFunctionGeneration } from '../hooks/useExcelFunctionGeneration';
import { ProgressBar } from '../components/common/ProgressBar';

export default function ExcelFunctions() {
  const [prompt, setPrompt] = useState('');
  const { 
    generateFunction, 
    loading, 
    error, 
    result,
    functionType,
    setFunctionType
  } = useExcelFunctions();
  const { t } = useTranslation();
  const {
    progress
  } = useExcelFunctionGeneration();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateFunction(prompt);
  };

  return (
    <>
      <PageSEO page="excelFunctions" />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{t('excelFunctions.title')}</h1>
              <p className="text-gray-600 mt-2">
                {t('excelFunctions.subtitle')}
              </p>
              <div className="mt-4">
                <ShareButtons
                  url={window.location.href}
                  title={t('pages.excelFunctions.shareTitle')}
                  description={t('pages.excelFunctions.shareDescription')}
                  hashtags={['AIExcel', 'FreeTools', 'ExcelFormulas']}
                />
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>✨ {t('common.shareFeatures.free')}</span>
                  <span>🔒 {t('common.shareFeatures.noLogin')}</span>
                  <span>🌍 {t('common.shareFeatures.multiLanguage')}</span>
                </div>
              </div>
            </header>

            <section className="bg-white rounded-lg shadow-md p-6" aria-label="Function Generation">
              <FunctionInput
                value={prompt}
                onChange={setPrompt}
                onSubmit={handleSubmit}
                loading={loading}
                functionType={functionType}
                onTypeChange={setFunctionType}
              />

              {loading && (
                <div className="mt-4">
                  <ProgressBar 
                    progress={progress.progress} 
                    status={progress.status}
                  />
                </div>
              )}

              {error && (
                <div role="alert" className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {result && <FunctionResult result={result} />}
            </section>

            <section aria-label="Usage Instructions">
              <FunctionUsageInfo />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}