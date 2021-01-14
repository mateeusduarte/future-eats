import { Button } from '../components/Useful/Button';
import { Input } from '../components/Useful/Input';
import Logo from '../assets/logo-blackfont.png';
import { FormContainer } from '../styles/screens/FormContainer';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../router/Coordinator';
import { useForm } from '../hooks/useForm';
import { onSubmitForm } from '../constants/preventDefault';
import { login } from '../services/login';
import { useLoggedUser } from '../hooks/useLoggedUser';

export function Login() {
  useLoggedUser();
  const history = useHistory();

  const { form, onChange } = useForm({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <FormContainer>
      <img src={Logo} />
      <h1>Entrar</h1>
      <form onSubmit={onSubmitForm}>
        <Input
          value={form.email}
          name="email"
          label="E-mail*"
          placeholder="email@email.com"
          type="email"
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
        <Button text="Entrar" onClick={() => login(form, history)} />
      </form>
      <p>
        Não possui cadastro?{' '}
        <strong onClick={() => goToSignUp(history)}>Clique aqui.</strong>
      </p>
    </FormContainer>
  );
}
