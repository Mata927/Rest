import { useEffect, useRef, useState } from "react";

const ENDPOINT = "https://tc-todo-2022.herokuapp.com/todos";

function postNewTodo(title) {
  return fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({ title }),
  })
    .then((response) => response.json());
}





function AfegirTodo({ onTodoAdded }) {
  const titleRef = useRef();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const title = titleRef.current.value;
      titleRef.current.value = "";
      postNewTodo(title)
        .then((json) => onTodoAdded(json));
    }}>
      <input ref={titleRef} />
      <input type="submit" value="Afegir" />
    </form>

  );
}


function TodoItem({ todo, onUpdated }) {
  return (
    <li className={todo.completed ? "completed" : "pending"}
      onClick={() => {
        fetch(`${ENDPOINT}/${todo.id}`, {
          method: 'POST',
          body: JSON.stringify({ completed: !todo.completed })
        })
          .then((response) => response.json())
          .then((json) => onUpdated(json));

      }}>
      {todo.title}
    </li>
  );
}
export function getTodos() {
  return fetch(ENDPOINT)
    .then((response) => response.json());

}
export function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(ENDPOINT);
    getTodos().then(setTodos);

    const intervalID = setInterval(() => {
      getTodos().then(setTodos);
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="App">
      <h1>Llistat de Todos</h1>
      <button onClick={() => getTodos().then(setTodos)}>Refresh</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id}
            todo={todo} onUpdated={(updatedTodo) => setTodos(
              todos.map((currentTodo) => currentTodo.id === updatedTodo.id ? updatedTodo : currentTodo
              )
            )} />
        ))}
      </ul>
      <AfegirTodo onTodoAdded={(todo) => setTodos([...todos, todo])} />
    </div>
  );
}


