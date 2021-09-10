import { useState } from "react";

const getWords = (sentence) => {
  const wordStrings = sentence.split(" ");
  const words = wordStrings.map((wordString, index) => ({
    text: wordString,
    isTyped: false,
    id: index,
  }));
  return words;
};

const useWords = (sentence) => {
  const [words, setWords] = useState(getWords(sentence));
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
