const calculateWpm = (text, seconds) => {
  const standardUnitWords = text.length / 5;
  const minutes = seconds / 60;
  const wpm = Math.round(standardUnitWords / minutes);
  return wpm;
};

export default calculateWpm;
