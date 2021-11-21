import { useCallback, useState } from "react";
import { calculateAccuracy, calculateGrossWpm } from "./utils/calculations";

import useQuote from "./customHooks/useQuote";
import useStopwatch from "./customHooks/useStopwatch";

import TypingInterface from "./components/typingInterface/TypingInterface";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Button from "./components/button/Button";

function App() {
  const [isActiveRound, setIsActiveRound] = useState(true);
  const [lastCorrectCharCount, setLastCorrectCharCount] = useState(null);
  const [lastQuote, setLastQuote] = useState(null);

  const { seconds, start, stop } = useStopwatch();
  const { quote, mutateQuote } = useQuote();

  // execute when round is over
  const handleComplete = useCallback(
    (correctCharCount) => {
      setIsActiveRound(false);
      setLastCorrectCharCount(correctCharCount);
      setLastQuote(quote);
      mutateQuote();
    },
    [mutateQuote, quote]
  );

  // active round view
  if (quote && isActiveRound)
    return (
      <>
        <TypingInterface text={quote.content} onComplete={handleComplete} />
        <Stopwatch seconds={seconds} start={start} stop={stop} />
      </>
    );

  // results view
  return (
    <>
      <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
      {lastQuote && seconds && (
        <>Gross WPM: {calculateGrossWpm(lastQuote.content.length, seconds)}</>
      )}
      {lastCorrectCharCount && (
        <>
          Accuracy:{" "}
          {
            calculateAccuracy(lastQuote.content.length, lastCorrectCharCount)
              .percent
          }
        </>
      )}
    </>
  );
}

export default App;
