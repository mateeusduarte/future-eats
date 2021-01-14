import { RemoveButtonContainer } from '../../../styles/components/RemoveButtonContainer';

export function RemoveButton(props) {
  return (
    <RemoveButtonContainer onClick={props.onClick}>
      remover
    </RemoveButtonContainer>
  );
}
