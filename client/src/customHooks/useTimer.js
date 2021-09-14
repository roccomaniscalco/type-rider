import { useState, useRef } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef();

  const startTimer = () => {
    interval.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  return { seconds, startTimer, stopTimer };
};

export default useTimer;
