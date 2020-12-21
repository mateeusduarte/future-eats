import Axios from "axios"

import { baseUrl } from "../constants/baseUrl"
import { headers } from "../constants/headers";
import { goToFeed } from "../router/Coordinator"

export const putAddress = (body, history) => {

    const goToFeedAfter3secs = () => {
        setTimeout(function () {
          goToFeed(history);
        }, 3000)
        console.log("Going to feed...");
      };

    Axios.put(`${baseUrl}/address`,body, headers)
      .then((result)=>{
        console.log("Endereço adicionado com sucesso: ", result)
        goToFeedAfter3secs()
        localStorage.setItem("token", result.data.token)
    }).catch((err)=>{
      console.log("Erro requisição de adicionar endereço", err)
    })
  }