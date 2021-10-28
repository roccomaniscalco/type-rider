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

export default Stopwatch;
