import React, { useEffect, useState } from "react";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";

const TypingInterface = () => {
  const [words, setWords] = useState([
    { text: "hey", isTyped: false, id: 0 },
    { text: "hi", isTyped: false, id: 1 },
    { text: "hello", isTyped: false, id: 2 },
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  return (
    <div>
      <Sentence words={words} />
      <TextField
        placeholder={words[currentWordIndex].text}
        onTyped={() => setCurrentWordIndex(currentWordIndex + 1)}
      />
    </div>
  );
};

export default TypingInterface;
