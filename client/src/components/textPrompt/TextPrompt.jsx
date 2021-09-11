import React from "react";
import PropTypes from "prop-types";

import Typography from "../typography/Typography";

const TextPrompt = ({ beforeWords, currentWord, afterWords }) => {
  return (
    <div>
      <Typography variant="typed">{beforeWords.join("")}</Typography>
      <Typography variant="current">{currentWord}</Typography>
      <Typography variant="untyped">{afterWords.join("")}</Typography>
    </div>
  );
};

TextPrompt.propTypes = {
  beforeWords: PropTypes.arrayOf(PropTypes.string),
  currentWord: PropTypes.string,
  afterWords: PropTypes.arrayOf(PropTypes.string),
};

export default TextPrompt;
