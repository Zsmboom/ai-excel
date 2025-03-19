import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Search, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserGuide: React.FC = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: '1. Describe Your Excel Task',
      description: 'Tell our Excel AI what you need - formulas, tables, data analysis, or full spreadsheets'
    },
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: '2. ExcelEasy Generates Options',
      description: 'Our AI analyzes your request and creates Excel solutions tailored to your needs'
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-500" />,
      title: '3. Use Your Excel File',
      description: 'Download ready-to-use Excel files or copy formulas directly into your spreadsheets'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ExcelEasy AI Works</h2>
            <p className="text-lg text-gray-600">Smart AI assistance for all your Excel tasks in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/ai-excel-generator"
              className="inline-block bg-blue-600 text-white font-medium rounded-full px-8 py-3 shadow-lg hover:bg-blue-700 transition-colors"
            >
              Start Using Excel AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserGuide; 