import { InfoContainer } from "../styles/components/RestaurantCard/InfoContainer";
import { RestaurantCardContainer } from "../styles/components/RestaurantCard/RestaurantCardContainer";

export function RestaurantCard() {
  return (
    <RestaurantCardContainer>
      <img src="https://www.sopacultural.com/wp-content/uploads/2020/04/Bullguer.jpg" />
      <InfoContainer>
        <h2>Vinil Butantã</h2>
        <div>
          <p>50 - 60 min</p>
          <p>Frete R$6,00</p>
        </div>
      </InfoContainer>
    </RestaurantCardContainer>
  );
}
