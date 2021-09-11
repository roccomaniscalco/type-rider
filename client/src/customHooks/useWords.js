import { useState } from "react";

const useWords = (text) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const incrementWord = () => {
    if (currentWordIndex < words.length)
      setCurrentWordIndex(currentWordIndex + 1);
  };

  // match words with trailing spaces
  const words = text.match(/\S+ |\S+/g);

  return {
    beforeWords: words.slice(0, currentWordIndex),
    currentWord: words[currentWordIndex],
    afterWords: words.slice(currentWordIndex + 1),
    incrementWord: incrementWord,
  };
};

export default useWords;
