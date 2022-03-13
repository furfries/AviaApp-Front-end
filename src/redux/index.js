import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import registerReducer from './register-reducer'
import authReducer from './auth-reducer'

export default combineReducers({
    loginPage: loginReducer,
    registerPage: registerReducer,
    authReducer: authReducer,
})