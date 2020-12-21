import { AddButtonContainer } from "../styles/components/AddButtonContainer";
import { ItemCardContainer } from "../styles/components/ItemCardContainer";
import { AddButton } from "./AddButton";
import { RemoveButton } from "./RemoveButton";

export function ItemCard() {
  return (
    <ItemCardContainer>
      <img src="https://culturalizabh.com.br/wp-content/uploads/2019/07/CheeseBullguer-Day-cr%C3%A9dito-Lucas-Terribili-1210x642.jpg" />
      <div>
        <h2>Bullguer</h2>
        <p>Pão, carne, queijo, picles e molho</p>
        <p>R$20,00</p>
      </div>
      <RemoveButton />
    </ItemCardContainer>
  );
}
