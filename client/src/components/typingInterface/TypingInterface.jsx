import { useEffect } from "react";
import { string, func } from "prop-types";

import useWords from "../../customHooks/useWords";
import useStopwatch from "../../customHooks/useStopwatch";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ text, onComplete }) => {
  const { seconds, minutes, startStopwatch, clearStopwatch } = useStopwatch();
  const { words, incrementWord } = useWords(text, onComplete);

  useEffect(() => {
    startStopwatch();

    return () => clearStopwatch();
  }, [startStopwatch, clearStopwatch]);

  return (
    <div>
      <TextPrompt {...words} />
      <TextInput placeholder={words.current} onComplete={incrementWord} />
      {seconds}
    </div>
  );
};

TypingInterface.propTypes = {
  text: string.isRequired,
  onComplete: func.isRequired,
};

export default TypingInterface;
