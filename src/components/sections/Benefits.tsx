import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

interface BenefitItem {
  title: string;
  description: string;
}

const Benefits: React.FC = () => {
  const { t } = useTranslation();
  const benefitItems = (t('benefits.items', { returnObjects: true }) || []) as BenefitItem[];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefitItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 ml-9">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 