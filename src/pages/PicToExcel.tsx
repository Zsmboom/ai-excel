import React, { useState, ChangeEvent } from 'react';
import { FileSpreadsheet, Send, Download, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ExcelPreview } from '../components/excel/ExcelPreview';
import { TableConfig } from '../components/excel/TableConfig';
import { UsageInfo } from '../components/excel/UsageInfo';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import { analyzeImageWithClaude } from '../services/claude';
import { generateExcel } from '../services/excel';
import type { ExcelData, AnalysisResult } from '../types/excel';

interface PreviewData {
  fileName: string;
  blob: Blob;
  data: ExcelData[];
  summary: string;
}

export default function PicToExcel() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tableConfig, setTableConfig] = useState({
    enableColumnSums: false,
    enablePivotTables: false,
    enableSorting: false,
  });

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError(t('picToExcel.errors.invalidImage'));
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  const handleGenerateExcel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      setError(t('picToExcel.errors.imageRequired'));
      return;
    }

    setLoading(true);
    try {
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

      // 使用 Claude 服务分析图片
      const analysis = await analyzeImageWithClaude(imageBase64, description, tableConfig);
      const blob = generateExcel(analysis, tableConfig);

      setPreviewData({
        fileName: 'image_to_excel.xlsx',
        blob,
        data: analysis.data,
        summary: analysis.summary
      });
      setError(null);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(t('picToExcel.errors.generateError') + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!previewData) return;
    
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
      <PageSEO page="workspace" />
      <main className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">{t('picToExcel.title')}</h1>
              <p className="text-gray-600 mt-2">
                {t('picToExcel.subtitle')}
              </p>
              <div className="mt-4">
                <ShareButtons
                  url={window.location.href}
                  title={t('pages.picToExcel.shareTitle')}
                  description={t('pages.picToExcel.shareDescription')}
                  hashtags={['AIExcel', 'FreeTools', 'ImageToExcel']}
                />
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                  <span>✨ {t('common.shareFeatures.free')}</span>
                  <span>🔒 {t('common.shareFeatures.noLogin')}</span>
                  <span>🌍 {t('common.shareFeatures.multiLanguage')}</span>
                </div>
              </div>
            </header>

            <section className="bg-white rounded-lg shadow-md p-6" aria-label="Excel Generation">
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
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center">
                        <Upload className="h-12 w-12 text-gray-400 mb-3" />
                        <span className="text-sm font-medium text-gray-900">
                          {t('picToExcel.form.uploadImage')}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          PNG, JPG, GIF up to 10MB
                        </span>
                      </div>
                    </label>

                    {imagePreview && (
                      <div className="mt-4 w-full">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="max-w-full max-h-[300px] mx-auto rounded-lg shadow-sm" 
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('picToExcel.form.description')}
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={t('picToExcel.form.descriptionPlaceholder')}
                      className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
                
                <TableConfig config={tableConfig} onChange={setTableConfig} />

                <button
                  type="submit"
                  disabled={loading || !selectedImage}
                  className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <>
                      {t('picToExcel.form.generateButton')} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

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
                        <span className="font-medium">{t('picToExcel.form.readyMessage')}</span>
                      </div>
                      <button
                        onClick={handleDownload}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        <span>{t('picToExcel.form.downloadButton')}</span>
                      </button>
                    </div>
                    {previewData.summary && (
                      <p className="mt-2 text-sm text-gray-600">{previewData.summary}</p>
                    )}
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">{t('picToExcel.form.previewTitle')}</h2>
                    <ExcelPreview data={previewData.data} />
                  </div>
                </article>
              )}
            </section>

            <section aria-label="Usage Instructions">
              <UsageInfo />
            </section>
          </div>
        </div>
      </main>
    </>
  );
} 