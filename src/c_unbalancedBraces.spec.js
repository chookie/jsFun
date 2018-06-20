/**
 * FB
 */
const balanceBraces = (input) => {
  if (!input) {
    return '';
  }
  let count = 0;
  let left = '';
  // Left braces
  for (let i=0; i < input.length; i++) {
    const ch = input.charAt(i);
    if (ch === "("){
      count += 1;
      left += ch;
    } else if (ch === ")") {
      if ( count > 0) {
        left += ch;
        count -= 1;
      }
    } else {
      left += ch;
    }
  }
  // Right braces
  let right = '';
  count = 0;
  for (let i=left.length-1; i>=0; i--) {
    const ch = left.charAt(i);
    if (ch === ")"){
      count += 1;
      right = ch + right;
    } else if (ch === "(") {
      if ( count > 0) {
        right = ch + right;
        count -= 1;
      }
    } else {
      right = ch + right;
    }
  }
  return right;
};

describe('c: unbalanced braces: remove any braces with no matching brace', () => {
  const runs = [
    { description: 'too many left braces', input: 'a((abc)((def)e', expected: 'a(abc)(def)e' },
    { description: 'last character is unbalanced brace', input: 'f((abc)((def)', expected: 'f(abc)(def)' },
    { description: 'first and last characters are unbalanced brace', input: ')(abc)(def)(', expected: '(abc)(def)' },
    { description: 'first and last characters are balanced braces', input: '((abc)f(def))', expected: '((abc)f(def))' },
    { description: 'empty string', input: '', expected: '' },
    { description: 'Null string', input: null, expected: '' },
  ];
  runs.forEach(run => {
    it(`should balance ${run.description}`, () => {
      expect(balanceBraces(run.input)).toBe(run.expected);
    });
  });
});
