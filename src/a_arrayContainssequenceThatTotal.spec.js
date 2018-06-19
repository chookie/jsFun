/**
 * FB
 * This only works for positive targets
 */
const arrayContains = (array, target) => {
  const sums = new Set();
  let sum = 0;
  for (const item of array) {
    sum += item;
    if (sum === target) {
      return true;
    } else if (sum < target) {
      sums.add(sum);
    } else {
      const diff = sum - target;
      if (sums.has(diff)) {
        return true;
      }
    }
  }
  return false;
};

describe('a: target is sum of any sequence of numbers in array', function () {
  const runs = [
    { array: [3,1,6,10], target: 4, description: 'contains total at left', expected: true},
    { array: [3,1,6,10], target: 16, description: 'contains total at right', expected: true},
    { array: [3,1,6,10], target: 7, description: 'contains total centre', expected: true},
    { array: [3,1,6,10], target: 14, description: '3 numbers', expected: true},
    { array: [3,1,6,10], target: 17, description: '3 numbers', expected: true},
    { array: [3,1,6,10], target: 8, description: 'not found, value in range', expected: false},
    { array: [3,1,6,10], target: 2, description: 'not found, value below range', expected: false},
    { array: [3,1,6,10], target: 25, description: 'not found, value above range', expected: false},
    { array: [3,1,6,10], target: 8, description: 'empty', expected: false},
    { array: [3,1,6,10], target: 0, description: 'target zero', expected: false},
    { array: [3,-1,6,10], target: 5, description: 'negative array', expected: true},
    { array: [3,1,6,10], target: -7, description: 'negative target', expected: false},
  ];
  runs.forEach(run => {
      it(`should be ${run.expected} when ${run.description}`, function () {
        expect(arrayContains(run.array, run.target)).toBe(run.expected);
      });
    });
});
