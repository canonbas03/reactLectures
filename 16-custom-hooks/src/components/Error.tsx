type ErrorProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};
export default function Error({ title, message, onConfirm }: ErrorProps) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      <div id="confirmation-action">
        <button onClick={onConfirm} className="button">
          Okay
        </button>
      </div>
    </div>
  );
}
