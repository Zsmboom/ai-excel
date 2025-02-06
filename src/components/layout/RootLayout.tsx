import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SchemaMarkup from '../seo/SchemaMarkup';

export default function RootLayout() {
  const location = useLocation();
  const isPreviewMode = new URLSearchParams(location.search).get('viewMode') === 'preview';

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

  // 如果是预览模式，只显示内容，不显示任何其他组件
  if (isPreviewMode) {
    return <Outlet />;
  }

  return (
    <>
      <SchemaMarkup schema={organizationSchema} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
} 