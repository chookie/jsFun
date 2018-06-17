/**
 * Not fom book, from internet.
 */

const findPerms = input => {
  return [input];
};

const runs = [
  { description: 'is perm', word: 'cba', expected: ['cba', 'bca', 'bac','cab','acb','abc'] },
  { description: 'empty', word: '', expected: []  },
  { description: 'null', word: null, expected: []  },

];

describe('i: find all permutations', () => {
  runs.forEach(run => {
    it(`when ${run.description} should be ${run.expected} `, () => {
      expect(findPerms(run.word)).toBe(run.expected);
    });
  });
});
