import Axios from "axios"
import { useHistory } from "react-router-dom"
import { baseUrl } from "../constants/baseUrl"
import { goToFeed } from "../router/Coordinator"

export const login = (body, history) => {

    const goToFeedAfter3secs = () => {
        setTimeout(function () {
          goToFeed(history);
        }, 3000)
        console.log("Going to feed...");
      };

    Axios.post(`${baseUrl}/login`,body)
      .then((result)=>{
        console.log("Login feito com sucesso: ", result)
        goToFeedAfter3secs()
        localStorage.setItem("token", result.data.token)
    }).catch((err)=>{
      console.log("Erro requisição de login", err)
    })
  }