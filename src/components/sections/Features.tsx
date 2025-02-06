import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSpreadsheet, Calculator, Code, ArrowRight } from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

const Features = () => {
  const { t } = useTranslation();
  const { goToWorkspace, goToFunctions } = useNavigation();

  const features = [
    {
      icon: <img src="/images/ai-excel-generator.png" alt={t('features.items.aiExcelGenerator.title')} className="w-4/5 rounded-lg shadow-lg" />,
      title: t('features.items.aiExcelGenerator.title'),
      description: t('features.items.aiExcelGenerator.description'),
      action: goToWorkspace,
      buttonText: t('common.getStarted')
    },
    {
      icon: <img src="/images/ai-excel-functions.png" alt={t('features.items.aiExcelFunctions.title')} className="w-4/5 rounded-lg shadow-lg" />,
      title: t('features.items.aiExcelFunctions.title'),
      description: t('features.items.aiExcelFunctions.description'),
      action: goToFunctions,
      buttonText: t('common.getStarted')
    },
    {
      icon: <img src="/images/image-to-excel.png" alt={t('features.items.imageToExcel.title')} className="w-4/5 rounded-lg shadow-lg" />,
      title: t('features.items.imageToExcel.title'),
      description: t('features.items.imageToExcel.description'),
      action: goToWorkspace,
      buttonText: t('common.getStarted')
    },
    {
      icon: <img src="/images/ai-excel-chart.png" alt={t('features.items.aiExcelChart.title')} className="w-4/5 rounded-lg shadow-lg" />,
      title: t('features.items.aiExcelChart.title'),
      description: t('features.items.aiExcelChart.description'),
      action: goToWorkspace,
      buttonText: t('common.getStarted')
    }
  ];

  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="space-y-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mr-8 flex-shrink-0 w-2/5">{feature.icon}</div>
              <div className="flex-1 max-w-xl">
                <h1 className="text-3xl font-bold mb-3 text-gray-900">{feature.title}</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">{feature.description}</p>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    feature.action();
                  }}
                  className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
                >
                  {feature.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;