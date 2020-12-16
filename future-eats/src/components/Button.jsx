import { ButtonContainer } from "../styles/components/ButtonContainer";

export function Button(props) {
    return (
      <ButtonContainer onClick={props.onClick}>
        {props.text}
      </ButtonContainer>
    );
  }
  