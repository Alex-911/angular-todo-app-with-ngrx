import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../todo.service';
import {
  AddTodo,
  AddTodoFailure,
  AddTodoSuccess,
  DeleteTodo,
  DeleteTodoFailure,
  DeleteTodoSuccess,
  GetTodos,
  GetTodosFailure,
  GetTodosSuccess,
  TodoActionTypes,
  UpdateTodo,
  UpdateTodoFailure,
  UpdateTodoSuccess,
} from './todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  constructor(private todoService: TodoService, private actions: Actions) {}

  public getTodos = createEffect(() => {
    return this.actions.pipe(
      ofType<GetTodos>(TodoActionTypes.GET_TODO),
      mergeMap(() => {
        return this.todoService.getTodos().pipe(
          map((todos) => new GetTodosSuccess({ todos })),
          catchError(() => of(new GetTodosFailure()))
        );
      })
    );
  });

  public addTodo = createEffect(() => {
    return this.actions.pipe(
      ofType<AddTodo>(TodoActionTypes.ADD_TODO),
      mergeMap(async (action) => {
        return this.todoService
          .addTodo(action.payload.todoTitle)
          .then(() => new AddTodoSuccess())
          .catch(() => new AddTodoFailure());
      })
    );
  });

  public updateTodo = createEffect(() => {
    return this.actions.pipe(
      ofType<UpdateTodo>(TodoActionTypes.UPDATE_TODO),
      mergeMap(async (action) => {
        return this.todoService
          .updateTodo(action.payload.todoId)
          .then(() => new UpdateTodoSuccess())
          .catch(() => new UpdateTodoFailure());
      })
    );
  });

  public deleteTodo = createEffect(() => {
    return this.actions.pipe(
      ofType<DeleteTodo>(TodoActionTypes.DELETE_TODO),
      mergeMap(async (action) => {
        return this.todoService
          .deleteTodo(action.payload.todoId)
          .then(() => new DeleteTodoSuccess())
          .catch(() => new DeleteTodoFailure());
      })
    );
  });
}
