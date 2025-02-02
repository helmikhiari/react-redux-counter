import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pcounter from './Pcounter';
import { decrement, increment } from './slices/counterReducer';
import { login, logout } from './slices/authReducer';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(increment())}>+</button>
        <Pcounter />
        <button onClick={() => dispatch(decrement())}>-</button>

        {isAuthenticated ? <div>
          <h1>Welcome Admin</h1>
          <button onClick={() => dispatch(logout())}>LogOut</button>
        </div> :
          <button onClick={() => dispatch(login())}>Login</button>
        }


      </header>
    </div>
  );
}

export default App;
