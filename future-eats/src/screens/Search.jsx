import { Footer } from '../components/Useful/Footer';
import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { useContext, useState, useEffect } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { SearchInput } from '../components/Useful/SearchInput';
import { RestaurantCard } from '../components/Feed/RestaurantCard';
import { PlaceholderSearchPage } from '../styles/screens/PlaceholderSearchPage';

export function Search() {
  useProtectPage();
  const { states, requests } = useContext(GlobalStateContext);
  const [searchedRestaurant, setSearchedRestaurant] = useState();

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  const filteredByName = states.restaurants.filter((restaurant) => {
    return restaurant.name.includes(searchedRestaurant);
  });

  const renderRestaurants = filteredByName.map((restaurant) => {
    return (
      <RestaurantCard
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
    );
  });

  const onChangeSetSearchedRestaurant = (event) => {
    setSearchedRestaurant(event.target.value);
  };
  return (
    <div>
      <Header backIcon="true" text="Buscar" />
      <SearchInput onChange={onChangeSetSearchedRestaurant} />
      {searchedRestaurant ? (
        renderRestaurants
      ) : (
        <PlaceholderSearchPage>
          Busque por nome de restaurante
        </PlaceholderSearchPage>
      )}
      <Footer homeActive="true" />
    </div>
  );
}
