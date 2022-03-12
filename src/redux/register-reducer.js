const SET_REGISTER_PENDING = 'SET_REGISTER_PENDING';
const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS';
const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR';

export function register(email, password, confirmPassword) {
    return dispatch => {
        dispatch(setRegisterPending(true));
        dispatch(setRegisterSuccess(false));
        dispatch(setRegisterError(null));

        callRegisterApi(email, password, confirmPassword, error => {
            dispatch(setRegisterPending(false));
            if (!error) {
                dispatch(setRegisterSuccess(true));
            } else {
                dispatch(setRegisterError(error));
            }
        });
    }
}

function setRegisterPending(isRegisterPending) {
    return {
        type: SET_REGISTER_PENDING,
        isRegisterPending
    };
}

function setRegisterSuccess(isRegisterSuccess) {
    return {
        type: SET_REGISTER_SUCCESS,
        isRegisterSuccess
    };
}

function setRegisterError(registerError) {
    return {
        type: SET_REGISTER_ERROR,
        registerError
    };
};

function callRegisterApi(email, password, confirmPassword, callback) {
    setTimeout(() => {
        if (password === confirmPassword && email != undefined) {
            const userToken = '123456789user';
            sessionStorage.setItem('auth-token', userToken);
            sessionStorage.setItem('email', email);
            return callback(null);
        }
        else if (email == undefined){
            return callback(new Error('Empty email input'));
        }
        else if (password !== confirmPassword){
            return callback(new Error('Invalid password confirmation'));
        }
    }, 1000);
};

export default function registerReducer(state = {
    isRegisterSuccess: false,
    isRegisterPending: false,
    registerError: null
}, action) {
    switch (action.type) {
        case SET_REGISTER_PENDING:
            return Object.assign({}, state, {
                isRegisterPending: action.isRegisterPending
            });

        case SET_REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isRegisterSuccess: action.isRegisterSuccess
            });

        case SET_REGISTER_ERROR:
            return Object.assign({}, state, {
                registerError: action.registerError
            });

        default:
            return state;
    }
};