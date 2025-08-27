#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./utils/manager");
const guidelines_1 = require("./utils/guidelines");
const commander_1 = require("commander");
const program = new commander_1.Command();
(0, manager_1.init)();
program
    .name('todos')
    .description('A simple CLI to manage your todos')
    .version('3.0.0')
    .option('-a, --add <title>', 'Add a todo')
    .option('-v, --view', 'View all todos')
    .option('-m, --mark <id>', 'Mark a todo as done by id')
    .option('-r, --reset', 'Reset all todos')
    .option('-g, --guidelines', 'View guidelines for using the todo app');
program.parse();
const options = program.opts();
if (options.add) {
    (0, manager_1.addTodo)(options.add);
}
if (options.view) {
    (0, manager_1.viewTodo)();
}
if (options.mark) {
    (0, manager_1.markDone)(Number(options.mark));
}
if (options.reset) {
    (0, manager_1.resetTodos)();
}
if (options.guidelines) {
    (0, guidelines_1.guidelines)();
}
