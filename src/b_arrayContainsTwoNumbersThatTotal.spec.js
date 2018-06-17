const arrayContains = (array, target) => {
  return false;
};

describe('b: target is sum of any 2 numbers in array not necessarily in sequence', () => {
  const runs = [
    { array: [], target: 8, description: 'empty array', expected: false },
    { array: [10,5,7,3,2,6,4], target: 0, description: 'zero sum', expected: false },
    { array: [8], target: 8, description: 'single int array', expected: true },
    { array: [10,5,7,3,6,4], target: 2, description: 'less than array not found', expected: false},
    { array: [10,5,7,3,6,4], target: 20, description: 'more than array not found', expected: false },
    { array: [10,5,7,3,6,4], target: 5, description: 'within array not found', expected: false },
    { array: [10,5,7,3,6,4], target: 14, description: 'sum edge unsorted', expected: true},
    { array: [10,5,7,3,6,4], target: 13, description: 'sum edge sorted', expected: true },
    { array: [10,5,7,3,6,4], target: 10, description: 'sum centre sorted', expected: true },
    { array: [10,5,7,3,6,4], target: 17, description: 'sum edge and inner sorted', expected: true },
    { array: [10,5,7,3,6,4], target: 8, description: 'sum inner sorted', expected: true },
    { array: [-1,-3,-4,-2], target: -3, description: 'negative sum found', expected: true },
    ];
  runs.forEach(run => {
      it(`should be ${run.expected} when ${run.description}`, () => {
        expect(arrayContains(run.array, run.target)).toBe(run.expected);
      });
    });
});
