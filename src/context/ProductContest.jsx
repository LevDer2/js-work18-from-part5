import { createContext, useState } from "react";

export const ProductContest = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    "Lev",
    "Nazar",
    "Vlad Draga",
    "Rostyslav",
    "David",
    "Vlad",
  ]);
  const addProduct = (name) => {
    setProducts((prevState) => [...prevState, name]);
  };

  const remove = (product) => {
    setProducts((prevState) => prevState.filter((name) => name !== product))
  }
  return (
    <ProductContest.Provider value={{ products, addProduct, remove}}>
      {children}
    </ProductContest.Provider>
  );
};
