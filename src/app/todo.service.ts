import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length,
      title: title,
      completed: false,
    };

    this.todos.push(newTodo);
  }

  updateTodo(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((val) => val.id !== id);
  }
}
