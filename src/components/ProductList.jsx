import React, { useContext, useState } from "react";
import { ProductContest } from "../context/ProductContest";
export default function ProductList() {
  const { products, addProduct, remove } = useContext(ProductContest);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleAdd = () => {
    if (inputValue === "") {
      return;
    }
    addProduct(inputValue);
    setInputValue("");
  };
  return (
    <>
      <input
        placeholder="Write yours name"
        autoComplete="on"
        type="email"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleAdd}>
        Add new name
      </button>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product}
              <button onClick={() => remove(product)} type="button">Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
