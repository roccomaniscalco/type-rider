import { func, node } from "prop-types";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

console.log("render")

Button.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
};

export default Button;
