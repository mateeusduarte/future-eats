import { ChooseQuantityCardContainer } from "../styles/components/ChooseQuantityCardContainer";
import DropDown from "../assets/dropdown.svg";
export function ChooseQuantityCard() {
  let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const renderOptions = options.map((option) => {
    return <option value={option}>{option}</option>;
  });
  return (
    <ChooseQuantityCardContainer>
      <h1>Selecione a quantidade desejada</h1>
      <select>{renderOptions}</select>
      <p>ADICIONAR AO CARRINHO</p>
    </ChooseQuantityCardContainer>
  );
}
