import React, { useEffect } from "react";
import { string, func } from "prop-types";

import useWords from "../../customHooks/useWords";
import useTimer from "../../customHooks/useTimer";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ text, onComplete }) => {
  const { seconds, minutes, startTimer, stopTimer } = useTimer();
  const { unitWords, beforeWords, currentWord, afterWords, incrementWord } =
    useWords(text);

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
          console.log(`${Math.round(unitWords / minutes)} WPM`);
        }}
      />
      <TextInput
        placeholder={currentWord}
        onChange={() => {}}
        onComplete={() => incrementWord()}
      />
      {seconds}
    </div>
  );
};

TypingInterface.propTypes = {
  text: string.isRequired,
  onComplete: func.isRequired,
};

export default TypingInterface;
