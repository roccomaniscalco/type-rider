import { useState, useRef, useCallback } from "react";

const useInterval = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef();

  const startInterval = useCallback(() => {
    interval.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  const stopInterval = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  return {
    seconds,
    minutes: seconds / 60,
    startInterval,
    stopInterval,
  };
};

export default useInterval;
