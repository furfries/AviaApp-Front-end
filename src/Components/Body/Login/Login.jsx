import {React, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';

const Login = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem('avia-app-user')) {
            return navigate('/main', { replace: true })
         }
    })
    const onEmailChange = (e) => {
        props.updateEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        props.updatePassword(e.target.value)
    }
    const submitForm = () => {
        props.loginThunk(props.emailText, props.passText);
 

    }


    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='flex-column'>
                <h1>WELCOME! SIGN IN:</h1>
                <MDBInput className='mb-4 mt-5'
                    type='email'
                    id='form1Example1' label='Email address'
                    onChange={onEmailChange}
                    value={props.emailText}
                />
                <MDBInput className='mb-4 d-flex justify-content-center'
                    type='password'
                    id='form1Example2' label='Password'
                    onChange={onPasswordChange}
                    value={props.passText}
                />
                <MDBBtn type='submit' block className='mt-2' onClick={submitForm}>
                    Sign in
                </MDBBtn>
                <div className='text-center text-danger mt-3'>
                    {props.errors}
                  
                </div>
                <div className='text-center mt-4'>
                    <p>
                        Not a member? <NavLink to='/register'>Register</NavLink>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
