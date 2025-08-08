"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.viewTodo = viewTodo;
exports.markDone = markDone;
exports.resetTodos = resetTodos;
exports.clearOldTodos = clearOldTodos;
let todos = [];
let id = 1;
function addTodo(title) {
    todos.push({ id: id++, title, done: false, createdOn: new Date() });
}
function viewTodo() {
    clearOldTodos();
    console.log('Todos');
    console.log('ID', '\t', 'Status', '\t', 'Title', '\t', 'Created On', '\n');
    todos.forEach((todo) => {
        console.log(todo.id, '\t', todo.done ? 'done' : 'not done', '\t', todo.title, '\t', todo.createdOn.getDate(), '\n');
    });
}
function markDone(id) {
    todos.forEach((todo) => {
        if (id === todo.id) {
            todo.done = true;
        }
    });
}
function resetTodos() {
    while (todos.length > 0) {
        todos.pop();
    }
    id = 1;
}
function clearOldTodos() {
    let newTodos = todos.filter((todo) => todo.createdOn.getDate() >= new Date().getDate());
    todos = newTodos;
}
