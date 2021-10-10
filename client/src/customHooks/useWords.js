import { useRef, useState } from "react";

const useWords = (defaultText) => {
  // converts string to space delineated array of words
  const words = useRef(defaultText.match(/\S+ |\S+/g));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const incrementWord = () => {
    if (currentWordIndex < words.current.length) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  return {
    unitWords: Math.round(defaultText.length / 5),
    beforeWords: words.current.slice(0, currentWordIndex).join(""),
    currentWord: words.current[currentWordIndex] || "",
    afterWords: words.current.slice(currentWordIndex + 1).join(""),
    incrementWord,
  };
};

export default useWords;
