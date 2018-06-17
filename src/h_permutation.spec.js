/**
 * Cracking the coding interview 1.3 page 73
 * Give 2 strings, decide if one is permutation of the other.
 * Only concerned about same characters, not finding words.
 * 2 ways to achieve this.  convert to array, or index through a string
 */

const useArray = input => {
  return input;
};

const useString = input => {
  return input;
};

const runs = [
  { description: 'is perm', word: 'ABCDE', permutation: 'EBCAD', expected: true },
  { description: 'not perm', word: 'ABCDE', permutation: 'EBC', expected: false  },
  { description: 'case independent', word: 'AbCdE', permutation: 'EBCAD', expected: true  },
];

const functions = [useArray, useString];

describe('h: permutation', () => {
  functions.forEach(func => {
    runs.forEach(run => {
      it(`${func.name} should pass ${run.description}`, () => {
        expect(func.apply(this, [run.word, run.permutation ])).toBe(run.expected);
      });
    });
  });
});
