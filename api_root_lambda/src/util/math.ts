export const range = (start: number, end: number) : Array<number> => {
  const rangeNums : Array<number> = [];
  for (let i = start; i < end; i += 1) {
    rangeNums.push(i);
  }
  return rangeNums;
};
