import { InputContainer } from "../styles/components/InputContainer";
import { useState } from "react";
import Unhide from "../assets/unhide-password.svg";
import Hide from "../assets/hide-password.svg";

export function Input(props) {
  const [typeInput, setTypeInput] = useState(props.type);

  // Função que renderiza icone de senha conforme o tipo do input
  const renderPasswordIcon = () => {
    if (typeInput === "password") {
      return <img src={Unhide} onClick={changeTypeInputToEmpty} />;
    }

    if (typeInput === "") {
      return <img src={Hide} onClick={changeTypeInputToPassword} />;
    }
  };

  // Funções que setam se a senha é visivel ou não
  const changeTypeInputToEmpty = () => {
    setTypeInput("");
  };
  const changeTypeInputToPassword = () => {
    setTypeInput("password");
  };

  // Função que ve se o input é required ou não
  const isItRequired = () => {
    if (props.required) {
      return (
        <InputContainer isConfirmed={props.isConfirmed}>
          <label>{props.label}</label>
          <input
            placeholder={props.placeholder}
            type={typeInput}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            pattern={props.pattern}
            required
          />
          {renderPasswordIcon()}
        </InputContainer>
      );
    } else {
      return (
        <InputContainer isConfirmed={props.isConfirmed}>
          <label>{props.label}</label>
          <input
            placeholder={props.placeholder}
            type={typeInput}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            pattern={props.pattern}
          />
          {renderPasswordIcon()}
        </InputContainer>
      );
    }
  };
  return <div>{isItRequired()}</div>;
}
