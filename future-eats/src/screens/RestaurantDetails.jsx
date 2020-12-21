import { Header } from "../components/Header";
import { useProtectPage } from "../hooks/useProtectPage";

export function RestaurantDetails() {
  useProtectPage();
  return (
    <div>
      <Header backIcon="true" text="Restaurante" />
    </div>
  );
}
