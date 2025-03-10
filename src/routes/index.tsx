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
import Privacy from '../pages/Privacy';
import Contact from '../pages/Contact';
import { languages } from '../i18n/config';

const AppRoutes = () => {
  return (
    <Routes>
      {/* 英文版本路由 */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/ai-excel-generator" element={<Workspace />} />
      <Route path="/excel-functions" element={<ExcelFunctions />} />
      <Route path="/pic-to-excel" element={<PicToExcel />} />
      <Route path="/ai-excel-chart" element={<AIExcelChart />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />

      {/* 其他语言路由 */}
      <Route path=":lang/*" element={<LanguageRoute />}>
        <Route index element={<LandingPage />} />
        <Route path="ai-excel-generator" element={<Workspace />} />
        <Route path="excel-functions" element={<ExcelFunctions />} />
        <Route path="pic-to-excel" element={<PicToExcel />} />
        <Route path="ai-excel-chart" element={<AIExcelChart />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="contact" element={<Contact />} />
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