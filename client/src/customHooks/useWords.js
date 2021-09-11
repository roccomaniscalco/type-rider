import { useState } from "react";

// return words:arr from text:string
const getWords = (text) => {
  // include trailing space on each word:string in words:arr
  const words = text.match(/\S+ |\S+/g);
  return words.map((wordString, index) => ({
    content: wordString,
    isTyped: false,
    id: index,
  }));
};

const useWords = (text) => {
  const [words, setWords] = useState(getWords(text));
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const incrementWord = () => {
    // create deep copy of words:arr
    const updatedWords = [...words];
    updatedWords[currentWordIndex].isTyped = true;
    setWords(updatedWords);

    if (currentWordIndex < words.length - 1)
      setCurrentWordIndex(currentWordIndex + 1);
  };

  return [words, words[currentWordIndex], incrementWord];
};

export default useWords;
