"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.viewTodo = viewTodo;
exports.markDone = markDone;
let todos = [];
let id = 1;
function addTodo(title) {
    todos.push({ id: id++, title, done: false, createdOn: new Date() });
}
function viewTodo() {
    console.log('Todos');
    console.log('ID', '\t', 'Status', '\t', 'Title', '\t', 'Created On', '\n');
    todos.forEach((todo) => {
        console.log(todo.id, '\t', todo.done, '\t\t', todo.title, '\t', todo.createdOn, '\n');
    });
}
function markDone(id) {
    todos.forEach((todo) => {
        if (id === todo.id) {
            todo.done = true;
        }
    });
}
