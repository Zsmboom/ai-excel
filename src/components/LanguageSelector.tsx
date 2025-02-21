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
    const pathParts = currentPath.split('/');
    
    // 移除当前的语言前缀（如果有）
    const pathWithoutLang = pathParts.length > 1 && languages.map(l => l.code).includes(pathParts[1])
      ? '/' + pathParts.slice(2).join('/')
      : currentPath;
    
    // 更新语言
    i18n.changeLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    
    // 英语版本使用根路径，其他语言添加语言前缀
    const newPath = newLang === 'en' 
      ? pathWithoutLang 
      : `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    
    // 更新 URL
    navigate(newPath, { replace: true });
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