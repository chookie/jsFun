/**
 * Use and array but do it in place in the same array
 */
const reverseString = (input) => {
  return input;
};

describe('d: reverse a string', () => {
  const runs = [
    { description: 'reverse string', input: 'absdef', expected: 'fedcba' },
    { description: 'empty string', input: '', expected: '' },
    { description: 'null string', input: null, expected: null },
    { description: 'single character', input: 'f', expected: 'f' },
    { description: 'mixed case', input: 'AbDgT', expected: 'TgDbA' },
  ];
  runs.forEach(run => {
    it(`should pass ${run.description}`, () => {
      expect(reverseString(run.input)).toBe(run.expected);
    });
  });
});
