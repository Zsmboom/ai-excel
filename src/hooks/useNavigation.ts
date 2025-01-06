import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useNavigation = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  const goToWorkspace = () => {
    const currentLang = lang || i18n.language || 'en';
    navigate(`/${currentLang}/ai-excel-generator`);
  };

  return { goToWorkspace };
};