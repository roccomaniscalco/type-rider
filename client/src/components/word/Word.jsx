import React from "react";
import PropTypes from "prop-types";

import "./word.css";

const Word = ({ children, isTyped }) => {
  return (
    <span className={isTyped ? "typed-word" : "untyped-word"}>{children}</span>
  );
};

Word.propTypes = {
  children: PropTypes.string,
  isTyped: PropTypes.bool,
};

export default Word;
