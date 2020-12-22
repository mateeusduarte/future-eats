import { SearchInputContainer } from '../styles/components/SearchInputContainer';
import SearchIcon from '../assets/search.svg';

export function SearchInput(props) {
  return (
    <SearchInputContainer onClick={props.onClick}>
      <img src={SearchIcon} />
      <input placeholder="Restaurante" />
    </SearchInputContainer>
  );
}
