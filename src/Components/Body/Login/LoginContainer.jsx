import { connect } from 'react-redux';
import { login, updatePassword, updateEmail } from '../../../redux/auth-reducer';
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        emailText: state.authReducer.emailText,
        passText: state.authReducer.passText,
        errors: state.authReducer.errors
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePassword: (password) => dispatch(updatePassword(password)),
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;