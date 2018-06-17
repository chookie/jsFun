/**
 * FB
 */
const balanceBraces = (input) => {
  return input;
};

describe('c: unbalanced braces: remove any braces with no matching brace', () => {
  const runs = [
    { description: 'too many left braces', input: 'a((abc)((def)e', expected: 'a(abc)(def)e' },
    { description: 'last character is unbalanced brace', input: 'f((abc)((def)', expected: 'f(abc)(def)' },
    { description: 'first and last characters are unbalanced brace', input: ')(abc)(def)(', expected: '(abc)(def)' },
    { description: 'first and last characters are balanced braces', input: '((abc)f(def))', expected: '((abc)f(def))' },
    { description: 'empty string', input: '', expected: '' },
    { description: 'Null string', input: null, expected: null },
  ];
  runs.forEach(run => {
    it(`should balance ${run.description}`, () => {
      expect(balanceBraces(run.input)).toBe(run.expected);
    });
  });
});
