import { useState, useRef, useCallback } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef();

  const startTimer = useCallback(() => {
    interval.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  return {
    seconds,
    minutes: seconds / 60,
    startTimer,
    stopTimer,
  };
};

export default useTimer;
