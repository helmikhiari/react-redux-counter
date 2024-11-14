import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleAddToCart = () =>
    dispatch(addToCart({ ...data, quantity: quantity }));
  return (
    <div
      style={{
        width: "80%",
        margin: 10,
        backgroundColor: "lightgoldenrodyellow",
        borderRadius: 20,
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <h3>{data.productName}</h3>
        <p style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>
          {data.price}$
        </p>
      </div>

      <div>
        <p style={{ fontSize: 10 }}>{data.description}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          height: 20,
          justifyContent: "flex-end",
        }}
      >
        <input
          type="number"
          style={{ width: 30 }}
          onChange={handleQuantityChange}
          value={quantity}
          min={1}
        />
        <button
          style={{
            fontSize: 9,
            width: 80,
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
