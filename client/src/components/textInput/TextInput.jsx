import { useEffect, useRef, useState } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, onWordTyped }) => {
  const [value, setValue] = useState("");
  const textInputRef = useRef();

  // force focus on TextInput upon mount
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    // placeHolder has been typed
    if (value === placeholder) {
      setValue("");
      onWordTyped();
    } else {
      setValue(value);
    }
  };

  return (
    <input
      ref={textInputRef}
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

TextInput.propTypes = {
  placeholder: string.isRequired,
  onWordTyped: func.isRequired,
};

export default TextInput;
