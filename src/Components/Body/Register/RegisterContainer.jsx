import React from 'react';
import { connect } from 'react-redux';
import { updatePassword, updateEmail, registerThunk, updateConfirmPassword, clearForm } from '../../../redux/auth-reducer';
import Register from './Register'

class RegisterContainer extends React.Component {
    componentDidMount() {
        this.props.clearForm();
    }
    render() {
        return <Register {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        emailText: state.authReducer.emailText,
        passText: state.authReducer.passText,
        confirmPassText: state.authReducer.confirmPassText,
        errors: state.authReducer.errors,
        isAuth: state.authReducer.isAuth,
        isFetching: state.authReducer.isFetching,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerThunk: (email, password, confirmPassword) => dispatch(registerThunk(email, password, confirmPassword)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePassword: (password) => dispatch(updatePassword(password)),
        updateConfirmPassword: (confirmPassword) => dispatch(updateConfirmPassword(confirmPassword)),
        clearForm: () => dispatch(clearForm()),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);