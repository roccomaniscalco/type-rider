import { useState } from "react";
import useQuote from "./customHooks/useQuote";

import TypingInterface from "./components/typingInterface/TypingInterface";

function App() {
  const { quote, mutateQuote } = useQuote(true);
  const [roundIsActive, setRoundIsActive] = useState();

  return (
    <div>
      {quote && (
        <TypingInterface
          text={quote.content}
          onComplete={mutateQuote}
        />
      )}
    </div>
  );
}

export default App;
