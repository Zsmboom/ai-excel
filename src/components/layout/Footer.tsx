import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSpreadsheet, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
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
            <h3 className="text-lg font-semibold mb-4">{t('footer.product.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">{t('footer.product.features')}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">{t('footer.product.pricing')}</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">{t('footer.product.testimonials')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.company.about')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.company.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.company.careers')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.connect.title')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label={t('footer.connect.github')}>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label={t('footer.connect.twitter')}>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label={t('footer.connect.linkedin')}>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ExcelEasy. {t('common.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;