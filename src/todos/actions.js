export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export const REQUEST_TODOS_COMPLETATS = "todos/REQUEST_TODOS_COMPLETATS";
export function requestTodosCompletats() {
  return { type: REQUEST_TODOS_COMPLETATS };
}

export const REQUEST_TODOS_NO_COMPLETATS = "todos/REQUEST_TODOS_NO_COMPLETATS";
export function requestTodosNoCompletats() {
  return { type: REQUEST_TODOS_NO_COMPLETATS };
}

export const REQUEST_ADD_TODO = "todos/REQUEST_ADD_TODO";
export function requestAddTodo(todo) {
  return { type: REQUEST_ADD_TODO, todo };
}

export const REQUEST_UPDATE_TODO = "todos/REQUEST_UPDATE_TODO";
export function requestUpdateTodo(todo) {
  return { type: REQUEST_UPDATE_TODO, todo };
}

export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}

export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}
export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(todos) {
  return { type: REPLACE_TODOS, todos };
}

export const DELETE_TODO = "todos/DELETE_TODO";
export function requestDeleteTodo(todo) {
  return { type: DELETE_TODO, todo };
}