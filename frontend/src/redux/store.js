import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from './Reducers/authReducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  authReducer
})
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store
