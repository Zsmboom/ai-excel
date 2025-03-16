import React, { useEffect } from 'react';
import { FileSpreadsheet, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Features } from '../components/about/Features';
import { Step } from '../components/about/Step';
import { PageSEO } from '../components/seo/PageSEO';
import { SiDevpost } from 'react-icons/si';
import { OptimizedImage } from '../components/ui/OptimizedImage';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();

  // 确保规范链接正确
  const baseUrl = window.location.origin;
  const canonicalUrl = i18n.language === 'en' 
    ? `${baseUrl}/about` 
    : `${baseUrl}/${i18n.language}/about`;

  useEffect(() => {
    // 检测广告拦截器
    const checkAdBlocker = async () => {
      try {
        await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
          method: 'HEAD',
          mode: 'no-cors'
        });
      } catch (error) {
        console.log('AdBlock may be enabled');
        // 这里可以添加广告被屏蔽时的替代内容
      }
    };
    
    checkAdBlocker();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <PageSEO 
        page="about" 
        canonicalUrl={canonicalUrl}
      />
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

        {/* Devpost Project Showcase */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">{t('about.showcase.title')}</h2>
            </div>
            <a
              href="https://devpost.com/software/ai-excel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <SiDevpost className="h-6 w-6" />
              <span>{t('about.showcase.viewOnDevpost')}</span>
            </a>
          </div>
          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-700">
              {t('about.showcase.description')}
            </p>
            <div className="mt-4 grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.showcase.innovation.title')}</h3>
                <p className="text-gray-600">{t('about.showcase.innovation.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.showcase.impact.title')}</h3>
                <p className="text-gray-600">{t('about.showcase.impact.description')}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('about.showcase.technology.title')}</h3>
                <p className="text-gray-600">{t('about.showcase.technology.description')}</p>
              </div>
            </div>
          </div>
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
          <p className="mt-6 text-gray-600">
            {t('about.mission.toolsfine')} <a href="https://toolsfine.com/" target="_blank" rel="follow" className="text-blue-600 hover:text-blue-800 underline">ToolsFine</a>
          </p>
          <div className="mt-4 flex items-center">
            <span className="text-gray-600 mr-3">{t('about.mission.yodirectory')}</span>
            <a href="https://yo.directory/" target="_blank" rel="follow">
              <OptimizedImage 
                src="https://cdn.prod.website-files.com/65c1546fa73ea974db789e3d/65e1e171f89ebfa7bd0129ac_yodirectory-featured.png" 
                alt="yo.directory" 
                width={150}
                height={54}
                className="w-[150px] h-[54px]"
                priority={true}
              />
            </a>
          </div>
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
};

export default About;