import {React, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';

const Register = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.isRegistered) {
            return navigate('/login', { replace: true })
        }
    })
    const onEmailChange = (e) => {
        props.updateEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        props.updatePassword(e.target.value)
    }
    const onConfirmPasswordChange = (e) => {
        props.updateConfirmPassword(e.target.value)
    }
    const submitForm = () => {
        props.registerThunk(props.emailText, props.passText)
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='flex-column'>
                <h1 className='text-center mb-5'>WELCOME! SIGN IN:</h1>
                <MDBInput className='mb-4'
                    type='email' id='form3Example3'
                    label='Email address'
                    onChange={onEmailChange}
                    value={props.emailText}
                />
                <MDBInput className='mb-4'
                    type='password'
                    id='form3Example4'
                    label='Password'
                    onChange={onPasswordChange}
                    value={props.passText}
                />
                <MDBInput className='mb-4'
                    type='password'
                    id='form3Example5'
                    label='Confirm password'
                    onChange={onConfirmPasswordChange}
                    value={props.confirmPassText}
                />
                <MDBBtn type='submit' className='mt-2' block onClick={submitForm}>
                    Register
                </MDBBtn>
                <div className='text-center text-danger mt-3'>
                    {props.errors} 
                </div>
                <div className='text-center mt-4'>
                    <p>
                        Already have an account? <NavLink to='/login'>Sign in</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Register;
