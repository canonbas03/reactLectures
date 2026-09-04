import { ChangeEvent, useState } from "react";

type ConfigureCounterProps = {
  onSet: (newCount: number) => void;
};
export default function ConfigureCounter({ onSet }: ConfigureCounterProps) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEnteredNumber(+event.target.value);
  }

  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
