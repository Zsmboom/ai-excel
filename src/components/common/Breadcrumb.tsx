import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  // 不再使用语言前缀
  // const { lang = 'en' } = useParams();

  // 移除路径中的语言部分，例如 /zh/about -> /about
  const pathWithoutLang = location.pathname; 
  
  // 提取路径部分，排除空字符串
  const pathParts = pathWithoutLang.split('/').filter(Boolean);

  // 创建页面名称映射表
  const pathMap: Record<string, string> = {
    'ai-excel-generator': t('common.excelGenerator'),
    'excel-functions': t('common.excelFunctions'),
    'pic-to-excel': t('common.picToExcel'),
    'ai-excel-chart': t('common.excelChart'),
    'blog': t('common.blog'),
    'about': t('common.about'),
    'privacy': t('common.privacy'),
    'contact': t('common.contact'),
    'sitemap': t('common.sitemap')
  };

  return (
    <nav className="bg-gray-50 py-3 px-4 md:px-0">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 flex items-center"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {pathParts.map((part, index) => {
            const path = `/${pathParts.slice(0, index + 1).join('/')}`;
            const isLast = index === pathParts.length - 1;

            return (
              <React.Fragment key={path}>
                <li>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </li>
                <li>
                  {isLast ? (
                    <span className="text-gray-900 font-medium">
                      {pathMap[part] || part}
                    </span>
                  ) : (
                    <Link
                      to={path}
                      className="text-gray-600 hover:text-blue-600"
                    >
                      {pathMap[part] || part}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb; 