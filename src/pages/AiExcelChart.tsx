import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import { FileSpreadsheet, Send, Download, Upload, BarChart, LineChart, PieChart, ScatterChart, Share2, X, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ChartUsageInfo } from '../components/excel/ChartUsageInfo';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import { useExcelChartGeneration } from '../hooks/useExcelChartGeneration';
import { ChartPreview, ChartPreviewRef } from '../components/excel/ChartPreview';
import type { ChartGenerationResult } from '../hooks/useExcelChart';
import UserComments from '../components/sections/UserComments';
import { useAnalytics } from '../hooks/useAnalytics';
import Breadcrumb from '../components/common/Breadcrumb';
import FeedbackWidget from '../components/common/FeedbackWidget';

type ChartType = 'bar' | 'line' | 'pie' | 'scatter';

interface ChartOption {
  id: ChartType;
  name: string;
  icon: React.ReactNode;
}

// 用于编码/解码分享数据的函数
const encodeData = (data: ChartGenerationResult) => {
  try {
    const jsonStr = JSON.stringify(data);
    return btoa(encodeURIComponent(jsonStr));
  } catch (err) {
    console.error('Error encoding chart data:', err);
    return null;
  }
};

const decodeData = (encoded: string): ChartGenerationResult | null => {
  try {
    const jsonStr = decodeURIComponent(atob(encoded));
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Error decoding chart data:', err);
    return null;
  }
};

const AiExcelChart: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { trackEvent } = useAnalytics();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedChartType, setSelectedChartType] = useState<ChartType>('bar');
  const [analysisPrompt, setAnalysisPrompt] = useState('');
  const [previewData, setPreviewData] = useState<ChartGenerationResult | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  
  // 根据当前语言选择显示内容
  const currentLanguage = i18n.language;
  
  // 中文内容
  const zhContent = {
    title: "AI Excel图表生成器 - 智能数据可视化工具",
    subtitle: "使用AI Excel图表生成器将Excel数据转换为专业图表和见解",
    description: "我们的AI Excel图表生成器能够分析您的Excel数据并创建视觉上吸引人的图表。AI Excel图表生成器完美适用于数据分析、报告生成和商业演示。",
    featuresTitle: "AI Excel图表生成器核心功能",
    features: [
      "智能图表类型选择与推荐",
      "自动数据分析和洞察生成",
      "专业图表格式化和美化",
      "多种可视化选项和图表类型",
      "交互式图表定制和分享功能"
    ],
    uploadTitle: "上传到AI Excel图表生成器",
    uploadFile: "上传Excel文件",
    uploadHint: "支持.xlsx和.xls格式，最大10MB",
    chartTypeLabel: "选择图表类型",
    chartTypes: {
      bar: "柱状图",
      line: "折线图",
      pie: "饼图",
      scatter: "散点图"
    },
    promptLabel: "分析提示（可选）",
    promptPlaceholder: "添加详细信息帮助AI Excel图表生成器更好地理解您的数据和可视化需求...",
    generateButton: "使用AI Excel图表生成器生成图表",
    previewTitle: "AI Excel图表生成器预览",
    downloadButton: "下载图表",
    shareButton: "分享图表",
    insights: "AI Excel图表生成器数据洞察",
    chartTitle: "AI Excel图表生成器交互式预览",
    errors: {
      invalidFile: "无效的文件格式，请上传Excel文件",
      processingError: "处理数据时出错，请重试"
    }
  };
  
  // 英文内容
  const enContent = {
    title: "AI Excel Chart Generator - Smart Data Visualization Tool",
    subtitle: "Transform Excel data into professional charts and insights with AI Excel Chart Generator",
    description: "Our AI Excel Chart Generator analyzes your Excel data and creates visually appealing charts. Perfect for data analysis, report generation, and business presentations.",
    featuresTitle: "Key Features of AI Excel Chart Generator",
    features: [
      "Intelligent chart type selection and recommendation",
      "Automated data analysis and insight generation",
      "Professional chart formatting and beautification",
      "Multiple visualization options and chart types",
      "Interactive chart customization and sharing capabilities"
    ],
    uploadTitle: "Upload to AI Excel Chart Generator",
    uploadFile: "Upload Excel File",
    uploadHint: "Supports .xlsx and .xls formats up to 10MB",
    chartTypeLabel: "Select Chart Type",
    chartTypes: {
      bar: "Bar Chart",
      line: "Line Chart",
      pie: "Pie Chart",
      scatter: "Scatter Plot"
    },
    promptLabel: "Analysis Prompt (Optional)",
    promptPlaceholder: "Add details to help AI Excel Chart Generator better understand your data and visualization needs...",
    generateButton: "Generate Chart with AI Excel Chart Generator",
    previewTitle: "AI Excel Chart Generator Preview",
    downloadButton: "Download Chart",
    shareButton: "Share Chart",
    insights: "AI Excel Chart Generator Data Insights",
    chartTitle: "AI Excel Chart Generator Interactive Preview",
    errors: {
      invalidFile: "Invalid file format, please upload an Excel file",
      processingError: "Error processing data, please try again"
    }
  };
  
  // 根据当前语言选择内容
  const content = currentLanguage.startsWith('zh') ? zhContent : enContent;

  const {
    generateFromExcel,
    loading,
    error,
    progress
  } = useExcelChartGeneration();

  const chartOptions: ChartOption[] = [
    { id: 'bar', name: t('aiExcelChart.chartTypes.bar'), icon: <BarChart className="h-6 w-6" /> },
    { id: 'line', name: t('aiExcelChart.chartTypes.line'), icon: <LineChart className="h-6 w-6" /> },
    { id: 'pie', name: t('aiExcelChart.chartTypes.pie'), icon: <PieChart className="h-6 w-6" /> },
    { id: 'scatter', name: t('aiExcelChart.chartTypes.scatter'), icon: <ScatterChart className="h-6 w-6" /> }
  ];

  const chartRef = useRef<ChartPreviewRef>(null);

  // 检查是否是预览模式
  const isPreviewMode = new URLSearchParams(location.search).get('viewMode') === 'preview';

  // 从URL参数中加载分享的图表数据
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sharedData = searchParams.get('chartData');
    const sharedType = searchParams.get('chartType') as ChartType;
    
    if (sharedData && sharedType) {
      try {
        const decodedData = decodeData(sharedData);
        if (decodedData) {
          setPreviewData(decodedData);
          setSelectedChartType(sharedType);
          trackEvent('view_shared_chart', 'excel_chart', sharedType);
        }
      } catch (err) {
        console.error('Error parsing shared chart data:', err);
      }
    }
  }, [location.search]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.name.match(/\.(xlsx|xls)$/)) {
        alert(content.errors.invalidFile);
        return;
      }
      setSelectedFile(file);
      setPreviewData(null);
      trackEvent('upload_excel_file', 'excel_chart', file.name);
    }
  };

  const handleGenerateChart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    try {
      trackEvent('generate_chart', 'excel_chart', `${selectedChartType}_chart`);
      const result = await generateFromExcel(selectedFile, selectedChartType, analysisPrompt, {});
      if (result) {
        setPreviewData(result);
        trackEvent('chart_generated_success', 'excel_chart', result.fileName);
      }
    } catch (err) {
      console.error('Error generating chart:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      trackEvent('chart_generated_error', 'excel_chart', errorMessage);
      alert(content.errors.processingError);
    }
  };

  const handleDownload = () => {
    if (!previewData || !chartRef.current) return;
    
    const chart = chartRef.current.getEchartsInstance();
    if (!chart) return;

    const base64 = chart.getDataURL({
      type: 'png',
      pixelRatio: 2,
      backgroundColor: '#fff'
    });

    trackEvent('download_chart', 'excel_chart', `${selectedChartType}_chart`);
    
    // 创建下载链接
    const link = document.createElement('a');
    link.download = `${previewData.fileName.replace('.xlsx', '')}.png`;
    link.href = base64;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (!previewData) return;
    
    // 将图表数据编码为base64字符串
    const chartData = encodeData(previewData);
    if (!chartData) return;
    
    // 创建分享URL
    const url = new URL(window.location.origin + window.location.pathname);
    url.searchParams.set('chartData', chartData);
    url.searchParams.set('chartType', selectedChartType);
    url.searchParams.set('viewMode', 'preview');
    
    trackEvent('share_chart', 'excel_chart', `${selectedChartType}_chart`);
    
    // 设置分享URL并显示弹窗
    setShareUrl(url.toString());
    setShowShareModal(true);
  };

  // 如果是预览模式，只显示图表
  if (isPreviewMode && previewData) {
    return (
      <div className="fixed inset-0 bg-white">
        <div className="h-full w-full flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{previewData.chartConfig.title}</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>{content.downloadButton}</span>
                  </button>
                  <button
                    onClick={() => {
                      const url = new URL(window.location.href);
                      url.searchParams.delete('viewMode');
                      window.location.href = url.toString();
                    }}
                    className="text-gray-600 hover:text-gray-700 text-sm"
                  >
                    {t('aiExcelChart.preview.viewFullVersion')}
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <ChartPreview ref={chartRef} config={previewData.chartConfig} chartType={selectedChartType} />
              </div>

              {previewData.insights && previewData.insights.length > 0 && (
                <div className="mt-6 border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    {content.insights}
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    {previewData.insights.map((insight, index) => (
                      <li key={index} className="text-sm text-gray-600">{insight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageSEO page="aiExcelChart" />
      
      <Breadcrumb />

      {/* Hero Section */}
      <section className="pt-16 pb-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <BarChart className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Excel Chart Creator</span>
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

      <section id="chart-form" className="py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <header className="mb-4">
              <div>
                <ShareButtons
                  url={window.location.href}
                  title={t('pages.aiExcelChart.shareTitle')}
                  description={t('pages.aiExcelChart.shareDescription')}
                  hashtags={['AIExcel', 'FreeTools', 'DataVisualization', 'ExcelChartGenerator']}
                />
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>✨ {t('common.shareFeatures.free')}</span>
                  <span>🔒 {t('common.shareFeatures.noLogin')}</span>
                  <span>🌍 {t('common.shareFeatures.multiLanguage')}</span>
                </div>
              </div>
            </header>
            
            <section className="bg-white rounded-lg shadow-lg p-6 border border-gray-200" aria-label="Chart Generation">
              <h2 className="text-2xl font-bold mb-6">{content.uploadTitle}</h2>
              <form onSubmit={handleGenerateChart} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 max-w-md mx-auto">
                    <input
                      accept=".xlsx,.xls"
                      style={{ display: 'none' }}
                      id="excel-upload"
                      type="file"
                      onChange={handleFileUpload}
                    />
                    <label htmlFor="excel-upload" className="cursor-pointer w-full">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center bg-blue-50 text-blue-500 rounded-full mb-3">
                          <Upload className="h-8 w-8" />
                        </div>
                        <span className="text-base font-medium text-gray-900 mb-1">
                          {content.uploadFile}
                        </span>
                        <span className="text-xs text-gray-500 mb-4">
                          {content.uploadHint}
                        </span>
                        <div className="w-full max-w-xs bg-blue-600 text-white py-2 px-4 rounded-md text-center hover:bg-blue-700 transition">
                          {currentLanguage.startsWith('zh') ? '选择文件' : 'Select File'}
                        </div>
                      </div>
                    </label>

                    {selectedFile && (
                      <div className="mt-6 w-full border-t pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{currentLanguage.startsWith('zh') ? '已选择文件' : 'Selected File'}</span>
                          <button
                            onClick={() => {
                              setSelectedFile(null);
                            }}
                            className="text-xs text-red-500 hover:text-red-700"
                          >
                            {currentLanguage.startsWith('zh') ? '移除' : 'Remove'}
                          </button>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-md">
                          <FileSpreadsheet className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-gray-700 font-medium">{selectedFile.name}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                      {content.chartTypeLabel}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {chartOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedChartType(option.id)}
                          className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                            selectedChartType === option.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-200'
                          }`}
                        >
                          {option.icon}
                          <span className="mt-2 text-sm font-medium text-gray-900">
                            {option.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      {content.promptLabel}
                    </h3>
                    <textarea
                      value={analysisPrompt}
                      onChange={(e) => setAnalysisPrompt(e.target.value)}
                      placeholder={content.promptPlaceholder}
                      className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !selectedFile}
                  className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <LoadingSpinner size={20} />
                  ) : (
                    <>
                      {content.generateButton} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
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
                <article className="mt-8">
                  <div className="bg-gray-50 rounded-md p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <FileSpreadsheet className="h-6 w-6 text-green-600" />
                        <span className="font-medium">{content.previewTitle}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={handleShare}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Share2 className="h-4 w-4" />
                          <span>{content.shareButton}</span>
                        </button>
                        <button
                          onClick={handleDownload}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          <span>{content.downloadButton}</span>
                        </button>
                      </div>
                    </div>
                    {previewData.summary && (
                      <p className="mt-2 text-sm text-gray-600">{previewData.summary}</p>
                    )}
                    {previewData.insights && previewData.insights.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          {content.insights}
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {previewData.insights.map((insight, index) => (
                            <li key={index} className="text-sm text-gray-600">{insight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">{content.chartTitle}</h2>
                    <ChartPreview ref={chartRef} config={previewData.chartConfig} chartType={selectedChartType} />
                  </div>
                </article>
              )}
            </section>

            {/* 使用新的ChartUsageInfo组件 */}
            <section className="mt-8">
              <ChartUsageInfo />
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

      {/* 分享弹窗 */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{t('aiExcelChart.share.shareUrlLabel')}</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 p-3 text-sm bg-gray-50 border border-gray-300 rounded"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert(t('aiExcelChart.share.linkCopied'));
                }}
                className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                {t('aiExcelChart.share.copyButton')}
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              {t('aiExcelChart.share.description')}
            </p>
          </div>
        </div>
      )}

      {/* User Comments Section */}
      <UserComments />

      {/* 添加全局反馈组件 */}
      <FeedbackWidget />
    </>
  );
};

export default AiExcelChart; 