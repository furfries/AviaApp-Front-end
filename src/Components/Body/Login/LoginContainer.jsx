import { connect } from 'react-redux';
import { login, updatePassword, updateLogin } from '../../../redux/auth-reducer';
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        loginText: state.authReducer.loginText,
        passText: state.authReducer.passText,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        updateLogin: (login) => dispatch(updateLogin(login)),
        updatePassword: (password) => dispatch(updatePassword(password)),
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;