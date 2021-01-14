import { Footer } from '../components/Useful/Footer';
import { Header } from '../components/Useful/Header';
import { useProtectPage } from '../hooks/useProtectPage';
import { useForm } from '../hooks/useForm';
import { FormContainer } from '../styles/screens/FormContainer';
import { onSubmitForm } from '../constants/preventDefault';
import { Input } from '../components/Useful/Input';
import { Button } from '../components/Useful/Button';
import { useHistory } from 'react-router-dom';
import { putEditProfile } from '../services/putEditProfile';

export function EditProfile() {
  useProtectPage();
  const history = useHistory();
  const { form, onChange } = useForm({
    name: '',
    email: '',
    cpf: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div>
      <Header backIcon="true" text="Editar" />
      <FormContainer>
        <form onSubmit={onSubmitForm}>
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

          <Button text="Salvar" onClick={() => putEditProfile(form, history)} />
        </form>
      </FormContainer>

      <Footer profileActive="true" />
    </div>
  );
}
