import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useProtectPage } from "../hooks/useProtectPage";

export function Cart() {
  useProtectPage();
  return (
    <div>
      <Header backIcon="true" text="Meu carrinho" />
      <Footer shoppingCartActive="true" />
    </div>
  );
}
