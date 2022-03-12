import { connect } from 'react-redux';
import { register } from '../../../redux/register-reducer';
import Register from './Register';

const mapStateToProps = (state) => {
    return {
        isRegisterPending: state.registerPage.isRegisterPending,
        isRegisterSuccess: state.registerPage.isRegisterSuccess,
        registerError: state.registerPage.registerError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, password, confirmPassword) => dispatch(register(email, password, confirmPassword))
    };
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;
