import { Todo } from "./todo";
import fs from "fs";
import path from "path";

let todos: Todo[] = [];
let id: number = 1;
const FILE_PATH = path.join(__dirname, "..", "todos.json");

function loadTodosFromFile() {
   if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf-8");
      todos = JSON.parse(data) as Todo[];
      // Update nextId to avoid duplicates
      const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
      id = maxId + 1;


   }
}

function saveTodosToFile() {
   fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2), "utf-8");
}

export function init() {
   loadTodosFromFile();
}

export function addTodo(title: string): void {
   todos.push({ id: id++, title, done: false, createdOn: new Date() });
   saveTodosToFile();
}

export function viewTodo(): void {
   clearOldTodos();
   // console.log('Directory name', __dirname);
   console.log('Todos');
   console.log('ID', '\t', 'Status', '\t', 'Title', '\t', 'Created On', '\n');
   todos.forEach((todo) => {
      const createdOn = new Date(todo.createdOn);
      console.log(todo.id, '\t', todo.done ? 'done' : 'not done', '\t', todo.title, '\t', createdOn.getDate(), '\n');
   });
}

export function markDone(id: number): void {
   todos.forEach((todo) => {
      if (id === todo.id) {
         todo.done = true;
         saveTodosToFile();
      }
   })
}

export function resetTodos(): void {
   while (todos.length > 0) {
      todos.pop();
   }
   id = 1;
   saveTodosToFile();
}

function clearOldTodos(): void {
   todos.filter((todo) => {
      const createdOn = new Date(todo.createdOn);
      return createdOn.getDate() >= new Date().getDate();
   });
   saveTodosToFile();
}