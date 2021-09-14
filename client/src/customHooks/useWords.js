import { useState } from "react";

const useWords = (defaultText) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = defaultText.match(/\S+ |\S+/g);

  const incrementWord = () => {
    if (currentWordIndex < words.length) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  return {
    beforeWords: words.slice(0, currentWordIndex),
    currentWord: words[currentWordIndex] || "",
    afterWords: words.slice(currentWordIndex + 1),
    incrementWord,
  };
};

export default useWords;
