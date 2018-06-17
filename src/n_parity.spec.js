/**
 * Elements of programming interviews in Java page 43
 */
const parity = input => {
  return 0;
};

const runs = [
  { description: 'parity for odd parity', input: 0b010101, expected: 1 },
  { description: 'parity for even parity', input: 0b01010101, expected: 0 },
];

describe('m: count 1s in integer', () => {
  runs.forEach(run => {
    it(`${run.description} returns ${run.expected} `, () => {
      expect(parity(run.input)).toBe(run.expected);
    });
  });
});
