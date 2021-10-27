import { useState } from "react";
import useQuote from "./customHooks/useQuote";
import useWords from "./customHooks/useWords";
import useStopwatch from "./customHooks/useStopwatch";

import TypingInterface from "./components/typingInterface/TypingInterface";
import Button from "./components/button/Button";

function App() {
  const { quote, mutateQuote } = useQuote();
  const [isActiveRound, setIsActiveRound] = useState(true);

  const handleRoundOver = () => {
    setIsActiveRound(false);
    mutateQuote();
  };

  const words = useWords(quote?.content, handleRoundOver);
  const stopwatch = useStopwatch();

  return (
    <div>
      {quote && isActiveRound ? (
        <TypingInterface words={words} stopwatch={stopwatch} />
      ) : (
        <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
      )}
    </div>
  );
}

export default App;
