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
  const { t, i18n } = useTranslation();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    formulaType: "AI Excel函数生成器",
    vbaType: "AI Excel VBA生成器",
    promptLabel: "描述您的AI Excel函数和VBA宏需求",
    promptPlaceholder: "示例：创建一个VLOOKUP公式来查找两个表之间的匹配值，或生成一个用于自动数据处理的VBA宏...",
    generateButton: "生成AI Excel函数和VBA宏"
  };
  
  // 英文内容
  const enContent = {
    formulaType: "AI Excel Functions Generator",
    vbaType: "AI Excel VBA Generator",
    promptLabel: "Describe Your AI Excel Functions and VBA Macro Needs",
    promptPlaceholder: "Example: Create a VLOOKUP formula to find matching values between two tables, or generate a VBA macro for automated data processing...",
    generateButton: "Generate AI Excel Function & VBA"
  };
  
  // 根据当前语言选择内容
  const content = currentLanguage.startsWith('zh') ? zhContent : enContent;

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
          <span className="text-sm font-medium text-gray-700">{content.formulaType}</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            checked={functionType === 'vba'}
            onChange={() => onTypeChange('vba')}
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-sm font-medium text-gray-700">{content.vbaType}</span>
        </label>
      </div>

      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
          {content.promptLabel}
        </label>
        <textarea
          id="prompt"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={content.promptPlaceholder}
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
            {content.generateButton} <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}