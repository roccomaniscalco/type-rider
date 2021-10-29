import { useCallback, useState } from "react";
import { StatsProvider } from "./contexts/StatsContext";
import useQuote from "./customHooks/useQuote";
import useStopwatch from "./customHooks/useStopwatch";

import TypingInterface from "./components/typingInterface/TypingInterface";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Button from "./components/button/Button";

function App() {
  const [isActiveRound, setIsActiveRound] = useState(true);

  const { seconds, start, clear } = useStopwatch();
  const { quote, mutateQuote } = useQuote();

  const handleComplete = useCallback(() => {
    mutateQuote();
    setIsActiveRound(false);
  }, [mutateQuote]);

  return (
    <StatsProvider>
      {quote && isActiveRound ? (
        <>
          <TypingInterface text={quote.content} onComplete={handleComplete} />
          <Stopwatch seconds={seconds} start={start} clear={clear} />
        </>
      ) : (
        <>
          <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
        </>
      )}
    </StatsProvider>
  );
}

export default App;
