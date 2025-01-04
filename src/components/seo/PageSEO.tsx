import React from 'react';
import { Helmet } from 'react-helmet';
import { SchemaOrg } from './SchemaOrg';
import { SEOConfig } from '../../config/seo';

interface PageSEOProps {
  page: keyof typeof SEOConfig;
}

export const PageSEO: React.FC<PageSEOProps> = ({ page }) => {
  const config = SEOConfig[page];

  return (
    <>
      <Helmet>
        <title>Exceleasy - AI Excel Generation Tool</title>
        <meta name="description" content="Exceleasy is an AI-powered tool that transforms text into Excel spreadsheets. With AI Excel functions and VBA automation," />
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