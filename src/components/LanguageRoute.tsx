import React, { useEffect } from 'react';
import { useParams, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n/config';

export const LanguageRoute = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const supportedLangs = languages.map(l => l.code);

  useEffect(() => {
    if (lang && supportedLangs.includes(lang)) {
      // 每次路由变化时都设置语言
      i18n.changeLanguage(lang);
      localStorage.setItem('preferredLanguage', lang);
    }
  }, [lang, i18n, supportedLangs, location.pathname]);

  // 如果语言代码无效，重定向到默认语言，并保持当前路径
  if (!lang || !supportedLangs.includes(lang)) {
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
    
    return <Navigate to={newPath} replace />;
  }

  return <Outlet />;
}; 