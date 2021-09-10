import React from "react";
import PropTypes from "prop-types";

import Word from "../word/Word";

const Sentence = ({ words }) => {
  return (
    <div>
      {words.map((word) => (
        <Word text={word.text} isTyped={word.isTyped} key={word.id} />
      ))}
    </div>
  );
};

Sentence.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string,
      isTyped: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default Sentence;
