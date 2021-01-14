import { HeaderContainer } from '../../styles/components/HeaderContainer';
import BackIcon from '../../assets/backIcon.svg';
import { goBack } from '../../router/Coordinator';
import { useHistory } from 'react-router-dom';

export function Header(props) {
  const history = useHistory();

  const renderBackIcon = () => {
    if (props.backIcon) {
      return (
        <img
          src={BackIcon}
          onClick={() => goBack(history)}
          alt="Icone Voltar"
        />
      );
    }
  };
  return (
    <HeaderContainer>
      {renderBackIcon()}
      <h1>{props.text}</h1>
    </HeaderContainer>
  );
}
