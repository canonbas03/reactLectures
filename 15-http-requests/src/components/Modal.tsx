import { useRef, useEffect, ComponentPropsWithRef, DialogHTMLAttributes } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
} & ComponentPropsWithRef<"dialog">;
function Modal({ open, children, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      if (dialog.current) dialog.current.showModal();
    } else {
      if (dialog.current) dialog.current.close();
    }
  }, [open]);

  const modalEl = document.getElementById("modal");

  if (!modalEl) return null;
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    modalEl,
  );
}

export default Modal;
