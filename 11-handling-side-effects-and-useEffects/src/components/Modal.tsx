import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
};
function Modal({ children, open }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       if (dialog.current) dialog.current.showModal();
  //     },
  //     close: () => {
  //       if (dialog.current) dialog.current.close();
  //     },
  //   };
  // });
  const modalId = document.getElementById("modal");
  if (!modalId) return null;

  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal();
    } else {
      if (dialog.current) dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    modalId,
  );
}

export default Modal;
