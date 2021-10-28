import { useEffect, useRef, useState } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, onWordTyped, setIsError }) => {
  const [value, setValue] = useState("");
  const textInputRef = useRef();

  // force focus on TextInput upon mount
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const length = value.length;

    // placeHolder has been typed
    if (value === placeholder) {
      setValue("");
      onWordTyped();
    } else {
      setValue(value);
    }

    // value contains an incorrect character
    if (value !== placeholder.substring(0, length)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      ref={textInputRef}
      onChange={handleChange}
    />
  );
};

TextInput.propTypes = {
  placeholder: string.isRequired,
  onWordTyped: func.isRequired,
  setIsError: func.isRequired,
};

export default TextInput;
