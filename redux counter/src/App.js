import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './actions/counterActions';
import Pcounter from './Pcounter';
import { Login, LogOUT } from './actions/authActions';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={() => dispatch(Increment())}>+</button>
        <Pcounter />
        <button onClick={() => dispatch(Decrement())}>-</button> */}

        {isAuthenticated ? <div>
          <h1>Welcome Admin</h1>
          <button onClick={() => dispatch(LogOUT())}>LogOut</button>
        </div> :
          <button onClick={() => dispatch(Login())}>Login</button>
        }


      </header>
    </div>
  );
}

export default App;
