import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SchemaOrg } from './SchemaOrg';
import { SEOConfig } from '../../config/seo';
import { useTranslation } from 'react-i18next';
import { languages } from '../../i18n/config';
import { useLocation } from 'react-router-dom';

interface PageSEOProps {
  page: keyof typeof SEOConfig;
}

export const PageSEO: React.FC<PageSEOProps> = ({ page }) => {
  const { i18n } = useTranslation();
  const [config, setConfig] = useState(SEOConfig[page]);
  const location = useLocation();

  useEffect(() => {
    // 当语言改变时更新配置
    setConfig(SEOConfig[page]);
  }, [i18n.language, page]);

  // 获取当前路径（不包含语言代码）
  const pathWithoutLang = location.pathname.split('/').slice(2).join('/');
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}/${i18n.language}/${pathWithoutLang}`;

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:locale" content={i18n.language} />
        {languages.map((lang) => (
          <meta 
            key={`og-locale-${lang.code}`}
            property="og:locale:alternate" 
            content={lang.code} 
          />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />

        {/* 添加 canonical 和 hreflang 标签 */}
        <link rel="canonical" href={currentUrl} />
        {languages.map((lang) => (
          <link
            key={lang.code}
            rel="alternate"
            hrefLang={lang.code}
            href={`${baseUrl}/${lang.code}/${pathWithoutLang}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/en/${pathWithoutLang}`}
        />

        {/* 添加其他有用的元标签 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <SchemaOrg
        type={config.schemaType}
        name={config.schemaName}
        description={config.schemaDescription}
        applicationCategory={config.schemaCategory}
        url={currentUrl}
      />
    </>
  );
}; 