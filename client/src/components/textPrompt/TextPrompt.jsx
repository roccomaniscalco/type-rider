import React, { useEffect } from "react";
import { arrayOf, string, func } from "prop-types";

import Typography from "../typography/Typography";

const TextPrompt = ({ beforeWords, currentWord, afterWords, onComplete }) => {
  useEffect(() => {
    if (currentWord === "") {
      onComplete();
    }
  }, [currentWord, onComplete]);

  return (
    <div>
      <Typography variant="typed">{beforeWords.join("")}</Typography>
      <Typography variant="current">{currentWord}</Typography>
      <Typography variant="untyped">{afterWords.join("")}</Typography>
    </div>
  );
};

TextPrompt.propTypes = {
  beforeWords: arrayOf(string).isRequired,
  currentWord: string.isRequired,
  afterWords: arrayOf(string).isRequired,
  onComplete: func.isRequired,
};

export default TextPrompt;
