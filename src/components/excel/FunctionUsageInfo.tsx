import React from 'react';
import { Info, Calculator, Code, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FunctionUsageInfo() {
  const { t, i18n } = useTranslation();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "AI Excel函数和VBA宏生成器常见问题",
    isFreeQuestion: "AI Excel函数生成器和AI Excel VBA生成器是免费的吗？",
    isFreeAnswer: "是的，AI Excel函数生成器和AI Excel VBA生成器提供免费版本！登录后，您每月可以免费使用AI Excel函数生成器和AI Excel VBA生成器各10次。这让您可以免费体验我们的AI驱动的Excel函数生成和VBA宏生成功能。",
    howToUseQuestion: "如何使用AI Excel函数生成器和AI Excel VBA生成器？",
    howToUseIntro: "AI Excel函数生成器和AI Excel VBA生成器提供两种方式来创建Excel解决方案：",
    formulas: "AI Excel函数：使用AI Excel函数生成器生成复杂的Excel公式，并提供详细的实施指南",
    macros: "AI Excel VBA宏：使用AI Excel VBA生成器创建自定义VBA宏代码，自动化Excel任务和流程",
    description: "只需用自然语言描述您想要实现的目标，我们的AI Excel函数生成器和AI Excel VBA生成器就会生成相应的Excel公式或VBA代码，并提供详细的使用说明。",
    // 新增高级功能部分
    advancedFeaturesTitle: "AI Excel函数生成器和AI Excel VBA生成器高级功能",
    advancedFeatures: [
      "智能识别需求，自动选择最适合的Excel函数或VBA解决方案",
      "生成复杂的嵌套函数，如VLOOKUP与IF组合、INDEX-MATCH等",
      "创建带有错误处理和优化的VBA宏代码",
      "提供详细的函数和宏实施指南和示例",
      "支持数据验证、条件格式和高级计算功能"
    ],
    // 新增使用场景部分
    useCasesTitle: "AI Excel函数生成器和AI Excel VBA生成器应用场景",
    useCases: [
      "数据处理：使用AI Excel函数生成器创建数据清洗和转换公式",
      "报表自动化：通过AI Excel VBA生成器生成自动生成报表的宏",
      "数据分析：利用AI Excel函数生成器创建高级统计和分析函数",
      "任务自动化：使用AI Excel VBA生成器自动化重复性Excel任务",
      "自定义工具：结合AI Excel函数和VBA创建专业的Excel工具和应用"
    ],
    // 新增为什么选择我们部分
    whyChooseQuestion: "为什么选择我们的AI Excel函数生成器和AI Excel VBA生成器？",
    whyChooseAnswer: "我们的AI Excel函数生成器和AI Excel VBA生成器采用最先进的AI技术，能够理解您的具体需求并生成精确的Excel函数和VBA代码。与传统Excel帮助不同，AI Excel函数生成器和AI Excel VBA生成器提供上下文感知的建议，完整的解决方案生成，以及详细的实施指南。无论您是Excel新手还是专家，AI Excel函数生成器和AI Excel VBA生成器都能帮助您提高工作效率。"
  };
  
  // 英文内容
  const enContent = {
    title: "AI Excel Functions & VBA Macro Generator FAQ",
    isFreeQuestion: "Are AI Excel Functions Generator and AI Excel VBA Generator free?",
    isFreeAnswer: "Yes, AI Excel Functions Generator and AI Excel VBA Generator offer a free tier! After logging in, you get 10 free generations per month for both AI Excel Functions and AI Excel VBA. This allows you to try out our AI-powered Excel function generation and VBA macro creation capabilities without any cost.",
    howToUseQuestion: "How do I use AI Excel Functions Generator and AI Excel VBA Generator?",
    howToUseIntro: "AI Excel Functions Generator and AI Excel VBA Generator help you create Excel solutions in two ways:",
    formulas: "AI Excel Functions: Generate complex Excel formulas with step-by-step implementation guides using our AI Excel Functions Generator",
    macros: "AI Excel VBA Macros: Create custom VBA macro code to automate Excel tasks and processes with our AI Excel VBA Generator",
    description: "Simply describe what you want to achieve in natural language, and our AI Excel Functions Generator and AI Excel VBA Generator will create the appropriate Excel formula or VBA code along with detailed instructions on how to use it.",
    // 新增高级功能部分
    advancedFeaturesTitle: "Advanced Features of AI Excel Functions Generator and AI Excel VBA Generator",
    advancedFeatures: [
      "Intelligent requirement analysis to automatically select the most appropriate Excel function or VBA solution",
      "Generation of complex nested functions like VLOOKUP with IF combinations, INDEX-MATCH, and more",
      "Creation of VBA macro code with error handling and optimization",
      "Detailed implementation guides and examples for both functions and macros",
      "Support for data validation, conditional formatting, and advanced calculation capabilities"
    ],
    // 新增使用场景部分
    useCasesTitle: "AI Excel Functions Generator and AI Excel VBA Generator Use Cases",
    useCases: [
      "Data Processing: Create data cleaning and transformation formulas with AI Excel Functions Generator",
      "Report Automation: Generate macros that automatically create reports using AI Excel VBA Generator",
      "Data Analysis: Build advanced statistical and analytical functions with AI Excel Functions Generator",
      "Task Automation: Automate repetitive Excel tasks with AI Excel VBA Generator",
      "Custom Tools: Combine AI Excel Functions and VBA to create professional Excel tools and applications"
    ],
    // 新增为什么选择我们部分
    whyChooseQuestion: "Why choose our AI Excel Functions Generator and AI Excel VBA Generator?",
    whyChooseAnswer: "Our AI Excel Functions Generator and AI Excel VBA Generator use state-of-the-art AI technology to understand your specific needs and generate precise Excel functions and VBA code. Unlike traditional Excel help, AI Excel Functions Generator and AI Excel VBA Generator provide context-aware suggestions, complete solution generation, and detailed implementation guides. Whether you're an Excel novice or expert, AI Excel Functions Generator and AI Excel VBA Generator can help you improve your productivity."
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
                  <Calculator className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.formulas}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.macros}
                  </span>
                </li>
              </ul>
              <p className="text-gray-600">
                {content.description}
              </p>
            </div>
          </div>
          
          {/* 新增高级功能部分 */}
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
          
          {/* 新增应用场景部分 */}
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
          
          {/* 新增为什么选择我们部分 */}
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