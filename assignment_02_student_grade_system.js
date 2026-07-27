

/**
 * Returns the letter grade for a given numerical score.
 * Returns null if the score is out of the valid range (0–100).
 *
 * @param {number} score - The numerical score.
 * @returns {string|null} The letter grade ('A', 'B', 'C', 'D', 'F') or null if invalid.
 */
function getGrade(score) {
  // Validate range
  if (score < 0 || score > 100) {
    return null;
  }

  // Determine grade based on scale
  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
}

function main() {
  // Read integer input from the user
  const score = readlineSync.questionInt('Enter student score (0-100): ');

  // Get grade letter or null for invalid input
  const grade = getGrade(score);

  if (grade === null) {
    console.log('Error: Score must be between 0 and 100.');
  } else {
    console.log(`Grade: ${grade}`);
  }
}

// Run the program
main();