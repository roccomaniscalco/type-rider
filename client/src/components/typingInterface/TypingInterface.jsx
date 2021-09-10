import React from "react";
import useWords from "../../customHooks/useWords";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";

const sentence = "Unlike other times of the day, evenings are always tranquil."

const TypingInterface = () => {
  const [words, currentWord, incrementWord] = useWords(sentence)

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
