import Axios from 'axios';

import { baseUrl } from '../constants/baseUrl';
import { headers } from '../constants/headers';
import { goToFeed } from '../router/Coordinator';

export const putAddress = (body, history, goToFunction, firstAddress) => {
  const goToFeedAfter3secs = () => {
    setTimeout(function () {
      goToFunction(history);
    }, 3000);
    console.log('Going to feed...');
  };

  Axios.put(`${baseUrl}/address`, body, {
    headers: {
      auth: localStorage.getItem('token'),
    },
  })
    .then((result) => {
      console.log('Endereço adicionado com sucesso: ', result);
      if (firstAddress) {
        localStorage.removeItem('token');
      }
      localStorage.setItem('token', result.data.token);
      goToFeedAfter3secs();
    })
    .catch((err) => {
      console.log('Erro requisição de adicionar endereço', err);
    });
};
