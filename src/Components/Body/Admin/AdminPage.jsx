import React from 'react';
import { Navigate } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const AdminPage = () => {
    if (JSON.parse(sessionStorage.getItem('avia-app-user')).email !==  'admin@xx.xx') {
        return <Navigate to={'/login'} replace={true} />
    } else {

    }
    return (
        <MDBRow className='mt-3'>
            <MDBCol sm='12'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center text-danger'>
                            <MDBIcon className='me-2' fas icon="user-alt" /> ADMIN </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='6' className='mt-3'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'>
                            <MDBIcon className='me-2' fas icon="users" /> USERS </MDBCardTitle>
                        <MDBCardText className='text-center'>
                            Users list
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='6' className='mt-3'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'>
                            <MDBIcon className='me-2' fas icon="ban" /> BLACKLIST</MDBCardTitle>
                        <MDBCardText className='text-center'>
                            Blocked users
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
};

export default AdminPage;