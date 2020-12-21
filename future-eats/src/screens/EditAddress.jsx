import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useProtectPage } from "../hooks/useProtectPage";

export function EditAddress() {
  useProtectPage()
  return (
    <div>
      <Header backIcon="true" text="Endereço" />
      <Footer profileActive="true" />
    </div>
  );
}
