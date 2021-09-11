import React from "react";
import PropTypes from "prop-types";

import useWords from "../../customHooks/useWords";
import useChars from "../../customHooks/useChars";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";
import Word from "../word/Word";

const TypingInterface = ({ text }) => {
  const [words, currentWord, incrementWord] = useWords(text);
  const [chars, currentChar, incrementChar] = useChars(text)

  return (
    <div>
      <Sentence words={words} />
      <TextField
        placeholder={currentWord.content}
        onTyped={() => incrementWord()}
      />
      {chars.map((char) => <Word text={char.content}/>)}
    </div>
  );
};

TypingInterface.propTypes = {
  text: PropTypes.string,
};

export default TypingInterface;
