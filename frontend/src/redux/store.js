import { createStore, combineReducers } from 'redux';
import { authReducer } from './authReducer';


const rootReducer = combineReducers({ authReducer })

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
