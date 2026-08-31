import { useState } from "react";

import { log } from "../../log.js";
type HistoryItemProps = {
  count: number;
};
function HistoryItem({ count }: HistoryItemProps) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}
type CounterHistoryProps = {
  history: {
    id: number;
    value: number;
  }[];
};
export default function CounterHistory({ history }: CounterHistoryProps) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
