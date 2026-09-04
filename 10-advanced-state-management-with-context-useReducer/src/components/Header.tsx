import { useContext, useRef } from "react";
import { CartContext } from "../store/shopping-cart-context";
import CartModal, { CartModalHandle } from "./CartModal";

export default function Header() {
  const { items } = useContext(CartContext);
  const modal = useRef<CartModalHandle>(null);
  const cartQuantity = items.length;

  function handleOpenCartClick() {
    if (modal.current) {
      modal.current.open();
    }
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
