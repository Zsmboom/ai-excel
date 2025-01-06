import React from 'react';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const faqItems = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('faq.title')}</h2>
        <p className="text-xl text-gray-600 text-center mb-12">{t('faq.subtitle')}</p>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
          {faqItems.map((item: FAQItem, index: number) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 