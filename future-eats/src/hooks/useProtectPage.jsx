import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage } from '../router/Coordinator';

export const useProtectPage = () => {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      goToLoginPage(history);
    }
  }, [history]);
};
