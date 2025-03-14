import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import { languages } from './i18n/config';
import { useAnalytics } from './hooks/useAnalytics';

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const supportedLangs = languages.map(l => l.code);
  const isPreviewMode = new URLSearchParams(location.search).get('viewMode') === 'preview';
  
  // 使用 useAnalytics Hook 跟踪页面浏览
  useAnalytics();

  useEffect(() => {
    // 从路径中获取语言代码
    const pathLang = location.pathname.split('/')[1];
    
    // 如果路径中有语言代码且是支持的语言
    if (pathLang && supportedLangs.includes(pathLang)) {
      // 如果当前语言与路径中的语言不同，则更新语言
      if (i18n.language !== pathLang) {
        i18n.changeLanguage(pathLang);
        try {
          localStorage.setItem('preferredLanguage', pathLang);
        } catch (e) {
          // localStorage 不可用时忽略错误
        }
      }
    }
  }, [location.pathname, i18n, supportedLangs]);

  // 在预览模式下只显示主要内容
  if (isPreviewMode) {
    return (
      <div className="min-h-screen">
        <AppRoutes />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}