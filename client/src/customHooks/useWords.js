import { useState } from "react";

const useWords = (text, onComplete) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // space delineated array of words from text
  const words = text.match(/\S+ |\S+/g);
  const typed = words?.slice(0, currentWordIndex)?.join("");
  const current = words?.[currentWordIndex];
  const remaining = words?.slice(currentWordIndex + 1)?.join("");

  const incrementWord = () => {
    if (currentWordIndex >= words?.length - 1) {
      setCurrentWordIndex(0);
      onComplete();
      console.log("complete");
    } else {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  return {
    words: { typed, current, remaining },
    incrementWord,
  };
};

export default useWords;
