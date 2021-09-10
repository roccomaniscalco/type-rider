import { useState } from "react";

const useWords = (sentence) => {
  const [words, setWords] = useState(sentence);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const incrementWord = () => {
    const updatedWords = words;
    updatedWords[currentWordIndex].isTyped = true;
    setWords(updatedWords);

    setCurrentWordIndex(currentWordIndex + 1);
  };

  return [words, words[currentWordIndex], incrementWord];
};

export default useWords;
