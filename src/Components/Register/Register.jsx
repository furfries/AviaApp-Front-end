import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Register = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    
    const navigate = useNavigate();
    
    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
            const userToken = '123456789user';
            sessionStorage.setItem('auth-token', userToken);
            sessionStorage.setItem('email', emailInput);
            navigate('/userpage',{ replace: true });
        }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
        <form onSubmit={handleLoginSubmit}>
            <h1 className='text-center mb-5'>WELCOME! SIGN IN:</h1>
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput id='form3Example1' label='First name' />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='form3Example2' label='Last name' />
                </MDBCol>
            </MDBRow>
        <MDBInput className='mb-4' 
            type='email' id='form3Example3' 
            label='Email address' value={emailInput}
            onChange={handleEmailChange}
        />
        <MDBInput className='mb-4'
            type='password' 
            id='form3Example4' 
            label='Password' 
            value={passwordInput}
            onChange={handlePasswordChange}
        />
        <MDBCheckbox
            wrapperClass='d-flex justify-content-center mb-4'
            id='form3Example5'
            label='Subscribe to our newsletter'
            defaultChecked
        />
        <MDBBtn type='submit' className='mb-4' block>
            Sign in
        </MDBBtn>
        </form>
    </div>
  );
};

export default Register;