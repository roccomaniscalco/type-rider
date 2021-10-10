import { useEffect } from "react";
import { string, func } from "prop-types";

import Typography from "../typography/Typography";

const TextPrompt = ({ beforeWords, currentWord, afterWords, onComplete }) => {
  // executes onComplete upon currentWord being 
  useEffect(() => {
    if (currentWord === "") {
      onComplete();
    }
  }, [currentWord, onComplete]);

  return (
    <div>
      <Typography variant="typed">{beforeWords}</Typography>
      <Typography variant="current">{currentWord}</Typography>
      <Typography variant="untyped">{afterWords}</Typography>
    </div>
  );
};

TextPrompt.propTypes = {
  beforeWords: string.isRequired,
  currentWord: string.isRequired,
  afterWords: string.isRequired,
  onComplete: func.isRequired,
};

export default TextPrompt;
