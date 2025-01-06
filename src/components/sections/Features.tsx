import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSpreadsheet, Calculator, Code } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-600" />,
      title: t('features.items.generation.title'),
      description: t('features.items.generation.description')
    },
    {
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      title: t('features.items.assistant.title'),
      description: t('features.items.assistant.description')
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: t('features.items.macro.title'),
      description: t('features.items.macro.description')
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;