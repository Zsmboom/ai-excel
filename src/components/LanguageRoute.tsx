import React, { useEffect, ReactNode } from 'react';
import { useParams, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n/config';

interface LanguageRouteProps {
  children?: ReactNode;
}

export const LanguageRoute: React.FC<LanguageRouteProps> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const supportedLangs = languages.map(l => l.code);

  const getPreferredLanguage = () => {
    // 优先使用 URL 中的语言参数
    if (lang && supportedLangs.includes(lang)) {
      return lang;
    }

    try {
      // 尝试从 localStorage 获取
      const savedLang = localStorage.getItem('preferredLanguage');
      if (savedLang && supportedLangs.includes(savedLang)) {
        return savedLang;
      }

      // 使用浏览器语言
      const browserLang = navigator.language.split('-')[0];
      return supportedLangs.includes(browserLang) ? browserLang : 'en';
    } catch (e) {
      return 'en';
    }
  };

  useEffect(() => {
    // 处理 HTTP 到 HTTPS 的重定向
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.href = window.location.href.replace('http:', 'https:');
      return;
    }

    // 处理 www 到非 www 的重定向
    if (window.location.hostname.startsWith('www.')) {
      window.location.href = window.location.href.replace('www.', '');
      return;
    }

    const currentLang = getPreferredLanguage();
    if (currentLang && currentLang !== i18n.language) {
      i18n.changeLanguage(currentLang);
      try {
        localStorage.setItem('preferredLanguage', currentLang);
      } catch (e) {
        // localStorage 不可用时忽略错误
      }
    }
  }, [lang, i18n]);

  // 处理根路径重定向
  if (location.pathname === '/') {
    const defaultLang = getPreferredLanguage();
    return <Navigate to={`/${defaultLang}`} replace />;
  }

  // 处理 /about 路径重定向
  if (location.pathname === '/about') {
    const defaultLang = getPreferredLanguage();
    return <Navigate to={`/${defaultLang}/about`} replace />;
  }

  // 如果是根路径直接渲染子组件
  if (children) {
    return <>{children}</>;
  }

  // 如果语言代码无效，重定向到默认语言
  if (!lang || !supportedLangs.includes(lang)) {
    const defaultLang = getPreferredLanguage();
    // 保持当前路径，只改变语言部分
    const currentPath = location.pathname.split('/').slice(2).join('/');
    const newPath = currentPath ? `/${defaultLang}/${currentPath}` : `/${defaultLang}`;
    
    return <Navigate to={newPath} replace />;
  }

  return <Outlet />;
}; 