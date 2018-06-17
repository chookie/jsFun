
/**
 * Cracking the coding interview page 73 exercise 1.1
 * 4 different methods
 */
const booleanArrayAndLoop = (input) => {
  return input;
};
 const loopAndSet = (input) => {
   return input;
 };
 const loopInLoop = (input) => {
   return input;
 };
 const map = (input) => {
   return input;
 };

 const runs = [
   { description: 'duplicate characters', input: 'sTutua', expected: false },
   { description: 'different case', input: 'sTutUa', expected: true },
   { description: 'unique characters', input: 'saivw', expected: true },
   { description: 'duplicate at end', input: 'abcdee', expected: true },
   { description: 'duplicate at start', input: 'aabcde', expected: false },
 ];

 const functions = [booleanArrayAndLoop, loopAndSet, loopInLoop, map];

 describe('e: unique characters', () => {
   functions.forEach(func => {
     runs.forEach(run => {
       it(`${func.name} should pass ${run.description}`, () => {
         expect(func.call(this, run.input)).toBe(run.expected);
       });
     });
   });
 });

