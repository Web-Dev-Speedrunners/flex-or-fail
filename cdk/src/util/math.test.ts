import { range } from './math';

describe('Tests Math Utilities', () => {
  describe('Test Math Range', () => {
    it('It returns the correct range', () => {
      const start = 5;
      const end = 10;
      const expectedRange = [5, 6, 7, 8, 9];
      const actualRange = range(start, end);
      expect(actualRange).toEqual(expectedRange);
    });
  });
});
