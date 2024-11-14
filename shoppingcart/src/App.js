import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsList from './pages/productsList';
import Cart from './pages/cart';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import Init from './Init';


function App() {


    Init();
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<ProductsList />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
