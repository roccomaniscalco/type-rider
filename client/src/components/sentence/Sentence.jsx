import React from "react";
import PropTypes from "prop-types";

import Word from "../word/Word";

const Sentence = ({ words }) => {
  return <div>{words.map((word, i) => <Word {...word} key={i}/>)}</div>;
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
