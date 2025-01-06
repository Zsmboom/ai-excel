import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { languages } from '../i18n/config';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    const currentPath = location.pathname;
    const supportedLangs = languages.map(l => l.code);
    
    // 获取当前路径中除去语言代码的部分
    const pathParts = currentPath.split('/');
    const hasLangPrefix = pathParts[1] && supportedLangs.includes(pathParts[1]);
    const pathWithoutLang = hasLangPrefix 
      ? '/' + pathParts.slice(2).join('/')
      : currentPath;
    
    // 构建新的 URL，始终包含语言代码
    const newPath = `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    
    // 更新语言
    i18n.changeLanguage(newLang);
    
    // 保存到 localStorage
    localStorage.setItem('preferredLanguage', newLang);
    
    // 更新 URL
    navigate(newPath);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="bg-transparent border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}; 