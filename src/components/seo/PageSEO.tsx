import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SchemaOrg } from './SchemaOrg';
import { SEOConfig } from '../../config/seo';
import { useTranslation } from 'react-i18next';

interface PageSEOProps {
  page: keyof typeof SEOConfig;
}

export const PageSEO: React.FC<PageSEOProps> = ({ page }) => {
  const { i18n } = useTranslation();
  const [config, setConfig] = useState(SEOConfig[page]);

  useEffect(() => {
    // 当语言改变时更新配置
    setConfig(SEOConfig[page]);
  }, [i18n.language, page]);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
      </Helmet>
      <SchemaOrg
        type={config.schemaType}
        name={config.schemaName}
        description={config.schemaDescription}
        applicationCategory={config.schemaCategory}
      />
    </>
  );
}; 