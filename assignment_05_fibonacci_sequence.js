
/**
 * PART A: Generates and returns an array containing the first N Fibonacci numbers.
 * @param {number} n - The number of terms to generate.
 * @returns {number[]} Array of Fibonacci numbers.
 */
function generateFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

/**
 * PART B: Checks whether a given number is part of the Fibonacci sequence.
 * @param {number} num - The number to check.
 * @returns {boolean} True if num is a Fibonacci number, false otherwise.
 */
function isFibonacci(num) {
  if (num < 0) return false;

  let a = 0;
  let b = 1;

  while (a < num) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return a === num;
}

function main() {
  console.log('=== PART A: First N Terms ===');
  const n = readlineSync.questionInt('How many terms? ');

  if (n <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
  } else {
    const fibSequence = generateFibonacci(n);
    console.log(`Fibonacci sequence: ${fibSequence.join(' ')}`);
  }

  console.log('\n=== PART B: Fibonacci Check ===');
  const numToCheck = readlineSync.questionInt('Enter a number to check: ');

  if (isFibonacci(numToCheck)) {
    console.log(`${numToCheck} is a Fibonacci number.`);
  } else {
    console.log(`${numToCheck} is NOT a Fibonacci number.`);
  }
}

// Run the program
main();