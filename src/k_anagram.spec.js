/**
 * Test if anagram of word based on letters only, not words and case insensitive.
 */

const anagramUsingArrays = input => {
  return input;
};
const anagramUsingTempString = input => {
  return input;
};
const anagramUsingSCharArray = input => {
  return input;
};

const runs = [
  { word: 'word', anagram: 'wrdo', expected: true },
  { word: 'mary', anagram: 'army', expected: true },
  { word: 'mary', anagram: 'Army', expected: true },
  { word: 'stop', anagram: 'tops', expected: true },
  { word: 'boat', anagram: 'btoa', expected: true },
  { word: 'a', anagram: 'a', expected: true },
  { word: 'fill', anagram: 'fil', expected: false },
  { word: 'b', anagram: 'pure', expected: false },
  { word: 'ccc', anagram: 'ccccccc', expected: false },
  { word: 'sleep', anagram: 'slep', expected: false },
];

const functions = [anagramUsingArrays, anagramUsingTempString, anagramUsingSCharArray];

describe('k: anagram', () => {
  functions.forEach(func => {
    runs.forEach(run => {
      it(`For func.name} ${run.word} ${run.expected ? 'is' : 'is not'} anagram of ${run.anagram} `, () => {
        expect(func.call(this, run.input)).toBe(run.expected);
      });
    });
  });
});

