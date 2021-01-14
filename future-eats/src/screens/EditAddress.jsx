import { Footer } from '../components/Useful/Footer';
import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { useForm } from '../hooks/useForm';
import { FormContainer } from '../styles/screens/FormContainer';
import { Input } from '../components/Useful/Input';
import { Button } from '../components/Useful/Button';
import { onSubmitForm } from '../constants/preventDefault';
import { putAddress } from '../services/putAddress';
import { useHistory } from 'react-router-dom';
import { goToProfile } from '../router/Coordinator';

export function EditAddress() {
  useProtectPage();
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
      <Header backIcon="true" text="Endereço" />
      <FormContainer>
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
            text="Salvar"
            onClick={() => putAddress(form, history, goToProfile)}
          />
        </form>
      </FormContainer>
      <Footer profileActive="true" />
    </div>
  );
}
