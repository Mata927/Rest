import { useEffect } from "react";
import { AfegirTodo } from "./AfegirTodo";
import { TodoList } from "./TodoList";
import {
  requestAddTodo,
  requestUpdateTodo,
  requestTodos,
  requestDeleteTodo,
  requestTodosCompletats,
  requestTodosNoCompletats,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "./selectors";
import { Filtres } from "./Filtres";

export function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalID = setInterval(() => loadTodos(), 60000);
    return () => clearInterval(intervalID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadTodos = () => dispatch(requestTodos());
  const loadTodosCompletats = () => dispatch(requestTodosCompletats());
  const loadTodosNoCompletats = () => dispatch(requestTodosNoCompletats());
  const onAddTodo = (todo) => dispatch(requestAddTodo(todo));
  const onTodoUpdated = (todo) => dispatch(requestUpdateTodo(todo));
  const deleteTodo = (todo) => dispatch(requestDeleteTodo(todo));

  return (
    <div className="App">
      <h1>Llistat de ToDos</h1>
      <div className="Container">
        <label>Filtrar per: </label>
        <div className="Top">
          <Filtres
            tots={loadTodos}
            completats={loadTodosCompletats}
            noCompletats={loadTodosNoCompletats}
          />
          <button className="Boton" onClick={loadTodos}>
            Refresh
          </button>
        </div>
        <AfegirTodo onAddTodo={onAddTodo} />
        <TodoList
          todos={todos}
          onTodoUpdated={onTodoUpdated}
          onDeleteTodo={deleteTodo}
          loadTodos={loadTodos}
        />
      </div>
    </div>
  );
}