import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calculator, FileSpreadsheet, GraduationCap } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const icons = [
  <Calculator className="h-6 w-6 text-blue-600" />,
  <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
  <GraduationCap className="h-6 w-6 text-blue-600" />
];

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                {icons[index]}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;