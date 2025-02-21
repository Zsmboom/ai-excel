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
import AIExcelChart from '../pages/AiExcelChart';
import { languages } from '../i18n/config';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 英文版本直接使用根路径 */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/ai-excel-generator" element={<Workspace />} />
      <Route path="/excel-functions" element={<ExcelFunctions />} />
      <Route path="/pic-to-excel" element={<PicToExcel />} />
      <Route path="/ai-excel-chart" element={<AIExcelChart />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />

      {/* 其他语言使用语言前缀 */}
      <Route path=":lang" element={<LanguageRoute />}>
        <Route index element={<LandingPage />} />
        <Route path="ai-excel-generator" element={<Workspace />} />
        <Route path="excel-functions" element={<ExcelFunctions />} />
        <Route path="pic-to-excel" element={<PicToExcel />} />
        <Route path="ai-excel-chart" element={<AIExcelChart />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
      </Route>

      {/* 捕获所有其他路由并重定向到根路径 */}
      <Route 
        path="*" 
        element={<Navigate to="/" replace={true} />} 
      />
    </Routes>
  );
};

export default AppRoutes; 