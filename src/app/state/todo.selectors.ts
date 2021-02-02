import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoAdapter, TodoState } from './todo.reducers';

const todoFeatureSelector = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(
  todoFeatureSelector,
  todoAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  todoFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  todoFeatureSelector,
  (state) => state.error
);
