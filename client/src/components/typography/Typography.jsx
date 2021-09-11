import React from "react";
import PropTypes from "prop-types";

import "./typography.css";

const Typography = ({ children, variant }) => {
  return (
    <span className={variant}>{children}</span>
  );
};

Typography.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
};

export default Typography;
