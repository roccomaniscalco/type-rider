import { useState, useCallback } from "react";

const useWords = (defaultText) => {
  const [words, setWords] = useState(defaultText.match(/\S+ |\S+/g));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const incrementWord = () => {
    if (currentWordIndex < words.length)
      setCurrentWordIndex(currentWordIndex + 1);
  };

  const setText = useCallback((text) => {
    // match words with trailing spaces
    setWords(text.match(/\S+ |\S+/g));
    setCurrentWordIndex(0);
  }, []);

  return {
    beforeWords: words.slice(0, currentWordIndex),
    currentWord: words[currentWordIndex],
    afterWords: words.slice(currentWordIndex + 1),
    incrementWord,
    setText,
  };
};

export default useWords;
