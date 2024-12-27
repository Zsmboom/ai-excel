import React from 'react';
import { FileSpreadsheet, Calculator, Code } from 'lucide-react';

const features = [
  {
    icon: <FileSpreadsheet className="h-8 w-8 text-blue-600" />,
    title: 'AI Excel Generation',
    description: 'Transform natural language descriptions into complete, professionally formatted Excel spreadsheets in seconds.'
  },
  {
    icon: <Calculator className="h-8 w-8 text-blue-600" />,
    title: 'Excel Function Assistant',
    description: 'Get instant help with complex Excel formulas, complete with explanations and implementation guides.'
  },
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: 'VBA Macro Generation',
    description: 'Generate custom VBA macros to automate your Excel workflows with step-by-step instructions.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Excel Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Simplify your Excel work with our advanced AI tools
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