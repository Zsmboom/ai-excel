import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Workspace from '../pages/Workspace';
import ExcelFunctions from '../pages/ExcelFunctions';
import About from '../pages/About';
import { languages } from '../i18n/config';
import { LanguageRoute } from '../components/LanguageRoute';

const AppRoutes = () => {
  // 获取用户首选语言
  const getPreferredLanguage = () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const supportedLangs = languages.map(lang => lang.code);
    if (savedLang && supportedLangs.includes(savedLang)) {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return supportedLangs.includes(browserLang) ? browserLang : 'en';
  };

  return (
    <Routes>
      {/* 根路径重定向到默认语言 */}
      <Route
        path="/"
        element={<Navigate to={`/${getPreferredLanguage()}`} replace />}
      />

      {/* 语言路由 */}
      <Route element={<LanguageRoute />}>
        <Route path=":lang">
          <Route index element={<LandingPage />} />
          <Route path="ai-excel-generator" element={<Workspace />} />
          <Route path="excel-functions" element={<ExcelFunctions />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>

      {/* 捕获所有其他路由 */}
      <Route
        path="*"
        element={<Navigate to={`/${getPreferredLanguage()}`} replace />}
      />
    </Routes>
  );
};

export default AppRoutes; 