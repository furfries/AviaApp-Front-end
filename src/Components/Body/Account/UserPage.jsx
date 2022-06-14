import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const UserPage = (props) => {
    return (
        <MDBRow className='mt-3'>
            <MDBCol sm='12'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'> <MDBIcon className='me-2' fas icon="user-alt" /> {props.email.toUpperCase()} </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='6' className='mt-3'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'><MDBIcon className='me-2' fas icon="cart-arrow-down" /> CART </MDBCardTitle>
                        <MDBCardText className='text-center'>
                            Your purchased tickets
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='6' className='mt-3'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'><MDBIcon className='me-2' fas icon="history" /> HISTORY</MDBCardTitle>
                        <MDBCardText className='text-center'>
                            Your purchase history
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

        </MDBRow>
    );
};

export default UserPage;