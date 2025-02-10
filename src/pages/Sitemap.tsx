import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { FileSpreadsheet, ChartBar, Image, Code, BookOpen, Users, Mail, Shield, Map } from 'lucide-react';

const Sitemap: React.FC = () => {
  const { t } = useTranslation();
  const { lang = 'en' } = useParams();

  const sections = [
    {
      title: t('sitemap.mainFeatures'),
      icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
      links: [
        { to: '/ai-excel-generator', label: t('common.excelGenerator') },
        { to: '/excel-functions', label: t('common.excelFunctions') },
        { to: '/pic-to-excel', label: t('common.picToExcel') },
        { to: '/ai-excel-chart', label: t('common.excelChart') }
      ]
    },
    {
      title: t('sitemap.resources'),
      icon: <BookOpen className="h-6 w-6 text-green-600" />,
      links: [
        { to: '/blog', label: t('common.blog') }
      ]
    },
    {
      title: t('sitemap.company'),
      icon: <Users className="h-6 w-6 text-purple-600" />,
      links: [
        { to: '/about', label: t('common.about') },
        { to: '/contact', label: t('common.contact') }
      ]
    },
    {
      title: t('sitemap.legal'),
      icon: <Shield className="h-6 w-6 text-red-600" />,
      links: [
        { to: '/privacy', label: t('privacy.title') },
        { to: '/terms', label: t('terms.title') }
      ]
    }
  ];

  return (
    <>
      <PageSEO 
        page="sitemap"
        lastModified="2025-02-10"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Map className="mx-auto h-16 w-16 text-blue-600 mb-4" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('sitemap.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('sitemap.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h2 className="text-xl font-semibold text-gray-900 ml-3">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={`/${lang}${link.to}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap; 