import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import { languages } from './i18n/config';

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const supportedLangs = languages.map(l => l.code);

  useEffect(() => {
    // 从路径中获取语言代码
    const pathLang = location.pathname.split('/')[1];
    
    // 如果路径中有语言代码且是支持的语言
    if (pathLang && supportedLangs.includes(pathLang)) {
      // 如果当前语言与路径中的语言不同，则更新语言
      if (i18n.language !== pathLang) {
        i18n.changeLanguage(pathLang);
        localStorage.setItem('preferredLanguage', pathLang);
      }
    } else if (location.pathname === '/') {
      // 如果是根路径，重定向到默认语言
      const savedLang = localStorage.getItem('preferredLanguage');
      const browserLang = navigator.language.split('-')[0];
      const defaultLang = savedLang && supportedLangs.includes(savedLang)
        ? savedLang
        : supportedLangs.includes(browserLang)
          ? browserLang
          : 'en';
      
      // 保持当前路径，只改变语言部分
      const currentPath = location.pathname.split('/').slice(2).join('/');
      const newPath = currentPath ? `/${defaultLang}/${currentPath}` : `/${defaultLang}`;
      
      navigate(newPath);
    }
  }, [location.pathname, i18n, navigate, supportedLangs]);

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