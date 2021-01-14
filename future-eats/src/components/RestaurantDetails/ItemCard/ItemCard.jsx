import { ItemCardContainer } from '../../../styles/components/ItemCardContainer';
import { AddButton } from './AddButton';
import { RemoveButton } from '../../RestaurantDetails/ItemCard/RemoveButton';
import { QuantityCard } from '../../Useful/QuantityCard';
import { useContext, useState, useEffect } from 'react';
import GlobalStateContext from '../../../global/GlobalStateContext';

export function ItemCard(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);

  const [renderRemoveButton, setRenderRemoveButton] = useState(false);

  useEffect(() => {
    onLoadSetRenderRemoveButton();
  }, [states.cart]);

  const goToChooseQuantity = (item) => {
    props.setRenderChooseQuantityCard(true);
    setters.setChosenProduct(item);
    console.log('chosen product', states.chosenProduct);
  };

  const onLoadSetRenderRemoveButton = () => {
    console.log(renderRemoveButton, 'renderiza ou nao');

    states.cart[1].map((produto) => {
      if (props.id === produto.id) {
        setRenderRemoveButton(true);
      }
    });
  };

  const removeItemFromCard = (product) => {
    let newCart = [...states.cart];
    console.log(newCart, 'before splice');
    let i = newCart[1].indexOf(product);
    console.log('index:', i);
    newCart[1].splice(i, 1);
    console.log(newCart, 'after splice');
    setters.setCart(newCart);
    setRenderRemoveButton(false);
  };

  const renderButton = () => {
    if (renderRemoveButton === true) {
      return <RemoveButton onClick={() => removeItemFromCard(props.product)} />;
    } else {
      return <AddButton onClick={() => goToChooseQuantity(props.product)} />;
    }
  };

  return (
    <ItemCardContainer>
      <img src={[props.photoUrl]} alt="Foto produto" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>R${props.price}</p>
      </div>
      <div>
        {renderButton()}
        {props.cart ? <QuantityCard quantity={props.quantity} /> : ''}
      </div>
    </ItemCardContainer>
  );
}
