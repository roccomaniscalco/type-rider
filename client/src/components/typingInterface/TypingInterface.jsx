import React from "react";
import PropTypes from "prop-types";
import useWords from "../../customHooks/useWords";

import Sentence from "../sentence/Sentence";
import TextField from "../textField/TextField";

const TypingInterface = ({ text }) => {
  const [words, currentWord, incrementWord] = useWords(text);

  return (
    <div>
      <Sentence words={words} />
      <TextField
        placeholder={currentWord.content}
        onTyped={() => incrementWord()}
      />
    </div>
  );
};

TypingInterface.propTypes = {
  text: PropTypes.string,
};

export default TypingInterface;
