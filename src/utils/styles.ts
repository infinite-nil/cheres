const getFraction = (level: number) => {
  return 1 - level / 10;
};

const getZIndex = (level: number) => {
  return 100 - level;
};

export { getFraction, getZIndex };
