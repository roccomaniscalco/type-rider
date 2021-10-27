import { string } from "prop-types";

import Typography from "../typography/Typography";

const TextPrompt = ({  typed, current, remaining }) => {
  return (
    <div>
      <Typography variant="typed">{typed}</Typography>
      <Typography variant="current">{current}</Typography>
      <Typography variant="untyped">{remaining}</Typography>
    </div>
  );
};

TextPrompt.propTypes = {
  typed: string.isRequired,
  current: string.isRequired,
  remaining: string.isRequired,
};

export default TextPrompt;
