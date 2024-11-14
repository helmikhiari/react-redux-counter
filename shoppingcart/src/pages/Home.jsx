import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To My Store</h1>
        <button onClick={() => navigate("/products")}>
          See Available Products
        </button>
        <button onClick={() => navigate("/cart")}>My Cart</button>
      </header>
    </div>
  );
};

export default Home;
