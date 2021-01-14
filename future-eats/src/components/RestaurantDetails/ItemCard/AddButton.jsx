import { AddButtonContainer } from '../../../styles/components/AddButtonContainer';

export function AddButton(props) {
  return (
    <AddButtonContainer onClick={props.onClick}>adicionar</AddButtonContainer>
  );
}
