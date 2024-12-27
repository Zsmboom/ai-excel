import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToWorkspace = () => {
    navigate('/workspace');
  };

  return { goToWorkspace };
};