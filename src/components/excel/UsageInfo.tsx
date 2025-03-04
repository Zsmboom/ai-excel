import React from 'react';
import { Info, FileText, Zap, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function UsageInfo() {
  const { t, i18n } = useTranslation();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "Excel公式生成器常见问题",
    isFreeQuestion: "Excel公式生成器是免费的吗？",
    isFreeAnswer: "是的，Excel公式生成器提供免费版本！登录后，您每月可以免费使用Excel公式生成器10次。这让您可以免费体验我们的AI驱动的Excel公式生成功能，无需任何费用。",
    howToUseQuestion: "如何使用Excel公式生成器？",
    howToUseIntro: "Excel公式生成器提供多种方式来创建带有强大公式的Excel文件：",
    aiGeneration: "AI公式生成：只需用自然语言描述您的Excel公式需求，我们的Excel公式生成器就会创建定制的电子表格和复杂公式",
    templates: "公式模板：从我们的预建Excel公式模板集合中选择，这些模板包含常用的Excel公式和函数",
    comingSoon: "即将推出：高级Excel公式生成功能 - 上传现有Excel文件，Excel公式生成器将自动添加和优化公式，提升您的电子表格功能。",
    advancedFeaturesTitle: "Excel公式生成器高级功能",
    advancedFeatures: [
      "自动生成VLOOKUP、INDEX-MATCH等复杂Excel公式",
      "创建嵌套IF语句和条件格式公式",
      "生成数据分析和统计计算公式",
      "自动化Excel报表公式生成",
      "财务模型Excel公式一键生成"
    ],
    useCasesTitle: "Excel公式生成器应用场景",
    useCases: [
      "财务报表：自动生成求和、平均值和百分比计算公式",
      "销售分析：创建销售趋势和预测公式",
      "库存管理：生成库存水平和补货点公式",
      "项目管理：自动计算完成百分比和截止日期公式",
      "人力资源：生成工资计算和绩效评估公式"
    ],
    whyChooseQuestion: "为什么选择我们的Excel公式生成器？",
    whyChooseAnswer: "我们的Excel公式生成器采用最先进的AI技术，能够理解您的具体需求并生成精确的Excel公式。与其他工具相比，我们的Excel公式生成器不仅能创建公式，还能提供详细解释和使用指南，帮助您真正理解公式的工作原理。Excel公式生成器支持中英文双语，适合各种技能水平的用户使用。"
  };
  
  // 英文内容
  const enContent = {
    title: "Excel Formula Generator FAQ",
    isFreeQuestion: "Is Excel Formula Generator free?",
    isFreeAnswer: "Yes, Excel Formula Generator offers a free tier! After logging in, you get 10 free generations per month. This allows you to try out our AI-powered Excel formula generation capabilities without any cost.",
    howToUseQuestion: "How do I use Excel Formula Generator?",
    howToUseIntro: "Excel Formula Generator offers multiple ways to create Excel files with powerful formulas:",
    aiGeneration: "AI Formula Generation: Simply describe your Excel formula needs in natural language, and our Excel Formula Generator will create a customized spreadsheet with complex formulas",
    templates: "Formula Templates: Choose from our collection of pre-built Excel formula templates that include common Excel formulas and functions",
    comingSoon: "Coming soon: Advanced Excel Formula Generation - Upload existing Excel files and Excel Formula Generator will automatically add and optimize formulas to enhance your spreadsheet functionality.",
    advancedFeaturesTitle: "Advanced Features of Excel Formula Generator",
    advancedFeatures: [
      "Automatic generation of complex Excel formulas like VLOOKUP and INDEX-MATCH",
      "Creation of nested IF statements and conditional formatting formulas",
      "Generation of data analysis and statistical calculation formulas",
      "Automated Excel report formula creation",
      "One-click financial model Excel formula generation"
    ],
    useCasesTitle: "Excel Formula Generator Use Cases",
    useCases: [
      "Financial Reports: Automatically generate sum, average, and percentage calculation formulas",
      "Sales Analysis: Create sales trend and forecast formulas",
      "Inventory Management: Generate inventory level and reorder point formulas",
      "Project Management: Auto-calculate completion percentage and deadline formulas",
      "Human Resources: Generate salary calculation and performance evaluation formulas"
    ],
    whyChooseQuestion: "Why choose our Excel Formula Generator?",
    whyChooseAnswer: "Our Excel Formula Generator uses state-of-the-art AI technology to understand your specific needs and generate precise Excel formulas. Compared to other tools, our Excel Formula Generator not only creates formulas but also provides detailed explanations and usage guides, helping you truly understand how the formulas work. Excel Formula Generator supports both English and Chinese, making it suitable for users of all skill levels."
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
                  <Zap className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.aiGeneration}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.templates}
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