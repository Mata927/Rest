import { useRef, useState } from "react";

export function ModificarTodo({
  todo,
  onTodoUpdated,
  mostrarForm,
  setMostrarForm,
}) {
  const titleRef = useRef();
  const detailsRef = useRef();
  const [titol, setTitol] = useState(todo.title);
  const [detalls, setTDetalls] = useState(todo.details);

  return (
    <div
      className="FormulariModificar-TODO"
      style={{ display: mostrarForm ? "block" : "none" }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = titleRef.current.value;
          const details = detailsRef.current.value;
          titleRef.current.value = todo.title;
          detailsRef.current.value = todo.details;
          onTodoUpdated({ ...todo, title, details });
          setMostrarForm((s) => !s);
        }}
      >
        {"Títol: "}
        <input
          className="InputForm"
          ref={titleRef}
          value={titol}
          onChange={(e) => setTitol(e.target.value)}
        />
        <br />
        {"Detalls: "}
        <input
          className="InputForm"
          ref={detailsRef}
          value={detalls}
          onChange={(e) => setTDetalls(e.target.value)}
        />
        <br />
        <input className="BotonForm" type="submit" value="Modificar" />
      </form>
    </div>
  );
}