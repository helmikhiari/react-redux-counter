import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  if (cart.length == 0) return <h1>Cart is Empty</h1>;

  return (
    <div>
      {cart.map((pr_cart) => (
        <CartProduct data={pr_cart} key={pr_cart.id} />
      ))}
    </div>
  );
};

export default Cart;
