const LOGIN = 'LOGIN';
const UPDATE_LOGIN = 'UPDATE_LOGIN';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
const REGISTER = 'REGISTER';
const UPDATE_CONFIRM_PASSWORD = 'UPDATE_CONFIRM_PASSWORD';

let initialState = {
    users: [
        { email: 'admin@xx.xx', password: 'qwerty' },
        { email: 'user@xx.xx', password: 'qwerty' },
    ],
    emailText: '',
    passText: '',
    confirmPassText: '',
    user: {},
    errors: []
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            let mockedUser = state.users.find(x => x.email === action.email && x.password === action.password);
            if (mockedUser === null || mockedUser === undefined) {
                return {
                    ...state,
                    errors: ['Incorrect login or password'],
                }
            }
            let newUser = {
                email: mockedUser.email,
                token: 'test-token',
            }
            sessionStorage.setItem('avia-app-user', JSON.stringify(newUser));
            return {
                ...state,
                user: newUser,
            };
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
            if (action.password == '' || action.email == '') {
                return {
                    ...state,
                    errors: ['All fields must be filled in'],
                }
            }
            if (action.password !== action.confirmPassword) {
                return {
                    ...state,
                    errors: ['Incorrect password confirmation'],
                }
            }
            let newUser = {
                email: action.email,
                token: 'test-token',
            }
            sessionStorage.setItem('avia-app-user', JSON.stringify(newUser));
            return {
                ...state,
                user: newUser
            };
        }
        default:
            return state;
    }
}

export const login = (email, password) => ({ type: LOGIN, email, password });
export const updateEmail = (email) => ({ type: UPDATE_LOGIN, email });
export const updatePassword = (password) => ({ type: UPDATE_PASSWORD, password });
export const updateConfirmPassword = (confirmPassword) => ({ type: UPDATE_CONFIRM_PASSWORD, confirmPassword })
export const register = (email, password, confirmPassword) => ({ type: REGISTER, email, password, confirmPassword })

export default authReducer;