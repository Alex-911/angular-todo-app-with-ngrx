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

  async addTodo(title: string): Promise<void> {
    const newTodo: Todo = {
      id: this.todos.length,
      title: title,
      completed: false,
    };

    this.todos = [...this.todos, newTodo];
  }

  async updateTodo(id: number): Promise<void> {
    this.todos = this.todos.map((val) => {
      if (val.id === id) {
        return { ...val, completed: !val.completed };
      } else {
        return val;
      }
    });
  }

  async deleteTodo(id: number): Promise<void> {
    this.todos = this.todos.filter((val) => val.id !== id);
  }
}
