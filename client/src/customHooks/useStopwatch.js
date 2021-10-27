import { useState, useCallback, useRef } from "react";

const useStopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const interval = useRef(null);

  const start = useCallback(() => {
    if (interval.current === null) {
      interval.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      console.log("ERROR: useStopwatch: already active");
    }
  }, []);

  const clear = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  return {
    seconds,
    start,
    clear,
  };
};

export default useStopwatch;
