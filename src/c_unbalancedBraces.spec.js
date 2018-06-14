const balanceBraces = (input) => {
  return input;
};

describe('c: unbalanced braces: remove any braces with no matching brace', () => {
  it('too many left braces', () => {
    expect(balanceBraces('a((abc)((def)e')).toBe('a(abc)(def)e');
  });
  it('last character is unbalanced brace', () => {
    expect(balanceBraces('f((abc)((def)')).toBe('f(abc)(def)');
  });
  it('first and last characters are unbalanced brace', () => {
    expect(balanceBraces(')(abc)(def)(')).toBe('(abc)(def)');
  });
  it('first and last characters are balanced braces', () => {
    expect(balanceBraces('((abc)f(def))')).toBe('((abc)f(def))');
  });
  it('empty string', () => {
    expect(balanceBraces('')).toBe('');
  });
  it('Null string', () => {
    expect(balanceBraces(null)).toBe(null);
  });
};
