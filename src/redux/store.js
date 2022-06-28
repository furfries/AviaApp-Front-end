import { createStore, combineReducers, applyMiddleware, } from 'redux';
import thunkMiddleware from 'redux-thunk';
import adminReducer from './admin-reducer';
import authReducer from './auth-reducer'

let reducers = combineReducers({
    authReducer: authReducer,
    adminReducer: adminReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;