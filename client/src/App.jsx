import { useState } from "react";
import useQuote from "./customHooks/useQuote";
import useWords from "./customHooks/useWords";

import Button from "./components/button/Button";
import TextInput from "./components/textInput/TextInput";
import TextPrompt from "./components/textPrompt/TextPrompt";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  const [isActiveRound, setIsActiveRound] = useState(true);
  const [isError, setIsError] = useState(false);

  const { quote, mutateQuote } = useQuote();
  // const quote = { content: "hey hey hey" };

  const { typed, current, remaining, increment } = useWords(
    quote?.content,
    () => {
      setIsActiveRound(false);
      mutateQuote();
    }
  );

  return (
    <div>
      {quote && isActiveRound ? (
        <>
          <TextPrompt
            typed={typed}
            current={current}
            remaining={remaining}
            isError={isError}
          />
          <TextInput
            placeholder={current}
            onWordTyped={increment}
            setIsError={setIsError}
          />
          <Stopwatch />
        </>
      ) : (
        <>
          <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
        </>
      )}
    </div>
  );
}

export default App;
