import React from 'react';
import { Info, Image, FileSpreadsheet, Star, CheckCircle, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function PicUsageInfo() {
  const { t, i18n } = useTranslation();
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "AI图片转Excel表格常见问题",
    isFreeQuestion: "AI图片转Excel表格工具是免费的吗？",
    isFreeAnswer: "是的，AI图片转Excel表格工具提供免费版本！登录后，您每月可以免费使用AI图片转Excel表格工具10次。这让您可以免费体验我们的AI驱动的图片转Excel表格功能，无需任何费用。",
    howToUseQuestion: "如何使用AI图片转Excel表格工具？",
    howToUseIntro: "AI图片转Excel表格工具提供简单直观的使用方式：",
    imageUpload: "上传图片：只需上传包含表格数据的图片，AI图片转Excel表格工具会自动识别表格结构",
    dataExtraction: "数据提取：AI图片转Excel表格工具会智能提取表格中的所有数据，包括文本、数字和日期",
    downloadExcel: "下载Excel：AI图片转Excel表格工具处理完成后，您可以立即下载生成的Excel文件",
    advancedFeaturesTitle: "AI图片转Excel表格工具高级功能",
    advancedFeatures: [
      "精确的表格结构识别技术",
      "多格式图片支持（PNG、JPG、PDF）",
      "智能数据提取和格式化",
      "自动列行检测和表格重建",
      "数据验证和错误修正"
    ],
    useCasesTitle: "AI图片转Excel表格工具应用场景",
    useCases: [
      "财务报表：使用AI图片转Excel表格工具将纸质财务报表转换为可编辑Excel",
      "数据分析：通过AI图片转Excel表格工具将图表数据转换为可分析的电子表格",
      "文档数字化：利用AI图片转Excel表格工具将扫描文档中的表格数据提取出来",
      "研究数据：使用AI图片转Excel表格工具将研究论文中的表格转换为Excel",
      "库存管理：借助AI图片转Excel表格工具将纸质库存记录转换为数字化表格"
    ],
    whyChooseQuestion: "为什么选择我们的AI图片转Excel表格工具？",
    whyChooseAnswer: "我们的AI图片转Excel表格工具采用最先进的AI技术，能够准确识别各种复杂表格结构并提取数据。与其他工具相比，AI图片转Excel表格工具不仅提供更高的准确率，还能保留原始表格的格式和结构。AI图片转Excel表格工具支持中英文双语，适合各种技能水平的用户使用，无需专业知识即可轻松将图片转换为Excel表格。"
  };
  
  // 英文内容
  const enContent = {
    title: "AI Picture to Excel Spreadsheets FAQ",
    isFreeQuestion: "Is AI Picture to Excel spreadsheets tool free?",
    isFreeAnswer: "Yes, our AI Picture to Excel spreadsheets tool offers a free tier! After logging in, you get 10 free conversions per month with our AI Picture to Excel spreadsheets tool. This allows you to experience our AI-powered image to Excel conversion capabilities without any cost.",
    howToUseQuestion: "How do I use the AI Picture to Excel spreadsheets tool?",
    howToUseIntro: "Our AI Picture to Excel spreadsheets tool offers a simple and intuitive process:",
    imageUpload: "Upload Image: Simply upload your image containing tables or data, and our AI Picture to Excel spreadsheets tool will automatically recognize the table structure",
    dataExtraction: "Data Extraction: The AI Picture to Excel spreadsheets tool intelligently extracts all data from the table, including text, numbers, and dates",
    downloadExcel: "Download Excel: Once the AI Picture to Excel spreadsheets tool completes processing, you can immediately download the generated Excel file",
    advancedFeaturesTitle: "Advanced Features of AI Picture to Excel Spreadsheets Tool",
    advancedFeatures: [
      "Precise table structure recognition technology",
      "Multi-format image support (PNG, JPG, PDF)",
      "Intelligent data extraction and formatting",
      "Automatic column and row detection",
      "Data validation and error correction"
    ],
    useCasesTitle: "AI Picture to Excel Spreadsheets Tool Use Cases",
    useCases: [
      "Financial Reports: Convert paper financial statements to editable Excel with AI Picture to Excel spreadsheets tool",
      "Data Analysis: Transform chart data into analyzable spreadsheets using AI Picture to Excel spreadsheets tool",
      "Document Digitization: Extract table data from scanned documents with AI Picture to Excel spreadsheets tool",
      "Research Data: Convert tables from research papers to Excel using AI Picture to Excel spreadsheets tool",
      "Inventory Management: Transform paper inventory records into digital spreadsheets with AI Picture to Excel spreadsheets tool"
    ],
    whyChooseQuestion: "Why choose our AI Picture to Excel spreadsheets tool?",
    whyChooseAnswer: "Our AI Picture to Excel spreadsheets tool uses state-of-the-art AI technology to accurately recognize various complex table structures and extract data. Compared to other tools, the AI Picture to Excel spreadsheets tool not only provides higher accuracy but also preserves the original table format and structure. The AI Picture to Excel spreadsheets tool supports both English and Chinese, making it suitable for users of all skill levels, with no specialized knowledge required to easily convert images to Excel spreadsheets."
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
                  <Image className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.imageUpload}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.dataExtraction}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileSpreadsheet className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">
                    {content.downloadExcel}
                  </span>
                </li>
              </ul>
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