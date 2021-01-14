import { useHistory } from 'react-router-dom';
import { Button } from '../components/Useful/Button';
import { Footer } from '../components/Useful/Footer';
import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { goToLoginPage } from '../router/Coordinator';
import { ProfileInfoCard } from '../components/Profile/ProfileInfoCard';
import { ProfileAddressInfoCard } from '../components/Profile/ProfileAddressInfoCard';
import { OrderHistoryTitle } from '../styles/components/OrderHistoryTitle';
import { OrderHistoryCard } from '../components/Profile/OrderHistoryCard';
import { ScrollDownContainer } from '../styles/screens/Feed/ScrollDownContainer';
import { useEffect, useState, useContext } from 'react';

import GlobalStateContext from '../global/GlobalStateContext';
import { getOrderHistory } from '../services/getOrderHistory';

export function Profile() {
  useProtectPage();
  const { states, requests } = useContext(GlobalStateContext);
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    requests.getProfile();
  }, []);

  useEffect(() => {
    getOrderHistory(setOrderHistory);
  }, []);

  const history = useHistory();
  const onClickLogout = () => {
    localStorage.removeItem('token');
    console.log('Token removido');
    goToLoginPage(history);
  };

  const renderOrderHistory = orderHistory.map((order) => {
    return (
      <OrderHistoryCard
        totalPrice={order.totalPrice}
        restaurantName={order.restaurantName}
        createdAt={order.createdAt}
      />
    );
  });

  return (
    <div>
      <Header backIcon="true" text="Meu perfil" />
      <ProfileInfoCard />
      <ProfileAddressInfoCard />
      <OrderHistoryTitle>Histórico de Pedidos</OrderHistoryTitle>
      <ScrollDownContainer profileScreen="true">
        {orderHistory ? renderOrderHistory : 'Você não realizou nenhum pedido'}
      </ScrollDownContainer>
      {/* <Button onClick={onClickLogout} text="Sair" logout="true" /> */}
      <Footer profileActive="true" />
    </div>
  );
}
