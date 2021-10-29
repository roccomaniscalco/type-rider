export const calculateGrossWpm = (text, seconds) => {
  const standardUnitWords = text.length / 5;
  const minutes = seconds / 60;
  const wpm = Math.round(standardUnitWords / minutes);
  return wpm;
};

export const calculateAccuracy = (text, incorrectCharsCount) => {
  const accuracy = (text.length - incorrectCharsCount) / text.length;
  return accuracy;
};
