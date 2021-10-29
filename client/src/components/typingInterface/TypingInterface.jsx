import { func, string } from "prop-types";
import { memo, useEffect, useState } from "react";
import useWords from "../../customHooks/useWords";

import TextInput from "../textInput/TextInput";
import TextPrompt from "../textPrompt/TextPrompt";

// return true if any of value's chars are invalid
const errorExists = (value, expectedValue) => {
  return value !== expectedValue.substring(0, value.length);
};

// return array of correct char indices
const getCorrectCharIndices = (value, expectedValue, correctCharIndices) => {
  const currentIndex = value.length - 1;

  if (value.charAt(currentIndex) !== expectedValue.charAt(currentIndex)) {
    const incorrectIndex = correctCharIndices.indexOf(currentIndex);
    incorrectIndex > -1 && correctCharIndices.splice(incorrectIndex, 1);
  }
  return correctCharIndices;
};

const TypingInterface = ({ text, onComplete }) => {
  const [hasError, setHasError] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [correctCharCount, setCorrectCharCount] = useState(0);
  const [correctCharIndices, setCorrectCharIndices] = useState([]);

  const { typed, current, remaining, increment } = useWords(text, () => {
    onComplete(correctCharCount + correctCharIndices.length);
  });

  // update correct char count and set correct char indices to current's chars
  // executed when current is updated
  useEffect(() => {
    setCorrectCharCount(correctCharCount + correctCharIndices.length);
    setCorrectCharIndices([...Array(current?.length).keys()]);
  }, [current]);

  const handleChange = (e) => {
    const value = e.target.value;

    // if placeHolder has been typed
    if (value === current) {
      setTextValue("");
      increment();
    } else {
      setTextValue(value);

      // broadcast if an error exists
      setHasError(errorExists(value, current));

      // update correct char indices when an error exists
      if (errorExists) {
        setCorrectCharIndices(
          getCorrectCharIndices(value, current, correctCharIndices)
        );
      }
    }
  };

  return (
    <>
      <TextPrompt
        typed={typed}
        current={current}
        remaining={remaining}
        hasError={hasError}
      />
      <TextInput
        placeholder={current}
        value={textValue}
        onChange={handleChange}
      />
    </>
  );
};

TypingInterface.propTypes = {
  text: string.isRequired,
  onComplete: func.isRequired,
};

export default memo(TypingInterface);
