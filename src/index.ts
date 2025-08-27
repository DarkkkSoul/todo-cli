#!/usr/bin/env node
import { addTodo, init, markDone, resetTodos, viewTodo } from './utils/manager';
import { guidelines } from './utils/guidelines';
import { Command } from 'commander';

const program = new Command();

init();

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
   addTodo(options.add);
}

if (options.view) {
   viewTodo();
}

if (options.mark) {
   markDone(Number(options.mark));
}

if (options.reset) {
   resetTodos();
}

if (options.guidelines) {
   guidelines();
}