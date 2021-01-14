import Axios from 'axios';

import { baseUrl } from '../constants/baseUrl';
import { headers } from '../constants/headers';
import { goToProfile } from '../router/Coordinator';

export const putEditProfile = (body, history) => {
  const goToProfileAfter3secs = () => {
    setTimeout(function () {
      goToProfile(history);
    }, 3000);
    console.log('checking...');
  };
  console.log('form atualizado', body);
  Axios.put(`${baseUrl}/profile`, body, {
    headers: {
      auth: localStorage.getItem('token'),
    },
  })
    .then((result) => {
      console.log('Perfil editado com succeso: ', result);
      localStorage.setItem('token', result.data.token);
      goToProfileAfter3secs();
    })
    .catch((err) => {
      console.log('Erro requisição de editar perfil', err);
    });
};
