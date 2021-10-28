import { useState } from "react";
import useQuote from "./customHooks/useQuote";
import useWords from "./customHooks/useWords";
import useStopwatch from "./customHooks/useStopwatch";

import Button from "./components/button/Button";
import TextInput from "./components/textInput/TextInput";
import TextPrompt from "./components/textPrompt/TextPrompt";
import Stopwatch from "./components/stopwatch/Stopwatch";
import calculateGrossWpm from "./utils/calculateGrossWpm";

function App() {
  const [isActiveRound, setIsActiveRound] = useState(true);
  const [lastGrossWpm, setLastGrossWpm] = useState(null);

  const { quote, mutateQuote } = useQuote();
  const { seconds, start, clear } = useStopwatch();
  const { typed, current, remaining, increment } = useWords(
    quote?.content,
    () => {
      setIsActiveRound(false);
      setLastGrossWpm(calculateGrossWpm(quote.content, seconds));
      mutateQuote();
    }
  );

  return (
    <div>
      {quote && isActiveRound ? (
        <>
          <TextPrompt typed={typed} current={current} remaining={remaining} />
          <TextInput placeholder={current} onWordTyped={increment} />
          <Stopwatch seconds={seconds} start={start} clear={clear} />
        </>
      ) : (
        <>
          <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
          {lastGrossWpm && <>Gross WPM: {lastGrossWpm}</>}
        </>
      )}
    </div>
  );
}

export default App;
