import { InfoContainer } from '../styles/components/RestaurantCard/InfoContainer';
import { RestaurantCardContainer } from '../styles/components/RestaurantCard/RestaurantCardContainer';

export function RestaurantCard(props) {
  return (
    <RestaurantCardContainer>
      <img src={props.logoUrl} />
      <InfoContainer>
        <h2>{props.name}</h2>
        <div>
          <p>{props.deliveryTime} min</p>
          <p>Frete R${props.shipping},00</p>
        </div>
      </InfoContainer>
    </RestaurantCardContainer>
  );
}
