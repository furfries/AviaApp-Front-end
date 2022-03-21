import { createStore, combineReducers, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer'


let reducers = combineReducers({
    authReducer: authReducer,
})

const store = createStore(reducers, {}, applyMiddleware(thunk,));
export default store;