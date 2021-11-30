// to run this file, simply use the command "node hof.js", and then look at the console output.

/**
 * Write a function that takes an integer argument, and returns an array containing
 * all integers between 1 and the argument (inclusive), in ascending order.
 * You may assume that the argument will always be a positive integer.
 sequence(5);    // [1, 2, 3, 4, 5]
 sequence(3);    // [1, 2, 3]
 sequence(1);    // [1]
 */

const sequence = n => {
  const newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr;
};

// console.log(sequence(5));
// console.log(sequence(3));
// console.log(sequence(1));

/**
 * Write a function that takes an integer "n" and returns an array containing the sequence from 1 to n,
 * but each number is doubled.
 * ex. doubleSequence(3) => [2, 4, 6]
 * ex. doubleSequence(5) => [2, 4, 6, 8, 10]
 * ex. doubleSequence(1) => [2]
 */

const doubleSequence = n => {
  // one way of doing this, is very similar to sequence:
  // create a new array "newArr" that is empty
  // for each number between 1 and "n"
  // push i * 2 into the array
  // return newArr
  // const newArr = [];
  // for (let i = 1; i <= n; i++) {
  //   newArr.push(i * 2);
  // }
  // return newArr;
  
  // one line solution using array.map
  return sequence(n).map(oldSequenceNumber => oldSequenceNumber * 2);
};

// console.log(doubleSequence(77));


/**
 * Given an integer "n", return all the values between 1 and "n", excluding any values that are odd.
 * ex. noOddNumbers(3) => [2]
 * ex. noOddNumbers(10) => [2, 4, 6, 8]
 */

// [1, 2, 3].filter(filterFunc)
  
  // filterFunc(1) // false
  // filterFunc(2) // true
  // filterFunc(3) // false

const noOddNumbers = n => {
  // use the remainder operator to determine whether the number gets included.
  // to check whether a number is "odd" or "even" we use n % 2
  return sequence(n).filter(oldSequenceNumber => oldSequenceNumber % 2 === 0);
};

console.log(noOddNumbers(50));
