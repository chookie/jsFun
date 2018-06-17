/**
 * Cracking the coding interview question 1.4 page 73
 * Write method to replace all spaces with %20 without using string.replace
 * Assume the length you are given is the true length so can hold additional characters.
 */
const encodeSpacesInString = input => {
  return input;
};

describe('f: encode spaces in string', () => {
  const runs = [
    { description: 'single spaces', input: 'Mr John Smith', expected: 'Mr%20John%20%20Smith' },
    { description: 'double spaces', input: 'Mr John Smith', expected: 'Mr%20John%20%20Smith' },
    { description: 'empty string', input: '', expected: '' },
    { description: 'null string', input: null, expected: null },
    { description: 'no spaces', input: 'MrJohnSmith', expected: 'MrJohnSmith' }
  ];
  runs.forEach(run => {
    it(`should pass ${run.description}`, () => {
      expect(encodeSpacesInString(run.input)).toBe(run.expected);
    });
  });
});
