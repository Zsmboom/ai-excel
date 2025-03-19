import React from 'react';
import { Menu, X, FileSpreadsheet, Home, InfoIcon, BookOpen, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExcelToolsMenu } from './ExcelToolsMenu';
import { useNavigation } from '../../hooks/useNavigation';
// import { LanguageSelector } from '../LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const { goToWorkspace } = useNavigation();
  
  // Check if current path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Navigation links
  const navLinks = [
    { name: t('common.home'), path: '/', icon: <Home className="h-5 w-5" /> },
    { name: t('common.blog'), path: '/blog', icon: <BookOpen className="h-5 w-5" /> },
    { name: t('common.about'), path: '/about', icon: <InfoIcon className="h-5 w-5" /> },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FileSpreadsheet className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">ExcelEasy</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  isActive(link.path) 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            
            <ExcelToolsMenu />
            
            <button
              onClick={goToWorkspace}
              className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Workspace</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`flex items-center space-x-2 px-4 py-3 ${
                    isActive(link.path) 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <div className="px-4 py-3">
                <ExcelToolsMenu />
              </div>
              
              <div className="px-4 py-3 mt-2">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    goToWorkspace();
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Workspace</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;