import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../hooks/useNavigation';
import { 
  FileSpreadsheet, 
  FileText, 
  Image, 
  BarChart, 
  MousePointer, 
  ArrowRight 
} from 'lucide-react';

const QuickStart: React.FC = () => {
  const { t } = useTranslation();
  const { goToWorkspace, goToFunctions } = useNavigation();

  const tools = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: 'Auto-Generate Excel',
      description: 'Quickly create professional Excel spreadsheets with natural language',
      action: goToWorkspace,
      buttonText: 'Get Started',
      primary: true
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-600" />,
      title: 'Excel Function Helper',
      description: 'Get instant help and explanations for complex Excel functions',
      action: goToFunctions,
      buttonText: 'Explore Functions',
      primary: false
    },
    {
      icon: <Image className="h-8 w-8 text-blue-600" />,
      title: 'Image to Excel',
      description: 'Extract data from images and convert to Excel format',
      action: () => window.location.href = '/pic-to-excel',
      buttonText: 'Try Conversion',
      primary: false
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'AI Chart Generator',
      description: 'Intelligently create data visualizations and dashboards',
      action: () => window.location.href = '/ai-excel-chart',
      buttonText: 'Create Charts',
      primary: false
    }
  ];

  return (
    <section className="py-16 bg-white" id="try-now">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Tool</h2>
            <p className="text-lg text-gray-600 mb-6">Use all our AI Excel tools for free, no registration required</p>
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
                <MousePointer className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Click any tool below to begin</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-xl shadow-md border transition-transform hover:scale-105 ${
                  tool.primary ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="p-6">
                  <div className="mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  
                  <button
                    onClick={tool.action}
                    className={`flex items-center space-x-2 px-5 py-2 rounded-lg transition-colors ${
                      tool.primary 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <span>{tool.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
                {tool.primary && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart; 