/*
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function useAuthCheck() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = (currentState: any = null) => {
    if (!user) {
      // Save current state to localStorage before redirecting
      if (currentState) {
        localStorage.setItem('redirectState', JSON.stringify({
          path: location.pathname,
          state: currentState
        }));
      }
      
      navigate('/login');
      return false;
    }
    return true;
  };

  return { checkAuth };
}
*/