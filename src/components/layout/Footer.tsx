import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileSpreadsheet, Github, Twitter, Linkedin, Mail, ExternalLink, Heart, FileText, Users, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Footer links data
  const footerLinks = {
    features: [
      { name: t('footer.features.generator'), path: '/ai-excel-generator' },
      { name: t('footer.features.functions'), path: '/excel-functions' },
      { name: t('footer.features.picToExcel'), path: '/pic-to-excel' },
      { name: t('footer.features.chart'), path: '/ai-excel-chart' }
    ],
    company: [
      { name: t('footer.company.about'), path: '/about' },
      { name: t('footer.company.blog'), path: '/blog' },
      { name: t('footer.company.privacy'), path: '/privacy' },
      { name: t('footer.company.contact'), path: '/contact' }
    ],
    resources: [
      { name: 'User Guides', path: '/guides' },
      { name: 'Excel Tutorials', path: '/tutorials' },
      { name: 'FAQ', path: '/faq' }
    ]
  };

  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: 'https://github.com' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Subscribe section */}
        <div className="bg-blue-800 rounded-xl p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold">Join Our Excel Expert Community</h3>
              <p className="text-blue-200 mt-2">Get the latest Excel tips, tutorials and tool updates</p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg md:rounded-r-none mb-2 sm:mb-0 w-full text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg md:rounded-l-none font-medium transition-colors flex items-center justify-center">
                  Subscribe <Mail className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <FileSpreadsheet className="h-8 w-8 text-blue-500 mr-2" />
              <span className="text-xl font-bold">ExcelEasy</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-400" />
              {t('footer.features.title')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-400" />
              {t('footer.company.title')}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-blue-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} ExcelEasy. {t('footer.copyright')}
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="flex items-center mr-4">
                <MapPin className="h-4 w-4 mr-1" />
                Shenzhen, China
              </span>
              <span className="flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by ExcelEasy Team
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;