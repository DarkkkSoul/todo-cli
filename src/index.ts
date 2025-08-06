import readline from 'readline';

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
            console.log('Added Todo...');
            showMenu();
            break;
         case '2':
            console.log('Viewing Todos...');
            showMenu();
            break;
         case '3':
            console.log('Deleted Todo...');
            showMenu();
            break;
         case '4':
            console.log('Exiting...');
            rl.close();
            return;
         default:
            console.log('Invalid option. Please try again.');
            action();
      }
   });
}

function main() {
   console.log('Welcome to the Todo CLI!');
   prompt();
}

main();