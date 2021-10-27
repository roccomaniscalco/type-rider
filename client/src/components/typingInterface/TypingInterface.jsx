import { useEffect } from "react";
import { string, func, exact, number } from "prop-types";

import TextPrompt from "../textPrompt/TextPrompt";
import TextInput from "../textInput/TextInput";

const TypingInterface = ({ words, stopwatch }) => {
  const { start, clear } = stopwatch;
  useEffect(() => {
    // start stopwatch on mount
    start();
    // clear stopwatch on unmount
    return () => clear();
  }, [start, clear]);

  return (
    <div>
      <TextPrompt {...words} />
      <TextInput placeholder={words.current} onWordTyped={words.increment} />
      {stopwatch.seconds}
    </div>
  );
};

TypingInterface.propTypes = {
  words: exact({
    typed: string.isRequired,
    current: string.isRequired,
    remaining: string.isRequired,
    increment: func.isRequired,
  }),

  stopwatch: exact({
    seconds: number.isRequired,
    start: func.isRequired,
    clear: func.isRequired,
  }),
};

export default TypingInterface;
