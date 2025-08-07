"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.viewTodo = viewTodo;
exports.deleteTodo = deleteTodo;
let todos = [];
function addTodo(title) {
    todos.push({ title, done: false });
}
function viewTodo() {
    todos.forEach((todo) => {
        console.log(todo.title, '\n');
    });
}
function deleteTodo() {
    console.log('Deleting Todo');
}
