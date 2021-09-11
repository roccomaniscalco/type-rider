import { useState } from "react";

// return chars:arr from text:string
const getChars = (text) => {
  const chars = [...text];
  return chars.map((char, index) => ({
    content: char,
    isTyped: false,
    id: index,
  }));
};

const useChars = (text) => {
  const [chars, setChars] = useState(getChars(text));
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const incrementChar = () => {
    // create deep copy of chars:arr
    const updatedChars = [...chars];
    updatedChars[currentCharIndex].isTyped = true;
    setChars(updatedChars);

    if (currentCharIndex < chars.length - 1)
      setCurrentCharIndex(currentCharIndex + 1);
  };

  return {
    chars: chars,
    currentChar: chars[currentCharIndex],
    incrementChar: incrementChar,
  };
};

export default useChars;
