import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import GlobalStateContext from '../global/GlobalStateContext';
import { RestaurantDetailCard } from '../components/RestaurantDetails/RestaurantDetailCard';
import { ScrollDownItems } from '../components/RestaurantDetails/ScrollDownItems';
import { ChooseQuantityCard } from '../components/RestaurantDetails/ChooseQuantityCard';
import { RestaurantDetailsContainer } from '../styles/screens/RestaurantDetailsContainer';
import { Footer } from '../components/Useful/Footer';

export function RestaurantDetails() {
  const [renderChooseQuantityCard, setRenderChooseQuantityCard] = useState(
    false
  );

  useProtectPage();
  const { states, requests } = useContext(GlobalStateContext);

  const pathParams = useParams();

  useEffect(() => {
    requests.getRestaurantDetails(pathParams.id);
  }, []);

  const renderRestaurantDetailsPage = () => {
    if (renderChooseQuantityCard) {
      return (
        <>
          <RestaurantDetailsContainer>
            <Header backIcon="true" text={states.restaurantDetails.name} />
            <RestaurantDetailCard
              logoUrl={states.restaurantDetails.logoUrl}
              name={states.restaurantDetails.name}
              category={states.restaurantDetails.category}
              address={states.restaurantDetails.address}
              shipping={states.restaurantDetails.shipping}
              deliveryTime={states.restaurantDetails.deliveryTime}
            />
            <ScrollDownItems
              restaurantId={pathParams.id}
              setRenderChooseQuantityCard={setRenderChooseQuantityCard}
            />
          </RestaurantDetailsContainer>
          <ChooseQuantityCard
            setRenderChooseQuantityCard={setRenderChooseQuantityCard}
          />
        </>
      );
    } else {
      return (
        <div>
          <Header backIcon="true" text={states.restaurantDetails.name} />
          <RestaurantDetailCard
            logoUrl={states.restaurantDetails.logoUrl}
            name={states.restaurantDetails.name}
            category={states.restaurantDetails.category}
            address={states.restaurantDetails.address}
            shipping={states.restaurantDetails.shipping}
            deliveryTime={states.restaurantDetails.deliveryTime}
          />
          <ScrollDownItems
            restaurantId={pathParams.id}
            setRenderChooseQuantityCard={setRenderChooseQuantityCard}
          />
        </div>
      );
    }
  };
  return renderRestaurantDetailsPage();
}
