import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import SchemaMarkup from '../seo/SchemaMarkup';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const organizationSchema = {
    type: 'Organization' as const,
    name: 'ExcelEasy',
    url: window.location.origin,
    logo: `${window.location.origin}/logo.png`,
    sameAs: [
      'https://twitter.com/exceleasy',
      'https://github.com/exceleasy',
      'https://www.linkedin.com/company/exceleasy'
    ]
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SchemaMarkup schema={organizationSchema} />
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default RootLayout; 