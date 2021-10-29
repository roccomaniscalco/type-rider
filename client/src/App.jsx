import { useCallback, useState } from "react";
import { calculateGrossWpm } from "./utils/calculations";

import useQuote from "./customHooks/useQuote";
import useStopwatch from "./customHooks/useStopwatch";

import TypingInterface from "./components/typingInterface/TypingInterface";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Button from "./components/button/Button";

function App() {
  const [isActiveRound, setIsActiveRound] = useState(true);
  const [grossWpm, setGrossWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  const { seconds, start, clear } = useStopwatch();
  const { quote, mutateQuote } = useQuote();

  // execute when round is over
  const handleComplete = useCallback(
    (correctCharCount) => {
      setIsActiveRound(false);
      mutateQuote();
      setAccuracy(`${correctCharCount} / ${quote.content.length}`);
    },
    [mutateQuote, quote]
  );

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
          {grossWpm && <>Gross WPM: {grossWpm}</>}
          {accuracy && <>Accuracy: {accuracy}</>}
        </>
      )}
    </>
  );
}

export default App;
