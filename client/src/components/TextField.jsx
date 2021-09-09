import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ placeholder }) => {
  const [activeValue, setActiveValue] = useState("");

  const handleChange = (currentValue) => {
    currentValue === placeholder
      ? setActiveValue("")
      : setActiveValue(currentValue);
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

TextField.propTypes = {
  placeholder: PropTypes.string,
};

export default TextField;
