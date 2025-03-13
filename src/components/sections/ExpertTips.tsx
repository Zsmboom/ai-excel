import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb } from 'lucide-react';

const ExpertTips: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('expertTips.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('expertTips.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{t(`expertTips.tips.tip${index}.title`)}</h3>
              </div>
              <p className="text-gray-700">{t(`expertTips.tips.tip${index}.description`)}</p>
              <div className="mt-4 text-blue-600 font-medium">
                {t('expertTips.aiSolution')} {t(`expertTips.tips.tip${index}.solution`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTips; 