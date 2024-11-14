import React from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const ProductsList = () => {
  const { products } = useSelector((state) => state.products);
  if (products.length == 0) return <h1>Loading...</h1>;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100%    ",
        gap: 0,
        boxSizing: "border-box",
        justifyItems: "center",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductsList;
