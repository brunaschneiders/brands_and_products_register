import React, { useState } from "react";

export default () => {
  const [produtos, setProdutos] = useState([
    "Iphone",
    "Maçã",
    "Calça",
    "Cadeira",
  ]);
  const [prod, setProd] = useState("");
  function verificaProd() {
    setProdutos([...produtos, prod]);
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Produtos</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto}>
              <td>{produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <label>
        Produto:
        <input value={prod} onChange={(e) => setProd(e.target.value)}></input>
      </label>
      <button onClick={verificaProd}>Adicionar Produto</button>
    </div>
  );
};
