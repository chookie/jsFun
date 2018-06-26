
/**
 * Cracking the coding interview page 73 exercise 1.1
 * 4 different methods
 */
const booleanArrayAndLoop = (input) => {
  if (!input) {
    return input
  };

  const array = new Array(128).fill(false);
  for (let i=0; i<input.length; i++) {
    const ansiCode = input.charCodeAt(i);
    if (array[ansiCode]) {
      return false;
    }
    array[ansiCode] = true;
  }
  return true;
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
   { description: 'duplicate at end', input: 'abcdee', expected: false },
   { description: 'duplicate at start', input: 'aabcde', expected: false },
 ];

 // const functions = [booleanArrayAndLoop, loopAndSet, loopInLoop, map];
 const functions = [booleanArrayAndLoop];

 describe('e: unique characters', () => {
   functions.forEach(func => {
     runs.forEach(run => {
       it(`${func.name} should pass ${run.description}`, () => {
         expect(func.call(this, run.input)).toBe(run.expected);
       });
     });
   });
 });

