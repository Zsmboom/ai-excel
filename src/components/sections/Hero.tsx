import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../hooks/useNavigation';

const Hero = () => {
  const { t } = useTranslation();
  const { goToWorkspace } = useNavigation();

  const openDemoVideo = () => {
    window.open('https://www.youtube.com/watch?v=GzjJYMb7JsM&t=1s', '_blank');
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={goToWorkspace}
              className="flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              {t('common.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={openDemoVideo}
              className="flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              {t('common.watchDemo')}
            </button>
          </div>
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt={t('hero.imageAlt')}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;