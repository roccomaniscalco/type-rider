import React, { useEffect } from "react";
import PropTypes from "prop-types";

import useWords from "../../customHooks/useWords";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ text, onComplete }) => {
  const { beforeWords, currentWord, afterWords, incrementWord, setText } =
    useWords(text);

  useEffect(() => {
    setText(text);
  }, [setText, text]);

  return (
    <div>
      <TextPrompt
        beforeWords={beforeWords}
        currentWord={currentWord}
        afterWords={afterWords}
        onComplete={onComplete}
      />
      <TextInput
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
