import readline from 'readline';
import { addTodo, init, markDone, resetTodos, viewTodo } from './utils/manager';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function showMenu() {
   console.log('1. Add Todo');
   console.log('2. View Todos');
   console.log('3. Mark as Done');
   console.log('4. Reset Todos');
   console.log('5. Exit');
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
            viewTodo();
            rl.question('Enter id of the Todo to be marked as Completed:', (id) => {
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
   console.log('Welcome to the Todo CLI!');
   init();
   prompt();
}

main();