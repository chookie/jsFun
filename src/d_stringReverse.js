const reverseString = (input) => {
  return input;
};

describe('d: revers a string', () =>
  it('should reverse string ok', () =>
    expect(reverseString('absdef')).toBe('fedcba');
  });
  it('empty string returns empty string', () =>
    expect(reverseString('')).toBe('');
  });
  it('null string returns empty null', () =>
    expect(reverseString(null)).toBe(null);
  });
  it('single character string returns character', () =>
    expect(reverseString('f')).toBe('f');
  });
  it('mixed case returns reversed string', () =>
    expect(reverseString('AbDgT')).toBe('TgDbA');
  });
});
