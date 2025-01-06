import React from 'react';
import { Info, Calculator, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FunctionUsageInfo() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">{t('functionUsage.faq.title')}</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">{t('functionUsage.faq.isFree.question')}</h3>
            <p className="text-gray-600">
              {t('functionUsage.faq.isFree.answer')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{t('functionUsage.faq.howToUse.question')}</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                {t('functionUsage.faq.howToUse.intro')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Calculator className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {t('functionUsage.faq.howToUse.features.formulas')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {t('functionUsage.faq.howToUse.features.macros')}
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                {t('functionUsage.faq.howToUse.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}