import { useState } from "react";

export function Filtres({ tots, completats, noCompletats }) {
  const filtres = ["Tots", "Completats", "No Completats"];
  const [selected, setSelected] = useState(filtres[0]);

  function canviarfiltre(clicat) {
    setSelected(clicat.target.value);
    filtrar(clicat.target.value);
  }

  function filtrar(clicat) {
    switch (clicat) {
      case "Tots":
        tots();
        break;
      case "Completats":
        completats();
        break;
      case "No Completats":
        noCompletats();
        break;
      default:
        break;
    }
  }

  return (
    <>
      <select
        value={selected}
        className="LlistaFiltrar"
        onChange={(e) => canviarfiltre(e)}
      >
        <option value={filtres[0]}>{filtres[0]}</option>
        <option value={filtres[1]}>{filtres[1]}</option>
        <option value={filtres[2]}>{filtres[2]}</option>
      </select>
    </>
  );
}