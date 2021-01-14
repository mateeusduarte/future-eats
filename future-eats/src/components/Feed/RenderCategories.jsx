import { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';

export function RenderCategories() {
  const { states, requests, setters } = useContext(GlobalStateContext);

  const onClickSetCategory = (category) => {
    setters.setChosenCategory(category);
    console.log('Chosen category', states.chosenCategory);
  };

  const renderCategories = states.categories.map((category) => {
    return <p onClick={() => onClickSetCategory(category)}>{category}</p>;
  });

  return <>{renderCategories}</>;
}
