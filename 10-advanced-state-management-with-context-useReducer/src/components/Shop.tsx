import { DUMMY_PRODUCTS } from "../dummy-products.js";
import Product from "./Product";

export default function Shop() {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      {DUMMY_PRODUCTS.map((product) => (
        <li key={product.id}>
          <Product {...product} />
        </li>
      ))}
      <ul id="products"></ul>
    </section>
  );
}
