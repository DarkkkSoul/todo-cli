import readline from 'readline';
import { addTodo, markDone, viewTodo } from './utils/manager';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function showMenu() {
   console.log('1. Add Todo');
   console.log('2. View Todos');
   console.log('3. Mark as Done');
   console.log('4. Exit');
}

function prompt(): void {
   showMenu();
   rl.question('Choose an option:', (option) => {
      switch (option.trim()) {
         case '1':
            rl.question('Enter title:', (title) => {
               addTodo(title.trim());
               prompt();
            });
            break;
         case '2':
            viewTodo();
            prompt();
            break;
         case '3':
            prompt();
            markDone();
            prompt();
            break;
         case '4':
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
   console.log('Welcome to the Todo CLI!');
   prompt();
}

main();