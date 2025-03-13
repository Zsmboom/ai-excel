import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, TrendingUp, Users, BarChart3 } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('caseStudies.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{t('caseStudies.finance.title')}</h3>
            </div>
            <p className="text-gray-700 mb-4">{t('caseStudies.finance.description')}</p>
            <div className="text-sm text-gray-500 italic">
              {t('caseStudies.finance.quote')}
            </div>
            <div className="mt-4 text-sm font-medium text-gray-700">
              {t('caseStudies.finance.company')}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{t('caseStudies.sales.title')}</h3>
            </div>
            <p className="text-gray-700 mb-4">{t('caseStudies.sales.description')}</p>
            <div className="text-sm text-gray-500 italic">
              {t('caseStudies.sales.quote')}
            </div>
            <div className="mt-4 text-sm font-medium text-gray-700">
              {t('caseStudies.sales.company')}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{t('caseStudies.hr.title')}</h3>
            </div>
            <p className="text-gray-700 mb-4">{t('caseStudies.hr.description')}</p>
            <div className="text-sm text-gray-500 italic">
              {t('caseStudies.hr.quote')}
            </div>
            <div className="mt-4 text-sm font-medium text-gray-700">
              {t('caseStudies.hr.company')}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <BarChart3 className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{t('caseStudies.analytics.title')}</h3>
            </div>
            <p className="text-gray-700 mb-4">{t('caseStudies.analytics.description')}</p>
            <div className="text-sm text-gray-500 italic">
              {t('caseStudies.analytics.quote')}
            </div>
            <div className="mt-4 text-sm font-medium text-gray-700">
              {t('caseStudies.analytics.company')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 