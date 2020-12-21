import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useProtectPage } from "../hooks/useProtectPage";
import { goToLoginPage } from "../router/Coordinator";

export function Profile() {
  useProtectPage()
  const history = useHistory()
  const onClickLogout = () => {
    localStorage.removeItem("token")
    console.log("Token removido")
    goToLoginPage(history)
  }
  return (
    <div>
      <Header backIcon="true" text="Meu perfil" />
      <Button onClick={onClickLogout} text="Sair" logout="true"/>
      <Footer profileActive="true" />
    </div>
  );
}
