
 /**
 * FB 2.
 * For the game "Boggle" write a function that returns true if the given word can be found on the dice.
 * https://en.wikipedia.org/wiki/Boggle
 * Sample was something like
 * F A K E
 * A O H S
 * C N O N
 * E I T L
 */

 const wordExists = (grid, word) => {
   return false;
 };

 const grid =[
   ['F','A','K','E'],
   ['A','O','H','A'],
   ['C','N','O','N'],
   ['E','I','T','L']
 ];

 const runs = [
   { description: 'word not exist', word: 'NOTExist', expected: false },
   { description: 'word exists down', word: 'Fake', expected: true },
   { description: 'word exists diagonal', word: 'Fool'  , expected: true },
   { description: 'word in centre', word: 'Hot'   , expected: true },
   { description: 'word in diagonal line', word: 'ANOH', expected: true },
 ];

 describe('p: boggle word game', () => {
   runs.forEach(run => {
     it(`${run.word} ${run.description}`, () => {
       expect(wordExists(grid, run.word)).toBe(run.expected);
     });
   });
 });
