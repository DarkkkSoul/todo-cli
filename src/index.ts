import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});


function getAge(): Promise<string> {
   return new Promise((resolve) => {
      rl.question('What is your age? ', (answer: string) => {
         age = answer;
         rl.close();
         resolve(age);
      });
   });
}

let age: string;

async function main() {
   age = await getAge();
   console.log(`Your age is: ${age}`);
};

main();