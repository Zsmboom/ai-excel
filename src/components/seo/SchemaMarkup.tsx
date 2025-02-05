import React from 'react';
import { Helmet } from 'react-helmet';

interface OrganizationSchema {
  type: 'Organization';
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
}

interface GameSchema {
  type: 'Game';
  name: string;
  description: string;
  image: string;
  url: string;
  author: {
    name: string;
    url: string;
  };
  datePublished: string;
}

interface ArticleSchema {
  type: 'Article';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    url: string;
  };
}

type SchemaType = OrganizationSchema | GameSchema | ArticleSchema;

interface SchemaMarkupProps {
  schema: SchemaType;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': schema.type,
    };

    return {
      ...baseSchema,
      ...schema,
    };
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 