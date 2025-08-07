import { Todo } from "./todo";

let todos: Todo[] = [];

let id: number = 1;

export function addTodo(title: string): void {
   todos.push({ id: id++, title, done: false, createdOn: new Date() });
}

export function viewTodo(): void {
   console.log('Todos');
   console.log('ID', '\t', 'Status', '\t', 'Title', '\t', 'Created On', '\n');
   todos.forEach((todo) => {
      console.log(todo.id, '\t', todo.done, '\t\t', todo.title, '\t', todo.createdOn, '\n');
   });
}

export function markDone(id: number): void {
   todos.forEach((todo) => {
      if (id === todo.id) {
         todo.done = true;
      }
   })
}