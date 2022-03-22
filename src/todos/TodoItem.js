import { useState } from "react";
import { ModificarTodo } from "./ModificarTodo";

export function TodoItem({ todo, onDeleteTodo, onTodoUpdated, loadTodos }) {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <>
      <div className="Item-TODO">
        <li
          className={todo.completed ? "completed" : "pending"}
          onClick={() => {
            onTodoUpdated({ ...todo, completed: !todo.completed });
          }}
        >
          <label className="Titol-TODO">{todo.title}</label>
          <br />
          <label className="Detalls-TODO">{todo.details}</label>
        </li>
        <span
          className="Modificar-TODO"
          onClick={() => setMostrarForm((s) => !s)}
        >
          {"✏"}
        </span>
        <span
          className="Eliminar-TODO"
          onClick={() => onDeleteTodo({ ...todo, id: todo.id })}
        >
          {"🗑"}
        </span>
        <ModificarTodo
          todo={todo}
          onTodoUpdated={onTodoUpdated}
          mostrarForm={mostrarForm}
          setMostrarForm={setMostrarForm}
        />
      </div>
    </>
  );
}