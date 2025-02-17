import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSpreadsheet, Github, Twitter, Linkedin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { BsReddit } from 'react-icons/bs';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang = 'en' } = useParams();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">ExcelEasy</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/exceleasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/exceleasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/exceleasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.reddit.com/r/excel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BsReddit className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.features.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/${lang}/ai-excel-generator`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.features.generator')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/excel-functions`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.features.functions')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/pic-to-excel`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.features.picToExcel')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/ai-excel-chart`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.features.chart')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/${lang}/about`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/blog`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.company.blog')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/privacy`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.company.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/contact`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.company.contact')}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/sitemap`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.company.sitemap')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} ExcelEasy. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;