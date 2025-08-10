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
const os_1 = __importDefault(require("os"));
let todos = [];
let id = 1;
const CONFIG_DIR = path_1.default.join(os_1.default.homedir(), ".my-todo-cli");
const FILE_PATH = path_1.default.join(CONFIG_DIR, "todos.json");
if (!fs_1.default.existsSync(CONFIG_DIR)) {
    fs_1.default.mkdirSync(CONFIG_DIR);
}
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
    console.log('\nSUCCESSFULLY ADDED A NEW TODO!');
    saveTodosToFile();
}
function viewTodo() {
    clearOldTodos();
    if (todos.length === 0) {
        console.log('NO TODOS FOUND!');
        return;
    }
    else {
        console.log('YOUR TODOS:');
        console.log('ID', '\t', 'Status', '\t', 'Title', '\n');
        todos.forEach((todo) => {
            console.log(todo.id, '\t', todo.done ? '✔' : ' ', '\t\t', todo.title, '\n');
        });
    }
}
function markDone(id) {
    todos.forEach((todo) => {
        if (id === todo.id) {
            todo.done = true;
            saveTodosToFile();
        }
    });
    console.log('MARKING TODO AS DONE!');
}
function resetTodos() {
    while (todos.length > 0) {
        todos.pop();
    }
    id = 1;
    console.log('RESETING TODOS!');
    saveTodosToFile();
}
function clearOldTodos() {
    todos.filter((todo) => {
        const createdOn = new Date(todo.createdOn);
        return createdOn.getDate() >= new Date().getDate();
    });
    console.log('CLEARING OLD TODOS!');
    saveTodosToFile();
}
