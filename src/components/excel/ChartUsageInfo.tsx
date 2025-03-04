import React from 'react';
import { Info, BarChart, LineChart, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ChartUsageInfo() {
  const { t, i18n } = useTranslation();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "AI Excel图表生成器常见问题",
    isFreeQuestion: "AI Excel图表生成器是免费的吗？",
    isFreeAnswer: "是的，AI Excel图表生成器提供免费版本！登录后，您每月可以免费使用AI Excel图表生成器10次。这让您可以免费体验我们的AI驱动的Excel图表生成功能，无需任何费用。",
    howToUseQuestion: "如何使用AI Excel图表生成器？",
    howToUseIntro: "AI Excel图表生成器提供多种方式来创建专业的数据可视化：",
    dataUpload: "上传Excel数据：只需上传您的Excel文件，AI Excel图表生成器会自动分析数据并推荐最佳图表类型",
    chartCustomization: "图表定制：选择您喜欢的图表类型，AI Excel图表生成器会根据您的数据特点优化图表展示",
    comingSoon: "即将推出：高级AI Excel图表生成功能 - 添加自定义分析要求，AI Excel图表生成器将根据您的具体需求生成更精确的可视化效果。",
    advancedFeaturesTitle: "AI Excel图表生成器高级功能",
    advancedFeatures: [
      "智能数据分析和自动图表类型推荐",
      "多种专业图表类型支持（柱状图、折线图、饼图、散点图等）",
      "自动生成数据洞察和趋势分析",
      "交互式图表定制和导出选项",
      "一键分享生成的图表和分析结果"
    ],
    useCasesTitle: "AI Excel图表生成器应用场景",
    useCases: [
      "销售报告：使用AI Excel图表生成器创建销售趋势和业绩比较图表",
      "财务分析：通过AI Excel图表生成器可视化财务数据和预算执行情况",
      "市场研究：利用AI Excel图表生成器展示市场份额和竞争分析",
      "项目管理：使用AI Excel图表生成器跟踪项目进度和资源分配",
      "数据科学：借助AI Excel图表生成器探索数据模式和相关性"
    ],
    whyChooseQuestion: "为什么选择我们的AI Excel图表生成器？",
    whyChooseAnswer: "我们的AI Excel图表生成器采用最先进的AI技术，能够理解您的数据结构并生成最合适的可视化效果。与其他工具相比，AI Excel图表生成器不仅能创建美观的图表，还能提供有价值的数据洞察，帮助您更好地理解数据背后的故事。AI Excel图表生成器支持中英文双语，适合各种技能水平的用户使用。"
  };
  
  // 英文内容
  const enContent = {
    title: "AI Excel Chart Generator FAQ",
    isFreeQuestion: "Is AI Excel Chart Generator free?",
    isFreeAnswer: "Yes, AI Excel Chart Generator offers a free tier! After logging in, you get 10 free chart generations per month. This allows you to try out our AI-powered Excel chart generation capabilities without any cost.",
    howToUseQuestion: "How do I use AI Excel Chart Generator?",
    howToUseIntro: "AI Excel Chart Generator offers multiple ways to create professional data visualizations:",
    dataUpload: "Upload Excel Data: Simply upload your Excel file, and AI Excel Chart Generator will automatically analyze the data and recommend the best chart types",
    chartCustomization: "Chart Customization: Choose your preferred chart type, and AI Excel Chart Generator will optimize the visualization based on your data characteristics",
    comingSoon: "Coming soon: Advanced AI Excel Chart Generation - Add custom analysis requirements, and AI Excel Chart Generator will create more precise visualizations based on your specific needs.",
    advancedFeaturesTitle: "Advanced Features of AI Excel Chart Generator",
    advancedFeatures: [
      "Intelligent data analysis and automatic chart type recommendation",
      "Multiple professional chart types support (bar, line, pie, scatter, etc.)",
      "Automatic generation of data insights and trend analysis",
      "Interactive chart customization and export options",
      "One-click sharing of generated charts and analysis results"
    ],
    useCasesTitle: "AI Excel Chart Generator Use Cases",
    useCases: [
      "Sales Reports: Create sales trends and performance comparison charts with AI Excel Chart Generator",
      "Financial Analysis: Visualize financial data and budget execution with AI Excel Chart Generator",
      "Market Research: Display market share and competitive analysis using AI Excel Chart Generator",
      "Project Management: Track project progress and resource allocation with AI Excel Chart Generator",
      "Data Science: Explore data patterns and correlations with AI Excel Chart Generator"
    ],
    whyChooseQuestion: "Why choose our AI Excel Chart Generator?",
    whyChooseAnswer: "Our AI Excel Chart Generator uses state-of-the-art AI technology to understand your data structure and generate the most appropriate visualizations. Compared to other tools, AI Excel Chart Generator not only creates beautiful charts but also provides valuable data insights, helping you better understand the story behind your data. AI Excel Chart Generator supports both English and Chinese, making it suitable for users of all skill levels."
  };
  
  // 根据当前语言选择内容
  const content = currentLanguage.startsWith('zh') ? zhContent : enContent;

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">{content.title}</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">{content.isFreeQuestion}</h3>
            <p className="text-gray-600">
              {content.isFreeAnswer}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{content.howToUseQuestion}</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                {content.howToUseIntro}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <BarChart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.dataUpload}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.chartCustomization}
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                {content.comingSoon}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">{content.advancedFeaturesTitle}</h3>
            <ul className="space-y-2">
              {content.advancedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">{content.useCasesTitle}</h3>
            <ul className="space-y-2">
              {content.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">{content.whyChooseQuestion}</h3>
            <div className="flex items-start gap-2">
              <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-600">
                {content.whyChooseAnswer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 