import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RestaurantCard } from '../components/RestaurantCard';
import { useProtectPage } from '../hooks/useProtectPage';
import { CategoriesContainer } from '../styles/screens/Feed/CategoriesContainer';
import { SearchInput } from '../components/SearchInput';
import { ScrollDownContainer } from '../styles/screens/Feed/ScrollDownContainer';
import { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import { goToSearch } from '../router/Coordinator';

export function Feed() {
  useProtectPage();
  const history = useHistory();
  const { states, requests } = useContext(GlobalStateContext);

  // *Estado que define que categoria filtrar os restaurantes
  const [chosenCategory, setChosenCategory] = useState();

  useEffect(() => {
    requests.getRestaurants();
  }, []);

  const onClickSetCategory = (category) => {
    setChosenCategory(category);
    console.log('Chosen category', chosenCategory);
  };

  // *Filtra array de restaurantes baseado no estado chosenCategory
  const filteredByCategory = states.restaurants.filter((restaurant) => {
    if (chosenCategory) {
      return restaurant.category === chosenCategory;
    }
    if (!chosenCategory) {
      return restaurant;
    }
  });

  const renderRestaurants = filteredByCategory.map((restaurant) => {
    return (
      <RestaurantCard
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />
    );
  });

  const renderCategories = states.categories.map((category) => {
    return <p onClick={() => onClickSetCategory(category)}>{category}</p>;
  });

  return (
    <div>
      <Header text="FutureEats" />
      <SearchInput onClick={() => goToSearch(history)} />
      <CategoriesContainer>{renderCategories}</CategoriesContainer>
      <ScrollDownContainer>{renderRestaurants}</ScrollDownContainer>

      <Footer homeActive="true" />
    </div>
  );
}
