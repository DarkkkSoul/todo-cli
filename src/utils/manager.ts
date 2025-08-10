import { Todo } from "./todo";
import fs from "fs";
import path from "path";
import os from "os";


let todos: Todo[] = [];
let id: number = 1;
const CONFIG_DIR = path.join(os.homedir(), ".my-todo-cli");
const FILE_PATH = path.join(CONFIG_DIR, "todos.json");

if (!fs.existsSync(CONFIG_DIR)) {
   fs.mkdirSync(CONFIG_DIR);
}

function loadTodosFromFile(): void {
   if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf-8");
      todos = JSON.parse(data) as Todo[];
      const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
      id = maxId + 1;
   }
}

function saveTodosToFile(): void {
   fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), "utf-8");
}

export function init(): void {
   loadTodosFromFile();
}

export function addTodo(title: string): void {
   todos.push({ id: id++, title, done: false, createdOn: new Date() });
   console.log('\nSUCCESSFULLY ADDED A NEW TODO!');
   saveTodosToFile();
}

export function viewTodo(): void {
   clearOldTodos();
   if (todos.length === 0) {
      console.log('NO TODOS FOUND!');
      return;
   } else {
      console.log('YOUR TODOS:');
      console.log('ID', '\t', 'Status', '\t', 'Title', '\n');
      todos.forEach((todo) => {
         console.log(todo.id, '\t', todo.done ? '✔' : ' ', '\t\t', todo.title, '\n');
      });
   }
}

export function markDone(id: number): void {
   todos.forEach((todo) => {
      if (id === todo.id) {
         todo.done = true;
         saveTodosToFile();
      }
   });
   console.log('MARKING TODO AS DONE!');
}

export function resetTodos(): void {
   while (todos.length > 0) {
      todos.pop();
   }
   id = 1;
   console.log('RESETING TODOS!');
   saveTodosToFile();
}

function clearOldTodos(): void {
   const now = Date.now();
   const cutoff = now - 24 * 60 * 60 * 1000;
   todos = todos.filter((todo) => {
      const createdOn = new Date(todo.createdOn).getTime();
      return createdOn >= cutoff;
   });
   console.log('CLEARING OLD TODOS!');
   saveTodosToFile();
}
