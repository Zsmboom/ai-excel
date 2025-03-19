import React from 'react';
import { FileSpreadsheet, Star, Zap, Database, PieChart, Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-blue-500" />,
      title: 'AI Excel Generation',
      description: 'Create complete Excel spreadsheets from simple text descriptions. ExcelEasy builds budgets, invoices, trackers, and more.'
    },
    {
      icon: <Calculator className="h-10 w-10 text-blue-500" />,
      title: 'Excel Formula Help',
      description: 'Get complex Excel formulas explained or created. Our AI understands VLOOKUP, SUMIFS, INDEX/MATCH and other advanced functions.'
    },
    {
      icon: <PieChart className="h-10 w-10 text-blue-500" />,
      title: 'Excel Chart Creator',
      description: 'Transform your data into professional Excel charts and visualizations without formatting struggles.'
    },
    {
      icon: <Database className="h-10 w-10 text-blue-500" />,
      title: 'Image to Excel Converter',
      description: 'Extract tables from images directly into Excel format. ExcelEasy AI recognizes and structures tabular data instantly.'
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: 'Excel Workflow Automation',
      description: 'Automate repetitive Excel tasks with AI-powered solutions that save hours of manual work.'
    },
    {
      icon: <Star className="h-10 w-10 text-blue-500" />,
      title: 'Excel Data Analysis',
      description: 'Get AI-powered insights from your Excel data. Our tools help identify trends and create actionable reports.'
    }
  ];

  // Real-world use cases
  const useCases = [
    {
      title: 'Financial Analysis',
      description: 'An accountant used ExcelEasy AI to generate complex financial models in Excel, reducing 4 hours of work to just 10 minutes.',
      tags: ['Excel AI', 'Financial Model', 'Time-saving']
    },
    {
      title: 'Inventory Management',
      description: 'A retail store manager converted inventory photos to Excel spreadsheets instantly using our Excel AI image conversion tool.',
      tags: ['Image to Excel', 'Inventory', 'Data Entry']
    },
    {
      title: 'Project Tracking',
      description: 'A project manager created a complete Excel dashboard with Gantt charts using ExcelEasy in minutes, not hours.',
      tags: ['Excel Dashboard', 'AI Charts', 'Project Management']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Excel AI Tools by ExcelEasy
          </h2>
          <p className="text-xl text-gray-600">
            Powerful AI-driven Excel solutions for any spreadsheet task
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Real-world use cases */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">Real Excel AI Success Stories</h3>
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="text-xl font-semibold mb-2">{useCase.title}</h4>
                <p className="text-gray-700 mb-3">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;