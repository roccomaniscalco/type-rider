import React, { useEffect } from "react";
import PropTypes from "prop-types";

import useWords from "../../customHooks/useWords";
import useTimer from "../../customHooks/useTimer";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ text, onComplete }) => {
  const { beforeWords, currentWord, afterWords, incrementWord, setText } =
    useWords(text);

  const { minutes, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    setText(text);
  }, [setText, text]);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return (
    <div>
      <TextPrompt
        beforeWords={beforeWords}
        currentWord={currentWord}
        afterWords={afterWords}
        onComplete={() => {
          onComplete();
          stopTimer();
        }}
      />
      <TextInput
        placeholder={currentWord}
        onChange={() => {}}
        onComplete={() => incrementWord()}
      />
      {minutes}
    </div>
  );
};

TypingInterface.propTypes = {
  text: PropTypes.string,
};

export default TypingInterface;
