import React from "react";
import PropTypes from "prop-types";

const TextField = ({ placeholder, value, onChange }) => {
  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  activeValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
