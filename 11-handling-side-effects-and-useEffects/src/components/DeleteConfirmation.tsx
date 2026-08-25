import { useEffect } from "react";

type DeleteConfirmationType = {
  onConfirm: () => void;
  onCancel: () => void;
};
const TIME = 3000;
export default function DeleteConfirmation({
  onConfirm,
  onCancel,
}: DeleteConfirmationType) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIME);
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
