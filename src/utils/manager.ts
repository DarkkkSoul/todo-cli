import { Todo } from "./todo";

let todos: Todo[] = [];

export function addTodo(title: string): void {
   todos.push({ title, done: false });
}

export function viewTodo(): void {
   todos.forEach((todo) => {
      console.log(todo.title, '\n');
   });
}

export function markDone(): void {
   console.log('Deleting Todo');
}