import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export type ResultModalHandle = {
  open: () => void;
};
type ResultModalProps = {
  remainingTime: number;
  targetTime: number;
  ref: React.Ref<ResultModalHandle>;
  onReset: () => void;
};
export default function ResultModal({
  remainingTime,
  targetTime,
  ref,
  onReset,
}: ResultModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const userLost: boolean = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")!,
  );
}
