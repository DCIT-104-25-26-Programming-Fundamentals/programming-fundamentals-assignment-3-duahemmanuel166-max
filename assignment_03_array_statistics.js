const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The sum of the numbers.
 */
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/**
 * Calculates the average of all numbers in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The average value.
 */
function findAverage(arr) {
  if (arr.length === 0) return 0;
  return findSum(arr) / arr.length;
}

/**
 * Finds the maximum number in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The maximum value.
 */
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Finds the minimum number in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} The minimum value.
 */
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  // Validate that count is a positive integer
  if (count <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }

  const numbers = [];

  // Read numbers from the user
  for (let i = 1; i <= count; i++) {
    const num = readlineSync.questionInt(`Enter number ${i}: `);
    numbers.push(num);
  }

  // Display results
  console.log('\nResults:');
  console.log(`Sum:     ${findSum(numbers)}`);
  console.log(`Average: ${findAverage(numbers)}`);
  console.log(`Maximum: ${findMax(numbers)}`);
  console.log(`Minimum: ${findMin(numbers)}`);
}

// Run the program
main();