import { useEffect, useRef } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, value, onChange }) => {
  const textInputRef = useRef();

  // force focus on TextInput upon mount
  useEffect(() => {
    textInputRef.current.focus();
  }, []);

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      ref={textInputRef}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  placeholder: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
};

export default TextInput;
