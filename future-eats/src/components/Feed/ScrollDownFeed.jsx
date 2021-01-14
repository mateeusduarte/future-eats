import { ScrollDownContainer } from '../../styles/screens/Feed/ScrollDownContainer';
import { CategoriesContainer } from '../../styles/screens/Feed/CategoriesContainer';
import { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { goToRestaurantDetails } from '../../router/Coordinator';
import { useHistory } from 'react-router-dom';
import { RestaurantCard } from './RestaurantCard';
import { RenderRestaurants } from './RenderRestaurants';
import { RenderCategories } from './RenderCategories';

export function ScrollDownFeed() {
  return (
    <>
      <CategoriesContainer>
        <RenderCategories />
      </CategoriesContainer>
      <ScrollDownContainer>
        <RenderRestaurants />
      </ScrollDownContainer>
    </>
  );
}
