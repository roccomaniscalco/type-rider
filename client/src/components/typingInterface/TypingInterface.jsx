import React from "react";
import useWords from "../../customHooks/useWords";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";

const exampleWords = [
  { text: "hey", isTyped: false, id: 0 },
  { text: "hi", isTyped: false, id: 1 },
  { text: "hello", isTyped: false, id: 2 },
];

const TypingInterface = () => {
  const [words, currentWord, incrementWord] = useWords(exampleWords)

  return (
    <div>
      <Sentence words={words} />
      <TextField
        placeholder={currentWord.text}
        onTyped={() => incrementWord()}
      />
    </div>
  );
};

export default TypingInterface;
