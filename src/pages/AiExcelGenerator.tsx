import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PageSEO } from '../components/seo/PageSEO';

const AiExcelGenerator: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageSEO 
        page="workspace"
        lastModified="2025-01-07"
      />
      {/* ... existing code ... */}
    </>
  );
};

export default AiExcelGenerator; 
