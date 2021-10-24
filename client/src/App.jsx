import TypingInterface from "./components/typingInterface/TypingInterface";
import useQuote from "./customHooks/useQuote";

function App() {
  const { quote, mutateQuote } = useQuote(true);

  return (
    <div>
      {quote && (
        <TypingInterface
          text={quote.content}
          key={quote.content}
          onComplete={() => mutateQuote()}
        />
      )}
    </div>
  );
}

export default App;
