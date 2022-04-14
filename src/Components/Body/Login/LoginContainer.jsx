import React from 'react';
import { connect } from 'react-redux';
import { loginThunk, updatePassword, updateEmail, clearForm } from '../../../redux/auth-reducer';
import Login from './Login'

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.clearForm();
    }
    render() {
        return <Login {...this.props} />
    }
}

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
        clearForm: () => dispatch(clearForm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

