import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';

 const Login = () => {
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
        let admin = {
            email: 'admin@gmail.com',
            password: 'admin'
        }
        let user = {
            email: 'user@gmail.com',
            password: 'user'
        }
    
        if ((emailInput == admin.email) && (passwordInput == admin.password)) {
            const adminToken = '123456789admin';
            sessionStorage.setItem('auth-token', adminToken);
            sessionStorage.setItem('email', admin.email);
            navigate('/adminpage',{ replace: true });
        } 
        else if ((emailInput == user.email) && (passwordInput == user.password)) {
            const userToken = '123456789user';
            sessionStorage.setItem('auth-token', userToken);
            sessionStorage.setItem('email', user.email);
            navigate('/userpage',{ replace: true });
        }
        else {
            alert('wrong email or password combination');
        }
    }
    
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        <form className='flex-column mt-5' onSubmit={handleLoginSubmit}>
            <h1>WELCOME! SIGN IN:</h1>
            <MDBInput className='mb-4 mt-5' 
                type='email' 
                id='form1Example1' label='Email address' 
                value={emailInput}
                onChange={handleEmailChange} 
            />
            <MDBInput className='mb-4' 
                type='password'
                id='form1Example2' label='Password' 
                value={passwordInput}
                onChange={handlePasswordChange} 
            />
            <MDBRow className='text-center mb-4'>
                <MDBCol>
                    <a href='#!'>Forgot password?</a>
                </MDBCol>
            </MDBRow>
            <MDBBtn type='submit' block>
                Sign in
            </MDBBtn>
            <div className='text-center mt-4'>
                <p>
                    Not a member? <NavLink to='/register'><a href='#!'>Register</a></NavLink>
                </p>
            </div>
        </form>
    </div>
  );
};

export default Login;

