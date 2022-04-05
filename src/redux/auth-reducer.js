import { authAPI } from "../api/api";

const LOGIN = 'LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED'
const UPDATE_LOGIN = 'UPDATE_LOGIN';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const REGISTER = 'REGISTER';
const REGISTER_FAILED = 'REGISTER_FAILED'
const UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD';
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    roles: [],
    emailText: '',
    passText: '',
    confirmPassText: '',
    user: {},
    errors: [],
    isAuth: false,
    isRegistered: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                email: action.email,
                roles: action.roles,
                isAuth: true,
            }
        }
        case LOGIN_FAILED: {
            if (action.email === '') {
                return {
                    ...state,
                    errors: action.errors.emailError
                }
            }
            if (action.password === '') {
                return {
                    ...state,
                    errors: action.errors.passError
                }
            }
            return {
                ...state,
                errors: action.errors
            }

        }
        case UPDATE_LOGIN: {
            return {
                ...state,
                emailText: action.email
            };

        }
        case UPDATE_PASSWORD: {
            return {
                ...state,
                passText: action.password
            };
        }
        case UPDATE_CONFIRM_PASSWORD: {
            return {
                ...state,
                confirmPassText: action.confirmPassword
            }
        }
        case REGISTER: {
            return {
                ...state,
                isRegistered: true
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                errors: action.errors,
            }
        }
        case IS_FETCHING: {
            return {
                ...state, 
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const login = (email, password, roles) => ({ type: LOGIN, email, password, roles });
export const loginFailed = (errors) => ({ type: LOGIN_FAILED, errors })
export const updateEmail = (email) => ({ type: UPDATE_LOGIN, email });
export const updatePassword = (password) => ({ type: UPDATE_PASSWORD, password });
export const updateConfirmPassword = (confirmPassword) => ({ type: UPDATE_CONFIRM_PASSWORD, confirmPassword })
export const register = (email, password, confirmPassword) => ({ type: REGISTER, email, password, confirmPassword})
export const registerFailed = (errors) => ({ type: REGISTER_FAILED, errors })
export const isFetching = (isFetching) => ({type: IS_FETCHING, isFetching})

export const loginThunk = (email, password) => (dispatch) => {
    dispatch(isFetching(true))
    authAPI.login(email, password).then(response => {
        if (response.status === 200) {
            sessionStorage.setItem('avia-app-user', response.data.token);
            sessionStorage.setItem('email', email);
            let roles = response.data.roles
            dispatch(login(email, password, roles));
            dispatch(isFetching(false))
        }
    })
        .catch(error => {
            if (error.response.status === 401) {
                let errors = error.response.data
                dispatch(loginFailed(errors))
                dispatch(isFetching(false))
            }
            if (error.response.status === 400) {
                let emailError = error.response.data.errors.Email
                let passError = error.response.data.errors.Password
                let errors = [emailError, passError]
                dispatch(loginFailed(errors))
                dispatch(isFetching(false))
            }
        })
}

export const registerThunk = (email, password, confirmPassword) => (dispatch) => {
    dispatch(isFetching(true))
    if (password === confirmPassword){
    authAPI.register(email, password).then(response => {
        if (response.status === 200) {
            dispatch(register(email, password))
            dispatch(isFetching(false))
        }
    })
        .catch(error => {
            if (error.response.data.errors) {
                let errors = (Object.values(error.response.data.errors))
                dispatch(registerFailed(errors))
                dispatch(isFetching(false))
            }
            else if (error.response.data.reasons) {
                let errors = error.response.data.reasons
                dispatch(registerFailed(errors))
                dispatch(isFetching(false))
            }
        })
    } else {
        let errors = 'Incorrect password confirmation'
        dispatch(registerFailed(errors))
        dispatch(isFetching(false))
    }
}

export default authReducer;