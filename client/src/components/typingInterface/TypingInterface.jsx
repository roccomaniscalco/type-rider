import { func, string } from "prop-types";
import { memo, useState } from "react";
import useWords from "../../customHooks/useWords";

import TextInput from "../textInput/TextInput";
import TextPrompt from "../textPrompt/TextPrompt";

const TypingInterface = ({ text, onComplete }) => {
  const [isError, setIsError] = useState(false);
  const { typed, current, remaining, increment } = useWords(text, onComplete);

  return (
    <>
      <TextPrompt
        typed={typed}
        current={current}
        remaining={remaining}
        isError={isError}
      />
      <TextInput
        placeholder={current}
        onWordTyped={increment}
        setIsError={setIsError}
      />
    </>
  );
};

TypingInterface.propTypes = {
  text: string.isRequired,
  onComplete: func.isRequired,
};

export default memo(TypingInterface);
