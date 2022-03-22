const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

export async function getTodos() {
  return fetch(ENDPOINT).then((response) => response.json());
}

export async function getTodosCompletats() {
  return fetch(`${ENDPOINT}/?completed=true`).then((response) =>
    response.json()
  );
}

export async function getTodosNoCompletats() {
  return fetch(`${ENDPOINT}/?completed=false`).then((response) =>
    response.json()
  );
}

export async function postNewTodo(todo) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export async function postUpdateTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "POST",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export async function deleteTodo(todo) {
  return fetch(`${ENDPOINT}/${todo.id}`, {
    method: "DELETE",
  }).then((response) => response.json());
}