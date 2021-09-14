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
    unitWords: Math.round(defaultText.length / 5),
    beforeWords: words.slice(0, currentWordIndex).join(""),
    currentWord: words[currentWordIndex] || "",
    afterWords: words.slice(currentWordIndex + 1).join(""),
    incrementWord,
  };
};

export default useWords;
