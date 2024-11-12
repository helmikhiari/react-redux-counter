

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../slices/counterReducer.js';
import authReducer from './../slices/authReducer.js';

const store = configureStore({
    reducer:{
    counter: counterReducer,
    auth:authReducer
}});

export default store;   