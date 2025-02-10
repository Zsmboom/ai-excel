import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams, useLocation } from 'react-router-dom';
import { FileSpreadsheet, Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang = 'en' } = useParams();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ko', name: '한국어' },
    { code: 'hi', name: 'हिंदी' }
  ];

  const mainNavItems = [
    { path: `/${lang}/ai-excel-generator`, label: t('common.excelGenerator') },
    { path: `/${lang}/excel-functions`, label: t('common.excelFunctions') },
    { path: `/${lang}/pic-to-excel`, label: t('common.picToExcel') },
    { path: `/${lang}/ai-excel-chart`, label: t('common.excelChart') },
    { path: `/${lang}/blog`, label: t('common.blog') }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLanguageChange = (langCode: string) => {
    const newPath = location.pathname.replace(`/${lang}/`, `/${langCode}/`);
    window.location.href = newPath;
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={`/${lang}`} className="flex items-center space-x-2">
            <FileSpreadsheet className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ExcelEasy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">{languages.find(l => l.code === lang)?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      lang === language.code
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {language.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Language Selector */}
              <div className="border-t pt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {t('common.language')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`text-sm py-2 px-3 rounded ${
                        lang === language.code
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 