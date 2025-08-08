"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
exports.addTodo = addTodo;
exports.viewTodo = viewTodo;
exports.markDone = markDone;
exports.resetTodos = resetTodos;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let todos = [];
let id = 1;
const FILE_PATH = path_1.default.join(__dirname, "..", "todos.json");
function loadTodosFromFile() {
    if (fs_1.default.existsSync(FILE_PATH)) {
        const data = fs_1.default.readFileSync(FILE_PATH, "utf-8");
        todos = JSON.parse(data);
        const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
        id = maxId + 1;
    }
}
function saveTodosToFile() {
    fs_1.default.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), "utf-8");
}
function init() {
    loadTodosFromFile();
}
function addTodo(title) {
    todos.push({ id: id++, title, done: false, createdOn: new Date() });
    saveTodosToFile();
}
function viewTodo() {
    clearOldTodos();
    console.log('Todos');
    console.log('ID', '\t', 'Status', '\t', 'Title', '\t', 'Created On', '\n');
    todos.forEach((todo) => {
        const createdOn = new Date(todo.createdOn);
        console.log(todo.id, '\t', todo.done ? 'done' : 'not done', '\t', todo.title, '\t', createdOn.getDate(), '\n');
    });
}
function markDone(id) {
    todos.forEach((todo) => {
        if (id === todo.id) {
            todo.done = true;
            saveTodosToFile();
        }
    });
}
function resetTodos() {
    while (todos.length > 0) {
        todos.pop();
    }
    id = 1;
    saveTodosToFile();
}
function clearOldTodos() {
    todos.filter((todo) => {
        const createdOn = new Date(todo.createdOn);
        return createdOn.getDate() >= new Date().getDate();
    });
    saveTodosToFile();
}
