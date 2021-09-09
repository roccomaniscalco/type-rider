import "./App.css";

import Sentence from "./components/Sentence";
import TextField from "./components/TextField";

function App() {
  return (
    <div className="App">
      <Sentence
        words={[
          { text: "hey", isTyped: false },
          { text: "hi", isTyped: false },
          { text: "hello", isTyped: false },
        ]}
      />
      <TextField placeholder={"pizza"} />
    </div>
  );
}

export default App;
