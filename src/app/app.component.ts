import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './todo.service';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  add() {
    if (this.todoForm.valid) {
      const title: string = this.todoForm.get('title').value as string;

      this.todoService.addTodo(title);

      this.todoForm.reset();
    }
  }

  update(todo: Todo) {
    this.todoService.updateTodo(todo.id);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
}
