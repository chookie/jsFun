/**
 * Cracking the coding interview 1.5 page 176
 * Implement basic compression by replacing repeated characters with count.
 * If compressed is not smaller than original than return original.
 * 2 solutions.  Using string concact and array as buffer.
 */

const compessUsingString = input => {
  return input;
};
const compessUsingBuffer = input => {
  return input;
};

const runs = [
  { description: 'converted is smaller', input: 'aabcccccaaa', expected: 'a2b1c5a3' },
  { description: 'converted is same', input: 'aabbccddee', expected: 'aabbccddee' },
  { description: 'no repeats', input: 'abcdef', expected: 'abcdef' },
];

const functions = [compessUsingString, compessUsingBuffer];

describe('g: compress', () => {
  functions.forEach(func => {
    runs.forEach(run => {
      it(`${func.name} should pass ${run.description}`, () => {
        expect(func.call(this, run.input)).toBe(run.expected);
      });
    });
  });
});

