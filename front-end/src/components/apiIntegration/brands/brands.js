import React, { useState, useEffect } from "react";
import api from "../../../api";

import Products from "../products/Products";

import {
  Container,
  BrandRegister,
  BrandList,
  BrandName,
  BrandItem,
} from "./styles";

export default () => {
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([]);

  async function handleStoreBrand() {
    await api
      .post("/brands", {
        name,
      })
      .then((response) => setBrands([...brands, response.data.brand]))
      .catch((error) => console.log(error));
    setName("");
  }

  useEffect(() => {
    api
      .get("/brands")
      .then((response) => setBrands(response.data.brands))
      .catch((error) => console.log(error));
  }, []);
  // o array é a dependencia que fará o useEffect ser ativado quando ela for alterada. Por exemplo, se a dependencia fosse [name], o useEffect seria ativado com a renderização da pagina
  // e sempre que o nome fosse alterado. Sem dependências, o useEffect é ativado quando a página é renderizada

  return (
    <>
      <Container>
        <BrandRegister>
          <h2 style={{ textDecoration: "underline" }}>
            Cadastrar uma nova marca
          </h2>
          <div>
            <label>
              Nome:
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <button onClick={handleStoreBrand}>Cadastrar Marca</button>
          </div>
        </BrandRegister>

        <BrandList>
          <h2 style={{ textDecoration: "underline" }}>Marcas</h2>
          {brands.map((brand) => (
            <BrandItem key={brand.uid}>
              <BrandName>Produtos da {brand.name}</BrandName>
              <Products brandUid={brand.uid}></Products>
            </BrandItem>
          ))}
        </BrandList>
      </Container>
    </>
  );
};
