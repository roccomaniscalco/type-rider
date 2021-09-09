import React from "react";
import PropTypes from "prop-types";

import "./word.css"

const Word = ({ text, isTyped }) => {
  return <span className={isTyped ? "typed-word" : "untyped-word"}>{text} </span>;
};

Word.propTypes = {
  text: PropTypes.string,
  isTyped: PropTypes.bool,
};

export default Word;
