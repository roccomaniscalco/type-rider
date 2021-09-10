import React, { useState } from "react";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";

const TypingInterface = () => {
  const [words, setWords] = useState([
    { text: "hey", isTyped: false },
    { text: "hi", isTyped: true },
    { text: "hello", isTyped: false },
  ]);

  const [currentWord, setCurrentWord] = useState("hey");
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (value) => {
    value === currentWord ? setCurrentValue("") : setCurrentValue(value);
  };

  return (
    <div>
      <Sentence words={words} />
      <TextField
        placeholder={currentWord}
        value={currentValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TypingInterface;
