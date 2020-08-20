export const roundToNearest = (value: number, round: number): number => {
  return Math.ceil(value / round) * round;
};
