const readlineSync = require('readline-sync');

/**
 * Performs addition.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division. Returns null if dividing by zero.
 * @param {number} a 
 * @param {number} b 
 * @returns {number|null} Quotient or null if b is 0.
 */
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

/**
 * Performs modulus. Returns null if modulus by zero.
 * @param {number} a 
 * @param {number} b 
 * @returns {number|null} Remainder or null if b is 0.
 */
function modulus(a, b) {
  if (b === 0) return null;
  return a % b;
}

/**
 * Performs exponentiation.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a raised to the power of b.
 */
function power(a, b) {
  return a ** b;
}

/**
 * Helper function to parse and format floating point outputs cleanly.
 * @param {number} result 
 * @returns {string} Formatted number string.
 */
function formatResult(result) {
  return Number.isInteger(result) ? result.toString() : result.toFixed(2);
}

function main() {
  let choice = 0;

  while (choice !== 7) {
    console.log('\n============================');
    console.log('     SIMPLE CALCULATOR');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');

    choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('Goodbye!');
      break;
    }

    if (choice < 1 || choice > 7) {
      console.log('Invalid option. Please select a number between 1 and 7.');
      continue;
    }

    const num1 = readlineSync.questionFloat('Enter first number : ');
    const num2 = readlineSync.questionFloat('Enter second number: ');

    let result;
    switch (choice) {
      case 1:
        result = add(num1, num2);
        console.log(`Result: ${num1} + ${num2} = ${formatResult(result)}`);
        break;
      case 2:
        result = subtract(num1, num2);
        console.log(`Result: ${num1} - ${num2} = ${formatResult(result)}`);
        break;
      case 3:
        result = multiply(num1, num2);
        console.log(`Result: ${num1} * ${num2} = ${formatResult(result)}`);
        break;
      case 4:
        result = divide(num1, num2);
        if (result === null) {
          console.log('Error: Cannot divide by zero.');
        } else {
          console.log(`Result: ${num1} / ${num2} = ${formatResult(result)}`);
        }
        break;
      case 5:
        result = modulus(num1, num2);
        if (result === null) {
          console.log('Error: Cannot perform modulus by zero.');
        } else {
          console.log(`Result: ${num1} % ${num2} = ${formatResult(result)}`);
        }
        break;
      case 6:
        result = power(num1, num2);
        console.log(`Result: ${num1} ** ${num2} = ${formatResult(result)}`);
        break;
    }
  }
}

// Run the program
main();