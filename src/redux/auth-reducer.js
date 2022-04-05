import { authAPI } from "../api/api";

const LOGIN = 'LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED'
const UPDATE_LOGIN = 'UPDATE_LOGIN';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const REGISTER = 'REGISTER';
const REGISTER_FAILED = 'REGISTER_FAILED'
const UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD';

let initialState = {
    roles: [],
    emailText: '',
    passText: '',
    confirmPassText: '',
    user: {},
    errors: [],
    isAuth: false,
    isRegistered: false,
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

        default:
            return state;
    }
}

export const login = (email, password, roles) => ({ type: LOGIN, email, password, roles });
export const loginFailed = (errors) => ({ type: LOGIN_FAILED, errors })
export const updateEmail = (email) => ({ type: UPDATE_LOGIN, email });
export const updatePassword = (password) => ({ type: UPDATE_PASSWORD, password });
export const updateConfirmPassword = (confirmPassword) => ({ type: UPDATE_CONFIRM_PASSWORD, confirmPassword })
export const register = (email, password) => ({ type: REGISTER, email, password})
export const registerFailed = (errors) => ({ type: REGISTER_FAILED, errors })

export const loginThunk = (email, password) => (dispatch) => {
    authAPI.login(email, password).then(response => {
        if (response.status === 200) {
            sessionStorage.setItem('avia-app-user', response.data.token);
            sessionStorage.setItem('email', email);
            let roles = response.data.roles
            dispatch(login(email, password, roles));
        }
    })
        .catch(error => {
            if (error.response.status === 401) {
                let errors = error.response.data
                dispatch(loginFailed(errors))
            }
            if (error.response.status === 400) {
                let emailError = error.response.data.errors.Email
                let passError = error.response.data.errors.Password
                let errors = [emailError, passError]
                dispatch(loginFailed(errors))
            }
        })
}

export const registerThunk = (email, password) => (dispatch) => {
    authAPI.register(email, password).then(response => {
        if (response.status === 200) {
            dispatch(register(email, password))
        }
    })
        .catch(error => {
            if (error.response.data.errors) {
                let errors = (Object.values(error.response.data.errors))
                dispatch(registerFailed(errors))
            }
            else if (error.response.data.reasons) {
                let errors = error.response.data.reasons
                dispatch(registerFailed(errors))
            }
        })
}


export default authReducer;