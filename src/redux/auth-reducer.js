import { authAPI } from "../api/api";

const LOGIN = 'LOGIN';
const LOGIN_FAILED = 'LOGIN_FAILED';
const UPDATE_LOGIN = 'UPDATE_LOGIN';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const REGISTER_FAILED = 'REGISTER_FAILED';
const UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD';
const IS_FETCHING = 'IS_FETCHING';
const LOGOUT = 'LOGOUT';
const CLEAR_FORM = 'CLEAR_FROM';
const IS_AUTH_CHECK = 'IS_AUTH_CHECK'

let initialState = {
    emailText: '',
    passText: '',
    confirmPassText: '',
    user: {},
    errors: [],
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                isAuth: true,
                user: {
                    email: action.email,
                    roles: action.roles,
                }
            }
        }
        case LOGIN_FAILED: {
            console.log(action.errors)
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
        case LOGOUT: {
            localStorage.clear();
            return {
                ...state,
                user: {},
                isAuth: false,
            }
        }
        case CLEAR_FORM: {
            return {
                ...state,
                emailText: '',
                passText: '',
                confirmPassText: '',
                errors: [],
            }
        }
        case IS_AUTH_CHECK: {
            if (localStorage.getItem('avia-app-user')) {
                return {
                    ...state,
                    isAuth: true,
                    user: {
                        email: JSON.parse(localStorage.getItem('avia-app-user')).email,
                        roles: JSON.parse(localStorage.getItem('avia-app-user')).roles
                    }
                }
            }
        }
        default:
            return state;
    }
}

export const login = (email, roles) => ({ type: LOGIN, email, roles });
export const loginFailed = (errors) => ({ type: LOGIN_FAILED, errors });
export const updateEmail = (email) => ({ type: UPDATE_LOGIN, email });
export const updatePassword = (password) => ({ type: UPDATE_PASSWORD, password });
export const updateConfirmPassword = (confirmPassword) => ({ type: UPDATE_CONFIRM_PASSWORD, confirmPassword });
export const registerFailed = (errors) => ({ type: REGISTER_FAILED, errors });
export const isFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const logout = (logout) => ({ type: LOGOUT, logout });
export const clearForm = (clear) => ({ type: CLEAR_FORM, clear });
export const isAuthCheck = (isAuthCheck) => ({ type: IS_AUTH_CHECK, isAuthCheck });

export const loginThunk = (email, password) => (dispatch) => {
    dispatch(isFetching(true))
    authAPI.login(email, password).then(response => {
        switch (response.status) {
            case 200: {
                let roles = response.data.roles
                let user = { token: response.data.token, email: email, roles: roles }
                localStorage.setItem('avia-app-user', JSON.stringify(user));
                dispatch(login(email, roles));
                dispatch(isFetching(false))
                break;
            }
            case 400: {
                let emailError = response.data.errors.Email
                let passError = response.data.errors.Password
                let errors = [emailError, passError]
                dispatch(loginFailed(errors))
                dispatch(isFetching(false))
                break;
            }
            case 401: {
                let errors = [response.data]
                dispatch(loginFailed(errors))
                dispatch(isFetching(false))
                break;
            }
            case 500: {
                let errors = ['Server error']
                dispatch(loginFailed(errors))
                dispatch(isFetching(false))
            }
        }
    })
}

export const registerThunk = (email, password, confirmPassword) => (dispatch) => {
    dispatch(isFetching(true))
    if (password === confirmPassword) {
        authAPI.register(email, password).then(response => {
            switch (response.status) {
                case 200: {
                    dispatch(loginThunk(email, password))
                    dispatch(isFetching(false))
                    break;
                }
                case 400: {
                    if (response.data.reasons) {
                        let errors = response.data.reasons
                        dispatch(registerFailed(errors))
                        dispatch(isFetching(false))
                    }
                    else if (response.data.errors.Email) {
                        let errors = (response.data.errors.Email.slice(0, 2))
                        errors.push(response.data.errors.Password)
                        dispatch(registerFailed(errors))
                        dispatch(isFetching(false))
                    }
                    else if (response.data.errors) {
                        let errors = (Object.values(response.data.errors))
                        dispatch(registerFailed(errors))
                        dispatch(isFetching(false))
                    }
                    break;
                }
                case 500: {
                    let errors = ['Server error']
                    dispatch(loginFailed(errors))
                    dispatch(isFetching(false))
                }
            }
        })
    }
    else {
        let errors = ['Incorrect password confirmation']
        dispatch(registerFailed(errors))
        dispatch(isFetching(false))
    }
}

export default authReducer;