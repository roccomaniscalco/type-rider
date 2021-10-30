export const calculateGrossWpm = (charCount, seconds) => {
  const standardUnitWords = charCount / 5;
  const minutes = seconds / 60;
  const wpm = Math.round(standardUnitWords / minutes);
  return wpm;
};

export const calculateAccuracy = (charCount, correctCharCount) => {
  const raw = correctCharCount / charCount;
  const percent = `${Math.round(raw * 100)}%`;
  const fraction = `${correctCharCount} / ${charCount}`;
  return { raw, percent, fraction };
};
