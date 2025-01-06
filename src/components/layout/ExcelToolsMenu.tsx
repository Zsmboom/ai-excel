import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, FileText, Wrench } from 'lucide-react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ExcelToolsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();

  // 获取当前语言
  const currentLang = lang || i18n.language || 'en';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
      >
        <span>{t('common.excelTools')}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <Link
            to={`/${currentLang}/ai-excel-generator`}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <FileText className="h-4 w-4 mr-2" />
            {t('common.excelGenerator')}
          </Link>
          <Link
            to={`/${currentLang}/excel-functions`}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <Wrench className="h-4 w-4 mr-2" />
            {t('common.excelFunctions')}
          </Link>
        </div>
      )}
    </div>
  );
}