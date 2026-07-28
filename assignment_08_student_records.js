const readlineSync = require('readline-sync');

// Array to store all student objects
const students = [];

/**
 * Calculates the average score for a student's scores array.
 * @param {number[]} scores - Array of numerical scores.
 * @returns {number} Average score or 0 if empty.
 */
function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

/**
 * Feature 1: Prompts user for student details and adds new student object.
 */
function addStudent() {
  const name = readlineSync.question('Student name: ');
  const id = readlineSync.questionInt('Student ID: ');

  // Check if student ID already exists
  const existingStudent = students.find(s => s.id === id);
  if (existingStudent) {
    console.log(`Error: A student with ID ${id} already exists.`);
    return;
  }

  const numScores = readlineSync.questionInt('How many scores? ');
  if (numScores <= 0) {
    console.log('Error: Number of scores must be greater than 0.');
    return;
  }

  const scores = [];
  for (let i = 1; i <= numScores; i++) {
    const score = readlineSync.questionInt(`Enter score ${i}: `);
    scores.push(score);
  }

  // Create and add student object
  const student = { name, id, scores };
  students.push(student);
  console.log(`Student "${name}" added successfully.`);
}

/**
 * Feature 2: Displays all student records in a formatted list/table.
 */
function displayAllStudents() {
  if (students.length === 0) {
    console.log('\nNo student records available.');
    return;
  }

  console.log('\n===================================================================');
  console.log('ALL STUDENT RECORDS');
  console.log('===================================================================');

  students.forEach((s) => {
    const avg = calculateAverage(s.scores).toFixed(2);
    console.log(`Name:    ${s.name}`);
    console.log(`ID:      ${s.id}`);
    console.log(`Scores:  [${s.scores.join(', ')}]`);
    console.log(`Average: ${avg}`);
    console.log('-------------------------------------------------------------------');
  });
}

/**
 * Feature 3: Finds student by ID and prints their average score.
 */
function calculateStudentAverage() {
  if (students.length === 0) {
    console.log('\nNo student records available.');
    return;
  }

  const searchId = readlineSync.questionInt('Enter student ID: ');
  const student = students.find(s => s.id === searchId);

  if (!student) {
    console.log(`Error: Student with ID ${searchId} not found.`);
    return;
  }

  const avg = calculateAverage(student.scores).toFixed(2);
  console.log(`${student.name}'s average score: ${avg}`);
}

/**
 * Main application loop.
 */
function main() {
  let choice = 0;

  while (choice !== 4) {
    console.log('\n================================');
    console.log('   STUDENT RECORD SYSTEM MENU');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');

    choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addStudent();
        break;
      case 2:
        displayAllStudents();
        break;
      case 3:
        calculateStudentAverage();
        break;
      case 4:
        console.log('Goodbye!');
        break;
      default:
        console.log('Invalid choice. Please enter a number between 1 and 4.');
    }
  }
}

// Run the program
main();
