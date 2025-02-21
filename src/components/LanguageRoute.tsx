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
  const supportedLangs = languages.map(l => l.code).filter(l => l !== 'en'); // 排除英语

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

    // 如果是英语路径，重定向到根路径
    if (lang === 'en') {
      const currentPath = location.pathname.replace('/en', '');
      window.location.href = currentPath || '/';
      return;
    }

    // 如果语言代码有效，设置语言
    if (lang && supportedLangs.includes(lang)) {
      if (lang !== i18n.language) {
        i18n.changeLanguage(lang);
        try {
          localStorage.setItem('preferredLanguage', lang);
        } catch (e) {
          // localStorage 不可用时忽略错误
        }
      }
    }
  }, [lang, i18n, location.pathname]);

  // 如果语言代码无效，重定向到根路径
  if (!lang || !supportedLangs.includes(lang)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}; 