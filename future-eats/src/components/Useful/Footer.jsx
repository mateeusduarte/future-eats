import HomeIcon from '../../assets/homeIcon.svg';
import ProfileIcon from '../../assets/profileIcon.svg';
import ShoppingCartIconSelected from '../../assets/shoppingCartIconSelected.svg';
import ShoppingCartIcon from '../../assets/shoppingCartIcon.svg';
import HomeIconSelected from '../../assets/homeIconSelected.svg';
import ProfileIconSelected from '../../assets/profileIconSelected.svg';
import { FooterContainer } from '../../styles/components/Footer/FooterContainer';
import { FooterIconContainer } from '../../styles/components/Footer/FooterIconContainer';
import { useHistory } from 'react-router-dom';
import { goToCart, goToFeed, goToProfile } from '../../router/Coordinator';
import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { OnGoingOrderCard } from './OnGoingOrderCard';

export function Footer(props) {
  const history = useHistory();
  const { states, requests, setters } = useContext(GlobalStateContext);

  const goToFeedAndCleanSearch = (history) => {
    history.push('/feed');
    setters.setChosenCategory(false);
  };

  return (
    <div>
    
      <FooterContainer>
        <FooterIconContainer active={props.homeActive}>
          <img
            src={HomeIcon}
            onClick={() => goToFeedAndCleanSearch(history)}
            alt="Icone da Home"
          />
          <img src={HomeIconSelected} alt="Icone da Home" />
        </FooterIconContainer>
        <FooterIconContainer active={props.shoppingCartActive}>
          <img
            src={ShoppingCartIcon}
            onClick={() => goToCart(history)}
            alt="Icone Carrinho"
          />
          <img src={ShoppingCartIconSelected} alt="Icone Carrinho" />
        </FooterIconContainer>
        <FooterIconContainer active={props.profileActive}>
          <img
            src={ProfileIcon}
            onClick={() => goToProfile(history)}
            alt="Icone Profile"
          />
          <img src={ProfileIconSelected} alt="Icone Profile" />
        </FooterIconContainer>
      </FooterContainer>
    </div>
  );
}
