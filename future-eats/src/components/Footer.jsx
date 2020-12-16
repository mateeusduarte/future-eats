import HomeIcon from '../assets/homeIcon.svg'
import ProfileIcon from '../assets/profileIcon.svg'
import ShoppingCartIconSelected from '../assets/shoppingCartIconSelected.svg'
import ShoppingCartIcon from '../assets/shoppingCartIcon.svg'
import HomeIconSelected from '../assets/homeIconSelected.svg'
import ProfileIconSelected from '../assets/profileIconSelected.svg'
import { FooterContainer } from '../styles/components/FooterContainer';

export function Footer() {
    return <FooterContainer>
      <div>
        <img src={HomeIcon}/>
        <img src={HomeIconSelected}/>
      </div>
      <div>
        <img src={ShoppingCartIcon}/>
        <img src={ShoppingCartIconSelected}/>
      </div>
      <div>
        <img src={ProfileIcon}/>
        <img src={ProfileIconSelected}/>
      </div>
    </FooterContainer>;
  }
  