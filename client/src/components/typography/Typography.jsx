import { string, oneOf } from "prop-types";

import "./typography.css";

const Typography = ({ children, variant }) => {
  return <span className={variant}>{children}</span>;
};

Typography.propTypes = {
  children: string.isRequired,
  variant: oneOf(["untyped", "typed", "current"]).isRequired,
};

export default Typography;
