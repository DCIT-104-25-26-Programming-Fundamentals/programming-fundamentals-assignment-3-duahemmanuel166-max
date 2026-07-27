const readlineSync = require('readline-sync');

/**
 * Checks whether a given number is prime.
 * @param {number} n - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
function isPrime(n) {
  // Numbers less than 2 are not prime
  if (n < 2) {
    return false;
  }

  // Check divisors up to the square root of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // Found a factor, so n is not prime
    }
  }

  return true; // No factors found, n is prime
}

function main() {
  // Read integer input from the user
  const number = readlineSync.questionInt('Enter a number: ');

  // Determine primality and print result
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is NOT a prime number.`);
  }
}

// Run the program
main();