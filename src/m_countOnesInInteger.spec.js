
const countOnesInInteger = input => {
  return input.length;
};

const runs = [
  { description: 'ones at start middle and end', input: 0b1001001, expected: 3 },
  { description: 'one in middle', input: 0b0001000, expected: 1 },
  { description: 'all ones', input: 0b1111111, expected: 7 },
  { description: 'no ones', input: 0b0000000, expected: 0 },
];

describe('m: count 1s in integer', () => {
  runs.forEach(run => {
    it(`${run.description} returns ${run.expected} `, () => {
      expect(countOnesInInteger(run.input)).toBe(run.expected);
    });
  });
});
