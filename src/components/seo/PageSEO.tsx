import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SchemaOrg } from './SchemaOrg';
import { SEOConfig } from '../../config/seo';
import { useTranslation } from 'react-i18next';
import { languages } from '../../i18n/config';
import { useLocation } from 'react-router-dom';

type LocalizedValue = {
  [key: string]: string;
};

interface PageSEOProps {
  page: keyof typeof SEOConfig;
  lastModified?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonicalUrl?: string;
  breadcrumbs?: Array<{
    name: string;
    item: string;
  }>;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    tags: string[];
  };
}

export const PageSEO: React.FC<PageSEOProps> = ({
  page,
  lastModified,
  noindex = false,
  nofollow = false,
  canonicalUrl,
  breadcrumbs,
  article
}) => {
  const { i18n } = useTranslation();
  const [config, setConfig] = useState(SEOConfig[page]);
  const location = useLocation();

  useEffect(() => {
    setConfig(SEOConfig[page]);
  }, [i18n.language, page]);

  const getLocalizedValue = (value: string | LocalizedValue) => {
    if (typeof value === 'string') return value;
    return value[i18n.language] || value.en || Object.values(value)[0];
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const pathWithoutLang = location.pathname.split('/').slice(2).join('/');
  const baseUrl = window.location.origin;
  const currentUrl = canonicalUrl || (i18n.language === 'en' 
    ? `${baseUrl}/${pathWithoutLang}` 
    : `${baseUrl}/${i18n.language}/${pathWithoutLang}`);
  const imageUrl = config?.image?.url ? `${baseUrl}${config.image.url}` : `${baseUrl}/logo.png`;

  // 检查是否是工具页面或博客文章页面
  const toolPaths = [
    '/ai-excel-generator',
    '/excel-functions',
    '/pic-to-excel',
    '/ai-excel-chart'
  ];
  
  const isToolPage = toolPaths.some(tool => 
    location.pathname === tool || // 英文版本
    location.pathname.endsWith(tool) // 其他语言版本
  );
  
  const isBlogPage = location.pathname.includes('/blog');

  const shouldShowCanonical = !isToolPage && !isBlogPage;

  const alternateLinks = languages.map((lang) => ({
    hrefLang: lang.code,
    href: lang.code === 'en' 
      ? `${baseUrl}/${pathWithoutLang}` 
      : `${baseUrl}/${lang.code}/${pathWithoutLang}`,
  }));

  // 生成robots指令
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-image-preview:large',
    'max-snippet:-1',
    'max-video-preview:-1'
  ].join(', ');

  // 生成面包屑结构化数据
  const breadcrumbSchema = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${baseUrl}${item.item}`
    }))
  } : null;

  // 生成文章结构化数据
  const articleSchema = article ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': getLocalizedValue(config?.title || ''),
    'description': getLocalizedValue(config?.description || ''),
    'image': imageUrl,
    'datePublished': article.publishedTime,
    'dateModified': article.modifiedTime,
    'author': article.authors.map(author => ({
      '@type': 'Person',
      'name': author
    })),
    'keywords': article.tags.join(', '),
    'publisher': {
      '@type': 'Organization',
      'name': 'ExcelEasy',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/logo.png`
      }
    }
  } : null;

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{getLocalizedValue(config?.title || '')}</title>
        <meta name="description" content={getLocalizedValue(config?.description || '')} />
        <meta name="keywords" content={getLocalizedValue(config?.keywords || '')} />
        
        {/* Robots 指令 */}
        <meta name="robots" content={robotsContent} />
        
        {/* 规范链接 - 只在非工具页面和非博客页面显示 */}
        {shouldShowCanonical && (
          <link rel="canonical" href={currentUrl} />
        )}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={article ? 'article' : 'website'} />
        <meta property="og:site_name" content="ExcelEasy" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={getLocalizedValue(config?.title || '')} />
        <meta property="og:description" content={getLocalizedValue(config?.description || '')} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:alt" content={getLocalizedValue(config?.image?.alt || '')} />
        <meta property="og:image:type" content={config?.image?.type || 'image/png'} />
        <meta property="og:image:width" content={String(config?.image?.width || 1200)} />
        <meta property="og:image:height" content={String(config?.image?.height || 630)} />
        <meta property="og:locale" content={i18n.language} />
        
        {/* 文章特定的Open Graph标签 */}
        {article && (
          <>
            <meta property="article:published_time" content={article.publishedTime} />
            <meta property="article:modified_time" content={article.modifiedTime} />
            {article.authors.map((author, index) => (
              <meta key={index} property="article:author" content={author} />
            ))}
            {article.tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ExcelEasy" />
        <meta name="twitter:creator" content="@ExcelEasy" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={getLocalizedValue(config?.title || '')} />
        <meta name="twitter:description" content={getLocalizedValue(config?.description || '')} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={getLocalizedValue(config?.image?.alt || '')} />
        <meta name="twitter:domain" content={baseUrl} />

        {/* 其他元标签 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* 多语言备用链接 */}
        {alternateLinks.map(({ hrefLang, href }) => (
          <link
            key={hrefLang}
            rel="alternate"
            hrefLang={hrefLang}
            href={href}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/${pathWithoutLang}`}
        />

        {/* 最后修改日期 */}
        {lastModified && (
          <meta name="last-modified" content={lastModified} />
        )}

        {/* 结构化数据 */}
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        )}
        
        {articleSchema && (
          <script type="application/ld+json">
            {JSON.stringify(articleSchema)}
          </script>
        )}
      </Helmet>
      
      <SchemaOrg
        type={config.schemaType}
        name={getLocalizedValue(config.schemaName)}
        description={getLocalizedValue(config.schemaDescription)}
        applicationCategory={config.schemaCategory}
        url={currentUrl}
        image={imageUrl}
        lastModified={lastModified}
      />
    </>
  );
}; 