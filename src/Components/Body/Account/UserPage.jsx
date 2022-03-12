import React from 'react';
import { Navigate } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const UserPage = () => {
    if (!sessionStorage.getItem('auth-token')) {
        return <Navigate to={'/login'} replace={true} />
    } else {
        const authToken = '123456789user';
        if (sessionStorage.getItem('auth-token') == authToken) {

        } else {
            return <Navigate to={'/login'} replace={true} />
        }
    }
    return (
        <MDBRow className='mt-3'>
            <MDBCol sm='12'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'> <MDBIcon className='me-2' fas icon="user-alt" /> USER </MDBCardTitle>
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