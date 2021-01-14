import { OrderHistoryCardContainer } from '../../styles/components/OrderHistoryCardContainer';

export function OrderHistoryCard(props) {
  let date = new Date(props.createdAt);
  console.log(date);
  const time = date.toLocaleString('pt-BR');
  console.log(time);
  return (
    <OrderHistoryCardContainer>
      <h3>{props.restaurantName}</h3>
      <p>{time}</p>
      <p>SUBTOTAL R${props.totalPrice}</p>
    </OrderHistoryCardContainer>
  );
}
