import React from 'react';
import { Info, FileText, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function UsageInfo() {
  const { t } = useTranslation();

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">{t('generatorUsage.faq.title')}</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">{t('generatorUsage.faq.isFree.question')}</h3>
            <p className="text-gray-600">
              {t('generatorUsage.faq.isFree.answer')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{t('generatorUsage.faq.howToUse.question')}</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                {t('generatorUsage.faq.howToUse.intro')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {t('generatorUsage.faq.howToUse.features.aiGeneration')}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {t('generatorUsage.faq.howToUse.features.templates')}
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                {t('generatorUsage.faq.howToUse.comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}