import React from "react";
import Products from "./Products";

const Store = ({ products, addProduct }) => {
  return (
    <div>
      <h1>Tienda</h1>
      <Products products={products} addProduct={addProduct}></Products>
    </div>
  );
};

export default Store;
