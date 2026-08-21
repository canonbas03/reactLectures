import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product";

type ShopProps = {
  children?: React.ReactNode;
  //onAddItemToCart: (id: string) => void;
};
export default function Shop({ children }: ShopProps) {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      {children}
      <ul id="products"></ul>
    </section>
  );
}
