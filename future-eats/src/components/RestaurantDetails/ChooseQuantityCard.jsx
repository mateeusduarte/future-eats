import { ChooseQuantityCardContainer } from '../../styles/components/ChooseQuantityCardContainer';
import GlobalStateContext from '../../global/GlobalStateContext';
import { useContext, useState } from 'react';
export function ChooseQuantityCard(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);

  let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const renderOptions = options.map((option) => {
    return <option value={option}>{option}</option>;
  });

  const onChangeSetQuantity = (event) => {
    states.chosenProduct.quantity = event.target.value;
    console.log('quantity chosenProduct:', states.chosenProduct.quantity);
  };

  const addProductToCart = () => {
    let newCart = [...states.cart];
    console.log(newCart, 'NEW CART');
    console.log(states.restaurantItems[0], `id`);
    if (newCart[0] === states.restaurantItems[0]) {
      console.log('PASSOU PRIMA');
      if (states.chosenProduct.quantity > 0) {
        newCart[1].push(states.chosenProduct);
        setters.setCart(newCart);
      }
    }
    if (newCart[0] != states.restaurantItems[0]) {
      console.log('PASSOU SEGUNDA');
      if (states.chosenProduct.quantity > 0) {
        newCart[0] = states.restaurantItems[0];
        newCart[1] = [states.chosenProduct];

        setters.setCart(newCart);
      }
    }

    console.log('CART:', states.cart);

    props.setRenderChooseQuantityCard(false);
  };
  return (
    <ChooseQuantityCardContainer>
      <h1>Selecione a quantidade desejada</h1>
      <select onChange={onChangeSetQuantity}>{renderOptions}</select>
      <p onClick={addProductToCart}>ADICIONAR AO CARRINHO</p>
    </ChooseQuantityCardContainer>
  );
}
