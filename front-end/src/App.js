import React from "react";
import Brands from "./components/apiIntegration/brands/brands";

import "./App.css";

function App() {
  return (
    <div className="div">
      <h1 style={{ textDecoration: "underline" }}>
        Cadastro de Marcas e Produtos
      </h1>
      <Brands></Brands>
    </div>
  );
}

export default App;
