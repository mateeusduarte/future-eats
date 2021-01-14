import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { ItemCard } from '../RestaurantDetails/ItemCard/ItemCard';
import { ScrollDownCartContainer } from '../../styles/screens/Cart/ScrollDownCartContainer';

export function ScrollDownCart(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);

  const renderCart = states.cart[1].map((product) => {
    console.log('Carrinho', states.cart);
    return (
      <ItemCard
        quantity={product.quantity}
        cart={props.cart}
        photoUrl={product.photoUrl}
        name={product.name}
        description={product.description}
        price={product.price}
        product={product}
        setRenderChooseQuantityCard={props.setRenderChooseQuantityCard}
        id={product.id}
      />
    );
  });

  return <ScrollDownCartContainer>{renderCart}</ScrollDownCartContainer>;
}
