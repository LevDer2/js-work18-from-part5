import React from "react";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./context/ProductContest";

export default function App() {
  return (
    <>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </>
  );
}
