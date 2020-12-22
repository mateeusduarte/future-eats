import HomeIcon from '../assets/homeIcon.svg';
import ProfileIcon from '../assets/profileIcon.svg';
import ShoppingCartIconSelected from '../assets/shoppingCartIconSelected.svg';
import ShoppingCartIcon from '../assets/shoppingCartIcon.svg';
import HomeIconSelected from '../assets/homeIconSelected.svg';
import ProfileIconSelected from '../assets/profileIconSelected.svg';
import { FooterContainer } from '../styles/components/Footer/FooterContainer';
import { FooterIconContainer } from '../styles/components/Footer/FooterIconContainer';
import { OnGoingOrderCard } from './OnGoingOrderCard';
import { useHistory } from 'react-router-dom';
import { goToCart, goToFeed, goToProfile } from '../router/Coordinator';

export function Footer(props) {
  const history = useHistory();
  return (
    <div>
      {/* <OnGoingOrderCard /> */}
      <FooterContainer>
        <FooterIconContainer active={props.homeActive}>
          <img src={HomeIcon} onClick={() => goToFeed(history)} />
          <img src={HomeIconSelected} />
        </FooterIconContainer>
        <FooterIconContainer active={props.shoppingCartActive}>
          <img src={ShoppingCartIcon} onClick={() => goToCart(history)} />
          <img src={ShoppingCartIconSelected} />
        </FooterIconContainer>
        <FooterIconContainer active={props.profileActive}>
          <img src={ProfileIcon} onClick={() => goToProfile(history)} />
          <img src={ProfileIconSelected} />
        </FooterIconContainer>
      </FooterContainer>
    </div>
  );
}
