import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { languages } from '../i18n/config';

// 定义所有路由配置
const routes = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/ai-excel-generator', changefreq: 'weekly', priority: 0.9 },
  { path: '/ai-excel-chart', changefreq: 'weekly', priority: 0.9 },
  { path: '/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 },
  // 添加其他路由...
];

const Sitemap: React.FC = () => {
  const location = useLocation();
  const baseUrl = window.location.origin;

  useEffect(() => {
    generateSitemap();
  }, []);

  const generateSitemap = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map(route => languages.map(lang => `
  <url>
    <loc>${baseUrl}/${lang.code}${route.path}</loc>
    ${languages.map(alterLang => `
    <xhtml:link 
      rel="alternate" 
      hreflang="${alterLang.code}" 
      href="${baseUrl}/${alterLang.code}${route.path}"/>`).join('')}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>
  `).join('')).join('')}
</urlset>`;

    // 创建Blob并下载
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return null;
};

export default Sitemap; 