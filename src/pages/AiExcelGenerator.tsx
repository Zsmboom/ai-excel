import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageSEO } from '../components/seo/PageSEO';
import { UsageInfo } from '../components/excel/UsageInfo';
import { Star, BookOpen, Video, Download, FileSpreadsheet, Calculator, ArrowRight, ChevronDown } from 'lucide-react';
import UserComments from '../components/sections/UserComments';
import Breadcrumb from '../components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import FeedbackWidget from '../components/common/FeedbackWidget';

const AiExcelGenerator: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "Excel公式生成器 - 智能AI Excel公式生成工具",
    subtitle: "使用我们的Excel公式生成器，轻松创建复杂Excel公式和电子表格",
    description: "Excel公式生成器是一款创新工具，能将您的文本描述转换为带有高级公式的专业Excel电子表格。适用于创建预算、发票、项目跟踪器和数据分析模板，所有这些都包含复杂的Excel公式。",
    featuresTitle: "Excel公式生成器的核心功能",
    features: [
      "即时Excel电子表格生成，集成高级公式功能",
      "智能Excel公式生成器，用于复杂计算和数据分析",
      "专业模板，预置Excel公式满足常见业务需求",
      "自动数据组织，提供智能Excel公式建议",
      "自定义Excel公式和函数集成，由我们的Excel公式生成器提供支持"
    ],
    formTitle: "描述您的Excel需求和公式需要",
    formPlaceholder: "示例：创建一个销售数据表，包含产品名称、价格、销量和总收入公式...",
    generateButton: "生成带公式的Excel",
    benefitsTitle: "为什么选择我们的Excel公式生成器",
    timeSaving: {
      title: "节省时间",
      description: "Excel公式生成器可以在几秒钟内创建复杂的公式，无需手动编写和调试。"
    },
    accuracy: {
      title: "提高准确性",
      description: "我们的Excel公式生成器创建的公式经过优化，减少错误和计算问题。"
    },
    forEveryone: {
      title: "适合所有技能水平",
      description: "无论您是Excel新手还是专家，Excel公式生成器都能帮助您创建专业级电子表格。"
    },
    testimonialsTitle: "Excel公式生成器用户评价",
    testimonials: [
      {
        name: "张先生，财务经理",
        rating: 5,
        comment: "Excel公式生成器彻底改变了我的工作方式。以前需要几小时编写的复杂公式，现在只需几分钟就能完成。Excel公式生成器是每个财务专业人士的必备工具！"
      },
      {
        name: "李女士，数据分析师",
        rating: 5,
        comment: "作为数据分析师，我每天都要处理大量Excel公式。Excel公式生成器不仅节省了我的时间，还教会了我更高效的公式编写方法。强烈推荐这款Excel公式生成器！"
      },
      {
        name: "王先生，小企业主",
        rating: 4,
        comment: "我不是Excel专家，但Excel公式生成器让我能够创建专业的财务报表和预算表。这款Excel公式生成器非常直观，即使是初学者也能轻松使用。"
      }
    ],
    resourcesTitle: "Excel公式生成器学习资源",
    resources: [
      {
        title: "Excel公式生成器入门指南",
        type: "guide",
        description: "了解如何使用Excel公式生成器创建您的第一个智能电子表格"
      },
      {
        title: "Excel公式生成器视频教程",
        type: "video",
        description: "观看我们的视频系列，掌握Excel公式生成器的高级功能"
      },
      {
        title: "Excel公式生成器模板库",
        type: "templates",
        description: "下载预制的Excel公式模板，快速开始您的项目"
      },
      {
        title: "Excel公式生成器常见问题解答",
        type: "faq",
        description: "查找有关Excel公式生成器使用的常见问题答案"
      }
    ]
  };
  
  // 英文内容
  const enContent = {
    title: "AI Excel Generator - Create Professional Spreadsheets Instantly",
    subtitle: "Transform text descriptions into powerful Excel files with AI",
    description: "Excel Generator uses advanced AI to convert your text into professionally formatted Excel spreadsheets with complex formulas. Create budgets, trackers, reports, and data analysis templates in seconds without manual work.",
    featuresTitle: "Key Excel AI Features",
    features: [
      "AI-powered spreadsheet creation with formula integration",
      "Smart formula suggestions for complex calculations",
      "Professional formatting and data organization",
      "Compatible with all Excel versions",
      "Time-saving templates for common business needs"
    ],
    formTitle: "Describe what you need",
    formPlaceholder: "Example: Create a sales tracker with product name, price, quantity, and total revenue formula...",
    generateButton: "Generate Excel File",
    benefitsTitle: "Why Choose ExcelEasy AI Generator",
    timeSaving: {
      title: "Save Hours of Work",
      description: "Our Excel AI creates complex spreadsheets in seconds that would take hours to build manually."
    },
    accuracy: {
      title: "Error-Free Formulas",
      description: "AI-generated Excel formulas are optimized for accuracy and performance."
    },
    forEveryone: {
      title: "For All Skill Levels",
      description: "Whether you're new to Excel or an expert, our AI helps you create professional-quality spreadsheets."
    },
    testimonialsTitle: "What Users Say About Our Excel AI",
    testimonials: [
      {
        name: "Michael R., Financial Analyst",
        rating: 5,
        comment: "This Excel AI tool has revolutionized how I build financial models. What used to take hours now takes minutes!"
      },
      {
        name: "Sarah K., Data Scientist",
        rating: 5,
        comment: "As someone who works with Excel formulas daily, this AI tool has been a game-changer for efficiency and accuracy."
      },
      {
        name: "David L., Small Business Owner",
        rating: 4,
        comment: "I'm not an Excel expert, but this tool lets me create professional financial reports and budgets with ease."
      }
    ],
    resourcesTitle: "Excel AI Resources",
    resources: [
      {
        title: "Getting Started with Excel AI",
        type: "guide",
        description: "Learn how to create your first AI-powered Excel spreadsheet"
      },
      {
        title: "Excel AI Video Tutorials",
        type: "video",
        description: "Watch our video series to master advanced Excel AI features"
      },
      {
        title: "Excel Template Library",
        type: "templates",
        description: "Download pre-built Excel templates to jumpstart your projects"
      },
      {
        title: "Excel AI FAQ",
        type: "faq",
        description: "Find answers to common questions about using our Excel AI tools"
      }
    ]
  };

  // 选择当前语言的内容
  const content = currentLanguage === 'zh' ? zhContent : enContent;

  // 渲染星级评分
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // 渲染资源图标
  const renderResourceIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="w-6 h-6 text-blue-600" />;
      case 'video':
        return <Video className="w-6 h-6 text-blue-600" />;
      case 'templates':
        return <Download className="w-6 h-6 text-blue-600" />;
      case 'faq':
        return <ChevronDown className="w-6 h-6 text-blue-600" />;
      default:
        return <FileSpreadsheet className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <>
      <PageSEO page="workspace" />

      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <FileSpreadsheet className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Excel AI Tool</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {content.subtitle}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {content.description}
            </p>

            <div className="mt-8">
              <Link 
                to="#generator-form" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Try Excel AI Generator
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {content.featuresTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Generator Form Section - 添加ID使锚点链接工作 */}
      <section id="generator-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">
                {content.formTitle}
              </h3>
              <textarea
                className="w-full h-32 px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={content.formPlaceholder}
              />
              <div className="mt-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  {content.generateButton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {content.benefitsTitle}
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{content.timeSaving.title}</h3>
                <p>{content.timeSaving.description}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{content.accuracy.title}</h3>
                <p>{content.accuracy.description}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{content.forEveryone.title}</h3>
                <p>{content.forEveryone.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 新增客户评价部分 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {content.testimonialsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="text-gray-600 font-medium">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 新增相关资源部分 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {content.resourcesTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.resources.map((resource, index) => (
                <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="mr-4">
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

      {/* Usage Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <UsageInfo />
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

export default AiExcelGenerator; 
