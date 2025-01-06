import React from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import type { FunctionType } from '../../types/excel';

interface FunctionInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  functionType: FunctionType;
  onTypeChange: (type: FunctionType) => void;
}

export function FunctionInput({ 
  value, 
  onChange, 
  onSubmit, 
  loading,
  functionType,
  onTypeChange
}: FunctionInputProps) {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={functionType === 'formula'}
            onChange={() => onTypeChange('formula')}
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-sm font-medium text-gray-700">{t('excelFunctions.form.typeSelector.formula')}</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={functionType === 'vba'}
            onChange={() => onTypeChange('vba')}
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-sm font-medium text-gray-700">{t('excelFunctions.form.typeSelector.macro')}</span>
        </label>
      </div>

      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          {t('excelFunctions.form.promptLabel')}
        </label>
        <textarea
          id="prompt"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t('excelFunctions.form.promptPlaceholder')}
          className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            {t('excelFunctions.form.generateButton')} <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}