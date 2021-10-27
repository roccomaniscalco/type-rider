import { useEffect, useRef, useState } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, onWordTyped }) => {
  const [activeValue, setActiveValue] = useState("");
  const textInputRef = useRef();

  // force focus on TextInput upon mount
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const handleChange = (currentValue) => {
    // placeHolder has been typed typed
    if (currentValue === placeholder) {
      setActiveValue("");
      onWordTyped();
    } else {
      setActiveValue(currentValue);
    }
  };

  return (
    <input
      ref={textInputRef}
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      value={activeValue}
    />
  );
};

TextInput.propTypes = {
  placeholder: string.isRequired,
  onWordTyped: func.isRequired,
};

export default TextInput;
