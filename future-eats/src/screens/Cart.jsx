import { Footer } from '../components/Useful/Footer';
import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { ProfileAddressInfoCard } from '../components/Profile/ProfileAddressInfoCard';
import GlobalStateContext from '../global/GlobalStateContext';
import { useContext, useEffect, useState } from 'react';
import { ScrollDownItems } from '../components/RestaurantDetails/ScrollDownItems';
import { Button } from '../components/Useful/Button';
import { CartContainer } from '../styles/screens/Cart/CartContainer';
import { OrderInfo } from '../styles/screens/Cart/OrderInfo';
import { ScrollDownCart } from '../components/Cart/ScrollDownCart';
import { useHistory } from 'react-router-dom';
import { render } from 'react-dom';

export function Cart() {
  useProtectPage();
  const history = useHistory();
  const { states, requests, setters  } = useContext(GlobalStateContext);
  const [total, setTotal] = useState();
  const [bodyOrder, setBodyOrder] = useState();
  let subTotal = 0;
  const sumTotal = () => {
    states.cart[1].map((item) => {
      subTotal = subTotal + item.price;
      console.log(subTotal, 'valor subtotal');
    });
    setTotal(subTotal);
  };
  useEffect(() => {
    sumTotal();
  }, [states.cart]);

  useEffect(() => {
    createBodyOrder();
  }, []);

  const createBodyOrder = () => {
    let itemBody = {
      products: [],
      paymentMethod: 'creditcard',
    };
    states.cart[1].map((item) => {
      itemBody.products.push({ quantity: item.quantity, id: item.id });
      setBodyOrder(itemBody);
    });
  };

    const makeOrder = () => {
    
    alert("Ordem confirmada")
    setters.setCart([0,[]])
}
  const renderScrollDown = () => {
    console.log(states.cart)
    if(states.cart[1].length < 1){
      return(<p>Seu carrinho está vazio!</p>)
    } else{
      return(<ScrollDownCart cart={true}/>)
    }
  }

  const renderButtonAndInfo = () => {
    
    if(states.cart[1].length >= 1){
      return(<>
        <OrderInfo>
            <p>TOTAL</p>
            <p>R${total ? total : 0}</p>
          </OrderInfo>
          <Button
            text="Confirmar"
            onClick={()=>makeOrder()}
          />
          </>)
      
    } 
  }
  return (
    <>
      <CartContainer>
        <Header backIcon="true" text="Meu carrinho" />
        <ProfileAddressInfoCard h2={true} />
        {renderScrollDown()}
        {renderButtonAndInfo()}
      </CartContainer>
      <Footer shoppingCartActive="true" />
    </>
  );
}
