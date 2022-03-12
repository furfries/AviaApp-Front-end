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
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        let { email, password } = this.state;
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <form className='flex-column mt-5' onSubmit={this.onSubmit}>
                    <h1>WELCOME! SIGN IN:</h1>
                    <MDBInput className='mb-4 mt-5'
                        type='email'
                        id='form1Example1' label='Email address'
                        onChange={e => this.setState({ email: e.target.value })}
                        value={email}
                    />
                    <MDBInput className='mb-4'
                        type='password'
                        id='form1Example2' label='Password'
                        onChange={e => this.setState({ password: e.target.value })}
                        value={password}
                    />
                    <MDBBtn type='submit' block className='mt-2' >
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
                </form>
            </div>
        )
    }

    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        });
    }
};

export default Login
