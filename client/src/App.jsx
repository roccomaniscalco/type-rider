import { useState } from "react";
import useQuote from "./customHooks/useQuote";

import TypingInterface from "./components/typingInterface/TypingInterface";
import Button from "./components/button/Button";

function App() {
  const { quote, mutateQuote } = useQuote(true);
  const [isActiveRound, setIsActiveRound] = useState(true);

  const handleComplete = () => {
    setIsActiveRound(false);
    mutateQuote();
  };

  return (
    <div>
      {quote && isActiveRound ? (
        <TypingInterface text={quote.content} onComplete={handleComplete} />
      ) : (
        <Button onClick={() => setIsActiveRound(true)}>Next Round</Button>
      )}
    </div>
  );
}

export default App;
