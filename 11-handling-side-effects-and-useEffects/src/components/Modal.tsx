import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
};
const Modal = forwardRef(function Modal({ children }: ModalProps, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) dialog.current.showModal();
      },
      close: () => {
        if (dialog.current) dialog.current.close();
      },
    };
  });
  const modalId = document.getElementById("modal");
  if (!modalId) return null;

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    modalId,
  );
});

export default Modal;
