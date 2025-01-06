import React from 'react';
import { FileSpreadsheet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Features } from '../components/about/Features';
import { Step } from '../components/about/Step';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <FileSpreadsheet className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <Features />

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission.title')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('about.mission.description')}
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {t('about.mission.challenges.formulas')}
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {t('about.mission.challenges.data')}
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {t('about.mission.challenges.spreadsheets')}
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {t('about.mission.challenges.macros')}
            </li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('about.howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="1"
              title={t('about.howItWorks.steps.step1.title')}
              description={t('about.howItWorks.steps.step1.description')}
            />
            <Step
              number="2"
              title={t('about.howItWorks.steps.step2.title')}
              description={t('about.howItWorks.steps.step2.description')}
            />
            <Step
              number="3"
              title={t('about.howItWorks.steps.step3.title')}
              description={t('about.howItWorks.steps.step3.description')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}