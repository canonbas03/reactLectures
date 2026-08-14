import { useRef, useState } from "react";
import ResultModal, { ResultModalHandle } from "./ResultModal";

type TimerChallengeProps = {
  title: string;
  targetTime: number;
};
export default function TimerChallenge({
  title,
  targetTime,
}: TimerChallengeProps) {
  const timer = useRef<number>();
  const dialogRef = useRef<ResultModalHandle>(null);

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      if (dialogRef.current) {
        dialogRef.current.open();
      }
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <ResultModal ref={dialogRef} result="lost" targetTime={targetTime} />
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
