import { useContext, useEffect } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import { RestaurantCard } from './RestaurantCard';
import { goToRestaurantDetails } from '../../router/Coordinator';
import { render } from 'react-dom';

export function RenderRestaurants() {
  const { states, requests } = useContext(GlobalStateContext);

  const history = useHistory();

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  const filteredByCategory = states.restaurants.filter((restaurant) => {
    if (states.chosenCategory) {
      return restaurant.category === states.chosenCategory;
    }
    if (!states.chosenCategory) {
      return restaurant;
    }
  });

  const renderRestaurants = filteredByCategory.map((restaurant) => {
    return (
      <RestaurantCard
        onClick={() => goToRestaurantDetails(history, restaurant.id)}
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
    );
  });
  return <>{renderRestaurants}</>;
}
