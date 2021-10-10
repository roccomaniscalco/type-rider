import { string } from "prop-types";

import Typography from "../typography/Typography";

const TextPrompt = ({ beforeWords, currentWord, afterWords }) => {
  return (
    <div>
      <Typography variant="typed">{beforeWords}</Typography>
      <Typography variant="current">{currentWord}</Typography>
      <Typography variant="untyped">{afterWords}</Typography>
    </div>
  );
};

TextPrompt.propTypes = {
  beforeWords: string.isRequired,
  currentWord: string.isRequired,
  afterWords: string.isRequired,
};

export default TextPrompt;
