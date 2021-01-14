import { Footer } from '../components/Useful/Footer';
import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { SearchInput } from '../components/Useful/SearchInput';
import { goToSearch } from '../router/Coordinator';
import { ScrollDownFeed } from '../components/Feed/ScrollDownFeed';
import { useHistory } from 'react-router-dom';
import { getActiveOrder } from '../services/getActiveOrder';
import { useContext, useEffect } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';

export function Feed() {
  const { setters } = useContext(GlobalStateContext);
  useEffect(() => {
    getActiveOrder(setters.setActiveOrder);
  }, []);
  useProtectPage();
  const history = useHistory();
  return (
    <div>
      <Header text="FutureEats" />
      <SearchInput onClick={() => goToSearch(history)} />
      <ScrollDownFeed />
      <Footer homeActive="true" />
    </div>
  );
}
