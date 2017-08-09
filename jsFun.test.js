'use strict';

function countWords(input) {
  return input.reduce((map, property) => {
    map[property] = map[property] ? map[property] + 1 : 1;
    return map;
  }, {})
}

describe('Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).', () => {
  it('check object', () => {
    const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

    const result = countWords(inputWords);

    const expected = {
      Apple: 2,
      Banana: 1,
      Durian: 3
    }
    expect(result).toMatchObject(expected);

  });
});

const map = (input, func) => {
  return input.reduce((r, i) => {
    r.push(func(i));
    return r;
  }, []);
};

describe('Use array.reduce to implement a simple version of array.map', () => {
  it('double', () => {
    const nums = [1, 2, 3, 4, 5];
    // `map` is your exported function
    const output = map(nums, function double(item) {
      return item * 2
    })

    expect(output).toEqual([2, 4, 6, 8, 10]);
  });
});

const Spy = (object, method) => {
  const result = { count: 0 };
  const oldMethod = object[method];
  object[method] = (...args) => {
    result.count += 1;
    return oldMethod(...args);
  };
  return result;
}

describe('Override a specified method of an object with new functionality while still maintaining all of the old behaviour. Create a spy that keeps track of how many times a function is called. Do not use any for/while loops or Array#forEach. Do not create any unnecessary functions e.g. helpers.', () => {
  it('console error', () => {
    var spy = Spy(console, 'error')

    console.error('calling console.error')
    console.log(spy);
    console.error('calling console.error')
    console.error('calling console.error')

    expect(spy.count).toBe(3);
  });
});

// function curryN(fn) {
//   function inner(args) {
//     if (args.length === fn.length) {
//         return fn(...args);
//     }
//     return function(param) {
//       return inner([...args, param]);
//     }
//   }
//   return inner([]);
// }
const curryN = (fn) => {
  const inner = (args) => (args.length === fn.length) ? fn(...args) : (param) => inner([...args, param]);
  return inner([]);
}

// const curryN = (f) => (function r(a) {return (a.length === f.length) ? f(...a) : (p) => r([...a, p])})([]);

function add3(one, two, three) {
  return one + two + three
}
describe('CurryN: Implement curryN function for an arbitrary number of arguments such that ', () => {
  it('curryN', () => {
    var curryC = curryN(add3);
    var curryB = curryC(1);
    var curryA = curryB(2);

    expect(curryA(3)).toBe(6);
    expect(curryA(10)).toBe(13);
    expect(curryN(add3)(1)(2)(3)).toBe(6);
  });
});
