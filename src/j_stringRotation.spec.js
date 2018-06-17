/**
 * Cracking the coding interview 1.8
 * Assume you have a method isSubstring which returns true if
 * string is substring of another. Rotations means
 * some letters moved to end of string but kept in order
 * they were in before move.  Check if S2 is rotation of
 *  S1 using only 1 call to substring.  Does not have to be real word.
 */
const isStringRotation = (word, rotation) => {
  return word + rotation;
};

const runs = [
  { word: 'waterbottle', rotation: 'erbottlewat', expected: true },
  { word: 'god', rotation: 'odg', expected: true },
  { word: 'waterbottle', rotation: 'bottlewaterly', expected: false },

];

describe('j: string rotation', () => {
  runs.forEach(run => {
    it(`${run.word} ${run.expected ? 'is' : 'is not'} rotation of ${run.rotation} `, () => {
      expect(isStringRotation(run.word, run.rotation)).toEqual(run.expected);
    });
  });
});
