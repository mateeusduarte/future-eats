import { Header } from '../components/Useful/Header';
import { Input } from '../components/Useful/Input';
import { Button } from '../components/Useful/Button';
import { FormContainer } from '../styles/screens/FormContainer';
import { useForm } from '../hooks/useForm';
import { onSubmitForm } from '../constants/preventDefault';
import { putAddress } from '../services/putAddress';
import { useHistory } from 'react-router-dom';
import { useLoggedUser } from '../hooks/useLoggedUser';
import { goToFeed } from '../router/Coordinator';

export function AddAddress() {
  const history = useHistory();
  const { form, onChange } = useForm({
    street: '',
    number: '',
    complement: '',
    neighbourhood: '',
    city: '',
    state: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  return (
    <div>
      <Header backIcon="true" />
      <FormContainer>
        <h1>Meu endereço</h1>
        <form onSubmit={onSubmitForm}>
          <Input
            value={form.street}
            name="street"
            label="Logradouro*"
            placeholder="Rua / Av"
            type="text"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.number}
            name="number"
            label="Número*"
            placeholder="Número"
            type="number"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.complement}
            name="complement"
            label="Complemento"
            placeholder="Apto / Bloco"
            type="text"
            onChange={handleInputChange}
          />
          <Input
            value={form.neighbourhood}
            name="neighbourhood"
            label="Bairro*"
            placeholder="Bairro"
            type="text"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.city}
            name="city"
            label="Cidade*"
            placeholder="Cidade"
            type="text"
            required="true"
            onChange={handleInputChange}
          />
          <Input
            value={form.state}
            name="state"
            label="Estado*"
            placeholder="Estado"
            type="text"
            required="true"
            onChange={handleInputChange}
          />
          <Button
            text="Criar"
            onClick={() => putAddress(form, history, goToFeed, true)}
          />
        </form>
      </FormContainer>
    </div>
  );
}
