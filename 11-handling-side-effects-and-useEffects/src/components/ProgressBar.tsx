import { useEffect, useState } from "react";

type ProgressBarProps = {
  timer: number;
};
export default function ProgressBar({ timer }: ProgressBarProps) {
  const [remainingTime, setRemainingTime] = useState<number>(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");

      setRemainingTime((prevValue) => prevValue - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>;
}
