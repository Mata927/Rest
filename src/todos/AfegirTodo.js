import { useRef } from "react";

export function AfegirTodo({ onAddTodo }) {
  const titleRef = useRef();
  const detailsRef = useRef();

  return (
    <div className="FormulariAfegir-TODO">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = titleRef.current.value;
          const details = detailsRef.current.value;
          titleRef.current.value = "";
          detailsRef.current.value = "";
          onAddTodo({ title, details });
        }}
      >
        {"Títol: "}
        <input className="InputForm" ref={titleRef} />
        <br />
        {"Detalls: "}
        <input className="InputForm" ref={detailsRef} />
        <br />
        <input className="BotonForm" type="submit" value="Afegir" />
      </form>
    </div>
  );
}