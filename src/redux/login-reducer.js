const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(email, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    };
};

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
};

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
};

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    };
};

function callLoginApi(email, password, callback) {
    let admin = {
        email: 'admin@gmail.com',
        password: 'admin'
    };
    let user = {
        email: 'user@gmail.com',
        password: 'user'
    };
    setTimeout(() => {
        if (email === admin.email && password === admin.password) {
            const adminToken = '123456789admin';
            sessionStorage.setItem('auth-token', adminToken);
            sessionStorage.setItem('email', admin.email);
            return callback(null);
        }
        else if (email === user.email && password === user.password) {
            const userToken = '123456789user';
            sessionStorage.setItem('auth-token', userToken);
            sessionStorage.setItem('email', user.email);
            return callback(null);
        }
        else {
            return callback(new Error('Invalid email or password'));
        }
    }, 1000);
};

export default function loginReducer(state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}, action) {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            });

        case SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });

        case SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.loginError
            });

        default:
            return state;
    };
};