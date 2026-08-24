import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.js";
import CartContextProvider from "./store/shopping-cart-context.js";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop></Shop>
    </CartContextProvider>
  );
}

export default App;
