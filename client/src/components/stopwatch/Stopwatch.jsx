import { func, number } from "prop-types";
import { useEffect } from "react";

const Stopwatch = ({ seconds, start, stop }) => {
  useEffect(() => {
    // start stopwatch on mount
    start();
    // clear stopwatch on unmount
    return () => stop();
  }, [start, stop]);

  return <>{seconds}</>;
};

Stopwatch.propTypes = {
  seconds: number.isRequired,
  start: func.isRequired,
  stop: func.isRequired,
};

export default Stopwatch;
