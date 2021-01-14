import Axios from 'axios';
import { baseUrl } from '../constants/baseUrl';

export const getOrderHistory = (setState) => {
  Axios.get(`${baseUrl}/orders/history`, {
    headers: {
      auth: localStorage.getItem('token'),
    },
  })
    .then((result) => {
      setState(result.data.orders);
      console.log('Requisição get order history ', result.data.orders);
    })
    .catch((err) => {
      console.log('Erro requisição de get order history', err);
    });
};
