import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <div className="grid grid-cols-3 bg-gray-100">
            <div className="p-4 font-semibold text-gray-700 border-b border-gray-200">
              {t('comparison.feature')}
            </div>
            <div className="p-4 font-semibold text-gray-700 text-center border-b border-gray-200 bg-blue-50">
              {t('comparison.aiExcel')}
            </div>
            <div className="p-4 font-semibold text-gray-700 text-center border-b border-gray-200">
              {t('comparison.traditional')}
            </div>
          </div>
          
          {/* Time Efficiency */}
          <div className="grid grid-cols-3 bg-white">
            <div className="p-4 text-gray-700 border-b border-gray-200">
              {t('comparison.features.time')}
            </div>
            <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span className="ml-2 text-gray-700">{t('comparison.aiValues.time')}</span>
              </div>
            </div>
            <div className="p-4 text-center border-b border-gray-200">
              <div className="flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
                <span className="ml-2 text-gray-700">{t('comparison.traditionalValues.time')}</span>
              </div>
            </div>
          </div>
          
          {/* Learning Curve */}
          <div className="grid grid-cols-3 bg-white">
            <div className="p-4 text-gray-700 border-b border-gray-200">
              {t('comparison.features.learning')}
            </div>
            <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span className="ml-2 text-gray-700">{t('comparison.aiValues.learning')}</span>
              </div>
            </div>
            <div className="p-4 text-center border-b border-gray-200">
              <div className="flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
                <span className="ml-2 text-gray-700">{t('comparison.traditionalValues.learning')}</span>
              </div>
            </div>
          </div>
          
          {/* Complex Formulas */}
          <div className="grid grid-cols-3 bg-white">
            <div className="p-4 text-gray-700 border-b border-gray-200">
              {t('comparison.features.formulas')}
            </div>
            <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span className="ml-2 text-gray-700">{t('comparison.aiValues.formulas')}</span>
              </div>
            </div>
            <div className="p-4 text-center border-b border-gray-200">
              <div className="flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
                <span className="ml-2 text-gray-700">{t('comparison.traditionalValues.formulas')}</span>
              </div>
            </div>
          </div>
          
          {/* Error Handling */}
          <div className="grid grid-cols-3 bg-white">
            <div className="p-4 text-gray-700 border-b border-gray-200">
              {t('comparison.features.errors')}
            </div>
            <div className="p-4 text-center border-b border-gray-200 bg-blue-50">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span className="ml-2 text-gray-700">{t('comparison.aiValues.errors')}</span>
              </div>
            </div>
            <div className="p-4 text-center border-b border-gray-200">
              <div className="flex items-center justify-center">
                <X className="w-5 h-5 text-red-500" />
                <span className="ml-2 text-gray-700">{t('comparison.traditionalValues.errors')}</span>
              </div>
            </div>
          </div>
          
          {/* Customization */}
          <div className="grid grid-cols-3 bg-white">
            <div className="p-4 text-gray-700">
              {t('comparison.features.customization')}
            </div>
            <div className="p-4 text-center bg-blue-50">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span className="ml-2 text-gray-700">{t('comparison.aiValues.customization')}</span>
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
                <span className="ml-2 text-gray-700">{t('comparison.traditionalValues.customization')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison; 