/**
 * Use and array but do it in place in the same array
 */
const reverseString = (forward) => {
  if (!forward) return forward;

  const array = forward.split('');
  const len =  array.length;
  for (let i=0; i < len/2; i++) {
    const temp = array[len - 1 - i];
    array[len - 1 - i] = array[i];
    array[i] = temp;
  }
  return array.join('');
};

describe('d: reverse a string', () => {
  const runs = [
    { description: 'reverse string', input: 'absdef', expected: 'fedsba' },
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
