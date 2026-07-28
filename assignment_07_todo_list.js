const readlineSync = require('readline-sync');

// Array to store the task descriptions
const tasks = [];

/**
 * Adds a new task to the array.
 */
function addTask() {
  const task = readlineSync.question('Enter task: ');
  if (task.trim() === '') {
    console.log('Task cannot be empty.');
    return;
  }
  tasks.push(task);
  console.log(`Task added: "${task}"`);
}

/**
 * Displays all tasks in the list with 1-based indexing.
 */
function viewTasks() {
  if (tasks.length === 0) {
    console.log('Your to-do list is empty!');
    return;
  }

  console.log('\nYour Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

/**
 * Prompts the user for a task number and removes it from the array.
 */
function deleteTask() {
  if (tasks.length === 0) {
    console.log('No tasks available to delete.');
    return;
  }

  viewTasks();
  const taskNum = readlineSync.questionInt('\nEnter task number to delete: ');

  // Validate the selected index (1-based user input)
  if (taskNum < 1 || taskNum > tasks.length) {
    console.log('Invalid task number.');
    return;
  }

  const removed = tasks.splice(taskNum - 1, 1);
  console.log(`Task "${removed[0]}" has been removed.`);
}

/**
 * Main function containing the interactive menu loop.
 */
function main() {
  let choice = 0;

  while (choice !== 4) {
    console.log('\n============================');
    console.log('     TO-DO LIST MENU');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');

    choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addTask();
        break;
      case 2:
        viewTasks();
        break;
      case 3:
        deleteTask();
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