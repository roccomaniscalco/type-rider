import { func, number } from "prop-types";
import { useEffect } from "react";

const Stopwatch = ({ seconds, start, clear }) => {
  useEffect(() => {
    // start stopwatch on mount
    start();
    // clear stopwatch on unmount
    return () => clear();
  }, [start, clear]);

  return <>{seconds}</>;
};

Stopwatch.propTypes = {
  seconds: number.isRequired,
  start: func.isRequired,
  clear: func.isRequired,
};

export default Stopwatch;
