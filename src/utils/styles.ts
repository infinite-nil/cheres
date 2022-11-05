const getFraction = (level: number) => {
  return 1 - level / 10;
};

const getZIndex = (level: number) => {
  return 100 - level;
};

const getCardSize = (level: number) => {
  return level === 0 ? "100%" : `${100 - level * 8}%`;
};

const getCardPosition = (level: number) => {
  return level * 8;
};

export { getFraction, getZIndex, getCardSize, getCardPosition };
