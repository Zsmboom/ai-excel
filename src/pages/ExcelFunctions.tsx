import React, { useState } from 'react';
import { Wrench } from 'lucide-react';
import { FunctionInput } from '../components/excel/FunctionInput';
import { FunctionResult } from '../components/excel/FunctionResult';
import { FunctionUsageInfo } from '../components/excel/FunctionUsageInfo';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { useExcelFunctions } from '../hooks/useExcelFunctions';
import { PageSEO } from '../components/seo/PageSEO';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateFunction(prompt);
  };

  return (
    <>
      <PageSEO page="functions" />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Excel Functions & VBA Macro Generator</h1>
              <p className="text-gray-600 mt-2">
                Describe your needs in natural language to quickly generate Excel functions and VBA macros
              </p>
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