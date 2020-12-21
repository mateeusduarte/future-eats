import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { FormContainer } from "../styles/screens/FormContainer";
import Logo from "../assets/logo-blackfont.png";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { useEffect } from "react";
import { onSubmitForm } from "../constants/preventDefault";
import { signup } from "../services/signup";
import { useHistory } from "react-router-dom";

export function SignUp() {
  const history = useHistory()
  const { form, onChange } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmedPassword:""
  });

  useEffect(()=>{
    checkPassword()
  }, [form.confirmedPassword, form.password])
 
  

  
  const [isConfirmed, setIsConfirmed] = useState();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const checkPassword = () => {
    if(form.confirmedPassword === form.password){
      return setIsConfirmed(false);
    }
    return setIsConfirmed(true);
  }
 

  return (
    <div>
      <Header backIcon="true" />
      <FormContainer>
        <img src={Logo} />
        <h1>Cadastrar</h1>
        <form  onSubmit={onSubmitForm}>
          <Input
            value={form.name}
            name="name"
            label="Nome*"
            placeholder="Nome e sobrenome"
            type="text"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.email}
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            label="E-mail*"
            placeholder="email@email.com"
            type="email"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.cpf}
            name="cpf"
            label="CPF*"
            pattern="(^\d{3}.?\d{3}.?\d{3}-?\d{2})|(^\d{2}.?\d{3}.?\d{3}/?\d{4}-?\d{2})"
            placeholder="000.000.000-00"
            type="text"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.password}
            name="password"
            label="Senha*"
            placeholder="Mínimo 6 caracteres"
            type="password"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.confirmedPassword}
            name="confirmedPassword"
            label="Confirmar*"
            placeholder="Confirme a senha anterior"
            type="password"
            required="true"
            onChange={handleInputChange}
            isConfirmed={isConfirmed}
          />
          <Button text="Entrar" onClick={() => signup(form, history, isConfirmed)} />
        </form>
      </FormContainer>
    </div>
  );
}
