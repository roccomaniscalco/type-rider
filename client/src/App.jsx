import "./App.css";

import Sentence from "./components/sentence/Sentence";
import TextField from "./components/textField/TextField";

function App() {
  return (
    <div className="App">
      <Sentence
        words={[
          { text: "hey", isTyped: false },
          { text: "hi", isTyped: true },
          { text: "hello", isTyped: false },
        ]}
      />
      <TextField placeholder={"pizza"} />
    </div>
  );
}

export default App;
