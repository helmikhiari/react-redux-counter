import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slices/cartSlice';

const CartProduct = ({data}) => {
    const dispatch=useDispatch();
    const handleDelete=()=>dispatch(removeFromCart(data.id));
  return (
    <div style={{ width: "30%", margin: 20 }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <h3>{data.productName}</h3>
      <p style={{ color: "red", fontSize: 12, fontWeight: "bold" }}>{data.price*data.quantity}</p>
    </div>

    <div
      style={{
        display: "flex",
        gap: 10,
        height: 20,
        justifyContent: "flex-end",
      }}
    >
     <p>{data.quantity}</p>
      <button
        style={{
          fontSize: 9,
          width: 80,
          backgroundColor: "red",
          color: "white",
        }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
);
};

export default CartProduct
