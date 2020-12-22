import GlobalStateContext from './GlobalStateContext';
import React, { useState } from 'react';
import Axios from 'axios';
import { baseUrl } from '../constants/baseUrl';
import { headers } from '../constants/headers';

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  let newCategories = [];
  const getRestaurants = () => {
    Axios.get(`${baseUrl}/restaurants`, headers)
      .then((result) => {
        console.log('Requisição get restaurants: ', result.data);
        setRestaurants(result.data.restaurants);
        result.data.restaurants.map((restaurant) => {
          if (!newCategories.includes(restaurant.category)) {
            newCategories.push(restaurant.category);
          }
        });
        setCategories(newCategories);
      })
      .catch((err) => {
        console.log('Erro requisição de pegar restaurantes', err);
      });
  };

  const states = { restaurants, categories };
  const setters = {};
  const requests = { getRestaurants };
  const data = { states, setters, requests };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
