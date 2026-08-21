import { forwardRef, Ref, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart, { ItemType } from "./Cart";
import { CartModalHandle } from "./Header";

type CartModalProps = {
  children?: React.ReactNode;
  ref?: Ref<CartModalHandle>;
  cartItems: ItemType[];
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
  title: string;
  actions: React.ReactNode;
};
const CartModal = forwardRef(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions }: CartModalProps,
  ref,
) {
  const dialog = useRef<HTMLDialogElement>(null);

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
  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    modalRoot,
  );
});

export default CartModal;
