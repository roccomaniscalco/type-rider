import { useState } from "react";

const useWords = (text, onComplete) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // space delineated array of words from text
  const words = text?.match(/\S+ |\S+/g);
  const typed = words?.slice(0, currentWordIndex)?.join("");
  const current = words?.[currentWordIndex];
  const remaining = words?.slice(currentWordIndex + 1)?.join("");

  const increment = () => {
    if (remaining.length === 0) {
      setCurrentWordIndex(0);
      onComplete()
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  return {
    typed,
    current,
    remaining,
    increment,
  };
};

export default useWords;
