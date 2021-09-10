import React, { useEffect, useState } from "react";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";

const TypingInterface = () => {
  const [words, setWords] = useState([
    { text: "hey", isTyped: false },
    { text: "hi", isTyped: true },
    { text: "hello", isTyped: false },
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex].text);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex].text);
  }, [currentWordIndex]);

  const handleChange = (value) => {
    value === currentWord && setCurrentWordIndex(currentWordIndex + 1);
  };

  return (
    <div>
      <Sentence words={words} />
      <TextField placeholder={currentWord} onChange={handleChange} />
    </div>
  );
};

export default TypingInterface;
