import React from 'react';
import { Copy } from 'lucide-react';
import type { FunctionGenerationResult } from '../../types/excel';

interface FunctionResultProps {
  result: FunctionGenerationResult;
}

export function FunctionResult({ result }: FunctionResultProps) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Adjusted Interpretation</h3>
        <p className="text-gray-600">{result.explanation}</p>
      </div>

      {result.formula && (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Excel Formula</h3>
            <button
              onClick={() => handleCopy(result.formula)}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </button>
          </div>
          <pre className="bg-white p-4 rounded-md overflow-x-auto">
            <code className="text-sm">{result.formula}</code>
          </pre>
        </div>
      )}

      {result.vbaCode && (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">VBA Macro Code</h3>
            <button
              onClick={() => handleCopy(result.vbaCode!)}
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </button>
          </div>
          <pre className="bg-white p-4 rounded-md overflow-x-auto">
            <code className="text-sm">{result.vbaCode}</code>
          </pre>
        </div>
      )}

      {result.steps && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">How to Use</h3>
          <ol className="list-decimal list-inside space-y-2">
            {result.steps.map((step, index) => (
              <li key={index} className="text-gray-600">{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}