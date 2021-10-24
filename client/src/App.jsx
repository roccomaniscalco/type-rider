import useSWRImmutable from "swr";
import TypingInterface from "./components/typingInterface/TypingInterface";

const fetcher = (url) => fetch(url).then((r) => r.json());
const QUOTABLE_ROUTE = "https://api.quotable.io/random";

function App() {
  const { data: quote, mutate: mutateQuote } = useSWRImmutable(QUOTABLE_ROUTE, fetcher);

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
