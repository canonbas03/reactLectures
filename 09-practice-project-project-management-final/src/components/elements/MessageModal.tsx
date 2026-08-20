import React, {
  ComponentPropsWithRef,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export type MessageModalHandle = {
  open: () => void;
};

type MessageModalProps = {
  children?: React.ReactNode;
  ref: Ref<MessageModalHandle>;
  title?: string;
  firstMessage?: string;
  secondMessage?: string;
  buttonText?: string;
};
export default function MessageModal({
  children,
  ref,
  title = "Invalid Input",
  firstMessage = "Oops... Looks like you forgot to enter a value.",
  secondMessage = "Do it. I am waiting... Patiently...",
  buttonText = "Ok",
}: MessageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },
    };
  });
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    return null;
  }
  return createPortal(
    <dialog ref={dialogRef} className={dialogStyle}>
      {children}
      <h2>{title}</h2>
      <p>{firstMessage}</p>
      <p>{secondMessage}</p>
      <form method="dialog" className={formtyle}>
        <Button>{buttonText}</Button>
      </form>
    </dialog>,
    modalRoot,
  );
}

const dialogStyle = "backdrop:bg-stone-900/90 p-4 rounded-md shadow-md";
const formtyle = "mt-4 text-right";
