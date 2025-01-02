import React from 'react';
import { Helmet } from 'react-helmet';

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
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    applicationCategory,
    operatingSystem: 'Web',
    url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
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