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

  // 修复pathWithoutLang的计算逻辑
  let pathWithoutLang = '';
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  // 检查第一部分是否是语言代码
  const isFirstPartLang = languages.some(lang => lang.code === pathParts[0]);
  
  if (isFirstPartLang) {
    // 如果第一部分是语言代码，移除它
    pathWithoutLang = pathParts.slice(1).join('/');
  } else {
    // 如果第一部分不是语言代码，保留所有部分
    pathWithoutLang = pathParts.join('/');
  }
  
  const baseUrl = window.location.origin;
  const currentUrl = canonicalUrl || (i18n.language === 'en' 
    ? `${baseUrl}/${pathWithoutLang}` 
    : `${baseUrl}/${i18n.language}/${pathWithoutLang}`);
  const imageUrl = config?.image?.url ? `${baseUrl}${config.image.url}` : `${baseUrl}/logo.png`;

  // 所有页面都添加规范链接
  const shouldShowCanonical = true;

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
        
        {/* 规范链接 - 所有页面都显示 */}
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
        name={config.schemaName ? getLocalizedValue(config.schemaName) : getLocalizedValue(config.title)}
        description={config.schemaDescription ? getLocalizedValue(config.schemaDescription) : getLocalizedValue(config.description)}
        applicationCategory={config.schemaCategory}
        url={currentUrl}
        image={imageUrl}
        lastModified={lastModified}
      />
    </>
  );
}; 