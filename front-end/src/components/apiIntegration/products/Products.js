import React, { useState, useEffect } from "react";
import api from "../../../api";

import { Products, ProductRegister } from "./styles";

export default ({ brandUid }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]);

  async function handleStoreProduct() {
    await api
      .post("/products", {
        brand_uid: brandUid,
        name,
        quantity,
      })
      .then((response) =>
        setProducts([...products, response.data.brand.products])
      )
      .catch((error) => console.log(error));
    setName("");
    setQuantity("");
  }

  useEffect(() => {
    api
      .get(`/brands/${brandUid}`)
      .then((response) => setProducts(response.data.brand.products))
      .catch((error) => console.log(error));
  }, [brandUid]);

  return (
    <Products>
      <ProductRegister>
        <h3 style={{ textDecoration: "underline" }}>
          Cadastrar um novo Produto
        </h3>
        <label style={{ marginBottom: "3%" }}>
          Nome:
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
        </label>
        <label style={{ marginBottom: "3%" }}>
          Quantidade:
          <br />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </label>
        <button onClick={handleStoreProduct}>Adicionar produto</button>
      </ProductRegister>
      <div style={{ width: "100%" }}>
        <table border="1" style={{ width: "80%", margin: "auto" }}>
          <thead>
            <tr style={{ fontWeight: "bold" }}>
              <td>Nome</td>
              <td>Quantidade</td>
            </tr>
          </thead>
          <tbody>
            {products.map((produto) => (
              <tr key={produto.uid}>
                <td>{produto.name}</td>
                <td>{produto.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Products>
  );
};
