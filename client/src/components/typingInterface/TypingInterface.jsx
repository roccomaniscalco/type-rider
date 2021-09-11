import React from "react";
import PropTypes from "prop-types";

import useWords from "../../customHooks/useWords";

import TextPrompt from "../textPrompt/TextPrompt";
import TextField from "../textField/TextField";

const TypingInterface = ({ text }) => {
  const { beforeWords, currentWord, afterWords, incrementWord } =
    useWords(text);

  console.log(beforeWords);
  console.log(currentWord);
  console.log(afterWords);

  return (
    <div>
      <TextPrompt
        beforeWords={beforeWords}
        currentWord={currentWord}
        afterWords={afterWords}
      />
      <TextField
        placeholder={currentWord}
        onChange={() => {}}
        onComplete={() => incrementWord()}
      />
    </div>
  );
};

TypingInterface.propTypes = {
  text: PropTypes.string,
};

export default TypingInterface;
