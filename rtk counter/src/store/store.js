import {createStore} from 'redux'
import counterReducer from '../reducers/counterReducer'
import rootReducer from '../reducers/rootReducer';

const store=createStore(rootReducer);

export default store;   