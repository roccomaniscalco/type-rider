import { useCallback, useEffect } from "react";
import { string, func } from "prop-types";

import useWords from "../../customHooks/useWords";
import useStopwatch from "../../customHooks/useStopwatch";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ text, onComplete }) => {
  const { seconds, minutes, startStopwatch, clearStopwatch } = useStopwatch();
  const { unitWords, beforeWords, currentWord, afterWords, incrementWord } =
    useWords(text);

  const startRound = useCallback(() => {
    startStopwatch();
  }, [startStopwatch]);

  const endRound = useCallback(() => {
    clearStopwatch();
    onComplete();
    console.log(`${Math.round(unitWords / minutes)} WPM`);
  }, [clearStopwatch, unitWords, minutes, onComplete]);

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
