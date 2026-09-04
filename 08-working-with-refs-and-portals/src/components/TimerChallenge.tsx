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

  const [timeRemaining, setTimeRemining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timeInterval = 10;
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemining((prevTime) => prevTime - timeInterval);
    }, timeInterval);
  }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current?.open();
  }

  function handleReset() {
    setTimeRemining(targetTime * 1000);
  }

  function handleStop() {
    dialogRef.current?.open();
    clearInterval(timer.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
  );
}
