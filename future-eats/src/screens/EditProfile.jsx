import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useProtectPage } from "../hooks/useProtectPage";

export function EditProfile() {
  useProtectPage()
  return (
    <div>
      <Header backIcon="true" text="Editar" />
      <Footer profileActive="true" />
    </div>
  );
}
