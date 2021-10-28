import { useEffect } from "react";
import useStopwatch from "../../customHooks/useStopwatch";

const Stopwatch = () => {
  const { seconds, start, clear } = useStopwatch();

  useEffect(() => {
    // start stopwatch on mount
    start();
    // clear stopwatch on unmount
    return () => clear();
  }, [start, clear]);

  return <>{seconds}</>;
};

export default Stopwatch;
