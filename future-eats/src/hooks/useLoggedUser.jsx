import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToFeed } from '../router/Coordinator';

export const useLoggedUser = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      goToFeed(history);
    }
  }, [history]);
};
