import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageRoute } from '../components/LanguageRoute';
import LandingPage from '../pages/LandingPage';
import Workspace from '../pages/Workspace';
import ExcelFunctions from '../pages/ExcelFunctions';
import About from '../pages/About';
import PicToExcel from '../pages/PicToExcel';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import { languages } from '../i18n/config';

const AppRoutes = () => {
  // 获取默认语言
  const getDefaultLanguage = (): string => {
    const supportedLangs = languages.map(lang => lang.code);
    
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
      // 如果出现错误，返回默认语言
      return 'en';
    }
  };

  return (
    <Routes>
      {/* 根路径重定向到默认语言 */}
      <Route 
        path="/" 
        element={
          <Navigate 
            to={`/${getDefaultLanguage()}`} 
            replace={true}
          />
        } 
      />

      {/* 语言路由 */}
      <Route path=":lang" element={<LanguageRoute />}>
        <Route index element={<LandingPage />} />
        <Route path="ai-excel-generator" element={<Workspace />} />
        <Route path="excel-functions" element={<ExcelFunctions />} />
        <Route path="pic-to-excel" element={<PicToExcel />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Route>

      {/* 捕获所有其他路由并重定向到默认语言的相应路径 */}
      <Route 
        path="*" 
        element={
          <Navigate 
            to={`/${getDefaultLanguage()}`} 
            replace={true}
          />
        } 
      />
    </Routes>
  );
};

export default AppRoutes; 