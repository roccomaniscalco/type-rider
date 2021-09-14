import React, { useState } from "react";
import { string, func } from "prop-types";

const TextInput = ({ placeholder, onComplete, onChange }) => {
  const [activeValue, setActiveValue] = useState("");

  const handleChange = (currentValue) => {
    setActiveValue(currentValue);
    onChange();

    if (currentValue === placeholder) {
      setActiveValue("");
      onComplete();
    }
  };

  return (
    <div>
      <h2>{activeValue}</h2>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
        value={activeValue}
      />
    </div>
  );
};

TextInput.propTypes = {
  placeholder: string.isRequired,
  onComplete: func.isRequired,
  onChange: func.isRequired,
};

export default TextInput;
