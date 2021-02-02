import { Action } from '@ngrx/store';
import { Todo } from '../app.component';

export enum TodoActionTypes {
  GET_TODO = '[GET TODO]',
  GET_TODO_SUCCESS = '[GET_TODO] SUCCESS',
  GET_TODO_FAILURE = '[GET_TODO] FAILURE',

  ADD_TODO = '[ADD TODO]',
  ADD_TODO_SUCCESS = '[ADD_TODO] SUCCESS',
  ADD_TODO_FAILURE = '[ADD_TODO] FAILURE',

  UPDATE_TODO = '[UPDATE TODO]',
  UPDATE_TODO_SUCCESS = '[UPDATE_TODO] SUCCESS',
  UPDATE_TODO_FAILURE = '[UPDATE_TODO] FAILURE',

  DELETE_TODO = '[DELETE TODO]',
  DELETE_TODO_SUCCESS = '[DELETE_TODO] SUCCESS',
  DELETE_TODO_FAILURE = '[DELETE_TODO] FAILURE',
}

export class GetTodos implements Action {
  readonly type = TodoActionTypes.GET_TODO;
}
export class GetTodosSuccess implements Action {
  readonly type = TodoActionTypes.GET_TODO_SUCCESS;
  constructor(
    public payload: {
      todos: Todo[];
    }
  ) {}
}
export class GetTodosFailure implements Action {
  readonly type = TodoActionTypes.GET_TODO_FAILURE;
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;
  constructor(
    public payload: {
      todoTitle: string;
    }
  ) {}
}
export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.ADD_TODO_SUCCESS;
}
export class AddTodoFailure implements Action {
  readonly type = TodoActionTypes.ADD_TODO_FAILURE;
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO;
  constructor(
    public payload: {
      todoId: number;
    }
  ) {}
}
export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_SUCCESS;
}
export class UpdateTodoFailure implements Action {
  readonly type = TodoActionTypes.UPDATE_TODO_FAILURE;
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DELETE_TODO;
  constructor(
    public payload: {
      todoId: number;
    }
  ) {}
}
export class DeleteTodoSuccess implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_SUCCESS;
}
export class DeleteTodoFailure implements Action {
  readonly type = TodoActionTypes.DELETE_TODO_FAILURE;
}

export type TodoActions =
  | AddTodo
  | AddTodoSuccess
  | AddTodoFailure
  | GetTodos
  | GetTodosSuccess
  | GetTodosFailure
  | UpdateTodo
  | UpdateTodoSuccess
  | UpdateTodoFailure
  | DeleteTodo
  | DeleteTodoSuccess
  | DeleteTodoFailure;
