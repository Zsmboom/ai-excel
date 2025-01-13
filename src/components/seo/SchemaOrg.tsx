import React from 'react';
import { Helmet } from 'react-helmet';
import { SchemaType } from '../../types/schema';

interface SchemaOrgProps {
  type: SchemaType;
  name: string;
  description: string;
  applicationCategory?: string;
  url: string;
  image?: string;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  type,
  name,
  description,
  applicationCategory,
  url,
  image
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    ...(applicationCategory && { applicationCategory }),
    url,
    ...(image && { image }),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}; 