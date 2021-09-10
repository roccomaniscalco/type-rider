import { useEffect, useState } from "react";
import TypingInterface from "./components/typingInterface/TypingInterface";

async function getQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    console.log(data);
  }
}

function App() {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    getQuote().then((data) => setQuote(data.content))
  },
  [])

  return (
    <div>
      {quote && <TypingInterface text={quote}/>}
    </div>
  );
}

export default App;
