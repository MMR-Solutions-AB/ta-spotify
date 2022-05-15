export const formatTime = (value) => {
  const rest = (value % 60).toFixed(0);
  const min = Math.floor(value / 60);
  const seconds = rest < 10 ? `0${rest}` : rest;
  return `${min}:${seconds}`;
};
