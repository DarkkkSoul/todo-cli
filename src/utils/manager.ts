import { Todo } from "./todo";

let todos: Todo[] = [];

let id: number = 1;

export function addTodo(title: string): void {
   todos.push({ id: id++, title, done: false, createdOn: new Date() });
}

export function viewTodo(): void {
   clearOldTodos();
   console.log('Todos');
   console.log('ID', '\t', 'Status', '\t', 'Title', '\t', 'Created On', '\n');
   todos.forEach((todo) => {
      console.log(todo.id, '\t', todo.done ? 'done' : 'not done', '\t', todo.title, '\t', todo.createdOn.getDate(), '\n');
   });
}

export function markDone(id: number): void {
   todos.forEach((todo) => {
      if (id === todo.id) {
         todo.done = true;
      }
   })
}

export function resetTodos(): void {
   while (todos.length > 0) {
      todos.pop();
   }
   id = 1;
}

function clearOldTodos(): void {
   let newTodos: Todo[] = todos.filter((todo) => todo.createdOn.getDate() >= new Date().getDate());
   todos = newTodos;
}