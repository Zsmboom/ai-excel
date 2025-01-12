import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import { languages } from './i18n/config';

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const supportedLangs = languages.map(l => l.code);

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