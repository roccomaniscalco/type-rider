import { func, node } from "prop-types";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
};

export default Button;
