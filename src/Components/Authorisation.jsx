import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Authorisation() {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
 
    <form className='flex-column'>
    <h1 className='mb-5 mt-5'>WELCOME! SIGN IN:</h1>
      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' block>
        Sign in
      </MDBBtn>
    </form>
    </div>
  );
}