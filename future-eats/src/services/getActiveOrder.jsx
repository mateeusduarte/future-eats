import Axios from 'axios';
import { baseUrl } from '../constants/baseUrl';

export const getActiveOrder = (setState) => {
  Axios.get(`${baseUrl}/orders/history`, {
    headers: {
      auth: localStorage.getItem('token'),
    },
  })
    .then((result) => {
      setState(result.data.orders);
      console.log('Requisição activer Order  ', result.data.orders);
    })
    .catch((err) => {
      console.log('Erro requisição de get active order', err);
    });
};
