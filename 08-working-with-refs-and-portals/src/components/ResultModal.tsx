import { useImperativeHandle, useRef } from "react";

export type ResultModalHandle = {
  open: () => void;
};
type ResultModalProps = {
  result: string;
  targetTime: number;
  ref: React.Ref<ResultModalHandle>;
};
export default function ResultModal({
  result,
  targetTime,
  ref,
}: ResultModalProps) {
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
  return (
    <dialog ref={dialogRef} className="result-modal">
      <p>You {result}!</p>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
