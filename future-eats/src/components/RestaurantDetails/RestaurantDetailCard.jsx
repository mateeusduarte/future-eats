import { RestaurantDetailCardContainer } from '../../styles/components/RestaurantDetailCardContainer';

export function RestaurantDetailCard(props) {
  return (
    <RestaurantDetailCardContainer>
      <img src={props.logoUrl} />
      <h1>{props.name}</h1>
      <p>{props.category}</p>
      <div>
        <p>{props.deliveryTime} min</p>
        <p>Frete R${props.shipping},00</p>
      </div>
      <p>{props.address}</p>
    </RestaurantDetailCardContainer>
  );
}
