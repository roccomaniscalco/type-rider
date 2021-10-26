import { useState, useCallback, useRef } from "react";

const useStopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const minutes = seconds / 60;
  const interval = useRef(null);

  const startStopwatch = useCallback(() => {
    if (interval.current === null) {
      interval.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      console.log("ERROR: useStopwatch: already active");
    }
  }, []);

  const clearStopwatch = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  return {
    seconds,
    minutes,
    startStopwatch,
    clearStopwatch,
  };
};

export default useStopwatch;
