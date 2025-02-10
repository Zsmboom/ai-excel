import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

const NotFound: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        <FileQuestion className="mx-auto h-24 w-24 text-blue-600 mb-8" />
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {t('notFound.description')}
        </p>
        <Link
          to={`/${i18n.language}`}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 