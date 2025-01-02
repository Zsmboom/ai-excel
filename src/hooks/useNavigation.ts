import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToWorkspace = () => {
    navigate('/ai-excel-generator');
  };

  return { goToWorkspace };
};