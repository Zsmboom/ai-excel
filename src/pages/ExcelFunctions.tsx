import React, { useState } from 'react';
import { Wrench, BookOpen, Video, Download, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FunctionInput } from '../components/excel/FunctionInput';
import { FunctionResult } from '../components/excel/FunctionResult';
import { FunctionUsageInfo } from '../components/excel/FunctionUsageInfo';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { useExcelFunctions } from '../hooks/useExcelFunctions';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import { useExcelFunctionGeneration } from '../hooks/useExcelFunctionGeneration';
import { ProgressBar } from '../components/common/ProgressBar';
import UserComments from '../components/sections/UserComments';

export default function ExcelFunctions() {
  const [prompt, setPrompt] = useState('');
  const { 
    generateFunction, 
    loading, 
    error, 
    result,
    functionType,
    setFunctionType
  } = useExcelFunctions();
  const { t, i18n } = useTranslation();
  const {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await generateFunction(prompt);
  };

  return (
    <>
      <PageSEO page="excelFunctions" />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
              <p className="text-gray-600 mt-2">
                {content.subtitle}
              </p>
              <p className="text-gray-700 mt-4">
                {content.description}
              </p>
              <div className="mt-4">
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
            
            {/* 功能特点部分 */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">{content.featuresTitle}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 text-lg font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8" aria-label="Function Generation">
              <FunctionInput
                value={prompt}
                onChange={setPrompt}
                onSubmit={handleSubmit}
                loading={loading}
                functionType={functionType}
                onTypeChange={setFunctionType}
              />

              {loading && (
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

              {result && <FunctionResult result={result} />}
            </section>
            
            {/* 优势部分 */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">{content.benefitsTitle}</h2>
              <div className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* 学习资源部分 */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">{content.resourcesTitle}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {content.resources.map((resource, index) => (
                  <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
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
            </section>

            <section aria-label="Usage Instructions">
              <FunctionUsageInfo />
            </section>
          </div>
        </div>
      </main>
      
      {/* User Comments Section */}
      <UserComments />
    </>
  );
}