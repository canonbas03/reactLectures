import { useState } from "react";

import Counter, { CountType } from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState<CountType>({
    id: Date.now(),
    value: 0,
  });

  function handleSetCount(newCount: number) {
    setChosenCount({
      id: Date.now(),
      value: newCount,
    });
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}></ConfigureCounter>
        <Counter initialCount={chosenCount} key={chosenCount.id} />
      </main>
    </>
  );
}

export default App;
