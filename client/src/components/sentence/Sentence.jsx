import React from "react";
import PropTypes from "prop-types";

import Word from "../word/Word";

const Sentence = ({ words }) => {
  return (
    <div>
      {words.map((word) => (
        <Word isTyped={word.isTyped} key={word.id}>
          {word.content}
        </Word>
      ))}
    </div>
  );
};

Sentence.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.exact({
      content: PropTypes.string,
      isTyped: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default Sentence;
