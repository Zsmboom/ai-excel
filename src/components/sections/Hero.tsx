import React from 'react';
import { ArrowRight, Play, CheckCircle, FileSpreadsheet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '../../hooks/useNavigation';

const Hero = () => {
  const { t } = useTranslation();
  const { goToWorkspace } = useNavigation();

  const openDemoVideo = () => {
    window.open('https://www.youtube.com/watch?v=GzjJYMb7JsM&t=1s', '_blank');
  };

  const keyFeatures = [
    'Works with all Excel versions and formats',
    'Free to use - no registration required',
    'AI-powered Excel tools in one platform'
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-green-100 opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <FileSpreadsheet className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Excel AI Assistant by ExcelEasy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your<br className="hidden lg:block" />
              <span className="text-blue-600">Excel Experience with AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              ExcelEasy brings powerful AI tools to streamline your spreadsheet tasks. Create, analyze, and optimize Excel files in seconds.
            </p>
            
            {/* Key features list */}
            <div className="mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={goToWorkspace}
                className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Try Excel AI Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={openDemoVideo}
                className="flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch ExcelEasy Demo
              </button>
            </div>
          </div>
          
          {/* Right preview */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/images/AI-Powered-Excel.jpg" 
                  alt="ExcelEasy AI Excel Tool Interface" 
                  className="w-full"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x400/e6f7ff/0078d4?text=Excel+AI+Preview';
                  }}
                />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-medium">ExcelEasy AI-Powered Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;