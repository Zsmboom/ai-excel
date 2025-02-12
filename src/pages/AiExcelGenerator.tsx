import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageSEO } from '../components/seo/PageSEO';
import FAQ from '../components/FAQ';

const AiExcelGenerator: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageSEO 
        page="workspace"
        lastModified="2024-03-20"
      />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('workspace.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('workspace.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t('workspace.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('workspace.features.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {(t('workspace.features.list', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Generator Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">
                {t('workspace.form.promptLabel')}
              </h3>
              <textarea
                className="w-full h-32 px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={t('workspace.form.promptPlaceholder')}
              />
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {t('workspace.form.generateButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default AiExcelGenerator; 
