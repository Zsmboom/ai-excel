import React from 'react';
import { useTranslation } from 'react-i18next';
import { DollarSign, Calendar, ClipboardList, PieChart } from 'lucide-react';

const UseCases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('useCases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('useCases.financial.title')}</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.financial.item1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.financial.item2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.financial.item3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('useCases.planning.title')}</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.planning.item1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.planning.item2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.planning.item3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center bg-purple-100 p-3 rounded-full mb-4">
              <ClipboardList className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('useCases.inventory.title')}</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.inventory.item1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.inventory.item2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.inventory.item3')}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center bg-amber-100 p-3 rounded-full mb-4">
              <PieChart className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('useCases.reporting.title')}</h3>
            <ul className="text-gray-600 text-left space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.reporting.item1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.reporting.item2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>{t('useCases.reporting.item3')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases; 