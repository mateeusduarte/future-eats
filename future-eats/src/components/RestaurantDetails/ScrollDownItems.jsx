import { useContext, useEffect } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { ItemCard } from './ItemCard/ItemCard';

export function ScrollDownItems(props) {
  const { states, requests, setters } = useContext(GlobalStateContext);

  const renderItems = states.restaurantItems[1].map((product) => {
    return (
      <ItemCard
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

  return <>{renderItems}</>;
}
