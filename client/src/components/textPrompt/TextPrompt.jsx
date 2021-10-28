import { bool, string } from "prop-types";

import Typography from "../typography/Typography";

const TextPrompt = ({ typed, current, remaining, isError }) => {
  return (
    <div>
      <Typography variant="typed">{typed}</Typography>
      <Typography variant={isError ? "error" : "success"}>{current}</Typography>
      <Typography variant="untyped">{remaining}</Typography>
    </div>
  );
};

TextPrompt.propTypes = {
  typed: string.isRequired,
  current: string.isRequired,
  remaining: string.isRequired,
  isError: bool.isRequired,
};

export default TextPrompt;
