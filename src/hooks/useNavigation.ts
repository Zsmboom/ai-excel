import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToWorkspace = () => {
    navigate('/workspace');
  };

  const goToFunctions = () => {
    navigate('/excel-functions');
  };
  
  const goToExcelChart = () => {
    navigate('/ai-excel-chart');
  };
  
  const goToPicToExcel = () => {
    navigate('/pic-to-excel');
  };

  return { goToWorkspace, goToFunctions, goToExcelChart, goToPicToExcel };
};