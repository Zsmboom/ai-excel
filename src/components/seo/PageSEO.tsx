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
    setConfig(SEOConfig[page]);
  }, [i18n.language, page]);

  const pathWithoutLang = location.pathname.split('/').slice(2).join('/');
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}/${i18n.language}/${pathWithoutLang}`;
  const imageUrl = `${baseUrl}${config.image.url}`;

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ExcelEasy" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:alt" content={config.image.alt} />
        <meta property="og:image:type" content={config.image.type} />
        <meta property="og:image:width" content={String(config.image.width)} />
        <meta property="og:image:height" content={String(config.image.height)} />
        <meta property="og:locale" content={i18n.language} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ExcelEasy" />
        <meta name="twitter:creator" content="@ExcelEasy" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={config.image.alt} />
        <meta name="twitter:domain" content={baseUrl} />

        {/* 其他元标签 */}
        <link rel="canonical" href={`${baseUrl}/en/${pathWithoutLang}`} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* 多语言支持 */}
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
      </Helmet>
      <SchemaOrg
        type={config.schemaType}
        name={config.schemaName}
        description={config.schemaDescription}
        applicationCategory={config.schemaCategory}
        url={currentUrl}
        image={imageUrl}
      />
    </>
  );
}; 