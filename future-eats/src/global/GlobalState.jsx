import GlobalStateContext from './GlobalStateContext';
import React, { useState } from 'react';
import Axios from 'axios';
import { baseUrl } from '../constants/baseUrl';
import { headers } from '../constants/headers';

const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [restaurantItems, setRestaurantItems] = useState([0, []]);
  const [cart, setCart] = useState([0, []]);
  const [chosenProduct, setChosenProduct] = useState([]);
  const [profileInfo, setProfileInfo] = useState();
  const [activeOrder, setActiveOrder] = useState(false);

  // *Estado que define que categoria filtrar os restaurantes
  const [chosenCategory, setChosenCategory] = useState();

  const getRestaurants = () => {
    Axios.get(`${baseUrl}/restaurants`, {
      headers: {
        auth: localStorage.getItem('token'),
      },
    })
      .then((result) => {
        let newCategories = [];
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

  const getRestaurantDetails = (restaurantId) => {
    Axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
      headers: {
        auth: localStorage.getItem('token'),
      },
    })
      .then((result) => {
        console.log(
          'Requisição get restaurantDetails: ',
          result.data.restaurant
        );
        setRestaurantDetails(result.data.restaurant);
        let newRestaurantItems = [result.data.restaurant.id];
        newRestaurantItems.push(result.data.restaurant.products);
        console.log(newRestaurantItems);
        setRestaurantItems(newRestaurantItems);
      })
      .catch((err) => {
        console.log('Erro requisição restaurantsDetails', err);
      });
  };

  const getProfile = () => {
    Axios.get(`${baseUrl}/profile`, {
      headers: {
        auth: localStorage.getItem('token'),
      },
    })
      .then((result) => {
        setProfileInfo(result.data.user);
        console.log('Requisição get profile: ', result.data.user);
      })
      .catch((err) => {
        console.log('Erro requisição de get profile', err);
      });
  };

  const states = {
    restaurants,
    categories,
    restaurantDetails,
    restaurantItems,
    chosenCategory,
    cart,
    chosenProduct,
    profileInfo,
    activeOrder,
  };
  const setters = {
    setChosenCategory,
    setCart,
    setChosenProduct,
    setProfileInfo,
    setActiveOrder,
  };
  const requests = { getRestaurants, getRestaurantDetails, getProfile };
  const data = {
    states,
    setters,
    requests,
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
