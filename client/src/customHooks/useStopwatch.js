import { useState, useCallback, useRef } from "react";

const useStopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const stopwatch = useRef(null);

  const start = useCallback(() => {
    // clear seconds
    setSeconds(0);

    // if not already active, start stopwatch
    if (!stopwatch.current) {
      stopwatch.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      console.log("ERROR: useStopwatch: already active");
    }
  }, []);

  // stop stopwatch
  const stop = useCallback(() => {
    clearInterval(stopwatch.current);
    stopwatch.current = null;
  }, []);

  return {
    seconds,
    start,
    stop,
  };
};

export default useStopwatch;
