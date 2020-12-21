import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useProtectPage } from "../hooks/useProtectPage";

export function Search() {
  useProtectPage()
  return (
    <div>
      <Header backIcon="true" text="Buscar" />
    </div>
  );
}
