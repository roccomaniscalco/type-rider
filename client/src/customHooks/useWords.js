import { useState } from "react";

const getWords = (text) => {
  // include trailing space on each "wordString"
  const wordStrings = text.match(/\S+ |\S+/g);
  const words = wordStrings.map((wordString, index) => ({
    content: wordString,
    isTyped: false,
    id: index,
  }));
  return words;
};

const useWords = (text) => {
  const [words, setWords] = useState(getWords(text));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const incrementWord = () => {
    // create deep copy of "words"
    const updatedWords = [...words];
    updatedWords[currentWordIndex].isTyped = true;
    setWords(updatedWords);

    if (currentWordIndex < words.length - 1)
      setCurrentWordIndex(currentWordIndex + 1);
  };

  return [words, words[currentWordIndex], incrementWord];
};

export default useWords;
