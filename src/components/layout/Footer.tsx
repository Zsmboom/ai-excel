import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSpreadsheet, Github, Twitter, Linkedin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ExcelEasy</span>
            </div>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.tools.title')}</h3>
            <ul className="space-y-2">
              <li><Link to={`/${currentLang}/ai-excel-generator`} className="text-gray-400 hover:text-white">{t('common.excelGenerator')}</Link></li>
              <li><Link to={`/${currentLang}/excel-functions`} className="text-gray-400 hover:text-white">{t('common.excelFunctions')}</Link></li>
              <li><Link to={`/${currentLang}/pic-to-excel`} className="text-gray-400 hover:text-white">{t('common.picToExcel')}</Link></li>
              <li><Link to={`/${currentLang}/ai-excel-chart`} className="text-gray-400 hover:text-white">{t('common.excelChart')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><Link to={`/${currentLang}/about`} className="text-gray-400 hover:text-white">{t('footer.company.about')}</Link></li>
              <li><Link to={`/${currentLang}/blog`} className="text-gray-400 hover:text-white">{t('footer.company.blog')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.connect.title')}</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <a href="https://github.com/Zsmboom/ai-excel" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white flex items-center" 
                   aria-label="GitHub">
                  <Github className="h-6 w-6 mr-2" />
                  <span>{t('footer.connect.github')}</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://x.com/ShiMin_alcor" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white flex items-center" 
                   aria-label="X">
                  <Twitter className="h-6 w-6 mr-2" />
                  <span>X</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-4">&copy; {new Date().getFullYear()} ExcelEasy. {t('common.allRightsReserved')}</p>
          <p className="text-sm">
            <a href="https://github.com/Zsmboom/ai-excel" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300">
              {t('footer.openSource')} ⭐
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;