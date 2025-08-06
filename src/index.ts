import readline from 'readline';
import { addTodo, deleteTodo, viewTodo } from './utils/manager';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function showMenu() {
   console.log('1. Add Todo');
   console.log('2. View Todos');
   console.log('3. Delete Todo');
   console.log('4. Exit');
}

function prompt() {
   showMenu();
   rl.question('Choose an option:', (option: string) => {
      switch (option) {
         case '1':
            addTodo();
            break;
         case '2':
            viewTodo();
            break;
         case '3':
            deleteTodo();
            break;
         case '4':
            rl.close();
            break;
         default:
            console.log('Invalid option. Please try again.');
            prompt();
      }
   });
}

function main() {
   console.log('Welcome to the Todo CLI!');
   prompt();
}

main();