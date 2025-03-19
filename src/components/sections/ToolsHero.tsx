import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  Wrench, 
  Image as ImageIcon, 
  BarChart, 
  ArrowRight 
} from 'lucide-react';
import { useNavigation } from '../../hooks/useNavigation';

const ToolsHero = () => {
  const { 
    goToWorkspace, 
    goToFunctions, 
    goToExcelChart, 
    goToPicToExcel 
  } = useNavigation();

  const tools = [
    {
      title: "AI Excel Generator",
      description: "Create complete Excel spreadsheets from simple text descriptions",
      image: "/images/ai-excel-generator-medium.webp",
      icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
      onClick: goToWorkspace,
      color: "bg-blue-500"
    },
    {
      title: "Excel Functions",
      description: "Generate complex Excel formulas and VBA macros with AI",
      image: "/images/ai-excel-functions.png",
      icon: <Wrench className="h-6 w-6 text-purple-600" />,
      onClick: goToFunctions,
      color: "bg-purple-500"
    },
    {
      title: "Image to Excel",
      description: "Extract tables from images directly into Excel format",
      image: "/images/image-to-excel.png",
      icon: <ImageIcon className="h-6 w-6 text-green-600" />,
      onClick: goToPicToExcel,
      color: "bg-green-500"
    },
    {
      title: "Excel Chart Creator",
      description: "Transform your data into professional Excel charts",
      image: "/images/ai-excel-chart.png",
      icon: <BarChart className="h-6 w-6 text-orange-600" />,
      onClick: goToExcelChart,
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Excel AI Tools
          </h2>
          <p className="text-xl text-gray-600">
            Select a tool to get started with AI-powered Excel features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={tool.onClick}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={tool.image} 
                  alt={tool.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x400/e6f7ff/0078d4?text=Excel+AI+Tool';
                  }}
                />
                <div className={`absolute top-0 left-0 w-full h-full ${tool.color} opacity-20`}></div>
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                  {tool.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <button 
                  onClick={tool.onClick}
                  className="flex items-center text-blue-600 text-sm font-medium"
                >
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsHero; 