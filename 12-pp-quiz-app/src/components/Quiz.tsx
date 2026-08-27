import { useEffect, useState } from "react";

const timer = 5000;
type QuizProps = {
  children?: React.ReactNode;
  onTimeout: () => void;
};
export default function Quiz({ children, onTimeout }: QuizProps) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onTimeout();
    }, timer);

    return () => {
      clearTimeout(timerId);
    };
  }, [onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //console.log(remainingTime);

  return (
    <div id="quiz">
      <progress value={remainingTime} max={timer}></progress>
      {children}
    </div>
  );
}
