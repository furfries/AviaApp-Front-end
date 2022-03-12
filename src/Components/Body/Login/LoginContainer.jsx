import { connect } from 'react-redux';
import { login } from '../../../redux/login-reducer';
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.loginPage.isLoginPending,
        isLoginSuccess: state.loginPage.isLoginSuccess,
        loginError: state.loginPage.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;