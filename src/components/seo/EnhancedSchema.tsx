import React from 'react';
import { Helmet } from 'react-helmet';

// 组织信息
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://exceleasy.org/#organization',
  name: 'ExcelEasy',
  url: 'https://exceleasy.org',
  logo: {
    '@type': 'ImageObject',
    url: 'https://exceleasy.org/logo.png',
    width: 112,
    height: 112
  },
  description: 'AI-powered Excel tools and solutions to help users work efficiently with spreadsheets.',
  sameAs: [
    'https://twitter.com/exceleasy',
    'https://www.facebook.com/exceleasy',
    'https://www.linkedin.com/company/exceleasy'
  ]
};

// 网站信息
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://exceleasy.org/#website',
  name: 'ExcelEasy',
  url: 'https://exceleasy.org',
  publisher: {
    '@id': 'https://exceleasy.org/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://exceleasy.org/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{
    name: string;
    item: string;
  }>;
}

// 网页信息
const createWebPageSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs
}: WebPageSchemaProps) => {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      '@id': 'https://exceleasy.org/#website'
    },
    about: {
      '@id': 'https://exceleasy.org/#organization'
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified })
  };

  return webPageSchema;
};

// 软件应用信息
interface SoftwareAppSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
  screenshot?: string;
}

const createSoftwareAppSchema = ({
  name,
  description,
  url,
  applicationCategory,
  operatingSystem,
  offers,
  screenshot
}: SoftwareAppSchemaProps) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: 'https://schema.org/OnlineOnly'
    },
    ...(screenshot && {
      screenshot: {
        '@type': 'ImageObject',
        url: screenshot
      }
    }),
    provider: {
      '@id': 'https://exceleasy.org/#organization'
    }
  };
};

interface BreadcrumbListProps {
  items: Array<{
    name: string;
    item: string;
  }>;
  baseUrl: string;
}

// 面包屑导航
const createBreadcrumbListSchema = ({ items, baseUrl }: BreadcrumbListProps) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.item}`
    }))
  };
};

interface EnhancedSchemaProps {
  type: 'WebPage' | 'SoftwareApplication' | 'Article' | 'Blog' | 'ContactPage' | 'AboutPage';
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{
    name: string;
    item: string;
  }>;
  applicationCategory?: string;
  screenshot?: string;
  article?: {
    headline: string;
    image: string;
    author: string;
    publishedTime: string;
    modifiedTime: string;
    tags: string[];
  };
}

export const EnhancedSchema: React.FC<EnhancedSchemaProps> = ({
  type,
  title,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs,
  applicationCategory,
  screenshot,
  article
}) => {
  // 基础Schema数据
  const baseSchema = {
    organization: organizationSchema,
    website: websiteSchema
  };

  // 页面特定Schema数据
  let pageSchema = {};
  
  if (type === 'WebPage' || type === 'ContactPage' || type === 'AboutPage') {
    pageSchema = createWebPageSchema({
      title,
      description,
      url,
      datePublished,
      dateModified,
      breadcrumbs
    });
  } else if (type === 'SoftwareApplication') {
    pageSchema = createSoftwareAppSchema({
      name: title,
      description,
      url,
      applicationCategory: applicationCategory || 'BusinessApplication',
      operatingSystem: 'Windows, macOS, Linux, Android, iOS',
      offers: {
        price: '0',
        priceCurrency: 'USD'
      },
      screenshot
    });
  } else if (type === 'Article' || type === 'Blog') {
    pageSchema = {
      '@context': 'https://schema.org',
      '@type': type === 'Blog' ? 'Blog' : 'Article',
      '@id': `${url}#${type.toLowerCase()}`,
      headline: article?.headline || title,
      description,
      image: article?.image || screenshot || 'https://exceleasy.org/logo.png',
      datePublished: article?.publishedTime || datePublished || new Date().toISOString(),
      dateModified: article?.modifiedTime || dateModified || new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: article?.author || 'ExcelEasy Team'
      },
      publisher: {
        '@id': 'https://exceleasy.org/#organization'
      },
      isPartOf: {
        '@id': 'https://exceleasy.org/#website'
      },
      mainEntityOfPage: {
        '@id': `${url}#webpage`
      }
    };
  }

  // 生成面包屑导航Schema（如果有提供）
  let breadcrumbSchema = {};
  if (breadcrumbs && breadcrumbs.length > 0) {
    breadcrumbSchema = createBreadcrumbListSchema({
      items: breadcrumbs,
      baseUrl: 'https://exceleasy.org'
    });
  }

  return (
    <Helmet>
      {/* 组织信息 */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema.organization)}
      </script>
      
      {/* 网站信息 */}
      <script type="application/ld+json">
        {JSON.stringify(baseSchema.website)}
      </script>
      
      {/* 页面特定信息 */}
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      
      {/* 面包屑导航（如果有提供） */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}; 