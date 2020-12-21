import { ChooseQuantityCard } from "../components/ChooseQuantityCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ItemCard } from "../components/ItemCard";
import { OnGoingOrderCard } from "../components/OnGoingOrderCard";

import { RestaurantCard } from "../components/RestaurantCard";
import { useProtectPage } from "../hooks/useProtectPage";
import { ChooseQuantityCardContainer } from "../styles/components/ChooseQuantityCardContainer";
import { ItemCardContainer } from "../styles/components/ItemCardContainer";

export function Feed() {
  useProtectPage();
  return (
    <div>
      <Header text="Feed" />
      <RestaurantCard />

      <Footer homeActive="true" />
    </div>
  );
}
