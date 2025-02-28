import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // 英文版本使用无前缀URL,其他语言使用带语言前缀的URL
  const picToExcelUrl = currentLanguage === 'en' 
    ? '/pic-to-excel'
    : `/${currentLanguage}/pic-to-excel`;

  return (
    <div>
      {/* Existing code */}
      <Link to={picToExcelUrl}>
        {t('common.picToExcel')}
      </Link>
      {/* Existing code */}
    </div>
  );
};

export default Navigation; 