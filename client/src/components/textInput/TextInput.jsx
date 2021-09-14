import React, { useEffect, useRef, useState } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, onComplete, onChange }) => {
  const [activeValue, setActiveValue] = useState("");
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleChange = (currentValue) => {
    onChange();

    if (currentValue === placeholder) {
      setActiveValue("");
      onComplete();
    } else {
      setActiveValue(currentValue);
    }
  };

  return (
    <input
      ref={textInput}
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      value={activeValue}
    />
  );
};

TextInput.propTypes = {
  placeholder: string.isRequired,
  onComplete: func.isRequired,
  onChange: func.isRequired,
};

export default TextInput;
