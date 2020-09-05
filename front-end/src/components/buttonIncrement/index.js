import React, { useState } from "react";

export default (parametros) => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <label>
        Contador:
        <input type="number" value={contador} readOnly></input>
        <button onClick={(e) => setContador(contador + 1)}>Incrementar</button>
      </label>
    </div>
  );
};
