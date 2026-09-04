import { memo, useCallback, useMemo, useState } from "react";

import IconButton from "../UI/IconButton";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterOutput from "./CounterOutput";
import CounterHistory from "./CounterHistory";

import { log } from "../../log.js";

function isPrime(number: number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
export type CountType = {
  id: number;
  value: number;
};
type CounterProps = {
  initialCount: CountType;
};
const Counter = memo(function Counter({ initialCount }: CounterProps) {
  log("<Counter /> rendered", 1);
  const initialCountIsPrime = useMemo(() => isPrime(initialCount.value), [initialCount]);

  const [counterChanges, setCounterChanges] = useState([initialCount]);
  const currentCounter = counterChanges.reduce((acc, current) => acc + current.value, 0);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounterChanges((prevCounter) => [{ id: Date.now(), value: -1 }, ...prevCounter]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounterChanges((prevCounter) => [{ id: Date.now(), value: 1 }, ...prevCounter]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount.value}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <div>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
        <CounterHistory history={counterChanges} />
      </div>
    </section>
  );
});

export default Counter;
