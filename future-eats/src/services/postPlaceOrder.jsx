import Axios from 'axios';
import { baseUrl } from '../constants/baseUrl';
import { goToFeed } from '../router/Coordinator';

export const postPlaceOrder = (body, history, restaurantId) => {
  const goToFeedAfter3secs = () => {
    setTimeout(function () {
      goToFeed(history);
    }, 3000);
    console.log('Going to feed...');
  };

  Axios.post(`${baseUrl}//restaurants/${restaurantId}/order`, body, {
    headers: {
      auth: localStorage.getItem('token'),
    },
  })
    .then((result) => {
      console.log('Ordem efetuada com sucesso: ', result);
      goToFeedAfter3secs();
      localStorage.setItem('token', result.data.token);
    })
    .catch((err) => {
      console.log('Erro requisição de place order', err);
    });
};
