import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MDBInput,
    MDBBtn,
    MDBSpinner,
} from 'mdb-react-ui-kit';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <h1>WELCOME! SIGN IN:</h1>
                <MDBInput className='mb-4 mt-5'
                    type='email'
                    id='form1Example1' label='Email address'
                    onChange={(e) => this.props.updateLogin(e.target.value)}
                    value={this.props.loginText}
                />
                <MDBInput className='mb-4'
                    type='password'
                    id='form1Example2' label='Password'
                    onChange={e => this.props.updatePassword(e.target.value)}
                    value={this.props.passText}
                />
                <MDBBtn type='submit' block className='mt-2' onClick={() => this.props.login(this.props.loginText, this.props.passText)}>
                    Sign in
                </MDBBtn>
                <div className='text-center mt-3'>
                    {isLoginPending && <MDBSpinner role='status' color='primary'>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>}
                    {isLoginSuccess && <div className='text-success'>Success.</div>}
                    {loginError && <div className='text-danger'>{loginError.message}</div>}
                </div>
                <div className='text-center mt-4'>
                    <p>
                        Not a member? <NavLink to='/register'><a href='#!'>Register</a></NavLink>
                    </p>
                </div>
            </div>
        )
    }
};

export default Login
