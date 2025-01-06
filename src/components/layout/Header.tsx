import React from 'react';
import { Menu, X, FileSpreadsheet } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExcelToolsMenu } from './ExcelToolsMenu';
import { LanguageSelector } from '../LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  // 获取当前语言
  const currentLang = lang || i18n.language || 'en';

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={`/${currentLang}`} className="flex items-center">
              <FileSpreadsheet className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">ExcelEasy</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ExcelToolsMenu />
            <Link to={`/${currentLang}/about`} className="text-gray-600 hover:text-blue-600">{t('common.about')}</Link>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">{t('common.pricing')}</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">{t('common.features')}</a>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <ExcelToolsMenu />
              <Link to={`/${currentLang}/about`} className="text-gray-600 hover:text-blue-600">{t('common.about')}</Link>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600">{t('common.pricing')}</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600">{t('common.features')}</a>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;