import React from 'react';
import { connect } from 'react-redux';
import { loginThunk, updatePassword, updateEmail} from '../../../redux/auth-reducer';
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        emailText: state.authReducer.emailText,
        passText: state.authReducer.passText,
        errors: state.authReducer.errors,
        roles: state.authReducer.roles,
        isAuth: state.authReducer.isAuth,
        isFetching: state.authReducer.isFetching,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePassword: (password) => dispatch(updatePassword(password)),
        loginThunk: (email, password) => dispatch(loginThunk(email, password)),
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer