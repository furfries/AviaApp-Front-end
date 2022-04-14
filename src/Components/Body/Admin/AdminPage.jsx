import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const AdminPage = (props) => {
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