import { useCallback, useState } from "react";
import calculateGrossWpm from "./utils/calculateGrossWpm";

import useQuote from "./customHooks/useQuote";
import useStopwatch from "./customHooks/useStopwatch";

import TypingInterface from "./components/typingInterface/TypingInterface";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Button from "./components/button/Button";

function App() {
  const [isActiveRound, setIsActiveRound] = useState(true);
  const [grossWpm, setGrossWpm] = useState(null);

  const { seconds, start, clear } = useStopwatch();
  const { quote, mutateQuote } = useQuote();

  // execute when round is over
  const handleComplete = useCallback(() => {
    setGrossWpm(calculateGrossWpm(quote.content, seconds));
    setIsActiveRound(false);
    mutateQuote();
  }, [mutateQuote, quote, seconds]);

  return (
    <>
      {quote && isActiveRound ? (
        <>
          <TypingInterface text={quote.content} onComplete={handleComplete} />
          <Stopwatch seconds={seconds} start={start} clear={clear} />
        </>
      ) : (
        <>
          <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
          {grossWpm && <>{grossWpm}</>}
        </>
      )}
    </>
  );
}

export default App;
