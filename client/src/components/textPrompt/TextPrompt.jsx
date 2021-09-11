import React from "react";
import PropTypes from "prop-types";

import Word from "../typography/Typography";

const TextPrompt = ({ beforeWords, currentWord, afterWords }) => {
  return (
    <div>
      <Word variant="typed">{beforeWords.join("")}</Word>
      <Word variant="current">{currentWord}</Word>
      <Word variant="untyped">{afterWords.join("")}</Word>
    </div>
  );
};

TextPrompt.propTypes = {
  beforeWords: PropTypes.arrayOf(PropTypes.string),
  currentWord: PropTypes.string,
  afterWords: PropTypes.arrayOf(PropTypes.string),
};

export default TextPrompt;
