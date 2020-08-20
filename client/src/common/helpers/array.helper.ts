export const isEqual = <T>(array1: T[], array2: T[]): boolean => {
  return JSON.stringify(array1) === JSON.stringify(array2);
};
