import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SchemaOrgProps {
  type: 'WebApplication' | 'SoftwareApplication';
  name: string;
  description: string;
  applicationCategory: string;
  url?: string;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  type,
  name,
  description,
  applicationCategory,
  url = typeof window !== 'undefined' ? window.location.href : '',
}) => {
  const { i18n } = useTranslation();

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    applicationCategory,
    operatingSystem: 'Web',
    url,
    inLanguage: i18n.language,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: i18n.language === 'zh' ? 'CNY' : 'USD',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}; 