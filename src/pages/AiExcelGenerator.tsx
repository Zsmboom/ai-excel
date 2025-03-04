import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageSEO } from '../components/seo/PageSEO';
import FAQ from '../components/FAQ';
import { UsageInfo } from '../components/excel/UsageInfo';
import { Star, BookOpen, Video, Download } from 'lucide-react';

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
    title: "Excel Formula Generator - Smart AI Excel Formula Creation Tool",
    subtitle: "Use our Excel Formula Generator to easily create complex Excel formulas and spreadsheets",
    description: "Excel Formula Generator is an innovative tool that transforms your text descriptions into professionally formatted Excel spreadsheets with advanced formulas. Perfect for creating budgets, invoices, project trackers, and data analysis templates, all with complex Excel formulas.",
    featuresTitle: "Key Features of Excel Formula Generator",
    features: [
      "Instant Excel spreadsheet generation with advanced formula integration",
      "Smart Excel Formula Generator for complex calculations and data analysis",
      "Professional templates with pre-built Excel formulas for common business needs",
      "Automated data organization with intelligent Excel formula suggestions",
      "Custom Excel formulas and functions integration powered by our Excel Formula Generator"
    ],
    formTitle: "Describe your Excel requirements and formula needs",
    formPlaceholder: "Example: Create a sales data table with product name, price, quantity sold, and total revenue formula...",
    generateButton: "Generate Excel with Formulas",
    benefitsTitle: "Why Choose Our Excel Formula Generator",
    timeSaving: {
      title: "Save Time",
      description: "Excel Formula Generator creates complex formulas in seconds, eliminating the need for manual coding and debugging."
    },
    accuracy: {
      title: "Improve Accuracy",
      description: "Our Excel Formula Generator creates optimized formulas that reduce errors and calculation issues."
    },
    forEveryone: {
      title: "For All Skill Levels",
      description: "Whether you're an Excel novice or expert, Excel Formula Generator helps you create professional-grade spreadsheets."
    },
    testimonialsTitle: "Excel Formula Generator User Testimonials",
    testimonials: [
      {
        name: "John D., Financial Manager",
        rating: 5,
        comment: "Excel Formula Generator has completely transformed how I work. Complex formulas that used to take hours to write now take minutes. Excel Formula Generator is a must-have tool for every finance professional!"
      },
      {
        name: "Sarah L., Data Analyst",
        rating: 5,
        comment: "As a data analyst, I work with Excel formulas daily. Excel Formula Generator not only saves me time but has taught me more efficient ways to write formulas. Highly recommend this Excel Formula Generator!"
      },
      {
        name: "Michael T., Small Business Owner",
        rating: 4,
        comment: "I'm not an Excel expert, but Excel Formula Generator allows me to create professional financial reports and budgets. This Excel Formula Generator is very intuitive, even for beginners."
      }
    ],
    resourcesTitle: "Excel Formula Generator Learning Resources",
    resources: [
      {
        title: "Excel Formula Generator Getting Started Guide",
        type: "guide",
        description: "Learn how to use Excel Formula Generator to create your first intelligent spreadsheet"
      },
      {
        title: "Excel Formula Generator Video Tutorials",
        type: "video",
        description: "Watch our video series to master advanced features of Excel Formula Generator"
      },
      {
        title: "Excel Formula Generator Template Library",
        type: "templates",
        description: "Download pre-made Excel formula templates to jumpstart your projects"
      },
      {
        title: "Excel Formula Generator FAQ",
        type: "faq",
        description: "Find answers to common questions about using Excel Formula Generator"
      }
    ]
  };
  
  // 根据当前语言选择内容
  const content = currentLanguage.startsWith('zh') ? zhContent : enContent;
  
  // 渲染星级评分
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };
  
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
  
  return (
    <>
      <PageSEO 
        page="workspace"
        lastModified="2024-03-20"
      />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {content.subtitle}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {content.description}
            </p>
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

      {/* Generator Form Section */}
      <section className="py-12 bg-gray-50">
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
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {content.generateButton}
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

      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default AiExcelGenerator; 
