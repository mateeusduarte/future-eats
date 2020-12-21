import { HomeContainer } from "../styles/screens/HomeContainer";
import Logo from "../assets/logo-whitefont.png";
import { useEffect } from "react";
import { goToLoginPage } from "../router/Coordinator";
import { useHistory } from "react-router-dom";

export function Home() {
  const history = useHistory();
  useEffect(() => {
    goToLoginPageAfter3Secs();
  }, []);

  const goToLoginPageAfter3Secs = () => {
    setTimeout(function () {
      goToLoginPage(history);
    }, 3000);
  };

  return (
    <HomeContainer>
      <img src={Logo} />
    </HomeContainer>
  );
}
