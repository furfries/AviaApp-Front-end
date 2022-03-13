const LOGIN = 'LOGIN';
const UPDATE_LOGIN = 'UPDATE_LOGIN';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

let initialState = {
    users: [
        { email: 'admin@xx.xx', password: 'qwerty' },
        { email: 'user@xx.xx', password: 'qwerty' },
    ],
    loginText:'',
    passText:'',
    user: {},
    errors:[]
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            console.log('here')
            let mockedUser = state.users.find(x => x.email === action.email && x.password === action.password);
            if(mockedUser === null || mockedUser === undefined){
                console.log('Incorrect login or password')
                return{
                    ...state,
                    errors: ['Incorrect login or password'],
                }
            }
            let newUser = {
                email: mockedUser.email,
                token: 'test-token',
            }
            console.log(newUser);

            sessionStorage.setItem('avia-app-user', JSON.stringify(newUser));
            return{
                ...state,
                user: newUser
            };
        
        }
        case UPDATE_LOGIN: {
            console.log(action.login)
            return{
                ...state,
                loginText: action.login
            };
        
        }
        case UPDATE_PASSWORD: {
            return{
                ...state,
                passText: action.password
            };
        
        }
        default:
            return state;
    }
}

export const login = (email, password) => ({ type: LOGIN, email, password });
export const updateLogin = (login) => ({ type: UPDATE_LOGIN, login });
export const updatePassword = (password) => ({ type: UPDATE_PASSWORD, password });

export default authReducer;