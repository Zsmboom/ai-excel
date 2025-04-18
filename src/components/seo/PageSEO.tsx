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
  // 修复：确保URL格式正确，避免多余的斜杠
  const currentUrl = canonicalUrl || (i18n.language === 'en' 
    ? `${baseUrl}/${pathWithoutLang}`.replace(/\/+/g, '/').replace(/\/$/, '') 
    : `${baseUrl}/${i18n.language}/${pathWithoutLang}`.replace(/\/+/g, '/').replace(/\/$/, ''));
  
  // 修复：确保baseUrl后面不会有多余的斜杠
  const imageUrl = config?.image?.url ? `${baseUrl}${config.image.url}` : `${baseUrl}/logo.png`;

  // 所有页面都添加规范链接
  const shouldShowCanonical = true;

  // 修复：确保alternateLinks中的URL格式正确
  const alternateLinks = languages.map((lang) => ({
    hrefLang: lang.code,
    href: lang.code === 'en' 
      ? `${baseUrl}/${pathWithoutLang}`.replace(/\/+/g, '/').replace(/\/$/, '') 
      : `${baseUrl}/${lang.code}/${pathWithoutLang}`.replace(/\/+/g, '/').replace(/\/$/, ''),
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

  // 确保所有传递给Helmet的值都是字符串
  const title = getLocalizedValue(config?.title || '');
  const description = getLocalizedValue(config?.description || '');
  const keywords = getLocalizedValue(config?.keywords || '');
  const imageAlt = getLocalizedValue(config?.image?.alt || '');
  const imageType = config?.image?.type || 'image/png';
  const imageWidth = String(config?.image?.width || 1200);
  const imageHeight = String(config?.image?.height || 630);

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
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
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:image:type" content={imageType} />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
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
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />
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
        name={config.schemaName ? getLocalizedValue(config.schemaName) : title}
        description={config.schemaDescription ? getLocalizedValue(config.schemaDescription) : description}
        applicationCategory={config.schemaCategory}
        url={currentUrl}
        image={imageUrl}
        lastModified={lastModified}
      />
    </>
  );
}; 