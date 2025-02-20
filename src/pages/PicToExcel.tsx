import React, { useState, ChangeEvent } from 'react';
import { FileSpreadsheet, Send, Download, Upload } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ProgressBar } from '../components/ui/ProgressBar';
import { ExcelPreview } from '../components/excel/ExcelPreview';
import { TableConfig } from '../components/excel/TableConfig';
import { UsageInfo } from '../components/excel/UsageInfo';
import { PageSEO } from '../components/seo/PageSEO';
import ShareButtons from '../components/common/ShareButtons';
import { usePicToExcelGeneration } from '../hooks/usePicToExcelGeneration';
import type { ExcelData } from '../types/excel';

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
  const [tableConfig, setTableConfig] = useState({
    enableColumnSums: false,
    enablePivotTables: false,
    enableSorting: false,
  });

  const {
    generateFromImage,
    loading,
    error,
    progress
  } = usePicToExcelGeneration();

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateExcel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedImage) {
      return;
    }

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

      // 使用新的 hook 处理图片转换
      const result = await generateFromImage(imageBase64, description, tableConfig);
      
      if (result) {
        setPreviewData(result);
      }
    } catch (err: unknown) {
      console.error('Error generating Excel:', err);
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
      <PageSEO page="picToExcel" />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gray-900">
                {t('picToExcel.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('picToExcel.subtitle')}
              </p>
              <ShareButtons
                url={window.location.href}
                title={t('picToExcel.shareTitle')}
                description={t('picToExcel.shareDescription')}
              />
            </section>

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
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      {t('picToExcel.form.description')}
                    </label>
                    <textarea
                      id="description"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder={t('picToExcel.form.descriptionPlaceholder')}
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
                      {t('picToExcel.form.generateButton')}
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
                      {t('picToExcel.form.previewTitle')}
                    </h3>
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {t('picToExcel.form.downloadButton')}
                    </button>
                  </div>
                  <ExcelPreview data={previewData.data} />
                </div>
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