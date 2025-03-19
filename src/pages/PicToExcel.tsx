import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import { FileSpreadsheet, Send, Download, Upload, Camera, ImageIcon, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ExcelPreview } from '../components/excel/ExcelPreview';
import { TableConfig } from '../components/excel/TableConfig';
import { PicUsageInfo } from '../components/excel/PicUsageInfo';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import UserComments from '../components/sections/UserComments';
import { usePicToExcelGeneration } from '../hooks/usePicToExcelGeneration';
import type { ExcelData } from '../types/excel';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from '../components/common/Breadcrumb';
import FeedbackWidget from '../components/common/FeedbackWidget';
import { Link } from 'react-router-dom';

interface PreviewData {
  fileName: string;
  blob: Blob;
  data: ExcelData[];
  summary: string;
}

const PicToExcel: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAnalytics();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [tableConfig, setTableConfig] = useState({
    enableColumnSums: false,
    enablePivotTables: false,
    enableSorting: false,
  });

  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "AI图片转Excel表格 - 智能表格识别工具",
    subtitle: "使用AI图片转Excel表格工具将图片中的表格数据转换为可编辑的Excel电子表格",
    description: "我们的AI图片转Excel表格工具能够准确识别并提取图片、截图或扫描文档中的表格数据。AI图片转Excel表格工具完美适用于数字化纸质表格、转换PDF表格和处理基于图像的数据。",
    featuresTitle: "AI图片转Excel表格工具核心功能",
    features: [
      "精确的表格结构识别技术",
      "多格式图片支持（PNG、JPG、PDF）",
      "智能数据提取和格式化",
      "自动列行检测和表格重建",
      "数据验证和错误修正"
    ],
    uploadTitle: "上传图片到AI图片转Excel表格工具",
    uploadImage: "上传包含表格的图片",
    uploadHint: "支持PNG、JPG、GIF格式，最大10MB",
    descriptionLabel: "额外说明（可选）",
    descriptionPlaceholder: "添加详细信息帮助AI图片转Excel表格工具更好地理解表格结构和数据要求...",
    generateButton: "使用AI图片转Excel表格工具转换",
    previewTitle: "AI图片转Excel表格工具预览",
    downloadButton: "下载AI图片转Excel表格工具生成的Excel文件",
    errors: {
      invalidFile: "无效的文件格式，请上传图片文件",
      processingError: "处理图片时出错，请重试"
    }
  };
  
  // 英文内容
  const enContent = {
    title: "AI Picture to Excel Spreadsheets - Smart Table Recognition Tool",
    subtitle: "Transform images with tables into editable Excel spreadsheets using AI Picture to Excel spreadsheets tool",
    description: "Our AI Picture to Excel spreadsheets tool accurately recognizes and extracts table data from images, screenshots, or scanned documents. Perfect for digitizing printed tables, converting PDF tables, and processing image-based data.",
    featuresTitle: "Key Features of AI Picture to Excel Spreadsheets Tool",
    features: [
      "Precise table structure recognition technology",
      "Multi-format image support (PNG, JPG, PDF)",
      "Intelligent data extraction and formatting",
      "Automatic column and row detection",
      "Data validation and error correction"
    ],
    uploadTitle: "Upload to AI Picture to Excel Spreadsheets Tool",
    uploadImage: "Upload Image with Tables",
    uploadHint: "Supports PNG, JPG, GIF formats up to 10MB",
    descriptionLabel: "Additional Context (Optional)",
    descriptionPlaceholder: "Add details to help AI Picture to Excel spreadsheets tool better understand the table structure and data requirements...",
    generateButton: "Convert with AI Picture to Excel Spreadsheets Tool",
    previewTitle: "AI Picture to Excel Spreadsheets Preview",
    downloadButton: "Download Excel File from AI Picture to Excel Spreadsheets Tool",
    errors: {
      invalidFile: "Invalid file format, please upload an image file",
      processingError: "Error processing the image, please try again"
    }
  };
  
  // 根据当前语言选择内容
  const content = currentLanguage.startsWith('zh') ? zhContent : enContent;

  const {
    generateFromImage,
    loading,
    error,
    progress
  } = usePicToExcelGeneration();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // 检查文件类型
    if (!file.type.startsWith('image/')) {
      alert(content.errors.invalidFile);
      return;
    }
    
    setSelectedImage(file);
    trackEvent('upload_image', 'pic_to_excel', file.name);
    
    // 创建图片预览
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateExcel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) return;
    
    try {
      trackEvent('generate_excel_from_image', 'pic_to_excel', selectedImage.name);
      
      // 将图片转换为base64
      const reader = new FileReader();
      const imageBase64Promise = new Promise<string>((resolve) => {
        reader.onloadend = () => {
          const base64 = reader.result as string;
          resolve(base64.split(',')[1]); // 移除 data:image/jpeg;base64, 前缀
        };
        reader.readAsDataURL(selectedImage);
      });
      const imageBase64 = await imageBase64Promise;
      
      // 使用正确的参数类型调用函数
      const result = await generateFromImage(imageBase64, description, tableConfig);
      
      if (result) {
        setPreviewData(result);
        trackEvent('image_to_excel_success', 'pic_to_excel', result.fileName);
      }
    } catch (err) {
      console.error('Error generating Excel from image:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      trackEvent('image_to_excel_error', 'pic_to_excel', errorMessage);
      alert(content.errors.processingError);
    }
  };

  const handleDownload = () => {
    if (!previewData) return;
    
    trackEvent('download_excel_from_image', 'pic_to_excel', previewData.fileName);
    const url = URL.createObjectURL(previewData.blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = previewData.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageSEO page="picToExcel" />
      
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-16 pb-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <ImageIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Image to Excel Converter</span>
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

      <section id="upload-section" className="py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-4">
              <div>
                <ShareButtons
                  url={window.location.href}
                  title={currentLanguage === 'zh' ? zhContent.title : enContent.title}
                  description={currentLanguage === 'zh' ? zhContent.description : enContent.description}
                  hashtags={['AIExcel', 'FreeTools', 'ImageToExcel', 'OCR']}
                />
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>✨ {t('common.shareFeatures.free')}</span>
                  <span>🔒 {t('common.shareFeatures.noLogin')}</span>
                  <span>🌍 {t('common.shareFeatures.multiLanguage')}</span>
                </div>
              </div>
            </header>
            
            <section className="bg-white rounded-lg shadow-lg p-6 border border-gray-200" aria-label="Excel Generation">
              <h2 className="text-2xl font-bold mb-6">{content.uploadTitle}</h2>
              <form onSubmit={handleGenerateExcel} className="space-y-4">
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="image-upload"
                      type="file"
                      onChange={handleImageUpload}
                    />
                    <label htmlFor="image-upload" className="cursor-pointer w-full">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-500 rounded-full mb-3">
                          <Upload className="h-8 w-8" />
                        </div>
                        <span className="text-base font-medium text-gray-900 mb-1">
                          {content.uploadImage}
                        </span>
                        <span className="text-xs text-gray-500 mb-4">
                          {content.uploadHint}
                        </span>
                        <div className="w-full max-w-xs bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition">
                          {currentLanguage.startsWith('zh') ? '选择文件' : 'Select File'}
                        </div>
                      </div>
                    </label>

                    {imagePreview && (
                      <div className="mt-6 w-full border-t pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{currentLanguage.startsWith('zh') ? '预览' : 'Preview'}</span>
                          <button
                            onClick={() => {
                              setSelectedImage(null);
                              setImagePreview(null);
                            }}
                            className="text-xs text-red-500 hover:text-red-700"
                          >
                            {currentLanguage.startsWith('zh') ? '移除' : 'Remove'}
                          </button>
                        </div>
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="max-w-full max-h-[300px] mx-auto rounded-lg shadow-sm border border-gray-200" 
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      {content.descriptionLabel}
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder={content.descriptionPlaceholder}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <TableConfig config={tableConfig} onChange={setTableConfig} />

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={loading || !selectedImage}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      {loading ? (
                        <LoadingSpinner size={20} />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {content.generateButton}
                    </button>
                  </div>
                </div>
              </form>

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

              {previewData && (
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {content.previewTitle}
                    </h3>
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {content.downloadButton}
                    </button>
                  </div>
                  <ExcelPreview data={previewData.data} />
                </div>
              )}
            </section>

            <section className="mt-8" aria-label="Usage Instructions">
              <PicUsageInfo />
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

      {/* User Comments Section */}
      <UserComments />

      {/* 添加全局反馈组件 */}
      <FeedbackWidget />
    </>
  );
};

export default PicToExcel; 