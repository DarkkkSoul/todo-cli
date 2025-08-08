import readline from 'readline';
import { addTodo, init, markDone, resetTodos, viewTodo } from './utils/manager';
import { guidelines } from './utils/guidelines';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function showMenu() {
   console.log('\n');
   console.log('1. Add a Todo');
   console.log('2. View the Todos');
   console.log('3. Mark as Completed');
   console.log('4. Reset the Todos');
   console.log('5. Exit');
   console.log('\n');
}

function prompt(): void {
   guidelines();
   console.log('Please select an option from the menu:');
   console.log('------------------------------------------------');
   showMenu();
   rl.question('Choose an option: ', (option) => {
      switch (option.trim()) {
         case '1':
            rl.question('Enter title: ', (title) => {
               addTodo(title.trim());
               prompt();
            });
            break;
         case '2':
            viewTodo();
            prompt();
            break;
         case '3':
            viewTodo();
            rl.question('Enter ID of the Todo to be marked as Completed: ', (id) => {
               markDone(Number(id));
               prompt();
            });
            break;
         case '4':
            resetTodos();
            prompt();
            break;
         case '5':
            console.log('Exiting...');
            rl.close();
            break;
         default:
            console.log('Invalid option. Please try again.');
            prompt();
      }
   });
}

function main() {
   console.log('WELCOME to the TODO CLI!');
   console.log('This application allows you to manage your todos easily.');
   init();
   prompt();
}

main();