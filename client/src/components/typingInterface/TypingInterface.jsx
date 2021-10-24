import { useCallback, useEffect } from "react";
import { string, func } from "prop-types";

import useWords from "../../customHooks/useWords";
import useInterval from "../../customHooks/useInterval";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ text, onComplete }) => {
  const { seconds, minutes, startInterval, stopInterval } = useInterval();
  const { unitWords, beforeWords, currentWord, afterWords, incrementWord } =
    useWords(text);

  const startRound = useCallback(() => {
    startInterval();
  }, [startInterval]);

  const endRound = useCallback(() => {
    stopInterval();
    onComplete();
    console.log(`${Math.round(unitWords / minutes)} WPM`);
  }, [stopInterval, unitWords, minutes, onComplete]);

  useEffect(() => {
    startRound();
  }, [startRound]);

  useEffect(() => {
    !currentWord && endRound();
  }, [currentWord, endRound]);

  return (
    <div>
      <TextPrompt
        beforeWords={beforeWords}
        currentWord={currentWord}
        afterWords={afterWords}
      />
      <TextInput placeholder={currentWord} onComplete={() => incrementWord()} />
      {seconds}
    </div>
  );
};

TypingInterface.propTypes = {
  text: string.isRequired,
  onComplete: func.isRequired,
};

export default TypingInterface;
