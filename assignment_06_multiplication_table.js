const readlineSync = require('readline-sync');

/**
 * PART A: Prints the multiplication table for a given number from 1 to 12.
 * @param {number} num - The number to generate the table for.
 */
function printTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    const result = num * i;
    // Aligning columns neatly
    const paddedMultiplier = String(i).padStart(2, ' ');
    console.log(`${num}  x  ${paddedMultiplier}  =  ${result}`);
  }
}

/**
 * PART B: Prints multiplication tables for all numbers from 1 to N.
 * @param {number} n - The maximum limit for tables to display.
 */
function printAllTables(n) {
  for (let i = 1; i <= n; i++) {
    printTable(i);
    if (i < n) {
      console.log('---------------------------');
    }
  }
}

function main() {
  console.log('=== PART A: Single Table ===');
  const num = readlineSync.questionInt('Enter a number for the table: ');

  if (num <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }

  printTable(num);

  console.log('\n=== PART B: Tables from 1 to N ===');
  const maxN = readlineSync.questionInt('Enter N to print tables from 1 to N: ');

  if (maxN <= 0) {
    console.log('Error: Please enter a positive integer greater than 0.');
    return;
  }

  printAllTables(maxN);
}

// Run the program
main();