import {
  forwardRef,
  Ref,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import { CartContext } from "../store/shopping-cart-context";

export type CartModalHandle = {
  open: () => void;
};
type CartModalProps = {
  children?: React.ReactNode;
  ref?: Ref<CartModalHandle>;

  title: string;
};
const CartModal = forwardRef(function Modal({ title }: CartModalProps, ref) {
  const dialog = useRef<HTMLDialogElement>(null);
  const { items } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
    };
  });

  const modalRoot = document.getElementById("modal");
  if (!modalRoot) {
    return null;
  }

  let modalActions = <button>Close</button>;
  if (items.length > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }
  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {modalActions}
      </form>
    </dialog>,
    modalRoot,
  );
});

export default CartModal;
