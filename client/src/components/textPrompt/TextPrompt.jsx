import React from "react";
import PropTypes from "prop-types";

import Word from "../word/Word";

const TextPrompt = ({ beforeWords, currentWord, afterWords }) => {
  return (
    <div>
      <Word>{beforeWords.join("")}</Word>
      <Word>{currentWord}</Word>
      <Word>{afterWords.join("")}</Word>
    </div>
  );
};

TextPrompt.propTypes = {
  beforeWords: PropTypes.arrayOf(PropTypes.string),
  currentWord: PropTypes.string,
  afterWords: PropTypes.arrayOf(PropTypes.string),
};

export default TextPrompt;
