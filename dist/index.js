"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const manager_1 = require("./utils/manager");
const guidelines_1 = require("./utils/guidelines");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function showMenu() {
    console.log('------------------------------------------------');
    console.log('1. Add a Todo');
    console.log('2. View the Todos');
    console.log('3. Mark as Completed');
    console.log('4. Reset the Todos');
    console.log('5. Exit');
    console.log('------------------------------------------------');
}
function prompt() {
    showMenu();
    rl.question('Choose an option: ', (option) => {
        switch (option.trim()) {
            case '1':
                rl.question('Enter todo title: ', (title) => {
                    (0, manager_1.addTodo)(title.trim());
                    prompt();
                });
                break;
            case '2':
                (0, manager_1.viewTodo)();
                prompt();
                break;
            case '3':
                (0, manager_1.viewTodo)();
                rl.question('Enter ID of the Todo to be marked as Completed: ', (id) => {
                    (0, manager_1.markDone)(Number(id));
                    prompt();
                });
                break;
            case '4':
                (0, manager_1.resetTodos)();
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
    (0, guidelines_1.guidelines)();
    console.log('Please select an option from the menu:');
    (0, manager_1.init)();
    prompt();
}
main();
