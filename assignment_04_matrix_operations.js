

/**
 * Helper function to read a matrix from user input.
 * @param {number} rows - Number of rows.
 * @param {number} cols - Number of columns.
 * @param {string} matrixName - Name identifier for display prompt.
 * @returns {number[][]} The entered matrix.
 */
function readMatrix(rows, cols, matrixName = '') {
  const matrix = [];
  const label = matrixName ? ` for ${matrixName}` : '';
  
  for (let i = 0; i < rows; i++) {
    const input = readlineSync.question(`Enter row ${i + 1}${label}: `);
    const rowValues = input.trim().split(/\s+/).map(Number);

    if (rowValues.length !== cols || rowValues.some(isNaN)) {
      console.log(`Invalid input. Please enter exactly ${cols} numbers.`);
      i--; // Retry this row
      continue;
    }

    matrix.push(rowValues);
  }
  return matrix;
}

/**
 * Prints a matrix in a neat, grid-aligned format.
 * @param {number[][]} matrix - Matrix to display.
 */
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].map(num => String(num).padStart(4)).join(' '));
  }
}

/**
 * PART A: Transposes an M x N matrix to an N x M matrix.
 * @param {number[][]} matrix - Input matrix.
 * @returns {number[][]} Transposed matrix.
 */
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = 0; r < rows; r++) {
      newRow.push(matrix[r][c]);
    }
    transposed.push(newRow);
  }

  return transposed;
}

/**
 * PART B: Adds two M x N matrices.
 * @param {number[][]} matrixA - First matrix.
 * @param {number[][]} matrixB - Second matrix.
 * @returns {number[][]} Resulting matrix sum.
 */
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let r = 0; r < rows; r++) {
    const newRow = [];
    for (let c = 0; c < cols; c++) {
      newRow.push(matrixA[r][c] + matrixB[r][c]);
    }
    result.push(newRow);
  }

  return result;
}

/**
 * PART C: Multiplies an M x N matrix by an N x P matrix.
 * @param {number[][]} matrixA - First matrix (M x N).
 * @param {number[][]} matrixB - Second matrix (N x P).
 * @returns {number[][]} Resulting matrix product (M x P).
 */
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function main() {
  console.log('=== PART A: Transpose Matrix ===');
  const rowsA = readlineSync.questionInt('Enter number of rows: ');
  const colsA = readlineSync.questionInt('Enter number of columns: ');

  if (rowsA <= 0 || colsA <= 0) {
    console.log('Error: Dimensions must be positive integers.');
    return;
  }

  const matrixA = readMatrix(rowsA, colsA);
  console.log('\nOriginal Matrix:');
  printMatrix(matrixA);

  const transposed = transposeMatrix(matrixA);
  console.log('\nTransposed Matrix:');
  printMatrix(transposed);

  console.log('\n=== PART B: Add Two Matrices ===');
  console.log(`Enter a second ${rowsA}x${colsA} matrix to add with the original matrix:`);
  const matrixB = readMatrix(rowsA, colsA, 'Matrix B');

  console.log('\nMatrix A + Matrix B:');
  const added = addMatrices(matrixA, matrixB);
  printMatrix(added);

  console.log('\n=== PART C: Multiply Two Matrices ===');
  console.log(`For multiplication (A x C), Matrix C must have ${colsA} rows.`);
  const colsC = readlineSync.questionInt('Enter number of columns for Matrix C: ');

  if (colsC <= 0) {
    console.log('Error: Number of columns must be a positive integer.');
    return;
  }

  const matrixC = readMatrix(colsA, colsC, 'Matrix C');

  console.log('\nMatrix A x Matrix C:');
  const multiplied = multiplyMatrices(matrixA, matrixC);
  printMatrix(multiplied);
}

// Run the program
main();