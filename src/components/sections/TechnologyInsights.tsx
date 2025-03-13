import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Brain, Lock, Sparkles } from 'lucide-react';

const TechnologyInsights: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('technology.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Brain className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t('technology.aiPower.title')}</h3>
            <p className="text-gray-600">{t('technology.aiPower.description')}</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <Zap className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t('technology.speed.title')}</h3>
            <p className="text-gray-600">{t('technology.speed.description')}</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-purple-100 p-4 rounded-full mb-6">
              <Lock className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t('technology.security.title')}</h3>
            <p className="text-gray-600">{t('technology.security.description')}</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-amber-100 p-4 rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-amber-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t('technology.innovation.title')}</h3>
            <p className="text-gray-600">{t('technology.innovation.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyInsights; 