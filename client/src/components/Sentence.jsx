import React from "react";
import PropTypes from "prop-types";

const Sentence = ({ words }) => {
  const currentWords = words;

  return <div>{words.map((word) => `${word.text} `)}</div>;
};

Sentence.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string,
      isTyped: PropTypes.bool,
    })
  ),
};

export default Sentence;
