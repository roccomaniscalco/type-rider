import { useEffect, useRef, useState } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, onComplete }) => {
  const [activeValue, setActiveValue] = useState("");
  const textInputRef = useRef();

  // force focus on TextInput upon mount
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const handleChange = (currentValue) => {
    if (currentValue === placeholder) {
      setActiveValue("");
      onComplete();
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
  onComplete: func.isRequired,
};

export default TextInput;
