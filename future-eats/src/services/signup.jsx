import Axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToAddAddress, goToFeed } from "../router/Coordinator";

export const signup = (body, history, isConfirmed) => {
  const goToAddAddressAfter3secs = () => {
    setTimeout(function () {
      goToAddAddress(history);
    }, 3000);
    console.log("Going to Add Adress page...");
  };

  if (isConfirmed === false) {
    Axios.post(`${baseUrl}/signup`, body)
      .then((result) => {
        console.log("Cadastro feito com sucesso: ", result);
        goToAddAddressAfter3secs();
        localStorage.setItem("token", result.data.token);
      })
      .catch((err) => {
        console.log("Erro requisição de signup", err.message);
        if (err.message === "Request failed with status code 409") {
          alert("Email ou CPF já cadastrados");
        }
      });
    console.log("Body requisição signup", body);
  } else {
    alert("Senhas não batem");
  }
};
