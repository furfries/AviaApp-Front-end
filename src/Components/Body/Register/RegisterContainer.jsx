import { connect } from 'react-redux';
import { updatePassword, updateEmail, registerThunk, updateConfirmPassword } from '../../../redux/auth-reducer';
import Register from './Register'

const mapStateToProps = (state) => {
    return {
        emailText: state.authReducer.emailText,
        passText: state.authReducer.passText,
        confirmPassText: state.authReducer.confirmPassText,
        errors: state.authReducer.errors,
        isRegistered: state.authReducer.isRegistered,
        isFetching: state.authReducer.isFetching,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerThunk: (email, password, confirmPassword) => dispatch(registerThunk(email, password, confirmPassword)),
        updateEmail: (email) => dispatch(updateEmail(email)),
        updatePassword: (password) => dispatch(updatePassword(password)),
        updateConfirmPassword: (confirmPassword) => dispatch(updateConfirmPassword(confirmPassword)),

    };
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;