const strConcat = (input) => {
  if (!input) {
    return input;
  }
  let rev = '';
  for (let i = input.length-1; i >= 0; i--) {
    rev += input[i];
  }
  return rev;
};

const strInPlace = (input) => {
  if (!input) {
    return input;
  }
  const array = input.split('');
  const len = array.length;
  for (let i = 0; i < len/2; i++) {
    const temp = array[len - 1 - i];
    array[len - 1 - i] = array[i];
    array[i] = temp;
  }
  return array.join('');
};

const reduce = (input) => {
  if (!input) {
    return input;
  }
  return input.split('').reduce((acc, val) => val + acc, '');
};

const each = (input) => {
  if (!input) return input;
  let rev = '';
  input.split('').forEach(c => rev = c + rev);
  return rev;
};

const functions = [strConcat, strInPlace, reduce, each];

describe('d: reverse a string', () => {
  const runs = [
    { description: 'reverse string', input: 'abcdef', expected: 'fedcba' },
    { description: 'empty string', input: '', expected: '' },
    { description: 'null string', input: null, expected: null },
    { description: 'single character', input: 'f', expected: 'f' },
    { description: 'mixed case', input: 'AbDgT', expected: 'TgDbA' },
  ];
  runs.forEach(run => {
    functions.forEach(func => {
      it(`${func.name} should pass ${run.description}`, () => {
        expect(func.call(this, run.input)).toBe(run.expected);
      });
    });
  });
});
