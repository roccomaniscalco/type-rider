import { useState } from "react";
import useQuote from "./customHooks/useQuote";
import useWords from "./customHooks/useWords";
import useStopwatch from "./customHooks/useStopwatch";

import Button from "./components/button/Button";
import TextInput from "./components/textInput/TextInput";
import TextPrompt from "./components/textPrompt/TextPrompt";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  const { quote, mutateQuote } = useQuote();
  const [isActiveRound, setIsActiveRound] = useState(true);

  const resetRound = () => {
    setIsActiveRound(false);
    mutateQuote();
  };

  const { typed, current, remaining, increment } = useWords(
    quote?.content,
    resetRound
  );

  const { seconds, start, clear } = useStopwatch();

  return (
    <div>
      {quote && isActiveRound ? (
        <>
          <TextPrompt typed={typed} current={current} remaining={remaining} />
          <TextInput placeholder={current} onWordTyped={increment} />
          <Stopwatch seconds={seconds} start={start} clear={clear} />
        </>
      ) : (
        <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
      )}
    </div>
  );
}

export default App;
