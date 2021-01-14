import { OnGoingOrderContainer } from '../../styles/components/OnGoingOrderContainer';
import Clock from '../../assets/clock.svg';
export function OnGoingOrderCard() {
  return (
    <OnGoingOrderContainer>
      <img src={Clock} />
      <div>
        <p>Pedido em andamento</p>
        <p>Bullguer Vila Madalena</p>
        <p>SUBTOTAL R$67,00</p>
      </div>
    </OnGoingOrderContainer>
  );
}
