import React, { useState } from 'react';
import { Wrench, BookOpen, Video, Download, Star, FileSpreadsheet } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FunctionInput } from '../components/excel/FunctionInput';
import { FunctionResult } from '../components/excel/FunctionResult';
import { FunctionUsageInfo } from '../components/excel/FunctionUsageInfo';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import { ProgressBar } from '../components/ui/ProgressBar';
import UserComments from '../components/sections/UserComments';
import { useAnalytics } from '../hooks/useAnalytics';
import { FunctionType, FunctionGenerationResult } from '../types/excel';
import Breadcrumb from '../components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import FeedbackWidget from '../components/common/FeedbackWidget';
import { useExcelFunctionGeneration } from '../hooks/useExcelFunctionGeneration';

const ExcelFunctions: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [functionType, setFunctionType] = useState<FunctionType>('formula');
  const [resultData, setResultData] = useState<FunctionGenerationResult | null>(null);
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAnalytics();
  
  const {
    generateFunction,
    loading,
    error,
    progress
  } = useExcelFunctionGeneration();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "AI Excel函数和VBA宏生成器 - 智能Excel自动化工具",
    subtitle: "使用自然语言处理创建强大的AI Excel函数和AI Excel VBA宏",
    description: "通过我们的AI Excel函数生成器和AI Excel VBA生成器，将复杂的Excel任务转换为简单的命令。完美适用于创建高级公式、自定义函数和自动化VBA宏。",
    featuresTitle: "AI Excel函数生成器和AI Excel VBA生成器核心功能",
    features: [
      "即时Excel公式生成，附带详细解释",
      "自定义AI Excel VBA宏创建，实现自动化",
      "复杂函数组合和嵌套",
      "数据验证和错误处理",
      "逐步实施指南"
    ],
    benefitsTitle: "为什么选择我们的AI Excel函数生成器和AI Excel VBA生成器",
    benefits: [
      {
        title: "节省时间",
        description: "AI Excel函数生成器和AI Excel VBA生成器可以在几秒钟内创建复杂的公式和宏，无需手动编写和调试。"
      },
      {
        title: "提高准确性",
        description: "我们的AI Excel函数生成器和AI Excel VBA生成器创建的公式和宏经过优化，减少错误和计算问题。"
      },
      {
        title: "适合所有技能水平",
        description: "无论您是Excel新手还是专家，AI Excel函数生成器和AI Excel VBA生成器都能帮助您创建专业级函数和宏。"
      }
    ],
    resourcesTitle: "AI Excel函数生成器和AI Excel VBA生成器学习资源",
    resources: [
      {
        title: "AI Excel函数生成器入门指南",
        type: "guide",
        description: "了解如何使用AI Excel函数生成器创建您的第一个智能函数"
      },
      {
        title: "AI Excel VBA生成器视频教程",
        type: "video",
        description: "观看我们的视频系列，掌握AI Excel VBA生成器的高级功能"
      },
      {
        title: "AI Excel函数和VBA模板库",
        type: "templates",
        description: "下载预制的AI Excel函数和VBA模板，快速开始您的项目"
      },
      {
        title: "AI Excel函数生成器常见问题解答",
        type: "faq",
        description: "查找有关AI Excel函数生成器和AI Excel VBA生成器使用的常见问题答案"
      }
    ]
  };
  
  // 英文内容
  const enContent = {
    title: "AI Excel Functions & VBA Macro Generator - Smart Excel Automation",
    subtitle: "Create powerful AI Excel Functions and AI Excel VBA macros using natural language processing",
    description: "Transform complex Excel tasks into simple commands with our AI Excel Functions Generator and AI Excel VBA Generator. Perfect for creating advanced formulas, custom functions, and automated VBA macros.",
    featuresTitle: "Key Features of AI Excel Functions Generator and AI Excel VBA Generator",
    features: [
      "Instant Excel formula generation with explanations",
      "Custom AI Excel VBA macro creation for automation",
      "Complex function combinations and nesting",
      "Data validation and error handling",
      "Step-by-step implementation guides"
    ],
    benefitsTitle: "Why Choose Our AI Excel Functions Generator and AI Excel VBA Generator",
    benefits: [
      {
        title: "Save Time",
        description: "AI Excel Functions Generator and AI Excel VBA Generator create complex formulas and macros in seconds, eliminating the need for manual coding and debugging."
      },
      {
        title: "Improve Accuracy",
        description: "Our AI Excel Functions Generator and AI Excel VBA Generator create optimized formulas and macros that reduce errors and calculation issues."
      },
      {
        title: "For All Skill Levels",
        description: "Whether you're an Excel novice or expert, AI Excel Functions Generator and AI Excel VBA Generator help you create professional-grade functions and macros."
      }
    ],
    resourcesTitle: "AI Excel Functions Generator and AI Excel VBA Generator Learning Resources",
    resources: [
      {
        title: "AI Excel Functions Generator Getting Started Guide",
        type: "guide",
        description: "Learn how to use AI Excel Functions Generator to create your first intelligent function"
      },
      {
        title: "AI Excel VBA Generator Video Tutorials",
        type: "video",
        description: "Watch our video series to master advanced features of AI Excel VBA Generator"
      },
      {
        title: "AI Excel Functions & VBA Template Library",
        type: "templates",
        description: "Download pre-made AI Excel Functions and VBA templates to jumpstart your projects"
      },
      {
        title: "AI Excel Functions Generator FAQ",
        type: "faq",
        description: "Find answers to common questions about using AI Excel Functions Generator and AI Excel VBA Generator"
      }
    ]
  };
  
  // 根据当前语言选择内容
  const content = currentLanguage.startsWith('zh') ? zhContent : enContent;
  
  // 渲染资源图标
  const renderResourceIcon = (type: string) => {
    switch(type) {
      case 'guide':
        return <BookOpen className="h-5 w-5 text-blue-600" />;
      case 'video':
        return <Video className="h-5 w-5 text-blue-600" />;
      case 'templates':
      case 'faq':
      default:
        return <Download className="h-5 w-5 text-blue-600" />;
    }
  };

  const handleFunctionTypeChange = (type: FunctionType) => {
    setFunctionType(type);
    trackEvent('select_function_type', 'excel_functions', type);
  };

  const handleGenerateFunction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    trackEvent('generate_function', 'excel_functions', `${functionType}_function`);
    const result = await generateFunction(prompt, functionType);
    
    if (result) {
      setResultData(result);
      trackEvent('function_generated_success', 'excel_functions', functionType);
    }
  };

  const handleCopyCode = () => {
    if (resultData) {
      const textToCopy = functionType === 'vba' && resultData.vbaCode 
        ? resultData.vbaCode 
        : resultData.formula;
        
      navigator.clipboard.writeText(textToCopy);
      trackEvent('copy_function_code', 'excel_functions', functionType);
    }
  };

  return (
    <>
      <PageSEO page="excelFunctions" />
      
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-16 pb-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <FileSpreadsheet className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Excel Functions</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {currentLanguage === 'zh' ? zhContent.title : enContent.title}
            </h1>
            <p className="text-lg text-gray-600">
              {currentLanguage === 'zh' ? zhContent.subtitle : enContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section id="function-generator" className="py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-4">
              <div>
                <ShareButtons
                  url={window.location.href}
                  title={t('pages.excelFunctions.shareTitle')}
                  description={t('pages.excelFunctions.shareDescription')}
                  hashtags={['AIExcel', 'FreeTools', 'ExcelFormulas']}
                />
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>✨ {t('common.shareFeatures.free')}</span>
                  <span>🔒 {t('common.shareFeatures.noLogin')}</span>
                  <span>🌍 {t('common.shareFeatures.multiLanguage')}</span>
                </div>
              </div>
            </header>
            
            <section className="bg-white rounded-lg shadow-lg p-6 border border-gray-200" aria-label="Function Generation">
              <h2 className="text-2xl font-bold mb-6">{currentLanguage.startsWith('zh') ? '创建Excel函数或VBA宏' : 'Create Excel Function or VBA Macro'}</h2>
              <FunctionInput
                value={prompt}
                onChange={setPrompt}
                onSubmit={handleGenerateFunction}
                loading={loading}
                functionType={functionType}
                onTypeChange={handleFunctionTypeChange}
              />

              {loading && progress.status && (
                <div className="mt-4">
                  <ProgressBar 
                    progress={progress.progress} 
                    status={progress.status}
                  />
                </div>
              )}

              {error && (
                <div role="alert" className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {resultData && <FunctionResult result={resultData} />}
            </section>
            
            <section className="mt-8">
              <FunctionUsageInfo />
            </section>
          </div>
        </div>
      </section>
      
      {/* 功能特点部分 - 移到工具区域后面 */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{content.featuresTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-5 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-lg font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 优势部分 */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{content.benefitsTitle}</h2>
            <div className="space-y-4">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 学习资源部分 */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{content.resourcesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.resources.map((resource, index) => (
                <div key={index} className="flex items-start p-5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="mr-3">
                    {renderResourceIcon(resource.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{resource.title}</h3>
                    <p className="text-gray-600 text-sm">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* User Comments Section */}
      <UserComments />

      {/* 添加全局反馈组件 */}
      <FeedbackWidget />
    </>
  );
};

export default ExcelFunctions;