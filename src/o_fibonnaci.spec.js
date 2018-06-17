
/**
 * Cracking code page 108, Elements of interviews in java page 308
 */
const fabonnaciRecursion = target => {
  return target;
};
const fabonnaciRecursionWithCache = target => {
  return target;
};
const fabonnaciIterator = target => {
  return target;
};

const runs = [
  { target: 0, fibonnaci: 0 },
  { target: 1, fibonnaci: 1 },
  { target: 7, fibonnaci: 13 },
  { target: 20, c: 6765 },
  { target: 45, fibonnaci: 1134903170 },
];

const functions = [fabonnaciRecursion, fabonnaciRecursionWithCache, fabonnaciIterator];

describe('k: anagram', () => {
  functions.forEach(func => {
    runs.forEach(run => {
      it(`target ${run.target} should have fibonnaci of ${run.fibonnaci} `, () => {
        expect(func.call(this, run.target)).toBe(run.fibonnaci);
      });
    });
  });
});

