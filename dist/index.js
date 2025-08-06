"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function showMenu() {
    console.log('1. Add Todo');
    console.log('2. View Todos');
    console.log('3. Delete Todo');
    console.log('4. Exit');
}
function action() {
    showMenu();
    rl.question('Choose an option:', (option) => {
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
    action();
}
main();
