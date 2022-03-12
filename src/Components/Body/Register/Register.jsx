import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MDBInput,
    MDBBtn,
    MDBSpinner,
} from 'mdb-react-ui-kit';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    render() {
        let { email, password, confirmPassword } = this.state;
        let { isRegisterPending, isRegisterSuccess, registerError } = this.props;
        return (
            <div className='d-flex justify-content-center flex-column align-items-center mt-5'>
                <form onSubmit={this.onSubmit}>
                    <h1 className='text-center mb-5'>WELCOME! SIGN IN:</h1>
                    <MDBInput className='mb-4'
                        type='email' id='form3Example3'
                        label='Email address'
                        onChange={e => this.setState({ email: e.target.value })}
                        value={email}
                    />
                    <MDBInput className='mb-4'
                        type='password'
                        id='form3Example4'
                        label='Password'
                        onChange={e => this.setState({ password: e.target.value })}
                        value={password}
                    />
                    <MDBInput className='mb-4'
                        type='password'
                        id='form3Example5'
                        label='Confirm password'
                        onChange={e => this.setState({ confirmPassword: e.target.value })}
                        value={confirmPassword}
                    />
                    <MDBBtn type='submit' className='mt-2' block>
                        Register
                    </MDBBtn>

                    <div className='text-center mt-3'>
                        {isRegisterPending && <MDBSpinner role='status' color='primary'>
                            <span className='visually-hidden'>Loading...</span>
                        </MDBSpinner>}
                        {isRegisterSuccess && <div className='text-success'>Success.</div>}
                        {registerError && <div className='text-danger'>{registerError.message}</div>}
                    </div>

                    <div className='text-center mt-4'>
                        <p>
                            Already have an account? <NavLink to='/login'><a href='#!'>Sign in</a></NavLink>
                        </p>
                    </div>
                </form>
            </div>
        );
    };
    onSubmit(e) {
        e.preventDefault();
        let { email, password, confirmPassword } = this.state;
        this.props.register(email, password, confirmPassword);
        this.setState({
            email: '',
            password: '',
            confirmPassword: '',
        });
    }
};

export default Register;
